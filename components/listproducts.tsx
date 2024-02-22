import { use, useEffect, useState } from "react";
import { Product } from "./product";
import ProductLoad from "@/action/product";

type Product = {
  id: string;
  name: string;
  link: string;
  details: string;
  price: number;
  image: string;
  rating: number | null;
  featured: boolean;
  available: boolean;
  created_at: Date | null;
  updated_at: Date | null;
};

export const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductLoad().then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 h-fit xs:mx-2 w-fit gap-4 sm:gap-8 mt-10 justify-items-center">
      {products.map((product, index) => (
        <Product key={index} data={product} index={index} />
      ))}
    </div>
  );
};
