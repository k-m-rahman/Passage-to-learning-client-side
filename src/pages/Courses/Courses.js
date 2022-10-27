import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl font-semibold py-5 italic dark:text-slate-100 underline sm:w-max mx-auto">
        We have total {courses.length} courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-8 py-10 gap-y-8 md:gap-5">
        {/* courses name list */}
        <div className="md:col-span-2 border border-gray-200  mx-auto w-10/12 shadow-xl rounded">
          <h2 className="text-xl font-semibold uppercase my-3 italic underline">
            List of courses
          </h2>
          <div className="p-3 flex flex-row flex-wrap md:flex-col gap-4 sticky top-14 justify-center">
            {courses.map((course) => (
              <Link key={course._id} to={`/courses/${course._id}`}>
                <h3 className="bg-gradient-to-r from-slate-300 to-gray-300 hover:from-slate-200 hover:to-gray-400 p-2 border border-gray-400 text-lg font-semibold rounded-lg shadow-md">
                  {course.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        {/* courses cards */}
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
