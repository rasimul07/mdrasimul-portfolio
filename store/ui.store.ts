import { create } from "zustand";

interface UIState {
  activeSection: string;
  setActiveSection: (value: string) => void;
}

export const UIStore = create<UIState>()((set) => ({
  activeSection: "Home",
  setActiveSection: (value) => set({ activeSection: value }),
}));
