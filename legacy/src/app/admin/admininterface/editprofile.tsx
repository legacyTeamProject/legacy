"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies  from "js-cookie";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
}

const Edit = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setAdress] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("User.password");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
 const [id,setId]=useState(Cookies.get("id"))


  const updateProfile = async (data: User) => {
    try {
      axios.put(`http://localhost:3000/client/update/${id}`, {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        image: image
      });
      // if (
      //   oldPassword === "User.password" &&
      //   password === passwordConfirmation
      // )
       {
        console.log("success");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.125rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <a href="/home/My Account">Home /</a>
            <p className="text-gray-400 font-bold hover:text-[#8D7B68]">
              My account
            </p>
          </div>
          {/* <div style={{ display: "flex" }}>
            <p>Welcome </p>
            <p className="text-[#865928] hover:text-[#8D7B68]"> UserName</p>
          </div>
         */}
         </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "3rem 7rem",
            gap: "14rem",
          }}
        >
          {/* <section>
            <div>
              <div className="grid gap-2">
                <h4 className="font-semibold">Manage My Account</h4>
                <p className="text-gray-400 hover:text-[#865928] ml-7">
                  My Profile
                </p>
                <p className="text-gray-400 hover:text-[#865928] ml-7">
                  Adress Book
                </p>
                <p className="text-gray-400 hover:text-[#865928] ml-7 ">
                  My Payment Options
                </p>
              </div>
              <div className="grid gap-2">
                <h4 className="font-semibold mt-4 ">My Orders</h4>
                <p className="text-gray-400 hover:text-[#865928] ml-7">
                  My Returns
                </p>
                <p className="text-gray-400 hover:text-[#865928] ml-7">
                  My Cancellations
                </p>
              </div>
              <h4 className="font-semibold mt-4">My WishList</h4>
            </div>
          </section> */}

          <section className="p-14 shadow-md bg-slate-100">
            <form className="max-w-2xl mx-auto">
              <p className="text-[#865928] font-semibold"> Edit Your Profil </p>
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">
                    First name
                  </label>
                </div>

                <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />

                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                {/* <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-10 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone number
                  </label>
                </div> */}
              </div>
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Current password
                  </label>
                </div>
                <div className="relative z-0 w-96 mb-5 group">
                  <input
                    type="text"
                    name="adress"
                    id="adress"
                    className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />

                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Adress
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-96 mb-5 group">
                <input
                  type="password"
                  name="password"
                  className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                  defaultValue={"hello"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  New password
                </label>
              </div>

              <div className="relative z-0 w-96 mb-5 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="confirmed_password"
                  className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-[#F1DEC9] focus:bg-opacity-25 peer"
                  placeholder=" "
                  required
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm password
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <Link href=""> Cancel </Link>{" "}
                </button>

                <button
                  type="submit"
                  className="focus:outline-none text-white bg-[#865928] hover:bg-[#8D7B68] focus:ring-4 focus:ring-[#F1DEC9] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => {
                    updateProfile;
                  }}
                >
                   <Link href="/app">  </Link>
                  Confirm Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Edit;