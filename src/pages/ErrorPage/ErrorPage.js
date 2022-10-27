import React from "react";
import { Link, useRouteError } from "react-router-dom";
import CommonFooter from "../Shared/Footer/CommonFooter";
import NavBar from "../Shared/Navbar/NavBar";
import errorAnimation from "../../assets/76705-error-animation.json";
import Lottie from "lottie-react";
import { Button } from "flowbite-react";
import("./ErrorPage.css");

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <NavBar></NavBar>
      <div className="py-10 dark:bg-slate-400">
        <h2 className="text-6xl mt-5 oops font-bold text- w-fit  mx-auto p-2 rounded">
          Oops! An Error Ocurred...
        </h2>
        <div className="my-7 w-20 mx-auto">
          <Lottie animationData={errorAnimation} loop={true}></Lottie>
        </div>
        {error && (
          <div className="my-5 flex flex-col gap-3">
            <span className="text-7xl font-bold text-slate-700 dark:text-slate-800">
              {error?.status}
            </span>
            <span className="text-3xl font-semibold">{error?.statusText}</span>
          </div>
        )}
        <div>
          <Link to={`/`}>
            <Button
              className="mx-auto border-cyan-700 border"
              gradientMonochrome="cyan"
            >
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
      <CommonFooter></CommonFooter>
    </div>
  );
};

export default ErrorPage;
