'use client';
import BlogList from 'Components/BlogList';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from '../Components/LoginModal';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer theme='dark' />
      <Header />
      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
      <BlogList />
      <Footer />
    </>
  );
}
