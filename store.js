import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    Items: {},
    category: {},
    orderItems: [],

    setItems: (item) => set((state) => ({ Items: item })),
    setCategory: (categor) => set((state) => ({ category: categor })),
    addOrderItem: (item) =>
      set((state) => ({ orderItems: [...state.orderItems, item] })),
    emptyOrderItems: () => set((state) => ({ orderItems: [] })),
  }))
);

export default useStore;
