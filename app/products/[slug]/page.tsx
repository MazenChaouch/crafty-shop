"use client";
import Image from "next/image";
import table from "../../../assets/table-deco.jpg";
import { Rating, ThinStar } from "@smastrom/react-rating";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
const Product = ({ params }: { params: { slug: string } }) => {
  const [rating, setRating] = useState(3);
  const [qte, setQte] = useState(1);
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#082F49",
    inactiveFillColor: "#D3D3D3",
    activeStrokeColor: "#082F49",
  };
  return (
    <div className="flex flex-col w-full max-w-[1200px] mt-20">
      <div className="flex flex-col lg:flex-row m-12 md:m-24 justify-between gap-12">
        <div className="flex flex-col gap-4">
          <div className="h-[400px] w-[280px] lg:h-[500px] lg:w-[350px] rounded-xl overflow-hidden">
            <Image
              src={table}
              alt="product"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="h-[120px] w-[85px] rounded-lg overflow-hidden active:ring-4 active:ring-sky-900/70 focus:ring-4 focus:ring-sky-900/70">
              <Image
                src={table}
                alt="product"
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 tracking-wide">
          <p className="text-3xl lg:text-4xl xl:text-6xl font-bold text-stone-800">
            Product 1
          </p>
          <div className="flex w-fit">
            <p className="text-xl font-bold text-stone-500">Rating:</p>
            <Rating
              value={rating}
              onChange={setRating}
              itemStyles={myStyles}
              className="h-8 w-8 xs:pl-6 text-sky-900"
            />
          </div>
          <p className="text-xl font-bold text-stone-500">Description:</p>
          <p className=" lg:text-xl xl:text-2xl font-light text-stone-500 h-full sm:max-h-[180px] lg:max-h-[270px]  overflow-hidden text-wrap truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt, elit non cursus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc tincidunt, elit non cursus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc tincidunt, elit non
            cursus. Lorem ipsum dolor sit amet consectetur .
          </p>
          <p className="text-2xl font-bold text-stone-500">900 DT</p>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-stone-500">Quantity</p>
            <div className="flex items-center border border-stone-500">
              <Icon
                icon="ic:outline-minus"
                className="h-10 w-10 font-thin text-red-500 border-r border-stone-500 select-none"
                onClick={() => {
                  if (qte > 1) setQte((prev) => prev - 1);
                }}
              />
              <input
                type="text"
                value={qte}
                className="w-10 h-full text-2xl font-bold ring-0 focus:ring-0 focus:outline-none text-center bg-transparent select-none"
                defaultValue={1}
                maxLength={2}
                min={1}
                max={99}
                readOnly
              />
              <Icon
                icon="ic:outline-plus"
                className="h-10 w-10 font-thin text-green-500 border-l border-stone-500 select-none"
                onClick={() => {
                  if (qte < 99) setQte((prev) => prev + 1);
                }}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="h-full w-full bg-transparent text-stone-500 border-2 border-stone-500/70 text-base sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm">
              Add to cart
            </button>
            <button className="h-full w-full bg-sky-900 text-white border-2 border-white text-base sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
