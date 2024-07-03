import { create } from "zustand";

type CheckoutStore = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => set({ isVisible }),
}));
