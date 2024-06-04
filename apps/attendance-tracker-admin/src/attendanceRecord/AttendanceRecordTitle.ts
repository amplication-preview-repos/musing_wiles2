import { AttendanceRecord as TAttendanceRecord } from "../api/attendanceRecord/AttendanceRecord";

export const ATTENDANCERECORD_TITLE_FIELD = "qrCode";

export const AttendanceRecordTitle = (record: TAttendanceRecord): string => {
  return record.qrCode?.toString() || String(record.id);
};
