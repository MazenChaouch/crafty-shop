import { Product } from "@/components/product";
import { db } from "@/lib/db";

export const getProductbyId = async (id: string) => {
  try {
    const Product = await db.product.findFirst({ where: { id } });
    return Product;
  } catch {
    return null;
  }
};
export const getProducts = async () => {
  const Products = await db.product.findMany();
  return Products;
};
