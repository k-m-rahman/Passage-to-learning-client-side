import { Avatar, Dropdown, Navbar, ToggleSwitch } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);

  console.log(user);
  const themeChanger = () => {
    setTheme(!theme);
  };

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
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

          {user ? (
            <span className=" flex justify-center">
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={
                      user.photoURL ? (
                        user?.photoURL
                      ) : (
                        <FaUserCircle></FaUserCircle>
                      )
                    }
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <Link to="/profile">
                    <span className="block text-sm">
                      {user.displayName ? user?.displayName : ""}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Link>
                </Dropdown.Header>

                <Dropdown.Item>
                  <button onClick={handleLogout}>Sign out</button>
                </Dropdown.Item>
              </Dropdown>
            </span>
          ) : (
            <NavLink
              className={({ isActive }) =>
                !isActive
                  ? "bg-orange-200 p-2 rounded-lg hover:bg-orange-300 sm:hover:scale-110 mb-1"
                  : "bg-orange-400 p-2 rounded-lg sm:hover:scale-110 mb-1"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}

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
