import { assets } from "Assets/assets";
import Sidebar from "Components/AdminComponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex w-full min-h-screen bg-[#fafafa]">
        {" "}
        {/* off-white background */}
        <ToastContainer theme="dark" />
        <div className="flex flex-col w-full">
          {/* === NAVBAR === */}
          <div className="flex items-center justify-between w-full py-4 px-8 border-b border-black bg-white shadow-sm px-10">
            <div className="flex items-center gap-2">
              <Link href={"/"}>
                <Image src={assets.logo} width={128} alt="Logo" />
              </Link>
            </div>
            <h3 className="font-medium"></h3>
            <Image
              src={assets.profile_icon}
              className="mr-2"
              width={40}
              alt="Profile Icon"
            />
          </div>

          {/* === MAIN CONTENT === */}
          <div className="flex flex-row flex-1 w-full bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-6 ">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
