import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AttendanceRecordTitle } from "../attendanceRecord/AttendanceRecordTitle";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendanceRecords"
          reference="AttendanceRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceRecordTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
