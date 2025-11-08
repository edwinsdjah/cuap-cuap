import { assets } from 'Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(jsCookie);
  const handleAdminClick = () => {
    router.push('/admin');
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setIsOpen(false);
  };

  return (
    <div className='flex justify-between items-center'>
      <Link href={'/'}>
        <Image
          src={assets.logo}
          width={180}
          alt=''
          className='w-[130px] sm:w-auto'
        />
      </Link>

      <button
        onClick={() => {
          handleAdminClick();
        }}
        className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'
      >
        Admin Panel
        <Image src={assets.arrow} alt='' />
      </button>
      {showLogin && <LoginModal isOpen={isOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default Navbar;
