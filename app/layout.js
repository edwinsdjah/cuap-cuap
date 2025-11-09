'use client';
import { Outfit } from 'next/font/google';
import './globals.css';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        if (data.authenticated) {
          setAuth(data.user);
        } else {
          setAuth(null);
        }
      } catch {
        setAuth(null);
      }
    };

    checkAuth();

    // ✅ Auto-sync antar tab (Storage Event)
    window.addEventListener('storage', e => {
      if (e.key === 'logout') {
        setAuth(null);
      }
    });
  }, [setAuth]);

  return (
    <html lang='en'>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
