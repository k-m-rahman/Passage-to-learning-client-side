import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" flex justify-center my-10">
      <div>
        <div className="flex justify-center items-center gap-5 bg-sky-50 border border-gray-300 p-5 rounded-xl shadow-lg">
          <div>
            <img
              className="mb-3 h-28 w-28 rounded-2xl border-2 border-violet-500 shadow-xl"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="text-start text-base text-gray-600 font-medium">
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
          <Button className="mx-auto" gradientDuoTone="purpleToBlue">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
