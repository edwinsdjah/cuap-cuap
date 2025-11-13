import { assets } from "Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error adding email");
    }
  };

  return (
    <>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <div className="text-center my-8 mb-0">
          <h1 className="text-3xl sm:text-5xl font-medium ">
            Ed's Personal Blog
          </h1>
          <p className="mt-10 max-w-[-740px] m-auto text-xs sm:text-base">
            Welcome to my personal blog, i write and post everything that i like
            here. <br />
            Please Enjoy!
          </p>
          <form
            onSubmit={onSubmitHandler}
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <button
              type="submit"
              className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
