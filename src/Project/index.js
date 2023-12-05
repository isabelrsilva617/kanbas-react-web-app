import Signin from "../Kanbas/users/signin.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Account from "../Kanbas/users/account.js";
import UserTable from "../Kanbas/users/table.js";
import Signup from "../Kanbas/users/signup.js";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </div>
  );
}
export default Project;

