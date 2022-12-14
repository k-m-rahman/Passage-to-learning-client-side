import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog, typeof blog);

  if (typeof blog == "object") {
    return (
      <div>
        <div className="w-3/4 mx-auto py-10 flex flex-col gap-5">
          <img
            className="lg:h-[400px] w-full rounded-xl"
            src={blog.picture}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-semibold p-1 italic w-11/12 lg:w-2/3 mx-auto dark:text-slate-200">
              {blog.title}
            </h3>
            <p className="bg-violet-200 font-medium p-5 text-justify rounded-lg mt-5 shadow-lg">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <h2 className="text-5xl text-slate-600 dark:text-white  font-bold py-44">
      No Blog Found
    </h2>
  );
};

export default BlogDetails;
