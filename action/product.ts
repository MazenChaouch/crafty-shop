"use server";
import { db } from "@/lib/db";

const ProductLoad = async () => {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (error) {
    console.log("Error loading products", error);
    return null;
  }
};

export default ProductLoad;
