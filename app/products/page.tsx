"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import table from "../../assets/table.png";
import plant from "../../assets/plant.png";
import { motion } from "framer-motion";
import { Product } from "@/components/product";
import { ListProducts } from "@/components/listproducts";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const Products = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="flex flex-col justify-center h-full w-full pt-24 sm:pt-20 ">
      <div className="flex justify-center items-center h-fit min-h-[400px] w-full max-w-[1200px] self-center px-8">
        <motion.div
          whileInView={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          className=" sm:m-12 bg-sky-950/80 rounded-xl py-16"
        >
          <Carousel
            className="flex justify-center items-center mx-auto w-10/12"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-fit min-h-[400px] w-full max-w-[1200px] overflow-visible">
              <CarouselItem className="grid md:grid-cols-2 items-center overflow-visible">
                <motion.div
                  whileInView={{ x: 0, opacity: 100 }}
                  transition={{ duration: 1, delay: 0.25 }}
                  initial={{ x: -50 }}
                  className="text-3xl  xs:text-4xl md:text-6xl font-extrabold text-slate-200 w-full text-left max-md:order-2 justify-between"
                >
                  <p>Floating Table with a arificial plant pot</p>
                  <div className="max-md:flex gap-2 mt-4">
                    <button className="px-2  sm:px-4 bg-transparent text-slate-200 border-2 border-slate-200 rounded-xl text-base xs:text-lg">
                      Read more
                    </button>
                    <button className="px-2  sm:px-4 bg-slate-200 text-sky-950 border-2 border-slate-200 rounded-xl text-base xs:text-lg sm:ml-2">
                      <Icon
                        icon="mdi:cart-outline"
                        className="mr-2 inline-flex items-center"
                      />
                      buy now
                    </button>
                  </div>
                </motion.div>
                <div className="mx-auto max-md:h-[350px] max-md:w-[200px] flex justify-start items-center ">
                  <motion.div
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    initial={{ x: 50, opacity: 0 }}
                    className="h-[350px] w-[200px]"
                  >
                    <Image
                      src={table}
                      alt="table"
                      className="object-contain h-full w-full"
                    />
                  </motion.div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[1200px] m-12 py-16 self-center">
        <motion.div
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: 30, opacity: 0 }}
          className="text-6xl font-extrabold text-sky-900 w-full px-8"
        >
          All Products
        </motion.div>
        <ListProducts nbItem={12} />
      </div>
    </div>
  );
};

export default Products;
