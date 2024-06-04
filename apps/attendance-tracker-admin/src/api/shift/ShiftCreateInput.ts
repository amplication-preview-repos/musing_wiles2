import { AttendanceRecordCreateNestedManyWithoutShiftsInput } from "./AttendanceRecordCreateNestedManyWithoutShiftsInput";

export type ShiftCreateInput = {
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutShiftsInput;
  endTime?: Date | null;
  name?: string | null;
  startTime?: Date | null;
};
