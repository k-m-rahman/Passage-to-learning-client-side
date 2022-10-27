import React from "react";
import { Outlet } from "react-router-dom";
import CommonFooter from "../pages/Shared/Footer/CommonFooter";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="dark:bg-slate-600">
        <Outlet></Outlet>
      </div>
      <div className="dark:bg-slate-600">
        <CommonFooter></CommonFooter>
      </div>
    </div>
  );
};

export default Main;
