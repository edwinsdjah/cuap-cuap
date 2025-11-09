'use client';
import { assets } from 'Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { isLoggedIn, loading, setAuth } = useAuthStore();
  const router = useRouter();

  // Saat pertama kali load, cek apakah user masih login (cek cookie via server)
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/me', { cache: 'no-store' });
      const data = await res.json();
      if (data.authenticated) {
        setAuth(data.user);
      } else {
        setAuth(null);
      }
    };
    checkAuth();
  }, [setAuth]);

  const handleAdminClick = () => {
    if (loading) return; // kalau masih cek login, jangan dulu
    if (isLoggedIn) {
      router.push('/admin');
    } else {
      setShowLogin(true);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    logout();
    window.localStorage.setItem('logout', Date.now()); // sync antar tab
    router.push('/');
  };

  return (
    <div className='flex justify-between items-center'>
      <Link href='/'>
        <Image src={assets.logo} width={180} alt='Logo' />
      </Link>

      <div className='flex items-center gap-3'>
        <button
          onClick={handleAdminClick}
          className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'
        >
          Admin Panel
          <Image src={assets.arrow} alt='' />
        </button>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className='py-1 px-3 border border-black bg-gray-100'
          >
            Logout
          </button>
        )}
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Navbar;
