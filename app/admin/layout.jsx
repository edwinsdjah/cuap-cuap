import { assets } from "Assets/assets";
import Sidebar from "Components/AdminComponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CARA KERJA ROUTING DI NEXT JS ADALAH LAYOUT SEBAGAI PEMBUNGKUS UTAMA PAGENYA, LALU DI DALAMNYA DI ISI CHILDREN YANG BISA BERUBAH2,
// PAGE.JSX HANYA SEBAGAI INDEX AGAR ROUTE TERSEBUT BISA DIJALANKAN

export default function Layout({ children }) {
  return (
    <>
      <div className="flex w-full py-5 px-5 md:px-12 lg:px-20">
        <ToastContainer theme="dark" />
        <div className="flex flex-col w-full border-b border-black bg-white shadow-sm">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 ">
            <div className="px-2 sm:pl-14 py-3">
              <Link href={"/"}>
                <Image src={assets.logo} width={128} alt="" />
              </Link>
            </div>
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              src={assets.profile_icon}
              className="mr-2"
              width={40}
              alt=""
            />
          </div>
          <div className="flex flex-row w-full bg-slate-100 border-b-stone-950">
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
