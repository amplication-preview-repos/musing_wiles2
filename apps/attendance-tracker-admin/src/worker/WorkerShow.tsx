import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { SHIFT_TITLE_FIELD } from "../shift/ShiftTitle";
import { WORKER_TITLE_FIELD } from "./WorkerTitle";

export const WorkerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AttendanceRecord"
          target="workerId"
          label="AttendanceRecords"
        >
          <Datagrid rowClick="show">
            <TextField label="CheckInTime" source="checkInTime" />
            <TextField label="CheckOutTime" source="checkOutTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="QRCode" source="qrCode" />
            <TextField label="QRCodeExpiration" source="qrCodeExpiration" />
            <ReferenceField label="Shift" source="shift.id" reference="Shift">
              <TextField source={SHIFT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Worker"
              source="worker.id"
              reference="Worker"
            >
              <TextField source={WORKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
