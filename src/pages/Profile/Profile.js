import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-slate-700 text-4xl dark:text-slate-200 font-bold pt-5 underline ">
        Your Profile
      </h2>
      <div className=" flex justify-center py-10">
        <div className="w-[95%] sm:w-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 bg-sky-50 border border-gray-300 p-5 rounded-xl shadow-lg">
            <div className=" w-full flex justify-center">
              <img
                className="mb-3 w-3/5 md:h-28 md:w-28 rounded-2xl border-2 border-violet-500 shadow-xl"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="md:text-start text-base text-gray-600 font-medium">
              {" "}
              <h5 className="flex flex-col gap-0 mb-2">
                <span>Name:</span> <span>{user?.displayName}</span>
              </h5>
              <h5 className="flex flex-col gap-0 mb-2">
                <span>Email:</span> <span>{user?.email}</span>
              </h5>
              <h5>
                {user.emailVerified ? (
                  <p className="text-green-500">Email verified</p>
                ) : (
                  <p className="text-orange-500">Email not verified</p>
                )}
              </h5>
            </div>
          </div>
          <div className="mt-5">
            <Link to={`/updateProfile`}>
              <Button className="mx-auto" gradientDuoTone="purpleToBlue">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
