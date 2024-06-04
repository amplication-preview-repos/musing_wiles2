import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ShiftWhereUniqueInput } from "../shift/ShiftWhereUniqueInput";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type AttendanceRecordWhereInput = {
  checkInTime?: DateTimeNullableFilter;
  checkOutTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  qrCode?: StringNullableFilter;
  qrCodeExpiration?: DateTimeNullableFilter;
  shift?: ShiftWhereUniqueInput;
  worker?: WorkerWhereUniqueInput;
};
