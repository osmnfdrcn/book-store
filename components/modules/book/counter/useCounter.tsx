import { addToCart, setShowCart } from "@/store/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { IBook } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";

const useCounter = (book: any) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((store: RootState) => store.cart);
  const { id, title, image, slug, price, stock } = book;

  let cartQuantity = 0;
  const isInCart = items.filter((i) => i.id === id);
  isInCart.length ? (cartQuantity = isInCart[0].quantity) : 0;

  const handleAddToCart = () => {
    if (quantity + cartQuantity <= stock) {
      dispatch(addToCart({ id, title, image, slug, price, stock, quantity }));
      dispatch(setShowCart(true));
      setQuantity(1);
      toast.success("Urun sepete eklenmistir.");
    } else {
      toast.error(
        "Stok Yetersiz, lutfen kitabin stok sayisini ve bu urunun sepetteki sayisini  kontrol edin."
      );
    }
  };
  return { stock, quantity, setQuantity, handleAddToCart };
};

export default useCounter;
