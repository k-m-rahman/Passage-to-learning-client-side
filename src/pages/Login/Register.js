import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mx-5 md:w-1/2 md:mx-auto mt-10 border p-5 pb-10 rounded-lg shadow-xl mb-10">
      <div>
        <h3 className="text-3xl font-semibold mb-4">Register</h3>
      </div>
      <form className="flex flex-col gap-4 text-left w-10/12 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Your Name"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your Email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            placeholder="Your Password"
            required={true}
            shadow={true}
          />
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="agree">
            Already have any account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </Label>
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
