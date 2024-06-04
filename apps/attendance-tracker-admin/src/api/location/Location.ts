import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";

export type Location = {
  address: string | null;
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
