"use server";
import { db } from "@/lib/db";
import { CheckoutSchema } from "@/schemas";
import { product } from "@prisma/client";
import { z } from "zod";

const createOrder = async (
  data: z.infer<typeof CheckoutSchema>,
  product: product[],
  total: number,
  numberOfProducts: number,
  id_user: string,
) => {
  try {
    await db.order.create({
      data: {
        ...data,
        id_user: id_user,
        total: total,
        numberOfProducts: numberOfProducts,
        products: { connect: product.map((p) => ({ id: p.id })) },
        status: "pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    return true;
  } catch (error) {
    console.log("Error creating order", error);
    return false;
  }
};
export default createOrder;
