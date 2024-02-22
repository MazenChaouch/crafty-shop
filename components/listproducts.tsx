import { use, useEffect, useState } from "react";
import { Product } from "./product";
import ProductLoad from "@/action/product";

interface Product {
  id: string;
  name: string;
  details: string;
  price: number;
  image: string;
  featured: boolean;
  available: boolean;
  created_at: Date | null;
  updated_at: Date | null;
  link?: string;
  rating?: number | null;
}

interface ListProductsProps {
  nbItem: number;
}
export const ListProducts = ({ nbItem }: ListProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
  };

  useEffect(() => {
    ProductLoad().then((data) => {
      if (data) {
        updateProducts(data);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 h-fit xs:mx-2 w-fit gap-4 sm:gap-8 mt-10 justify-items-center">
      {nbItem === 0
        ? products.map((product, index) => (
            <Product key={index} data={product} index={index} />
          ))
        : products
            .slice(0, nbItem)
            .map((product, index) => (
              <Product key={index} data={product} index={index} />
            ))}
    </div>
  );
};
