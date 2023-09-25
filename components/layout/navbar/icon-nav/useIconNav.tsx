import { useAppDispatch, useAppSelector } from "@/store/store";
import { setShowSearchBar } from "@/store/slices/appSlice";
import { Item, setShowCart } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";
import { useMemo } from "react";

const useIconNav = () => {
  const dispatch = useAppDispatch();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);

  const handleSearchClick = () => {
    dispatch(setShowSearchBar(true));
  };

  const handleShowCartMenu = () => {
    dispatch(setShowCart(!showCart));
  };

  const numberOfCartItems = useMemo(() => {
    return items.reduce(
      (total: number, item: Item) => total + item.quantity,
      0
    );
  }, [items]);

  return {
    handleSearchClick,
    handleShowCartMenu,
    numberOfCartItems,
  };
};

export default useIconNav;
