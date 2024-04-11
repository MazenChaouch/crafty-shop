import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rating } from "./rating";
import product1 from "../assets/product1.jpeg";
interface ProductProps {
  product: {
    id: string;
    name: string;
    link?: string;
    details: string;
    oldPrice?: number;
    discount?: number;
    price: number;
    image: string;
    rating?: number;
    featured: boolean;
    available: boolean;
  };
  index: number;
}
export const Product = ({ product, index }: ProductProps) => {
  const { ...linkData } = product;
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      initial={{ y: 30, opacity: 0 }}
      className="h-fit w-fit space-y-2 group group-hover:scale-95"
    >
      <Link href={{ pathname: `products/${product.link}`, query: product }}>
        <div className="rounded-xl bg-stone-200 p-2">
          <Image
            src={product1}
            alt={product.name}
            className="size-fit max-h-96 object-contain duration-500 ease-in-out scale-100 group-hover:scale-105 rounded-xl"
          />
        </div>
      </Link>
      <div className="font-Satoshi text-lg font-bold md:text-xl">
        {product.name}
      </div>
      {product.rating != null && <Rating rating={product.rating} />}
      <div className="flex h-fit w-full space-x-1 lg:space-x-2">
        <div className="font-Satoshi text-sm font-bold md:text-xl text-sky-800">
          {product.price} DT
        </div>
        {product.oldPrice && (
          <div className="font-Satoshi text-sm font-bold text-stone-500 line-through md:text-xl">
            {product.oldPrice} DT
          </div>
        )}
        {product.discount && (
          <div className="g:py-1 rounded-xl bg-red-100 px-2 py-0.5 font-Satoshi font-medium text-red-500 max-lg:text-sm lg:rounded-3xl lg:px-3">
            -{product.discount}%
          </div>
        )}
      </div>
    </motion.div>
  );
};
