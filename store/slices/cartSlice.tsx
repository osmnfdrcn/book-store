import { IBook } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string;
  title: string;
  image: string;
  slug: string;
  price: number;
  stock: number;
  quantity: number;
};

type CartState = {
  showCart: boolean;
  items: Item[];
};

const initialState: CartState = {
  showCart: false,
  items: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowCart: (state: CartState, { payload }: PayloadAction<boolean>) => {
      state.showCart = payload;
    },
    addToCart: (state: CartState, { payload }: PayloadAction<Item>) => {
      console.log(payload);

      const { id } = payload;
      const isItemInCartIndex = state.items.findIndex((i) => i.id === id);
      console.log(payload);

      if (isItemInCartIndex >= 0) {
        state.items[isItemInCartIndex].quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }
    },
    updateCart: (
      state: CartState,
      { payload }: PayloadAction<{ id: string; action: string }>
    ) => {
      const { id, action } = payload;
      const itemToUpdate = state.items.filter((i) => i.id === id)[0];
      const restItems = state.items.filter((i) => i.id !== id);

      if (action === "increase") {
        if (itemToUpdate.stock > itemToUpdate.quantity) {
          itemToUpdate.quantity++;
          // itemToUpdate.stock--;
        }
        state.items = [...restItems, itemToUpdate];
      }
      if (action === "decrease") {
        itemToUpdate.quantity !== 1
          ? (itemToUpdate.quantity = itemToUpdate.quantity - 1)
          : (state.items = [...restItems]);
      }
    },
  },
});

export const { setShowCart, addToCart, updateCart } = appSlice.actions;
export default appSlice.reducer;
