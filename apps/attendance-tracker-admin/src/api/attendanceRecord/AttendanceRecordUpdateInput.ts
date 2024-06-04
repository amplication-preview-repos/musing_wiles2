import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ShiftWhereUniqueInput } from "../shift/ShiftWhereUniqueInput";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type AttendanceRecordUpdateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  location?: LocationWhereUniqueInput | null;
  qrCode?: string | null;
  qrCodeExpiration?: Date | null;
  shift?: ShiftWhereUniqueInput | null;
  worker?: WorkerWhereUniqueInput | null;
};
