import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AttendanceRecordTitle } from "../attendanceRecord/AttendanceRecordTitle";

export const ShiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
