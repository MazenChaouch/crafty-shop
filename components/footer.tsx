"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import name from "../assets/name.svg";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col h-fit border-t border-gray-300 tracking-wider items-center mt-12">
      <div className="flex max-sm:flex-col justify-around my-8 gap-8 p-4 sm:w-full">
        <div className="flex flex-col">
          <div className="flex items-center text-sm">
            <Image src={logo} alt="logo" className="h-10 w-10" />
            <Image src={name} alt="logo" className="h-10 w-[180]" />
          </div>
          <p className="pt-4">© {year} Crafty Shop. All rights reserved.</p>
        </div>
        <div className="flex flex-col w-fit">
          <h1 className="font-bold md:text-3xl pb-4 text-gray-800">Account</h1>
          <p className="text-gray-500">Create an account</p>
          <p className="text-gray-500">Login</p>
        </div>
        <div className="flex flex-col w-fit">
          <h1 className="font-bold md:text-3xl pb-4 text-gray-800">
            Contact us
          </h1>
          <p className="text-gray-500">+216 54 24 24 69</p>
          <p className="text-gray-500">crafty.shop00@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center text-xs items-center text-gray-800 border-t border-gray-200 p-4 w-full opacity-75">
        Design and developed by Mazen Chaouch
      </div>
    </div>
  );
};
