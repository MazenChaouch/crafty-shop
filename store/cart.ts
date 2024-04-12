import { product } from "@prisma/client";
import { create } from "zustand";

type cartProducts = {
  product: product;
  quantity: number;
};

type cartState = {
  cartProducts: cartProducts[];
  numberOfProducts: number;
  total: number;
  addToCart: (item: product, quantity: number) => void;
  setQuantity: (id: string, action: string) => void;
  deleteProduct: (id: string) => void;
  clearCart: () => void;
};

const cartStore = create<cartState>((set) => ({
  cartProducts: [],
  numberOfProducts: 0,
  total: 0,
  addToCart: (item: product, quantity: number) =>
    set((state) => {
      const index = state.cartProducts.findIndex(
        (product) => product.product.id === item.id,
      );
      if (index === -1) {
        const newCartProducts = [
          ...state.cartProducts,
          { product: item, quantity: quantity },
        ];
        const newNumberOfProducts = state.numberOfProducts + quantity;
        const newTotal = state.total + item.price * quantity;
        return {
          cartProducts: newCartProducts,
          numberOfProducts: newNumberOfProducts,
          total: newTotal,
        };
      }
      const updatedCartProducts = [...state.cartProducts];
      updatedCartProducts[index].quantity += quantity;
      const newNumberOfProducts = state.numberOfProducts + quantity;
      const newTotal = state.total + item.price * quantity;
      return {
        cartProducts: updatedCartProducts,
        numberOfProducts: newNumberOfProducts,
        total: newTotal,
      };
    }),
  setQuantity: (id: string, action: string) =>
    set((state) => {
      const index = state.cartProducts.findIndex(
        (product) => product.product.id === id,
      );
      if (index === -1) return state;
      const updatedCartProducts = [...state.cartProducts];
      if (action === "upQuantity") {
        updatedCartProducts[index].quantity += 1;
        return {
          ...state,
          cartProducts: updatedCartProducts,
          total: state.total + updatedCartProducts[index].product.price,
          numberOfProducts: state.numberOfProducts + 1,
        };
      } else if (action === "downQuantity") {
        updatedCartProducts[index].quantity -= 1;

        return {
          ...state,
          cartProducts: updatedCartProducts,
          total: state.total - updatedCartProducts[index].product.price,
          numberOfProducts: state.numberOfProducts - 1,
        };
      }

      return {
        ...state,
        cartProducts: updatedCartProducts,
      };
    }),
  deleteProduct: (id: string) =>
    set((state) => {
      const index = state.cartProducts.findIndex(
        (product) => product.product.id === id,
      );
      if (index === -1) return state;
      const updatedCartProducts = state.cartProducts.filter(
        (product) => product.product.id !== id,
      );
      const newNumberOfProducts =
        state.numberOfProducts - state.cartProducts[index].quantity;
      const newTotal =
        state.total -
        state.cartProducts[index].product.price *
          state.cartProducts[index].quantity;
      return {
        cartProducts: updatedCartProducts,
        numberOfProducts: newNumberOfProducts,
        total: newTotal,
      };
    }),
  clearCart: () =>
    set(() => ({
      cartProducts: [],
      numberOfProducts: 0,
      total: 0,
    })),
}));
export default cartStore;
