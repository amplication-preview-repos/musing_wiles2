import { AttendanceRecordUpdateManyWithoutLocationsInput } from "./AttendanceRecordUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  attendanceRecords?: AttendanceRecordUpdateManyWithoutLocationsInput;
  name?: string | null;
};
