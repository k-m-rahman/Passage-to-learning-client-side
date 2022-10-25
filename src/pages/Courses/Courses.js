import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-semibold my-5 underline w-max mx-auto">
        We have total {courses.length} courses
      </h2>
      <div className="grid grid-cols-8 my-10 gap-5">
        <div className="col-span-2  border  shadow-xl rounded">
          <div className="p-3 flex flex-col gap-3 sticky top-14">
            {courses.map((course) => (
              <Link key={course._id} to={`/courses/${course._id}`}>
                <h3>{course.name}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
