export interface PowergateUser {
  id: string;
  token: string;
}

export interface StagingResult {
  cid: string;
}

export interface ApplyingResult {
  jobId: string;
}

export interface JobStatusMap {
  JOB_STATUS_UNSPECIFIED: 0;
  JOB_STATUS_QUEUED: 1;
  JOB_STATUS_EXECUTING: 2;
  JOB_STATUS_FAILED: 3;
  JOB_STATUS_CANCELED: 4;
  JOB_STATUS_SUCCESS: 5;
}

export interface StorageJobInfo {
  status: JobStatusMap[keyof JobStatusMap];
  errorCause: string;
  createdAt: number;
}

export interface CidSummary {
  cid: string;
  stored: boolean;
  queuedJobsList: Array<string>;
  executingJob: string;
}
