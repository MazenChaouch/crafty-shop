"use client";
import useToggleSidebare from "@/store/toggle-sidebar";
import Link from "next/link";

export const Sidebar = () => {
  const toggle = useToggleSidebare();
  return (
    <div
      className={`z-30 flex w-full h-full fixed overscroll-y-none transition-all duration-150 bg-white ${
        !toggle.isSidebarOpen ? "invisible opacity-0" : "visible opacity-100"
      }`}
    >
      <div className="flex flex-col w-full justify-center items-center space-y-8">
        <Link href="/" className="underline text-2xl font-bold ">
          <span>Home</span>
        </Link>
        <Link href="/products" className="underline text-2xl font-bold ">
          <span>Products</span>
        </Link>
        <Link href="/orders" className="underline text-2xl font-bold ">
          <span>Orders</span>
        </Link>
        <Link href="/" className="underline text-2xl font-bold ">
          <span>About us</span>
        </Link>
      </div>
    </div>
  );
};
