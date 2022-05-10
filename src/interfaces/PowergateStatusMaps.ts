import { JobStatusMap, JobStatusToStringMap } from "./Powergate";

const jobStatus: JobStatusMap = {
  JOB_STATUS_UNSPECIFIED: 0,
  JOB_STATUS_QUEUED: 1,
  JOB_STATUS_EXECUTING: 2,
  JOB_STATUS_FAILED: 3,
  JOB_STATUS_CANCELED: 4,
  JOB_STATUS_SUCCESS: 5,
};

const jobStatusToString: JobStatusToStringMap = {
  0: "Unspecified",
  1: "Queued",
  2: "Executing",
  3: "Failed",
  4: "Cancelled",
  5: "Success",
};

export { jobStatus, jobStatusToString };
