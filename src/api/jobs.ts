import { apiFetch } from './client'

export interface JobHistory {
  id: string
  executionId: string
  jobName: string
  executionMode: string
  executedBy: string
  triggeredAt: string
  // Epoch ms of the same moment, used for date filtering (NaN if the timestamp is unparseable)
  triggeredAtMs: number
  incChgRef: string
  status: string
}

interface JobSummary {
  atJobId: string
  emailId: string
  actionName: string
  status: string
  incidentChangeRef: string
  acceptedTimestamp: string
  jobType: string
}

interface JobsResponse {
  message: string
  data: {
    jobCount: number
    jobSummaries: JobSummary[]
  }
}

const EXECUTION_MODE_LABELS: Record<string, string> = {
  on_demand: 'On demand',
}

function formatTimestamp(iso: string): string {
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleString()
}

// Single place that maps API fields onto the History table columns.
function toJobHistory(job: JobSummary): JobHistory {
  return {
    id: job.atJobId,
    executionId: job.atJobId,
    jobName: job.actionName,
    executionMode: EXECUTION_MODE_LABELS[job.jobType] ?? job.jobType,
    executedBy: job.emailId,
    triggeredAt: formatTimestamp(job.acceptedTimestamp),
    triggeredAtMs: new Date(job.acceptedTimestamp).getTime(),
    incChgRef: job.incidentChangeRef,
    status: job.status,
  }
}

export interface TriggerJobRequest {
  terminalEnv: string
  jobName: string
  targetServers: string[]
  incidentRef: string
}

// Job name shown in the form -> actionName the API expects.
// TODO: confirm the real action name for each job offered in the form.
export const JOB_ACTION_NAMES: Record<string, string> = {
  GetOSDetails: 'WindowsGetOSdetailsPsrpNew-Windows',
}

// The POST /v1/jobs/ response shape is not documented yet, so look for the job id defensively.
function extractExecutionId(response: unknown): string | undefined {
  const root = response as { atJobId?: string; jobId?: string; data?: { atJobId?: string; jobId?: string } } | null
  return root?.data?.atJobId ?? root?.data?.jobId ?? root?.atJobId ?? root?.jobId
}

export async function triggerJob(request: TriggerJobRequest, token: string): Promise<{ executionId?: string }> {
  const actionName = JOB_ACTION_NAMES[request.jobName]
  if (!actionName) {
    throw new Error(`No action is configured for job "${request.jobName}".`)
  }

  // Mirrors the payload the Autotron UI sends. The fixed values below are what it
  // sends for an on-demand Windows job against a CSV target list.
  const payload = {
    actionName,
    tenantName: import.meta.env.VITE_API_TENANT_NAME,
    environment: request.terminalEnv.toLowerCase(),
    incidentChangeRef: request.incidentRef,
    targetNames: request.targetServers,
    jobType: 'on_demand',
    targetCategory: 'csv',
    targetType: 'windows',
    isVmTarget: true,
    isNewTemplate: false,
    serialValue: 0,
    jobCredentials: '',
    targetUserId: '',
    targetUserPassword: '',
  }

  const response = await apiFetch<unknown>('/v1/jobs/', token, { method: 'POST', body: payload })
  return { executionId: extractExecutionId(response) }
}

export async function fetchJobs(
  { limit, tenantId = import.meta.env.VITE_API_TENANT_ID }: { limit: number; tenantId?: string },
  token: string,
  signal?: AbortSignal,
): Promise<JobHistory[]> {
  const params = new URLSearchParams({ limit: String(limit), tenantId })
  const response = await apiFetch<JobsResponse>(`/v1/jobs/?${params}`, token, { signal })
  return (response.data?.jobSummaries ?? [])
    .slice()
    .sort((a, b) => b.acceptedTimestamp.localeCompare(a.acceptedTimestamp))
    .map(toJobHistory)
}
