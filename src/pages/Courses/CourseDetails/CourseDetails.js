import { Button, Card } from "flowbite-react";
import React, { createRef, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  useEffect(() => {
    AOS.init();
  }, []);
  if (typeof course == "object") {
    const { description, name, lessons, picture, _id } = course;

    const ref = createRef();
    const options = {
      orientation: "landscape",
    };

    return (
      <div className="w-10/12 mx-auto py-10" data-aos="zoom-in">
        <Card>
          <img
            className="h-[200px] md:h-[300px] border border-gray-300 rounded-lg"
            src={picture}
            alt=""
          />
          <h5 className="text-3xl flex justify-center items-center gap-5 font-bold tracking-tight underline text-gray-900 dark:text-white">
            <span>{name}</span>
            <Pdf
              targetRef={ref}
              filename={`${name}.pdf`}
              options={options}
              x={0.5}
              y={0.5}
              scale={1.2}
            >
              {({ toPdf }) => (
                <button className="no-underline" onClick={toPdf}>
                  <FaFileDownload></FaFileDownload>
                </button>
              )}
            </Pdf>
          </h5>

          <div className="px-10 py-4 " ref={ref}>
            <div className="flex flex-col font-semibold dark:text-gray-400">
              <span className="text-xl">Description: </span>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </div>

            <div className="text-left dark:text-slate-300 mt-5 w-fit mx-auto ">
              <p className="text-xl text-center font-semibold mb-2">
                You will learn:
              </p>
              {lessons.map((lesson, idx) => (
                <li className="italic" key={idx}>
                  {lesson}
                </li>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-4 text-center">
          <Button className="mx-auto" gradientMonochrome="purple">
            <Link to={`/checkout/${_id}`}>
              <div className="flex gap-1 items-center justify-center">
                <span>Get Premium Access</span>{" "}
                <span className="ml-3">
                  <FaArrowRight></FaArrowRight>
                </span>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <h2 className="text-5xl text-slate-600 font-bold pt-10">No Course Found</h2>
  );
};

export default CourseDetails;
