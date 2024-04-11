"use client";
import Image from "next/image";
import armchair from "../assets/armchair.png";
import lamp from "../assets/lamp.png";
import { motion } from "framer-motion";
import Link from "next/link";

import { ListProducts } from "./listproducts";
export const Hero = () => {
  return (
    <div className="flex flex-col w-full max-w-[1400px] mb-48 mx-auto">
      <div className="flex max-sm:flex-col w-full gap-8 pt-16 sm:pt-24 p-2 max-sm:text-center px-6 xl:px-24">
        <div className="space-y-4 sm:space-y-8 p-12 sm:pt-24 bg-white z-10 mb-10">
          <motion.h1
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.75 }}
            initial={{ y: 30, opacity: 0 }}
            className="text-4xl sm:text-6xl font-bold text-gray-800"
          >
            Stylish and <span className="text-sky-900">Modern</span> products
            for your home.
          </motion.h1>
          <motion.div
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: 30, opacity: 0 }}
            className="text-xl sm:text-4xl font-light text-gray-600"
          >
            make your home more insipiring.
          </motion.div>

          <motion.button
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            initial={{ y: 30, opacity: 0 }}
            className="px-4 md:px-6 py-2 text-white bg-sky-950 rounded-md text-lg md:font-semibold"
          >
            <Link href="/products">Shop now</Link>
          </motion.button>
        </div>
        <div className="flex relative items-center">
          <motion.div
            whileInView={{ x: -20, opacity: 100 }}
            transition={{ ease: "easeIn", duration: 1 }}
            initial={{ x: 20, opacity: 0 }}
            className="-z-20 object-center items-center"
          >
            <Image src={armchair} width={600} height={500} alt="armchair" />
          </motion.div>
          <motion.div
            whileInView={{ y: [-100, -50, -100], opacity: [100, 100] }}
            transition={{
              ease: "easeOut",
              duration: 3,
              delay: 0.75,
              repeat: Infinity,
              times: [0, 1],
            }}
            initial={{ opacity: 0 }}
            className="absolute right-5 max-xl:-top-12 -top-24 -z-0 h-96 w-48 max-xl:h-72 max-xl:w-36 max-sm:h-64 max-sm:w-24 object-bottom overflow-hidden"
          >
            <Image
              src={lamp}
              alt="lamp"
              className="object-top object-contain h-96 w-48 max-xl:h-72 max-xl:w-36 max-sm:h-64 max-sm:w-24 overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 mb-6">
        <motion.div
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: 30, opacity: 0 }}
          className="text-3xl md:text-6xl font-extrabold text-sky-900 w-full text-center "
        >
          Our Products
        </motion.div>
        <ListProducts nbItem={4} />
      </div>
    </div>
  );
};
