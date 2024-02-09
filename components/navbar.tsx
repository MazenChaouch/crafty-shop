"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import name from "../assets/name.svg";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import useToggleCartStore from "@/store/toggle-cart";
import { Cart } from "./cart";
export const Navbar = () => {
  const CartStore = useToggleCartStore();
  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto fixed shadow-md bg-white z-40 text-slate-600">
        <div className="h-20 w-full max-w-[1200px] flex justify-between items-center self-center my-auto max-sm:px-3 max-xl:px-12 ">
          <div className="flex items-center sm:hidden">
            <Icon icon="mdi:menu" height={25} width={25} />
          </div>
          <Link href="/" className="flex self-center max-sm:pl-12">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-12 max-sm:h-12 max-sm:w-10"
            />
            <Image
              src={name}
              alt="logo"
              className="h-12 w-[200] max-sm:h-12 max-sm:w-32"
            />
          </Link>
          <motion.div
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            className="space-x-5 lg:space-x-10"
          >
            <Link
              href="/products"
              className="text-base md:text-lg  lg:text-3xl max-sm:hidden"
            >
              <span>Products</span>
            </Link>
            <Link
              href=""
              className="text-base md:text-lg  lg:text-3xl max-sm:hidden"
            >
              <span>Discounts</span>
            </Link>
            <Link
              href="/"
              className="text-base md:text-lg  lg:text-3xl max-sm:hidden"
            >
              <span>About us</span>
            </Link>
          </motion.div>
          <button
            className="relative flex items-center md:pl-28"
            onClick={() => {
              CartStore.toggleCart();
            }}
          >
            <Icon
              icon="mdi:cart-outline"
              height={30}
              width={30}
              className="hover:scale-110 transition-transform duration-300 ease-in-out text-slate-600"
            />
            <span className="text-sm font-light text-stone-200">
              <span className="absolute -top-2 -right-2 bg-sky-900 px-1 rounded-full">
                0
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
