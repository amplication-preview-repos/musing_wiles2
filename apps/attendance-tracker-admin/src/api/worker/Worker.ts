import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";

export type Worker = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  updatedAt: Date;
};
