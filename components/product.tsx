import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductProps {
  data: {
    id: string;
    name: string;
    link?: string;
    details: string;
    price: number;
    image: string;
    rating?: number | null;
    featured: boolean;
    available: boolean;
    created_at: Date | null;
    updated_at: Date | null;
  };
  index: number;
}
export const Product = ({ data, index }: ProductProps) => {
  const { created_at, updated_at, ...linkData } = data;
  return (
    <div className="h-full w-fit flex justify-center items-center">
      <motion.div
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1, delay: index / 12 }}
        initial={{ x: 10, opacity: 0 }}
        className=" h-[290px] w-[140px] sm:h-[400px] sm:w-[191px] md:h-[500px] md:w-[239px] bg-white items-center rounded-md"
      >
        <Link href={{ pathname: `/products/${data.link}`, query: linkData }}>
          <div className="h-[220px] w-[140px]  sm:h-[300px] sm:w-[191px] md:h-[390px] md:w-[239px] overflow-hidden border border-zinc-700/50  rounded-t-md">
            <Image
              src={data.image}
              alt={`product${index + 1}`}
              width={239}
              height={390}
              loading="lazy"
              className="object-cover h-full w-full sm:hover:scale-110 transition-transform duration-500 ease-in-out object-center overflow-hidden "
            />
          </div>
        </Link>
        <div className="flex justify-between items-end h-[70px] w-[140px] sm:h-[100px] sm:w-[191px] md:h-[110px]  md:w-[239px] bg-sky-950 z-10 p-2 rounded-b-md">
          <div className="flex flex-col h-full w-2/3 justify-between p-1 sm:p-2">
            <h1 className="text-sm sm:text-base md:text-md font-semibold text-white truncate">
              <span>{data.name}</span>
            </h1>
            <button className="text-black bg-white text-xs md:text-base font-bold px-1 py-1 rounded-md md:px-4 md:py-2">
              Buy now
            </button>
          </div>
          <div className="flex w-full h-fit items-center justify-center py-2 md:py-4 bg-transparent rounded-md">
            <p className="text-white font-semibold text-sm md:text-lg md:font-md">
              {data.price} DT
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
