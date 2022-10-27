import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import { useLoaderData } from "react-router-dom";
import HomeCourseCard from "./HomeCourseCard/HomeCourseCard";
import Instructor from "./Instructor/Instructor";
import("./Home.css");

const Home = () => {
  const courses = useLoaderData();
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetch(
      "https://passage-to-learning-server-k-m-rahman.vercel.app/instructors"
    )
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <Slider></Slider>

      <div className="py-10">
        {/* courses list */}
        <div className="m-5 p-5 border border-slate-300 rounded-lg box-shadow pb-16 bg-zinc-50 flex flex-col gap-5 justify-center items-center mt-10 dark:bg-slate-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Our Courses</h2>
          {courses.map((course) => (
            <HomeCourseCard key={course._id} course={course}></HomeCourseCard>
          ))}
        </div>

        {/* instructors list */}
        <div className="mx-5 p-5 border border-slate-300 rounded-lg box-shadow pb-16 bg-zinc-50 flex flex-col gap-5 justify-center items-center mt-10 dark:bg-slate-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 ">
            Our Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {instructors?.map((instructor) => (
              <Instructor
                key={instructor._id}
                instructor={instructor}
              ></Instructor>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
