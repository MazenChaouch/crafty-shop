"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Rating } from "@/components/rating";
import product1 from "@/assets/product1.jpeg";
import { product } from "@prisma/client";
import cartStore from "@/store/cart";
const PageProduct = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/checkout");
  };
  const [seeMore, setSeeMore] = useState("h-36");
  const seedetails = () => {
    if (seeMore === "h-36") setSeeMore("h-fit");
    else setSeeMore("h-36");
  };
  const [qte, setQte] = useState(1);
  const { addToCart } = cartStore();
  const searchParams = useSearchParams();
  const data: product = {
    id: searchParams.get("id") || "",
    name: searchParams.get("name") || "",
    link: searchParams.get("link") || "",
    details: searchParams.get("details") || "",
    oldPrice: parseFloat(searchParams.get("oldPrice") || "0"),
    discount: parseFloat(searchParams.get("discount") || "0"),
    price: parseFloat(searchParams.get("price") || "0"),
    image: searchParams.get("image") || "",
    rating: parseInt(searchParams.get("rating") || "0"),
    featured: searchParams.get("featured") === "true",
    available: searchParams.get("available") === "true",
  };
  return (
    <div className="flex flex-col w-full max-w-[1200px] mt-20 py-10 max-md:px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="md:w-2/5 flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={product1}
              alt="product"
              loading="lazy"
              className="object-contain size-fit"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/6 rounded-lg overflow-hidden active:ring-4 active:ring-sky-900/70 focus:ring-4 focus:ring-sky-900/70">
              <Image
                src={product1}
                alt="product"
                loading="lazy"
                className="object-contain size-fit"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between tracking-wide">
          <div className="flex flex-col gap-2">
            <p className="text-3xl lg:text-5xl font-extrabold text-stone-800 mb-6">
              {data.name}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-sky-800">{data.price}DT</p>
            </div>
            <div className="flex w-fit">
              <Rating rating={data.rating || 3.5} />
            </div>
            <div className="mb-4">
              <div
                className={`xl:text-lg font-light text-stone-500 ${seeMore} sm:max-h-[180px] lg:max-h-[270px]  overflow-hidden text-wrap truncate`}
              >
                {data.details}.
              </div>
              <div
                className="text-stone-300 select-none cursor-pointer hover:text-sky-900/70"
                onClick={() => {
                  seedetails();
                }}
              >
                see more details
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col  gap-4">
              <p className="text-lg font-bold text-stone-500">Quantity</p>
              <div className="flex w-fit items-center border border-stone-500 space-x-1">
                <Icon
                  icon="ic:outline-minus"
                  className="h-6 w-6 md:w-10 md:h-10 font-thin text-red-500 border-r border-stone-500 select-none px-1 md:px-2"
                  onClick={() => {
                    if (qte > 1) setQte((prev) => prev - 1);
                  }}
                />
                <input
                  type="text"
                  value={qte}
                  className="w-6 h-full text-xl md:w-10 md:text-2xl font-bold ring-0 focus:ring-0 focus:outline-none text-center bg-transparent select-none"
                  maxLength={2}
                  min={1}
                  max={99}
                  readOnly
                />
                <Icon
                  icon="ic:outline-plus"
                  className="h-6 w-6 md:h-10 md:w-10 font-thin text-green-500 border-l border-stone-500 select-none px-1 md:px-2"
                  onClick={() => {
                    if (qte < 99) setQte((prev) => prev + 1);
                  }}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                className="group h-full w-full bg-transparent text-stone-500 border-2 border-stone-500/70 text-sm sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm hover:bg-stone-100 active:translate-y-0.5"
                onClick={() => {
                  addToCart(data, qte);
                  console.log(cartStore.getState());
                }}
              >
                Add to cart
              </button>
              <button
                className="h-full w-full bg-sky-900 text-white border-2 border-white text-sm sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-sm hover:bg-sky-950 active:translate-y-0.5"
                onClick={handleButtonClick}
              >
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
