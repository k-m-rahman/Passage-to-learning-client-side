import { Card } from "flowbite-react";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseCard = ({ course }) => {
  const { name, picture, description, _id } = course;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-sm mx-auto" data-aos="flip-left">
      <Card>
        <img
          className="rounded-lg h-[180px] border border-gray-300"
          src={picture}
          alt=""
        />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 md:h-48">
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </p>
        </div>
        <Link to={`/courses/${_id}`}>
          <button className="w-full bg-emerald-400 hover:bg-emerald-500 font-semibold  py-2 rounded-lg mx-auto flex gap-2 justify-center items-center mt-1">
            <span>See Details</span>
            <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
