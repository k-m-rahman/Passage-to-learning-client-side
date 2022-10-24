import { Avatar, Dropdown, Navbar, ToggleSwitch } from "flowbite-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const [theme, setTheme] = useState(false);
  const themeChanger = () => {
    setTheme(!theme);
    console.log("hello");
  };
  return (
    <div className="shadow-md sticky top-0 z-10">
      <Navbar fluid={true} rounded={true}>
        <NavLink className="flex " to="/">
          <img
            src={logo}
            className=" h-10 mr-2  bg-emerald-100 border rounded-lg"
            alt="passage to learning logo"
          />
          <span className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold dark:text-white">
            Passage To Learning
          </span>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-orange-200 p-2 rounded-lg hover:bg-orange-300 sm:hover:scale-110 mb-1"
                : "bg-orange-400 p-2 rounded-lg sm:hover:scale-110 mb-1"
            }
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-orange-200 p-2 rounded-lg hover:bg-orange-300 sm:hover:scale-110 mb-1"
                : "bg-orange-400 p-2 rounded-lg sm:hover:scale-110 mb-1"
            }
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-orange-200 p-2 rounded-lg hover:bg-orange-300 sm:hover:scale-110 mb-1"
                : "bg-orange-400 p-2 rounded-lg sm:hover:scale-110 mb-1"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>

          <span className=" flex justify-center">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <Link to="/profile">
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Link>
              </Dropdown.Header>

              <Dropdown.Item>
                <Link to="/logout">Sign out</Link>
              </Dropdown.Item>
            </Dropdown>
          </span>
          <ToggleSwitch
            className="mx-auto mt-5 md:mt-2 "
            checked={theme}
            label="Dark Mode"
            onChange={themeChanger}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
