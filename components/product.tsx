import Image from "next/image";
import Link from "next/link";
import React from "react";
import table from "../assets/table-deco-2.jpg";

interface ProductProps {
  i: number;
}
import { motion } from "framer-motion";
export const Product = ({ i }: ProductProps) => {
  return (
    <div className="h-full w-fit flex justify-center items-center">
      <motion.div
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1, delay: i / 10 }}
        initial={{ x: 10, opacity: 0 }}
        className=" h-[350px] w-[180px] sm:h-[400px] sm:w-[191px] lg:h-[500px] lg:w-[239px] bg-white items-center rounded-lg"
      >
        <Link href={`/products/item${i}`}>
          <div className="h-[270px] w-[180px]  sm:h-[300px] sm:w-[191px] lg:h-[390px] lg:w-[239px] overflow-hidden border border-zinc-700/50  rounded-t-lg">
            <Image
              src={table}
              alt={`product${i + 1}`}
              className="object-cover h-full w-full sm:hover:scale-110 transition-transform duration-500 ease-in-out object-center overflow-hidden "
            />
          </div>
        </Link>
        <div className="flex justify-between items-end h-[80px] w-[180px] sm:h-[100px] sm:w-[191px] lg:h-[110px]  lg:w-[239px] bg-sky-950 z-10 p-2 rounded-b-lg">
          <div className="flex flex-col h-full w-fit justify-between p-1 sm:p-2">
            <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-white truncate">
              <span>Product {i + 1}</span>
            </h1>
            <button className="text-black bg-white text-sm lg:text-base font-bold px-1 py-1 md:px-2 lg:px-2 md:py-2 rounded-lg">
              Buy now
            </button>
          </div>
          <div className="flex h-fit items-center justify-center px-1 py-1 md:px-2 lg:px-4 md:py-2 bg-transparent rounded-lg">
            <p className="text-white font-semibold text-base lg:text-xl lg:font-lg">
              900DT
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
