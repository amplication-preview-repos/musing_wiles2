import { Location } from "../location/Location";
import { Shift } from "../shift/Shift";
import { Worker } from "../worker/Worker";

export type AttendanceRecord = {
  checkInTime: Date | null;
  checkOutTime: Date | null;
  createdAt: Date;
  id: string;
  location?: Location | null;
  qrCode: string | null;
  qrCodeExpiration: Date | null;
  shift?: Shift | null;
  updatedAt: Date;
  worker?: Worker | null;
};
