import { Carousel } from "flowbite-react";
import React from "react";

const Slider = () => {
  return (
    <div className="h-56  sm:h-96  rounded-none mx-2 lg:mx-4 mt-4">
      <Carousel slideInterval={5000}>
        <div className="h-full bg-no-repeat text-white bg-cover bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80')] lg:bg-[url('https://i.ibb.co/p45Dxjv/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] flex justify-center items-center">
          <h2
            className="text-xl md:text-4xl w-2/3 lg:w-auto lg:text-5xl font-bold bg-gray-500/[.3] p-2 md:p-5 shadow-xl"
            style={{ textShadow: "2px 2px 5px violet" }}
          >
            Education Is The Passport To The Future{" "}
          </h2>
        </div>

        <div className="h-full bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] flex justify-center items-center text-white">
          <h2
            className="text-xl md:text-4xl w-2/3 lg:w-auto lg:text-5xl font-bold bg-gray-500/[.3] p-2 md:p-5 shadow-xl"
            style={{ textShadow: "2px 2px 5px violet" }}
          >
            Learn As If You Were To Live Forever.{" "}
          </h2>
        </div>

        <div className="h-full bg-no-repeat bg-cover bg-[url('https://i.ibb.co/Bz6G5RV/nasa-Q1p7bh3-SHj8-unsplash.jpg')]  flex justify-center items-center text-white">
          <h2
            className="text-xl md:text-4xl w-2/3 lg:w-3/4 lg:text-5xl font-bold bg-gray-500/[.3] p-2 md:p-5 shadow-xl"
            style={{ textShadow: "2px 2px 5px violet" }}
          >
            Teachers Open The Door, But You Must Enter By Yourself{" "}
          </h2>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
