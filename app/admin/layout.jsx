import { assets } from "Assets/assets";
import Sidebar from "Components/AdminComponents/Sidebar";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CARA KERJA ROUTING DI NEXT JS ADALAH LAYOUT SEBAGAI PEMBUNGKUS UTAMA PAGENYA, LALU DI DALAMNYA DI ISI CHILDREN YANG BISA BERUBAH2,
// PAGE.JSX HANYA SEBAGAI INDEX AGAR ROUTE TERSEBUT BISA DIJALANKAN

export default function Layout({ children }) {
  return (
    <>
      <div className="flex w-full">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
