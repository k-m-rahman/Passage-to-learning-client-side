import {
  Button,
  Card,
  Checkbox,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const terms = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank You! Your order is placed successfully", {
      duration: 1800,
    });
    event.target.reset();
    navigate("/");
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-slate-300 md:w-3/4 mx-3 md:mx-auto my-10 shadow-xl rounded-lg p-5 items-center">
        <div>
          <div className="max-w-sm  mb-5 mx-auto">
            <Card imgSrc={course.picture}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.name}
              </h5>
              <p className="font-bold text-gray-700 dark:text-gray-400">
                <span>Price:</span>{" "}
                <span className="text-amber-500 dark:text-gray-400">
                  {course.price}
                </span>
              </p>
            </Card>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="email"
                type="text"
                required={true}
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                defaultValue={user?.email}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your Address" />
              </div>
              <TextInput
                id="address"
                type="text"
                placeholder="Your Address"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Phone" />
              </div>
              <TextInput
                id="phone"
                type="text"
                placeholder="Your Phone"
                required={true}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox onClick={terms} id="agree" />
              <Label htmlFor="agree">Agree to </Label>
              <span
                onClick={() => setShowModal(true)}
                className="text-blue-700 dark:text-blue-300 hover:underline text-sm cursor-pointer"
              >
                Terms and Conditions
              </span>
              ?
            </div>
            <Button disabled={!agreed} type="submit">
              Place Order
            </Button>
          </form>
        </div>
        <React.Fragment>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Modal.Header>Terms and Conditions</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Use of this site is provided by Passage To Learning to the
                  following Terms and Conditions: <br></br> 1. Your use
                  constitutes acceptance of these Terms and Conditions as at the
                  date of your first use of the site. <br></br>
                  2. Passage to Learning reserves the rights to change these
                  Terms and Conditions at any time by posting changes online.
                  Your continued use of this site after changes are posted
                  constitutes your acceptance of this agreement as modified.
                  <br />
                  3. You agree to use this site only for lawful purposes, and in
                  a manner which does not infringe the rights, or restrict, or
                  inhibit the use and enjoyment of the site by any third party.
                  <br />
                  4. If these Terms and Conditions are not accepted in full, the
                  use of this site must be terminated immediately.
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Checkout;
