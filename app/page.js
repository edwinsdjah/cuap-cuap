'use client';
import BlogList from 'Components/BlogList';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import { useSearchParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from '../Components/LoginModal';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const [showlogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (searchParams.get('login') === 'true') {
      setShowLogin(true);
    }
  }, [searchParams]);

  return (
    <>
      {console.log(showlogin)}
      <ToastContainer theme='dark' />
      <Header />
      {showlogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
      <BlogList />
      <Footer />
    </>
  );
}
