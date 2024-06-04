import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WorkerWhereInput = {
  attendanceRecords?: AttendanceRecordListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
};
