"use server";
import { db } from "@/lib/db";

const getOrders = async (id: string) => {
  try {
    if (id) {
      const orders = await db.order.findMany({
        where: {
          id_user: id,
        },
        include: {
          products: true,
        },
      });
      return orders;
    } else {
      return null;
    }
  } catch (error) {
    return { error: "there is an error!" };
  }
};
export default getOrders;
