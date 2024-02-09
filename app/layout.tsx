import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "@smastrom/react-rating/style.css";
import { Cart } from "@/components/cart";
const font = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Crafty Shop",
  description: "A shop for crafty people",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`no-scrollbar ${font.className} `}>
        <Navbar />
        <Cart />
        <main className="flex items-center justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
