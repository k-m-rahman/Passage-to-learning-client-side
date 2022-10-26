import { Card } from "flowbite-react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCourseCard = ({ course }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card className="md:w-2/3 " data-aos="flip-right">
      <img src={course.picture} className="rounded-lg border" alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {course.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {course.description.slice(0, 150) + "..."}
      </p>
    </Card>
  );
};

export default HomeCourseCard;
