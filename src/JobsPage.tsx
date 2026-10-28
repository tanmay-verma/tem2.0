import { useState } from 'react'
import { McSelect } from '@maersk-global/mds-react-wrapper/components-core/mc-select'
import { McOption } from '@maersk-global/mds-react-wrapper/components-core/mc-option'
import { McMultiSelect } from '@maersk-global/mds-react-wrapper/components-core/mc-multi-select'
import { McInput } from '@maersk-global/mds-react-wrapper/components-core/mc-input'
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button'
import { McNotification } from '@maersk-global/mds-react-wrapper/components-core/mc-notification'
import { McDialog } from '@maersk-global/mds-react-wrapper/components-core/mc-dialog'
import { useMsal } from '@azure/msal-react'
import { getAccessToken } from './api/client'
import { JOB_ACTION_NAMES, triggerJob } from './api/jobs'
import './JobsPage.css'

// Shape of the option object carried in mc-select / mc-multi-select 'optionselected' event detail
interface SelectedOption {
  label: string
  value: string | number
}

// Alphabetically ordered
const TERMINAL_ENV_OPTIONS = ['ESGIJ-Test', 'ESVLC-UAT']

// Alphabetically ordered
const JOB_NAME_OPTIONS = Object.keys(JOB_ACTION_NAMES).sort()

// TODO: replace with values loaded from Targets.csv, filtered by the selected Terminal Env
function getTargetServerOptions(_terminalEnv: string): string[] {
  return ['10.34.11.114', '10.34.11.115']
}

interface JobFormState {
  terminalEnv: string
  jobName: string
  targetServers: string[]
  incidentRef: string
}

const INITIAL_FORM_STATE: JobFormState = {
  terminalEnv: '',
  jobName: '',
  targetServers: [],
  incidentRef: '',
}

// Shown in the confirmation dialog so it is obvious which environment's API the job goes to
const API_HOST = new URL(import.meta.env.VITE_API_BASE_URL).host

type SubmitStatus =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; executionId?: string }
  | { state: 'error'; message: string }

function JobsPage() {
  const { instance, accounts } = useMsal()
  const [form, setForm] = useState<JobFormState>(INITIAL_FORM_STATE)
  const [submit, setSubmit] = useState<SubmitStatus>({ state: 'idle' })
  const [confirmOpen, setConfirmOpen] = useState(false)

  const targetServerOptions = getTargetServerOptions(form.terminalEnv)

  // All four fields are mandatory
  const isValid =
    form.terminalEnv !== '' &&
    form.jobName !== '' &&
    form.targetServers.length > 0 &&
    form.incidentRef.trim() !== ''
  const submitting = submit.state === 'submitting'

  // Submit only opens the confirmation dialog; the job runs when the user confirms.
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid || submitting) return
    setConfirmOpen(true)
  }

  const runJob = async () => {
    setSubmit({ state: 'submitting' })
    try {
      const token = await getAccessToken(instance, accounts[0])
      const { executionId } = await triggerJob({ ...form, incidentRef: form.incidentRef.trim() }, token)
      setSubmit({ state: 'success', executionId })
      setForm(INITIAL_FORM_STATE)
    } catch (error) {
      // Keep the form values so the user can retry without re-entering them
      setSubmit({ state: 'error', message: error instanceof Error ? error.message : String(error) })
    }
  }

  const handleReset = () => {
    setForm(INITIAL_FORM_STATE)
    setSubmit({ state: 'idle' })
  }

  return (
    <form className="jobs-page" onSubmit={handleSubmit}>
      <div className="mds-grid mds-grid-md-rows-3 mds-grid-sm-rows-3 mds-grid-xs-rows-5 mds-gap-800 jobs-page__grid">
        {/* Row 1, Col 1: Job Name */}
        <div className="mds-grid-md-col-1 mds-grid-md-col-span-6 mds-grid-md-row-1 mds-grid-sm-col-1 mds-grid-sm-col-span-3 mds-grid-sm-row-1 mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
          <McSelect
            label="Job Name"
            name="jobName"
            value={form.jobName}
            optionselected={(e: CustomEvent<SelectedOption>) =>
              setForm((prev) => ({ ...prev, jobName: String(e.detail.value) }))
            }
          >
            {JOB_NAME_OPTIONS.map((job) => (
              <McOption key={job} value={job}>
                {job}
              </McOption>
            ))}
          </McSelect>
        </div>

        {/* Row 1, Col 2: Terminal Env */}
        <div className="mds-grid-md-col-7 mds-grid-md-col-span-6 mds-grid-md-row-1 mds-grid-sm-col-4 mds-grid-sm-col-span-3 mds-grid-sm-row-1 mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2">
          <McSelect
            label="Terminal Env"
            name="terminalEnv"
            listsearch
            value={form.terminalEnv}
            optionselected={(e: CustomEvent<SelectedOption>) =>
              setForm((prev) => ({ ...prev, terminalEnv: String(e.detail.value) }))
            }
          >
            {TERMINAL_ENV_OPTIONS.map((env) => (
              <McOption key={env} value={env}>
                {env}
              </McOption>
            ))}
          </McSelect>
        </div>

        {/* Row 2, Col 1: Target Servers */}
        <div className="mds-grid-md-col-1 mds-grid-md-col-span-6 mds-grid-md-row-2 mds-grid-sm-col-1 mds-grid-sm-col-span-3 mds-grid-sm-row-2 mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-3">
          <McMultiSelect
            label="Target Servers"
            name="targetServers"
            value={form.targetServers}
            optionselected={(e: CustomEvent<SelectedOption[]>) =>
              setForm((prev) => ({
                ...prev,
                targetServers: e.detail.map((option) => String(option.value)),
              }))
            }
          >
            {targetServerOptions.map((server) => (
              <McOption key={server} value={server}>
                {server}
              </McOption>
            ))}
          </McMultiSelect>
        </div>

        {/* Row 2, Col 2: Incident/Change Ref */}
        <div className="mds-grid-md-col-7 mds-grid-md-col-span-6 mds-grid-md-row-2 mds-grid-sm-col-4 mds-grid-sm-col-span-3 mds-grid-sm-row-2 mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-4">
          <McInput
            label="Incident/Change Reference"
            name="incidentRef"
            value={form.incidentRef}
            input={(e: CustomEvent<string>) => setForm((prev) => ({ ...prev, incidentRef: e.detail }))}
          />
        </div>

        {/* Row 3: Buttons (full width, flex layout) */}
        <div className="mds-grid-md-col-1 mds-grid-md-col-span-12 mds-grid-md-row-3 mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-3 mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-5">
          <div className="mds-flex mds-gap-400">
            <McButton
              label="Submit"
              type="submit"
              appearance="primary"
              disabled={!isValid}
              loading={submitting}
            />
            <McButton
              label="Reset"
              type="button"
              appearance="neutral"
              variant="outlined"
              disabled={submitting}
              click={handleReset}
            />
          </div>
          {submit.state === 'success' && (
            <McNotification
              className="jobs-page__notification"
              appearance="success"
              heading="Job triggered"
              body={
                submit.executionId
                  ? `Execution ID: ${submit.executionId}`
                  : 'The job was submitted. Check the History page for its status.'
              }
              closable
              close={() => setSubmit({ state: 'idle' })}
            />
          )}
          {submit.state === 'error' && (
            <McNotification
              className="jobs-page__notification"
              appearance="error"
              heading="Could not trigger the job"
              body={submit.message}
              closable
              close={() => setSubmit({ state: 'idle' })}
            />
          )}
        </div>
      </div>

      <McDialog
        heading="Run this job?"
        dimension="small"
        open={confirmOpen}
        closing={(e: CustomEvent<'ok' | 'cancel'>) => {
          setConfirmOpen(false)
          if (e.detail === 'ok') runJob()
        }}
      >
        <p className="mds-text mds-text--medium-normal">
          This will trigger <strong>{form.jobName}</strong> on <strong>{form.terminalEnv}</strong> through{' '}
          <strong>{API_HOST}</strong>.
        </p>
        <p className="mds-text mds-text--medium-normal">
          Target servers ({form.targetServers.length}): {form.targetServers.join(', ')}
        </p>
        <p className="mds-text mds-text--medium-normal">Reference: {form.incidentRef.trim()}</p>
        <McButton slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined" label="Cancel" />
        <McButton slot="primaryAction" dialogaction="ok" appearance="primary" label="Run job" />
      </McDialog>
    </form>
  )
}

export default JobsPage
