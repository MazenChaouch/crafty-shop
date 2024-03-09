import { product } from "@prisma/client";
import { create } from "zustand";

type CartItem = {
  product: product;
  quantity: number;
  price: number;
};
interface CartState {
  CartItems: CartItem[];
  CartItem: CartItem;
  total: number;
  addItem: (CartItem: CartItem) => void;
  removeItem: (CartItem: CartItem) => void;
  clearCart: () => void;
}
const getCartItems = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
const setCartItems = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const initialState: CartState = {
  CartItems: [],
  CartItem: {
    quantity: 0,
    price: 0,
    product: {
      id: "",
      name: "",
      link: "",
      details: "",
      price: 0,
      image: "",
      rating: null,
      featured: false,
      available: false,
      created_at: null,
      updated_at: null,
    },
  },
  total: 0,
  addItem: (CartItem: CartItem) => {},
  removeItem: (CartItem: CartItem) => {},
  clearCart: () => {},
};
export const useCartStore = create<CartState>((set) => ({
  ...initialState,
  CartItems: getCartItems(),
  addItem: (CartItem: CartItem) => {
    const cart = getCartItems();
    const existingItem = cart.find(
      (item: CartItem) => item.product.id === CartItem.product.id,
    );
    if (existingItem) {
      existingItem.quantity += CartItem.quantity;
    } else {
      cart.push(CartItem);
    }
    setCartItems(cart);
    set({ CartItems: cart });
  },
  removeItem: (CartItem: CartItem) => {
    const cart = getCartItems();
    const existingItem = cart.find(
      (item: CartItem) => item.product.id === CartItem.product.id,
    );
    if (existingItem) {
      existingItem.quantity -= CartItem.quantity;
      if (existingItem.quantity <= 0) {
        cart.splice(cart.indexOf(existingItem), 1);
      }
    }
    setCartItems(cart);
    set({ CartItems: cart });
  },
  clearCart: () => {
    setCartItems([]);
    set({ CartItems: [] });
  },
}));
