import { Card } from "flowbite-react";
import React from "react";

const Instructor = ({ instructor }) => {
  return (
    <div className="max-w-sm">
      <Card className="bg-zinc-100 border border-gray-400">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-28 w-28 rounded-full shadow-lg border-2 border-emerald-500"
            src={instructor.picture}
            alt={instructor.name}
          />
          <h5 className=" text-xl font-medium text-orange-700  dark:text-white">
            {instructor.name}
          </h5>
        </div>
      </Card>
    </div>
  );
};

export default Instructor;
