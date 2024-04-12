"use server";
import { EmailSend } from "@/lib/email";
import { CheckoutSchema } from "@/schemas";
import { z } from "zod";

export const SendMail = async (
  data: z.infer<typeof CheckoutSchema>,
  total: number,
  numberOfProducts: number,
  unitPrice: number,
) => {
  try {
    await EmailSend(data, total, numberOfProducts, unitPrice);
    return true;
  } catch (error) {
    console.log("Error sending email", error);
    return false;
  }
};
