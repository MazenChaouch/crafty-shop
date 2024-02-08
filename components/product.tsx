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
        transition={{ duration: 1, delay: i / 12 }}
        initial={{ x: 10, opacity: 0 }}
        className=" h-[290px] w-[140px] sm:h-[400px] sm:w-[191px] md:h-[500px] md:w-[239px] bg-white items-center rounded-md"
      >
        <Link href={`/products/item${i}`}>
          <div className="h-[220px] w-[140px]  sm:h-[300px] sm:w-[191px] md:h-[390px] md:w-[239px] overflow-hidden border border-zinc-700/50  rounded-t-md">
            <Image
              src={table}
              alt={`product${i + 1}`}
              className="object-cover h-full w-full sm:hover:scale-110 transition-transform duration-500 ease-in-out object-center overflow-hidden "
            />
          </div>
        </Link>
        <div className="flex justify-between items-end h-[70px] w-[140px] sm:h-[100px] sm:w-[191px] md:h-[110px]  md:w-[239px] bg-sky-950 z-10 p-2 rounded-b-md">
          <div className="flex flex-col h-full w-fit justify-between p-1 sm:p-2">
            <h1 className="text-sm sm:text-base md:text-md font-semibold text-white truncate">
              <span>Product {i + 1}</span>
            </h1>
            <button className="text-black bg-white text-xs md:text-base font-bold px-1 py-1 rounded-md">
              Buy now
            </button>
          </div>
          <div className="flex h-fit items-center justify-center  md:py-2 bg-transparent rounded-md">
            <p className="text-white font-semibold text-base md:text-xl md:font-md">
              900DT
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
