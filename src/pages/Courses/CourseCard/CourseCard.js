import { Card } from "flowbite-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { name, picture, description, _id } = course;
  return (
    <div className="max-w-sm mx-auto">
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
          <p className="font-normal text-gray-700 dark:text-gray-400 md:h-60">
            {description.length > 250
              ? description.slice(0, 250) + "..."
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
