import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";

export type Shift = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  name: string | null;
  startTime: Date | null;
  updatedAt: Date;
};
