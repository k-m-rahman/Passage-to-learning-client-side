import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="mx-5 md:w-1/2 md:mx-auto my-10 border p-5 pb-10 rounded-lg shadow-xl">
      <div>
        <h3 className="text-3xl font-semibold mb-4">Login</h3>
      </div>
      <form className="flex flex-col gap-4 text-left w-10/12 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            id="email2"
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
          <Label>
            Don't have any account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Register
            </Link>
          </Label>
        </div>
        <Button type="submit">Login</Button>

        <div className="flex items-center gap-2">
          <Label>
            <Link
              to="/register"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </Link>
          </Label>
        </div>
      </form>
      <div className="flex flex-col gap-4 mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="border-gray-300 w-10/12 rounded-lg border p-3 bg-slate-200 hover:bg-slate-300 flex items-center justify-center gap-2 mx-auto"
        >
          <FaGoogle></FaGoogle>
          <span>Google Sign In</span>
        </button>
        <button
          onClick={handleGithubSignIn}
          className="border-gray-300 w-10/12 rounded-lg border p-3 bg-slate-200 hover:bg-slate-300 flex items-center justify-center gap-2 mx-auto"
        >
          <FaGithub></FaGithub>
          <span>Github Sign In</span>
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
