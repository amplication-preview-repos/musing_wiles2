import { SortOrder } from "../../util/SortOrder";

export type AttendanceRecordOrderByInput = {
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  qrCode?: SortOrder;
  qrCodeExpiration?: SortOrder;
  shiftId?: SortOrder;
  updatedAt?: SortOrder;
  workerId?: SortOrder;
};
