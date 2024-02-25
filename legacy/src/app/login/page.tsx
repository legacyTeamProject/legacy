'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const loging = () => {
    axios.post(`http://localhost:3000/auth/login`, { email: email, password: password })
      .then((result) => {
        Cookies.set('token', result.data.token);
        Cookies.set("id", result.data.user.userId);
        console.log("Role :", result.data.user.role);
        handleRedirect();
        console.log("id", result.data.user.userId);
        handleRedirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRedirect = () => {
    switch (role) {
      case 'admin':
        router.push('/admin-dashboard');
        break;
      case 'seller':
        router.push('/seller-dashboard');
        break;
      case 'client':
        router.push('/client-dashboard');
        console.log("client here");
        break;
      default:
        router.push('/');
        console.log("default here");
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}></div>
      <section>
        <motion.div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          <motion.div initial={{ x: -150, opacity: 0 }} animate={{ x: 25, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.3 }}>
            <img className="w-90 h-50 ml-20 mb-10 " src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ei8Obc480OzLO4I-exiLNDwpkdceHtc8xun5uPHq0aqbZstVMhVJAaNQ25q-n03w93qcFgaMvrwDzRtJW4D394cWc~sMk9wFCOZaq4Sgjv17FgGcLdsmAgUeFr1tqkTGFvfgvf~rNFYNK2b3JEaVyL93BI9TON9I1eg5CD0LfXOKCFDrbK-A551Y0C~wE4H2laxYopK2fjQQL~cnH4BJ1Vowjq7Ii5tbk8t6rgPxilKXIPdKFL61W5S5RGsojj6OULhclHVHLlBmmlOQll5BtLQ6uwqORuPQsKXGKqHHZoS7bhTVEpcHbvEOWUmLTwimcG-~9~Ytmsug8RxpdrV91A__" alt="" />
          </motion.div>
          <motion.div animate={{ x: 180 }} transition={{ ease: "easeOut", duration: 1 }} className='max-w-md mx-auto mr-28 space-y-12'>
            <motion.h1 className='text-4xl font-semibold text-gray-900 text-black-500 '>Log in to Exclusive</motion.h1>
            <motion.p className='text-black-500 text-xl font-semibold text-gray-700 '> Enter your details below </motion.p>
            <div className='relative z-0 w-full mb-5 group'>
              <motion.input
                whileHover={{ scale: 1.2 }}
                animate={{ x: 10 }}
                type='email'
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' Email '
              />
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <motion.input
                whileHover={{ scale: 1.2 }}
                animate={{ x: 10 }}
                type='password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder='password '
                required
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='md:text-left mr-56 '>
              <motion.button
                animate={{ scale: 1.2, x: 125, y: 30 }}
                transition={{ ease: "easeOut", duration: 0.9 }}
                whileHover={{ scale: 1.5 }}
                type='submit'
                onClick={() => { loging(); console.log('hello'); }}
                className='focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                Log In
              </motion.button>
              <motion.p animate={{ scale: 1.2, x: 155, y: 30 }} transition={{ ease: "easeOut", duration: 0.8 }} whileHover={{ scale: 1.4 }} className='text-red-500 ' onClick={() => { }} > already have an account? </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default LogIn;