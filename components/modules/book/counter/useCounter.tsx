import { addToCart, setShowCart } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/store";
import { IBook } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";

const useCounter = (book: IBook) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { id, title, image, slug, price, stock } = book;
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, image, slug, price, stock, quantity }));
    dispatch(setShowCart(true));
    toast.success("Urun sepete eklenmistir.");
  };
  return { stock, quantity, setQuantity, handleAddToCart };
};

export default useCounter;
