import * as z from "zod";

export const CheckoutSchema = z.object({
  fullname: z.string().min(1, {
    message: "Fullname is required",
  }),
  email: z.optional(z.string().email()),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  zip: z.optional(
    z
      .string()
      .min(1, {
        message: "Zip is required",
      })
      .max(4, {
        message: "Zip must be 4 digits",
      }),
  ),
  phone: z
    .string()
    .min(1, {
      message: "Phone is required",
    })
    .max(8, {
      message: "Phone must be 8 digits",
    }),
});
