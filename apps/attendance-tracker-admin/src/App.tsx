import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AttendanceRecordList } from "./attendanceRecord/AttendanceRecordList";
import { AttendanceRecordCreate } from "./attendanceRecord/AttendanceRecordCreate";
import { AttendanceRecordEdit } from "./attendanceRecord/AttendanceRecordEdit";
import { AttendanceRecordShow } from "./attendanceRecord/AttendanceRecordShow";
import { WorkerList } from "./worker/WorkerList";
import { WorkerCreate } from "./worker/WorkerCreate";
import { WorkerEdit } from "./worker/WorkerEdit";
import { WorkerShow } from "./worker/WorkerShow";
import { ShiftList } from "./shift/ShiftList";
import { ShiftCreate } from "./shift/ShiftCreate";
import { ShiftEdit } from "./shift/ShiftEdit";
import { ShiftShow } from "./shift/ShiftShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AttendanceTracker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AttendanceRecord"
          list={AttendanceRecordList}
          edit={AttendanceRecordEdit}
          create={AttendanceRecordCreate}
          show={AttendanceRecordShow}
        />
        <Resource
          name="Worker"
          list={WorkerList}
          edit={WorkerEdit}
          create={WorkerCreate}
          show={WorkerShow}
        />
        <Resource
          name="Shift"
          list={ShiftList}
          edit={ShiftEdit}
          create={ShiftCreate}
          show={ShiftShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
