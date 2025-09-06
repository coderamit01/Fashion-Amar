import { create } from "zustand";


export const sidebar = create((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({isSidebarOpen: true}),
  closeSidebar: () => set({isSidebarOpen: false}),
  toggleSidebar: () => set((state) => ({isSidebarOpen: !state.isSidebarOpen})),
}))