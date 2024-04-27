import { create } from "zustand";

const useStore = create((set) => ({
  event: 0,
  setEvent: (event: number) => set({ event }),
}));

export { useStore };
