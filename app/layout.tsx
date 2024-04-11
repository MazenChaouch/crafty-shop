import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Navbar } from "@/components/navbar";
import { Cart } from "@/components/cart";
import { Footer } from "@/components/footer";
const font = Poppins({ weight: "300", subsets: ["latin"], display: "swap" });
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
      <body className={`no-scrollbar  ${font.className} `}>
        <EdgeStoreProvider>
          <Navbar />
          <Cart />
          {children}
          <Footer />
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
