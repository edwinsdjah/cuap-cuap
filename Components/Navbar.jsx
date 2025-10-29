import { assets } from "Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
      </Link>
      <Link
        href={"/admin"}
        className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]"
      >
        Admin Panel
        <Image src={assets.arrow} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
