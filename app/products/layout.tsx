import { Cart } from "@/components/cart";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutProduct = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex items-center justify-center">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutProduct;
