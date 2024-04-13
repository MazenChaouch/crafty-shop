"use client";
import getOrders from "@/action/order/get-order";
import { Order } from "@/components/order";
import useLocalStorage from "@/hooks/useLocalstorage";
import { order, product } from "@prisma/client";
import { useEffect, useState } from "react";
type Order = order & { products: product[] };
const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [id, setId] = useLocalStorage("id", "");
  useEffect(() => {
    if (!id) return;
    getOrders(id).then((data) => {
      if (data && Array.isArray(data)) {
        setOrders(data);
      }
    });
  }, [id]);
  return (
    <div className="my-auto h-full pt-28 md:py-48">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Orders
        </h2>
        <div className="flex flex-col justify-center items-center space-y-4">
          {orders &&
            orders.map((orderitem, index) => (
              <Order key={index} {...orderitem} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
