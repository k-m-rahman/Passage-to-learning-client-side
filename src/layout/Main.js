import React from "react";
import { Outlet } from "react-router-dom";
import CommonFooter from "../pages/Shared/Footer/CommonFooter";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <CommonFooter></CommonFooter>
    </div>
  );
};

export default Main;
