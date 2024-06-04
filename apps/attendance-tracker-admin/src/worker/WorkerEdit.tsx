import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AttendanceRecordTitle } from "../attendanceRecord/AttendanceRecordTitle";

export const WorkerEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Name" source="name" />
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
