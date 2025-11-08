'use client';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../Assets/assets';
import { AnimatePresence, motion } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
  const [data, setData] = useState({ username: '', password: '' });
  const router = useRouter();

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', data);
      if (res.data.success) {
        toast.success('Login Successful');
        onClose();
        router.push('/admin');
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error('Login Failed');
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
          onClick={onClose}
        >
          <motion.div
            key='modal'
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='bg-white p-6 rounded-lg shadow-[-7px_7px_0px_#000000] border border-black w-[320px] sm:w-[400px]'
            onClick={e => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Admin Login</h2>
              <button
                onClick={onClose}
                className='text-gray-500 hover:text-black'
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit}>
              <input
                name='username'
                type='text'
                placeholder='Username'
                value={data.username}
                onChange={onChange}
                className='border w-full p-2 mb-3'
                required
              />
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={data.password}
                onChange={onChange}
                className='border w-full p-2 mb-4'
                required
              />
              <button
                type='submit'
                className='flex items-center justify-center gap-2 w-full py-2 bg-black text-white border border-black shadow-[-4px_4px_0px_#000000]'
              >
                Login
                <Image src={assets.arrow} alt='' width={16} height={16} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
