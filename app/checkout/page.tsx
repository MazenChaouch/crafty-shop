"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSchema } from "@/schemas";
import { z } from "zod";
import useCartStore from "@/store/cart";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CartItem } from "@/components/cart-item";
import { SendMail } from "@/action/send-mail";
import { clear } from "console";

const CheckoutPage = () => {
  const form = useForm<z.infer<typeof CheckoutSchema>>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      fullname: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      phone: "",
    },
  });

  const onSubmit = (data: z.infer<typeof CheckoutSchema>) => {
    SendMail(data, total, numberOfProducts, cartProducts[0].product.price).then(
      (res) => {
        if (res) {
          alert("Email sent successfully");
          clearCart();
          form.reset();
        } else {
          alert("Email failed to send");
          clearCart();
          form.reset();
        }
      },
    );
  };

  const { handleSubmit } = form;

  const { cartProducts, numberOfProducts, total, clearCart } = useCartStore();

  return (
    <div className="container h-fit pt-16 sm:pt-20">
      <div className="flex max-md:flex-col max-md:space-y-4 md:space-x-4 w-full h-fit pt-12">
        <div className="bg-stone-100 rounded-lg p-8 md:w-2/3 w-full">
          <div className="text-4xl font-bold py-8">Payment Details</div>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Fullname<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="FullName" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="exemple@mail.tn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Address<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="address/street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-grow">
                      <FormLabel>
                        City<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-grow ml-2">
                      <FormLabel>
                        Zip<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Zip" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        <div className="bg-stone-100 rounded-lg p-8 md:w-1/3 w-full">
          <div className="text-4xl font-bold py-8">Summary</div>
          {numberOfProducts === 0
            ? ""
            : cartProducts.map((product, index) => (
                <CartItem key={index} {...product} />
              ))}
          <div className="w-full h-0.5 bg-stone-200 mt-4" />
          <div className="w-full h-fit py-4">
            <div className="flex justify-between">
              <div className="text-2xl text-stone-400">Total</div>
              <div className="text-xl font-bold">{total}DT</div>
            </div>
            <div className="flex justify-between">
              <div className="text-2xl text-stone-400">Shipping</div>
              <div className="text-xl font-bold">Free</div>
            </div>
            <div className="w-full h-0.5 bg-stone-200 my-4" />
            <div className="flex justify-between">
              <div className="text-2xl text-stone-400">Grand Total</div>
              <div className="text-xl font-bold">{total}DT</div>
            </div>
          </div>
          <Button
            className="w-full bg-sky-700 text-white hover:bg-sky-800 hover:text-white active:translate-y-0.5"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
