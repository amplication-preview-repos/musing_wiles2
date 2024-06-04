import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AttendanceRecordTitle } from "../attendanceRecord/AttendanceRecordTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="attendanceRecords"
          reference="AttendanceRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceRecordTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
