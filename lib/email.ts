import { CheckoutSchema } from "@/schemas";
import { Resend } from "resend";
import { z } from "zod";

console.log("API KEY", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export const EmailSend = async (
  data: z.infer<typeof CheckoutSchema>,
  total: number,
  numberOfProducts: number,
  unitPrice: number,
) => {
  console.log("Sending email");
  const email = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Crafty Shop</title>
</head>
<body>
  <h1>Thank you for your order, ${data.fullname}!</h1>
  <p>We've received your order with Crafty Shop and are now processing it.</p>

  <h2>Order Details:</h2>
  <table border="0" cellspacing="0" cellpadding="5">
    <tr>
      <th>Order Number</th>
      <td>(You can include this if you have one)</td>
    </tr>
    <tr>
      <th>Billing Information</th>
      <td></td>
    </tr>
    <tr>
      <td>Name</td>
      <td>${data.fullname}</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>${data.phone}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>${data.email}</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>${data.address}</td>
    </tr>
    <tr>
      <td>City</td>
      <td>${data.city}</td>
    </tr>
    <tr>
      <td>Zip Code</td>
      <td>${data.zip}</td>
    </tr>
  </table>

  <h2>Order Summary:</h2>
  <table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Floating Table</td>
      <td>${numberOfProducts}</td>
      <td>${unitPrice}</td>
    </tr>
    <tr>
      <td>Shipping</td>
      <td>1</td>
      <td>Free</td>
    </tr>
    <tr>
      <td>Total</td>
      <td></td>
      <td>${total}</td>
    </tr>
  </table>
  <p>The Crafty Shop Team</p>

  <p>P.S. Be sure to add Crafty Shop to your address book to ensure you receive future emails from us.</p>
</body>
</html>`;
  await resend.batch.send([
    {
      from: "CraftyShop <onboarding@resend.dev>",
      to: ["crafty.shop00@gmail.com"],
      subject: "hello world",
      html: email,
    },
  ]);
  await resend.batch.send([
    {
      from: "CraftyShop <onboarding@resend.dev>",
      to: ["m.chaouch007@gmail.com"],
      subject: "hello world",
      html: email,
    },
  ]);
  console.log("Email sent");
};
