import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  attendanceRecords?: AttendanceRecordListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
