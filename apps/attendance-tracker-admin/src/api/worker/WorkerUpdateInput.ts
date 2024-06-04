import { AttendanceRecordUpdateManyWithoutWorkersInput } from "./AttendanceRecordUpdateManyWithoutWorkersInput";

export type WorkerUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutWorkersInput;
  name?: string | null;
  role?: string | null;
};
