"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import name from "../assets/name.svg";
import Link from "next/link";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col h-fit border-t border-gray-300 tracking-wider items-center mt-12">
      <div className="flex max-sm:flex-col justify-around my-8 gap-8 sm:w-full">
        <div className="flex flex-col ">
          <div className="flex items-center">
            <Image src={logo} alt="logo" className="h-12 w-12" />
            <Image src={name} alt="logo" className="h-12 w-[200]" />
          </div>
          <p className="pt-4">
            © {year} by Mazen Chaouch.
            <br /> Proudly created with Next.js
          </p>
        </div>
        <div className="flex flex-col w-fit">
          <h1 className="font-bold text-4xl pb-4 text-gray-800">Account</h1>
          <p className="text-lg text-gray-500">Create an account</p>
          <p className="text-lg text-gray-500">Login</p>
        </div>
        <div className="flex flex-col w-fit">
          <h1 className="font-bold text-4xl pb-4 text-gray-800">Contact us</h1>
          <p className="text-lg text-gray-500">+216 54 24 24 69</p>
          <p className="text-lg text-gray-500">crafty.shop00@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-gray-400 border-t border-gray-200 p-4 text-lg w-full">
        Design and developed by Mazen Chaouch ❤️
      </div>
    </div>
  );
};
