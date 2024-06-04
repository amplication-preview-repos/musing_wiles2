import { AttendanceRecordCreateNestedManyWithoutLocationsInput } from "./AttendanceRecordCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutLocationsInput;
  name?: string | null;
};
