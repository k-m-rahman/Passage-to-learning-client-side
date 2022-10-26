import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="lg:max-w-2xl mx-auto">
      <Card>
        <img className="rounded-lg lg:h-[250px]" src={blog.picture} alt="" />
        <h5 className="text-2xl lg:h-[100px] font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>
        <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
          {blog.description.slice(0, 250) + "..."}
        </p>
        <Link className="mt-3" to={`/blogs/${blog._id}`}>
          <Button className="w-2/3 mx-auto" color="dark">
            See Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Blog;
