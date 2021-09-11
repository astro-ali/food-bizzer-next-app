import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({

    orderItems: [],

    addOrderItem: (item) => set((state) => {
      let newItems = state.orderItems;
      for(const newItem of newItems){
        if(newItem.itemName == item.itemName && newItems.length > 0){
          newItem.amount = newItem.amount + item.amount;
          return { orderItems: newItems};
        }
      }
      return { orderItems: [...state.orderItems,item] };
    }),
    emptyOrderItems: () => set((state) => ({ orderItems: [] })),
    deleteOrderItem: (index) => set((state) => {
      let items = state.orderItems;
      items.splice(index,1);
      return { orderItems: items };
    })
  }))
);
  
export default useStore;
 