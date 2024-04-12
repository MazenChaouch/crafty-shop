"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

export const SuccessPurchase = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center space-y-10 text-center">
        <div className="text-sky-800 text-5xl">Thank you for purchasing</div>
        <div className="text-2xl text-center">
          Your order is being processed
          <br />
          Check your order list
        </div>

        <Button
          className="bg-sky-700 text-white hover:bg-sky-800 hover:text-white active:translate-y-0.5 px-24"
          asChild
        >
          <Link href="/">Order list</Link>
        </Button>
        <div className="flex max-md:flex-col items-center text-center">
          If you have questions please contact us on our facebook page or
          <Button variant={"link"} asChild>
            <Link href="https://www.facebook.com/Craftyshop00">
              <Icon icon="logos:facebook" className="text-4xl" />
            </Link>
          </Button>
          call us on 54242469
        </div>
      </div>
    </div>
  );
};
