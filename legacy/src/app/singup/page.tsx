"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import {motion} from 'framer-motion'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");


  const [role, setRole] = useState("seller");
  const flatten = (email) => {
    const regex = ["#", "@", "$", ",", "'", "/", "."];
    if (!email.includes('@')) {
      return false;
    }
    if (email.indexOf('@') !== email.lastIndexOf('@')) return false;
    const part = email.split('@');
    if (regex.includes(part[0][0]) || regex.includes(part[0][part[0].length - 1])) return false;
    if (regex.includes(part[1][0]) || regex.includes(part[1][part[1].length - 1])) return false;
    return true;
  }



  const signup = async () => {
    try {
      if (!flatten(email)) {
        alert('Invalid email format');
        return;
      }
      if (!firstName) {
        alert('Please enter your first name.');
        return;
      }
      if (!lastName) {
        alert('Please enter your last name.');
        return;
      }

      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        age: age,
        role: role,
      };

      const response = await axios.post('http://localhost:3000/auth/signup', userData);
      
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
       <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
      </div>
      <section>
      <motion.div  initial={{x:-400 , opacity:0}} animate={{ x: -350 , opacity:1}}  transition={{ ease: "easeOut", duration: 1 }} className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
        <motion.div initial={{x:-400 , opacity:0}}  animate={{ x: 100 , opacity:1 }} transition={{ ease: "easeOut", duration: 0.9 }}  >
        <img className="w-90 h-50 ml-20 mb-10 " src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ei8Obc480OzLO4I-exiLNDwpkdceHtc8xun5uPHq0aqbZstVMhVJAaNQ25q-n03w93qcFgaMvrwDzRtJW4D394cWc~sMk9wFCOZaq4Sgjv17FgGcLdsmAgUeFr1tqkTGFvfgvf~rNFYNK2b3JEaVyL93BI9TON9I1eg5CD0LfXOKCFDrbK-A551Y0C~wE4H2laxYopK2fjQQL~cnH4BJ1Vowjq7Ii5tbk8t6rgPxilKXIPdKFL61W5S5RGsojj6OULhclHVHLlBmmlOQll5BtLQ6uwqORuPQsKXGKqHHZoS7bhTVEpcHbvEOWUmLTwimcG-~9~Ytmsug8RxpdrV91A__" alt="" />
        </motion.div  >
         <div className= "max-w-md mx-auto mr-28 space-y-12" >
          < motion.h1    animate={{ x: 250 }} transition={{ ease: "easeOut", duration: 1 }} className='text-4xl font-semibold text-gray-900 text-black-500 '>Create an account</motion.h1>
          <motion.p animate={{ x: 250 }} transition={{ ease: "easeOut", duration: 1 }}  className= "text-black-500 text-xl font-semibold text-gray-700 " > Enter your details below </motion.p>
    <motion.div animate={{ x: 250 }} transition={{ ease: "easeOut", duration: 1 }}   className="grid md:grid-cols-2 md:gap-10">
            <div className="relative z-0 w-full mb-5 group">
              <motion.input
               whileHover={{ scale: 1.6 }}
               animate={{ x: 10 }}
                type="te xt"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" FirstName"
                onChange={(e) => {
                  setfirstName(e.target.value);
                  
                }}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <motion.input
               whileHover={{ scale: 1.6 }}
               animate={{ x: 10 }}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="LastName "
                onChange={(e) => {
                  setlastName(e.target.value)
                }}
              />
            </div>
          
           <div className="relative z-0 w-full mb-5 group">
            <motion.input
                 whileHover={{ scale: 1.6 }}
                 animate={{ x: 10 }}          
              type="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" Email "
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
           </div>
           <div className="relative z-0 w-full mb-5 group">
            <motion.input
               whileHover={{ scale: 1.6 }}
               animate={{ x: 10 }}
              type="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="password "
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
           </div>
  
            <div className="relative z-0 w-full mb-5 group">
            <motion.input
               whileHover={{ scale: 1.6 }}
               animate={{ x: 10 }}            
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="age"
              required
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
           </div>


            <div className="flex items-start"></div>
              <motion.div 
              whileHover={{ scale: 1.8 }}
              animate={{ x: 10 }}
              className="flex items-start mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isClient"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("Client")}
                    />
                  </div>
                  <label
                    htmlFor="isClient"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Client
                  </label>
                </div>
              </motion.div>

              <motion.div 
              whileHover={{ scale: 1.8 }}
              animate={{ x: 10 }}
              className="flex items-start mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isSeller"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("Seller")}
                    />
                  </div>
                  </div>

                  <label
                    htmlFor="isSeller"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Seller
                  </label>
                </motion.div>
              </motion.div>




           <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.button
              type="submit"
              className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={()=>{signup()}}
              animate={{ x: 185 , y:30 ,opacity:1}}
              transition={{ ease: "easeOut", duration: 1.2}}
              whileHover={{ scale: [1.5,1,1.6] }}
              initial={{x:-250 , opacity:0}}

              
            >
            <Link href="/login"> confirm</Link>
            </motion.button>
           </div>
        </div>
        </motion.div>
      </section> 
      
    </div>
  );
};

export default Register;
