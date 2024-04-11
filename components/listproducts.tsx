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
    <div className="container p-4">
      <div className="flex flex-wrap md:justify-between justify-around gap-8 p-8">
        {nbItem === 0
          ? products.map((product, index) => (
              <Product key={index} product={product} index={index} />
            ))
          : products
              .slice(0, nbItem)
              .map((product, index) => (
                <Product key={index} product={product} index={index} />
              ))}
      </div>
    </div>
  );
};
