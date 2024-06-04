import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";
import { ShiftTitle } from "../shift/ShiftTitle";
import { WorkerTitle } from "../worker/WorkerTitle";

export const AttendanceRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="CheckInTime" source="checkInTime" />
        <DateTimeInput label="CheckOutTime" source="checkOutTime" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="QRCode" source="qrCode" />
        <DateTimeInput label="QRCodeExpiration" source="qrCodeExpiration" />
        <ReferenceInput source="shift.id" reference="Shift" label="Shift">
          <SelectInput optionText={ShiftTitle} />
        </ReferenceInput>
        <ReferenceInput source="worker.id" reference="Worker" label="Worker">
          <SelectInput optionText={WorkerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
