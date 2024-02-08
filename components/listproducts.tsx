import { Product } from "./product";

interface ListProductsProps {
  nbItem: number;
}

export const ListProducts = ({ nbItem }: ListProductsProps) => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 h-fit xs:mx-2 w-fit gap-4 sm:gap-8 mt-10 justify-items-center">
      {[...Array(nbItem)].map((_, i) => (
        <Product key={i} i={i} />
      ))}
    </div>
  );
};
