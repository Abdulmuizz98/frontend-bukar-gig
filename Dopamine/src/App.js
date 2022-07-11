import { Routes, Route } from "react-router-dom";
import "./App.css";
 
import Protected from "./components/security/Protected";
import Page from "./components/framework/Page";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
 
import CreateBooking from "./pages/Booking/CreateBooking";
import PreBooking from "./pages/Booking/PreBooking";
import BulkBooking from "./pages/Booking/BulkBooking";
import ManageBooking from "./pages/Booking/ManageBooking";


import CreateDoctor from "./pages/Doctors/CreateDoctor";
import LeaveHistory from "./pages/Leave/LeaveHistory";
import LeaveRequest from "./pages/Leave/LeaveRequest";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Page>
                <Dashboard />
              </Page>
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/create-booking"
          element={
            <Protected>
              <Page>
                <CreateBooking />
              </Page>
            </Protected>
          }
        />
        <Route
          path="/pre-booking"
          element={
            <Protected>
              <Page>
                <PreBooking />
              </Page>
            </Protected>
          }
        />
        <Route
          path="/manage-booking"
          element={
            <Protected>
              <Page>
                <ManageBooking />
              </Page>
            </Protected>
          }
        />
        <Route
          path="/bulk-booking"
          element={
            <Protected>
              <Page>
                <BulkBooking />
              </Page>
            </Protected>
          }
        />







        <Route
          path="/create-doctors"
          element={
            <Protected>
              <Page>
                <CreateDoctor />
              </Page>
            </Protected>
          }
        />



        <Route
          path="/leave-history"
          element={
            <Protected>
              <Page>
                <LeaveHistory />
              </Page>
            </Protected>
          }
        />


        <Route
          path="/leave-request"
          element={
            <Protected>
              <Page>
                <LeaveRequest />
              </Page>
            </Protected>
          }
        />




        <Route
          path="/create-user"
          element={
            <Protected>
              <Page>
                <CreateUser />
              </Page>
            </Protected>
          }
        />


        <Route
          path="/User-List"
          element={
            <Protected>
              <Page>
                <UserList />
              </Page>
            </Protected>
          }
        />



       
 
      </Routes>
    </div>
  );
}

export default App;
