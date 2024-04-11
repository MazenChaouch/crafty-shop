import { useEffect, useState } from "react";
import { Product } from "./product";
import ProductLoad from "@/action/product";
import { product } from "@prisma/client";

interface ListProductsProps {
  nbItem: number;
}
export const ListProducts = ({ nbItem }: ListProductsProps) => {
  const [products, setProducts] = useState<product[]>([]);
  const updateProducts = (newProducts: product[]) => {
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
