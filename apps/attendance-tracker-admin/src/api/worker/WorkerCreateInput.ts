import { AttendanceRecordCreateNestedManyWithoutWorkersInput } from "./AttendanceRecordCreateNestedManyWithoutWorkersInput";

export type WorkerCreateInput = {
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutWorkersInput;
  name?: string | null;
  role?: string | null;
};
