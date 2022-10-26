import { Button, Card } from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseDetails = () => {
  const course = useLoaderData();
  const { description, name, lessons, picture, _id } = course;
  console.log(course);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-10/12 mx-auto my-10" data-aos="zoom-in">
      <Card>
        <img
          className="h-[300px] border border-gray-300 rounded-lg"
          src={picture}
          alt=""
        />
        <h5 className="text-3xl flex justify-center items-center gap-5 font-bold tracking-tight underline text-gray-900 dark:text-white">
          <span>{name}</span>
          <span className="text-lg dark:text-white">
            <FaFileDownload></FaFileDownload>
          </span>
        </h5>

        <div className="flex flex-col font-semibold dark:text-gray-400">
          <span className="text-xl">Description: </span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="text-left w-fit mx-auto ">
          <p className="text-xl text-center font-semibold mb-2">
            You will learn:
          </p>
          {lessons.map((lesson, idx) => (
            <li className="italic" key={idx}>
              {lesson}
            </li>
          ))}
        </div>
      </Card>
      <div className="mt-4 text-center">
        <Link to={`/checkout/${_id}`}>
          <Button className="mx-auto" gradientMonochrome="purple">
            <span>Get Premium Access</span>{" "}
            <span className="ml-3">
              <FaArrowRight></FaArrowRight>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
