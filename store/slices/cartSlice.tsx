import { IBook } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Item = {
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state: CartState, { payload }: PayloadAction<boolean>) => {
      state.showCart = payload;
    },
    addToCart: (state: CartState, { payload }: PayloadAction<Item>) => {
      const { id } = payload;
      const isItemInCartIndex = state.items.findIndex((i) => i.id === id);

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
      const index = state.items.findIndex((i) => i.id === id);

      const itemToUpdate = state.items.filter((i) => i.id === id)[0];
      const restItems = state.items.filter((i) => i.id !== id);

      if (action === "increase") {
        if (itemToUpdate.stock > itemToUpdate.quantity) {
          itemToUpdate.quantity++;
          // itemToUpdate.stock--;
        }
        restItems.splice(index, 0, itemToUpdate);
        state.items = [...restItems];
      }
      if (action === "decrease") {
        itemToUpdate.quantity !== 1
          ? (itemToUpdate.quantity = itemToUpdate.quantity - 1)
          : (state.items = [...restItems]);
      }
    },
    reset: (state: CartState) => (state = initialState),
  },
});

export const { setShowCart, addToCart, updateCart, reset } = cartSlice.actions;
export default cartSlice.reducer;
