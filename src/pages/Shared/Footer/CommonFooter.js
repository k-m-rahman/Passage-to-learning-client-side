import { Footer } from "flowbite-react";
import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const CommonFooter = () => {
  return (
    <div className="bg-slate-900 border-2 mt-24 mb-0 p-5 rounded-md">
      <div className="w-full text-center">
        <div className="w-full justify-between  sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-2 text-xl lg:text-3xl font-semibold mb-3 lg:mb-0">
            <img
              src={logo}
              className="w-10 lg:w-14 rounded bg-emerald-100"
              alt=""
            />
            <span className="text-slate-200">Passage To Learning</span>
          </div>
          {/* social links */}
          <div className="text-white flex gap-5 justify-center items-center mt-5 md:mt-0">
            <span className="text-blue-500 w-6 h-6 hover:scale-125 duration-150">
              {" "}
              <FaFacebook className="w-full h-full"></FaFacebook>{" "}
            </span>
            <span className="text-pink-500 w-7 h- 7 hover:scale-125 duration-150">
              {" "}
              <FaInstagram className="w-full h-full"></FaInstagram>{" "}
            </span>
            <span className="text-red-600 w-7 h- 7 hover:scale-125 duration-150">
              {" "}
              <FaYoutube className="w-full h-full"></FaYoutube>{" "}
            </span>
          </div>

          {/* other links */}
          <Footer.LinkGroup className="flex gap-3 lg:gap-1 mt-4 md:mt-0 justify-center">
            <Footer.Link className="text-white">About</Footer.Link>
            <Footer.Link className="text-white">Privacy Policy</Footer.Link>
            <Footer.Link className="text-white">Licensing</Footer.Link>
            <Footer.Link className="text-white">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          className="text-slate-300"
          by="Passage To Learning"
          year={2022}
        />
      </div>
    </div>
  );
};

export default CommonFooter;
