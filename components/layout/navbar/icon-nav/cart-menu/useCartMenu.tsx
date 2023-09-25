import { Item, setShowCart } from "@/store/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const useCartMenu = () => {
  const router = useRouter();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);
  const dispatch = useAppDispatch();

  const handleCartClick = useCallback(() => {
    dispatch(setShowCart(false));
    router.push("cart");
  }, [dispatch, router]);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(() => {
    if (showCart) {
      dispatch(setShowCart(false));
    }
  }, [dispatch, showCart]);

  useOnClickOutside(ref, handleClickOutside);

  const total = useMemo(() => {
    return items.reduce((t: number, i: Item) => (t += i.price * i.quantity), 0);
  }, [items]);

  return { showCart, total, handleCartClick, items, ref };
};

export default useCartMenu;
