"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import emptycart from "../assets/emptycart.png";
import useToggleCartStore from "@/store/toggle-cart";
export const Cart = () => {
  const CartStore = useToggleCartStore();
  return (
    <div
      className={`z-50 flex w-full h-full fixed overscroll-y-none ${
        !CartStore.isCartOpen && "hidden"
      }`}
    >
      <div className="bg-black/30 flex-grow h-full" />
      <div className="h-full w-[600px] bg-white py-12 ">
        <button
          className="flex px-6 py-1 sm:text-2xl font-light text-stone-700 items-center space-x-4"
          onClick={() => {
            CartStore.toggleCart();
          }}
        >
          <Icon icon="ep:arrow-up" className="-rotate-90 text-2xl" />
          <span>Your Cart</span>
          <span className="sm:text-xl font-medium text-sky-700">(0 items)</span>
        </button>
        <div className="flex-grow">
          <Image src={emptycart} alt="cart" className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-center items-center py-6 space-y-6">
          <span className="text-2xl xs:text-4xl text-stone-700">
            Your cart is empty
          </span>
          <button
            className="bg-sky-700 w-fit text-sm xs:text-xl text-white px-4 xs:px-8 py-2 rounded-md"
            onClick={() => {
              CartStore.toggleCart();
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
