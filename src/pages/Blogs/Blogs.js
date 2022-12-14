import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold pt-5 text-slate-700 dark:text-slate-200 underline  italic">
        Number of Blogs : {blogs.length}
      </h2>
      <div className=" p-5 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 ">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
