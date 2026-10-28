import { useEffect, useState } from 'react'
import { useMsal } from '@azure/msal-react'
import { McTable } from '@maersk-global/mds-react-wrapper/components-core/mc-table'
import { McSelect } from '@maersk-global/mds-react-wrapper/components-core/mc-select'
import { McOption } from '@maersk-global/mds-react-wrapper/components-core/mc-option'
import { McInput } from '@maersk-global/mds-react-wrapper/components-core/mc-input'
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button'
import { McNotification } from '@maersk-global/mds-react-wrapper/components-core/mc-notification'
import { McLoadingIndicator } from '@maersk-global/mds-react-wrapper/components-core/mc-loading-indicator'
import { McTag } from '@maersk-global/mds-react-wrapper/components-core/mc-tag'
import { getAccessToken } from './api/client'
import { fetchJobs, type JobHistory } from './api/jobs'
import './HistoryPage.css'

// Shape of the option object carried in mc-select 'optionselected' event detail
interface SelectedOption {
  label: string
  value: string | number
}

const LIMIT_OPTIONS = [25, 50, 100, 200]
const DEFAULT_LIMIT = 100

// mc-table columns: `id` must match a key in the row objects, `label` is the header text.
// Widths are percentages that add up to 100 so the table fits the page without horizontal scrolling.
const COLUMNS = [
  { id: 'executionId', label: 'Execution ID', width: '16%' },
  { id: 'jobName', label: 'Job Name', width: '24%' },
  { id: 'executionMode', label: 'Execution Mode', width: '11%' },
  { id: 'executedBy', label: 'Executed By', width: '19%' },
  { id: 'triggeredAt', label: 'Triggered at', width: '14%' },
  { id: 'incChgRef', label: 'INC/CHG Ref', width: '9%' },
  { id: 'status', label: 'Status', width: '7%' },
]

// Outcome of the most recent fetch, tagged with the limit it was requested for.
// "Loading" is derived (result.limit !== limit) rather than set synchronously in the effect.
interface FetchResult {
  limit: number
  jobs: JobHistory[]
  error: string | null
}

// Filters are applied in the browser to the rows already fetched (the API call only takes limit/tenantId).
// Select filters use ALL as "no filter"; text filters are case-insensitive "contains".
const ALL = 'all'

interface Filters {
  status: string
  executionMode: string
  jobName: string
  executedBy: string
  incChgRef: string
  // datetime-local strings ("2026-04-30T18:03"), interpreted in the browser's time zone
  from: string
  to: string
}

const INITIAL_FILTERS: Filters = {
  status: ALL,
  executionMode: ALL,
  jobName: '',
  executedBy: '',
  incChgRef: '',
  from: '',
  to: '',
}

function contains(value: string, needle: string): boolean {
  return value.toLowerCase().includes(needle.trim().toLowerCase())
}

function applyFilters(jobs: JobHistory[], f: Filters): JobHistory[] {
  const fromMs = f.from ? new Date(f.from).getTime() : undefined
  const toMs = f.to ? new Date(f.to).getTime() : undefined
  return jobs.filter(
    (job) =>
      (f.status === ALL || job.status === f.status) &&
      (f.executionMode === ALL || job.executionMode === f.executionMode) &&
      contains(job.jobName, f.jobName) &&
      contains(job.executedBy, f.executedBy) &&
      contains(job.incChgRef, f.incChgRef) &&
      (fromMs === undefined || job.triggeredAtMs >= fromMs) &&
      (toMs === undefined || job.triggeredAtMs <= toMs),
  )
}

function countActiveFilters(f: Filters): number {
  return Object.entries(f).filter(([key, value]) =>
    key === 'status' || key === 'executionMode' ? value !== ALL : value.trim() !== '',
  ).length
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort()
}

function HistoryPage() {
  const { instance, accounts } = useMsal()
  const account = accounts[0]
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT)
  const [result, setResult] = useState<FetchResult | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const token = await getAccessToken(instance, account)
        const jobs = await fetchJobs({ limit }, token, controller.signal)
        setResult({ limit, jobs, error: null })
      } catch (error) {
        if (controller.signal.aborted) return
        setResult({ limit, jobs: [], error: error instanceof Error ? error.message : String(error) })
      }
    }

    load()
    return () => controller.abort()
  }, [instance, account, limit])

  const loading = result?.limit !== limit
  const jobs = result?.jobs ?? []
  const error = loading ? null : result?.error
  const visibleJobs = applyFilters(jobs, filters)
  const activeFilterCount = countActiveFilters(filters)

  const setFilter = (key: keyof Filters, value: string) => setFilters((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="history-page">
      <div className="history-page__toolbar">
        <div className="history-page__limit">
          <McSelect
            label="Limit"
            name="limit"
            value={String(limit)}
            optionselected={(e: CustomEvent<SelectedOption>) => setLimit(Number(e.detail.value))}
          >
            {LIMIT_OPTIONS.map((option) => (
              <McOption key={option} value={String(option)}>
                {option}
              </McOption>
            ))}
          </McSelect>
        </div>
        <McButton
          label={activeFilterCount > 0 ? `Filters (${activeFilterCount})` : 'Filters'}
          icon="funnel"
          appearance="neutral"
          variant="outlined"
          aria-expanded={filtersOpen}
          click={() => setFiltersOpen((open) => !open)}
        />
      </div>

      {filtersOpen && (
        <div className="history-page__filters">
          <McSelect
            label="Status"
            name="status"
            value={filters.status}
            optionselected={(e: CustomEvent<SelectedOption>) => setFilter('status', String(e.detail.value))}
          >
            <McOption value={ALL}>All</McOption>
            {uniqueSorted(jobs.map((job) => job.status)).map((status) => (
              <McOption key={status} value={status}>
                {status}
              </McOption>
            ))}
          </McSelect>
          <McSelect
            label="Execution Mode"
            name="executionMode"
            value={filters.executionMode}
            optionselected={(e: CustomEvent<SelectedOption>) => setFilter('executionMode', String(e.detail.value))}
          >
            <McOption value={ALL}>All</McOption>
            {uniqueSorted(jobs.map((job) => job.executionMode)).map((mode) => (
              <McOption key={mode} value={mode}>
                {mode}
              </McOption>
            ))}
          </McSelect>
          <McInput
            label="Job Name"
            name="jobName"
            placeholder="Search..."
            value={filters.jobName}
            input={(e: CustomEvent<string>) => setFilter('jobName', e.detail)}
          />
          <McInput
            label="Executed By"
            name="executedBy"
            placeholder="Email..."
            value={filters.executedBy}
            input={(e: CustomEvent<string>) => setFilter('executedBy', e.detail)}
          />
          <McInput
            label="INC/CHG Ref"
            name="incChgRef"
            placeholder="INC/CHG..."
            value={filters.incChgRef}
            input={(e: CustomEvent<string>) => setFilter('incChgRef', e.detail)}
          />
          <McInput
            label="Triggered at (start)"
            name="from"
            type="datetime-local"
            value={filters.from}
            input={(e: CustomEvent<string>) => setFilter('from', e.detail)}
          />
          <McInput
            label="Triggered at (end)"
            name="to"
            type="datetime-local"
            value={filters.to}
            input={(e: CustomEvent<string>) => setFilter('to', e.detail)}
          />
          <div className="history-page__filter-actions">
            <McButton
              label="Clear filters"
              appearance="neutral"
              variant="outlined"
              disabled={activeFilterCount === 0}
              click={() => setFilters(INITIAL_FILTERS)}
            />
          </div>
        </div>
      )}

      {error && <McNotification appearance="error" heading="Could not load job history" body={error} />}

      {loading && <McLoadingIndicator label="Loading job history" />}

      {!loading && !error && jobs.length === 0 && (
        <p className="mds-text mds-text--medium-normal">No job history found</p>
      )}

      {!loading && jobs.length > 0 && visibleJobs.length === 0 && (
        <p className="mds-text mds-text--medium-normal">No jobs match the current filters</p>
      )}

      {!loading && visibleJobs.length > 0 && (
        <>
          {activeFilterCount > 0 && (
            <p className="mds-text mds-text--small-normal history-page__count">
              Showing {visibleJobs.length} of {jobs.length} jobs
            </p>
          )}
          <McTable data={visibleJobs} columns={COLUMNS}>
            {visibleJobs.map((job) => (
              <McTag key={job.id} slot={`${job.id}_status`} appearance="neutral-weak">
                {job.status}
              </McTag>
            ))}
          </McTable>
        </>
      )}
    </div>
  )
}

export default HistoryPage
