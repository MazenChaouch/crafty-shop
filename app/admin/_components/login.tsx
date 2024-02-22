"use client";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import { FormError } from "./form-error";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<Zod.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: Zod.infer<typeof LoginSchema>) => {
    console.log(data);
    setError("");

    startTransition(() => {
      login(data)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }
        })
        .catch((err) => setError("Something went wrong!"));
    });
  };
  return (
    <div className="w-[500px] h-full pt-28 items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field, formState: { errors } }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name} className="font-bold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  {errors[field.name] && <FormMessage />}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, formState: { errors } }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name} className="font-bold ">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  {errors[field.name] && <FormMessage />}
                </FormItem>
              )}
            />
            <FormError message={error} />

            <Button
              type="submit"
              variant={"secondary"}
              disabled={isPending}
              className="w-full"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
