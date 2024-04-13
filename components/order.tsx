import { order, product } from "@prisma/client";
import Image from "next/image";
import product1 from "@/assets/product1.jpeg";
type Order = order & { products: product[] };

export const Order = (order: Order) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-sky-700 w-full">
      <div className="flex max-md:flex-col justify-between items-center w-full space-y-2">
        <div className="w-full md:w-1/12 rounded-lg overflow-hidden active:ring-4 active:ring-sky-800 focus:ring-4 focus:ring-sky-800">
          <Image
            src={product1}
            alt="product"
            loading="lazy"
            className="object-contain size-fit"
          />
        </div>
        <div className="flex max-md:flex-col justify-between w-full md:w-10/12">
          <div className="text-2xl font-extrabold text-gray-800">
            {order.products[0].name}
          </div>

          <div className="flex-col space-y-2 my-2">
            <div className="flex space-x-2">
              <div className="text-gray-500">Order Date:</div>
              <div className="text-gray-800">
                {new Date(order.created_at).toLocaleDateString()}
              </div>
            </div>
            {order.status !== "shipped" && order.status !== "canceled" && (
              <div className="flex space-x-2 items-center">
                <div className="text-gray-500">Shipping estimation:</div>
                <div className="text-gray-800">
                  {new Date(
                    new Date(order.created_at).getTime() +
                      3 * 24 * 60 * 60 * 1000,
                  ).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>

          <div className="flex-col justify-between space-y-1 md:space-y-4">
            <div className="text-lg font-bold text-sky-800">
              <span className="text-gray-400 font-normal">Unit Price:</span>{" "}
              {order.products[0].price} Dt
            </div>
            <div className="text-lg font-bold text-gray-800">
              <span className="text-gray-400 font-normal">
                {order.numberOfProducts > 1 ? "products:" : "product:"}
              </span>{" "}
              {order.numberOfProducts}
            </div>
            <div className="text-lg font-bold text-gray-800">
              <span className="text-gray-400 font-normal">Total:</span>{" "}
              {order.total} Dt
            </div>
          </div>

          <div>
            <div
              className={`text-lg text-center font-bold rounded-full px-4 text-white ${
                order.status === "pending"
                  ? "bg-yellow-500"
                  : order.status === "shipping"
                  ? "bg-sky-800 "
                  : order.status === "canceled"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {order.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
