import { product } from "@prisma/client";
import Image from "next/image";
import product1 from "@/assets/product1.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
import cartStore from "@/store/cart";
import { Button } from "./ui/button";
interface cartProducts {
  product: product;
  quantity: number;
}
export const CartItem = ({ product, quantity }: cartProducts) => {
  const { setQuantity, deleteProduct, total } = cartStore();
  return (
    <>
      <div className="w-full h-fit flex items-center">
        <Image
          src={product1}
          alt="product"
          className="object-contain h-48 w-fit rounded-md"
        />
        <div className="flex flex-col w-full h-48 px-8 space-y-4 justify-ar">
          <div className="flex flex-col w-full ">
            <p className="text-sm md:text-xl font-bold text-stone-800">
              {product.name}
            </p>
            <p className="text-xs md:text-lg font-normal text-stone-800">
              {product.price}DT
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex w-fit h-fit items-center border border-stone-500">
              <Icon
                icon="ic:outline-minus"
                className="h-6 w-6 md:w-10 md:h-10 font-thin text-red-500 border-r border-stone-500 select-none px-1 md:px-2"
                onClick={() => {
                  if (quantity > 1) setQuantity(product.id, "downQuantity");
                }}
              />
              <input
                type="text"
                value={quantity}
                className="w-5 h-full md:w-8 md:text-xl font-bold ring-0 focus:ring-0 focus:outline-none text-center bg-transparent select-none"
                maxLength={2}
                min={1}
                max={99}
                readOnly
              />
              <Icon
                icon="ic:outline-plus"
                className="h-6 w-6 md:w-10 md:h-10 font-thin text-green-500 border-l border-stone-500 select-none px-1 md:px-2"
                onClick={() => {
                  if (quantity < 99) setQuantity(product.id, "upQuantity");
                }}
              />
            </div>
            <Button
              className="bg-red-100 w-4 h-8 text-red-500 rounded-full hover:bg-red-500 hover:text-white"
              variant={"outline"}
              onClick={() => {
                deleteProduct(product.id);
              }}
            >
              X
            </Button>
          </div>
          <div className="text-sky-800 md:text-2xl w-full h-fit">
            Total : {total}
          </div>
        </div>
      </div>
    </>
  );
};
