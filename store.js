import create from "zustand";
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set) => ({
    Items: {},
    category: {},

    setItems: (item) => set((state) => ({ Items: item })),
    setCategory: (categor) => set((state) => ({ category: categor })),
})));

export default useStore;