import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShiftWhereInput = {
  attendanceRecords?: AttendanceRecordListRelationFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
};
