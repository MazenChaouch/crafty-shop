import { Cart } from "@/components/cart";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

const PageHome = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Hero />
      <Footer />
    </>
  );
};

export default PageHome;
