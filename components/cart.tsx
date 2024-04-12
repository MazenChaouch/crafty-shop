"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import useToggleCartStore from "@/store/toggle-cart";
import useCartStore from "@/store/cart";
import Image from "next/image";
import emptycart from "@/assets/emptycart.png";
import { CartItem } from "./cart-item";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export const Cart = () => {
  const router = useRouter();
  const navigateToCheckout = () => {
    router.push("/checkout");
  };
  const cartstate = useToggleCartStore();
  const { cartProducts, numberOfProducts, total } = useCartStore();
  return (
    <div
      className={`z-50 flex w-full h-full fixed overscroll-y-none transition-all duration-150  ${
        !cartstate.isCartOpen ? "invisible opacity-0" : "visible opacity-100"
      }`}
    >
      <div className="bg-black/30 flex-grow h-full" />
      <div className="h-full w-[450px] bg-white py-12">
        <button
          className="flex px-6 py-1 sm:text-2xl font-light text-stone-700 items-center space-x-2"
          onClick={() => {
            cartstate.toggleCart();
          }}
        >
          <Icon icon="ep:arrow-up" className="-rotate-90 text-2xl" />
          <span>Your Cart</span>
          <span className="sm:text-xl font-medium text-sky-700">
            ({numberOfProducts} items)
          </span>
        </button>
        {numberOfProducts === 0 ? (
          <>
            <div className="flex-grow">
              <Image src={emptycart} alt="cart" className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-center items-center py-6 space-y-6">
              <span className="text-2xl xs:text-4xl text-stone-700">
                Your cart is empty
              </span>
              <button
                className="bg-sky-700 w-fit text-sm xs:text-xl text-white px-4 xs:px-8 py-2 rounded-md hover:bg-sky-800 hover:text-white active:translate-y-0.5"
                onClick={() => {
                  cartstate.toggleCart();
                }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          cartProducts.map((product, index) => (
            <div key={index} className="container py-8 space-y-4">
              <CartItem {...product} />
              {numberOfProducts !== 0 && (
                <div className="w-full flex justify-between">
                  <div className="text-2xl text-stone-400">
                    Total:{" "}
                    <span className="text-2xl font-bold text-stone-900">
                      {total}DT
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="w-fit bg-sky-700 text-white hover:bg-sky-800 hover:text-white active:translate-y-0.5"
                    onClick={() => {
                      navigateToCheckout();
                      cartstate.toggleCart();
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
