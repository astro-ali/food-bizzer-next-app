import create from "zustand";

export const useStore = create((set) => ({
    Items: null,

    setItems: (fetchedItems) => set({ Items: fetchedItems }),
}));

