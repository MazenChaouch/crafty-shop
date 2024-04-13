import { create } from "zustand";

type toggleSidebarState = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};
const useToggleSidebare = create<toggleSidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
export default useToggleSidebare;
