import { setShowCart } from "@/store/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const useCartMenu = () => {
  const router = useRouter();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);
  const dispatch = useAppDispatch();

  const handleCartClick = () => {
    dispatch(setShowCart(false));
    router.push("cart");
  };

  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = () => {
    if (showCart) {
      dispatch(setShowCart(false));
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  const total = items.reduce(
    (t: number, i: any) => (t += i.price * i.quantity),
    0
  );

  return { showCart, total, handleCartClick, items, ref };
};

export default useCartMenu;
