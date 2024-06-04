import { AttendanceRecordUpdateManyWithoutShiftsInput } from "./AttendanceRecordUpdateManyWithoutShiftsInput";

export type ShiftUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutShiftsInput;
  endTime?: Date | null;
  name?: string | null;
  startTime?: Date | null;
};
