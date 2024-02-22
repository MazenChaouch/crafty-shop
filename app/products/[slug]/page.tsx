"use client";
import Image from "next/image";
import table from "../../../assets/table-deco.jpg";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
type LinkData = {
  id: string;
  name: string;
  link: string;
  details: string;
  price: number;
  image: string;
  rating: number | null;
  featured: boolean;
  available: boolean;
};

const PageProduct = () => {
  const [rating, setRating] = useState(3);
  const [qte, setQte] = useState(1);
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#082F49",
    inactiveFillColor: "#D3D3D3",
    activeStrokeColor: "#082F49",
  };
  const searchParams = useSearchParams();
  const data: LinkData = {
    id: searchParams.get("id") || "1",
    name: searchParams.get("name") || "Table deco",
    link: searchParams.get("link") || "table-deco",
    details: searchParams.get("details") || "Table deco details",
    price: Number(searchParams.get("price")) || 100,
    image: searchParams.get("image") || "",
    rating: Number(searchParams.get("rating")) || 3,
    featured: Boolean(searchParams.get("featured")) || false,
    available: Boolean(searchParams.get("available")) || true,
  };
  return (
    <div className="flex flex-col w-full max-w-[1200px] mt-20">
      <div className="flex flex-col lg:flex-row m-12 md:m-24 justify-between gap-12">
        <div className="flex flex-col gap-4">
          <div className="h-[400px] w-[280px] lg:h-[500px] lg:w-[350px] rounded-xl overflow-hidden">
            <Image
              src={data.image}
              alt="product"
              width={1000}
              height={700}
              loading="lazy"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="h-[120px] w-[85px] rounded-lg overflow-hidden active:ring-4 active:ring-sky-900/70 focus:ring-4 focus:ring-sky-900/70">
              <Image
                src={data.image}
                alt="product"
                width={239}
                height={390}
                loading="lazy"
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between tracking-wide">
          <div className="flex flex-col gap-4">
            <p className="text-3xl lg:text-5xl font-extrabold text-stone-800">
              {data.name}
            </p>
            <div className="flex w-fit">
              <p className="text-lg font-bold text-stone-500">Rating:</p>
              <Rating
                value={data.rating || 0}
                onChange={setRating}
                itemStyles={myStyles}
                className="h-6 w-6 xs:pl-6 text-sky-900"
              />
            </div>
            <p className="text-lg font-bold text-stone-500">Description:</p>
            <div className="xl:text-lg font-light text-stone-500 h-full sm:max-h-[180px] lg:max-h-[270px]  overflow-hidden text-wrap truncate">
              {data.details}.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold text-stone-500">Price</p>
              <p className="text-2xl font-bold text-stone-800">
                {data.price}DT
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold text-stone-500">Quantity</p>
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
              <button className="h-full w-full bg-transparent text-stone-500 border-2 border-stone-500/70 text-sm sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm">
                Add to cart
              </button>
              <button className="h-full w-full bg-sky-900 text-white border-2 border-white text-sm sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
