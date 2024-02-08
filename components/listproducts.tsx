import { Product } from "./product";

interface ListProductsProps {
  nbItem: number;
}

export const ListProducts = ({ nbItem }: ListProductsProps) => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit mx-8 w-fit gap-12 mt-10 justify-items-center">
      {[...Array(nbItem)].map((_, i) => (
        <Product key={i} i={i} />
      ))}
    </div>
  );
};
