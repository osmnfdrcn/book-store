import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IBook } from "../types";

type Items = {
  id: string;
  title: string;
  image: string;
  price: number;
  stock: number;
  quantity: number;
};

interface ICart {
  items: Items[] | [];
}

const initialState: ICart = {
  items: [],
};

type CartState = {
  cart: ICart;
  addToCart: (book: IBook, quantity: number) => void;
  reset: () => void;
  updateCart: (id: string, quantity: number) => void;
};

const useCartStore = create(
  persist(
    (set) => ({
      cart: initialState,
      addToCart: (book: IBook, quantity: number) => {
        const { id, title, image, price, stock } = book;
        const cartItem = {
          id,
          title,
          image,
          price,
          quantity,
          stock,
        };

        set((state: CartState) => {
          const existingItem = state.cart.items.find((item) => item.id === id);

          if (existingItem) {
            return {
              cart: {
                items: state.cart.items.map((item) => {
                  if (item.id === id) {
                    return {
                      ...item,
                      quantity: item.quantity + quantity,
                    };
                  }
                  return item;
                }),
              },
            };
          }

          return {
            cart: {
              items: [...state.cart.items, cartItem],
            },
          };
        });
      },

      updateCart: (id: string, quantity: number) => {
        set((state: CartState) => {
          const existingItem = state.cart.items.find((item) => item.id === id);

          if (existingItem) {
            if (quantity === 0) {
              return {
                cart: {
                  items: state.cart.items.filter((item) => item.id != id),
                },
              };
            }
            return {
              cart: {
                items: state.cart.items.map((item) => {
                  if (item.id === id) {
                    return {
                      ...item,
                      quantity: quantity,
                    };
                  }
                  return item;
                }),
              },
            };
          }
        });
      },
      reset: () => {
        set(() => ({
          cart: initialState,
        }));
      },
    }),
    {
      name: "cart",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
