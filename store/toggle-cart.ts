import { create } from "zustand";

type toggleCartState = {
  isCartOpen: boolean;
  toggleCart: () => void;
};
const useToggleCartStore = create<toggleCartState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
export default useToggleCartStore;
