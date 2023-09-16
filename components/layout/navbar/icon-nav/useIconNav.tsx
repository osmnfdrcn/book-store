import { useAppDispatch, useAppSelector } from "@/store/store";
import { setShowSearchBar } from "@/store/slices/appSlice";
import { setShowCart } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";

const useIconNav = () => {
  const dispatch = useAppDispatch();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);

  const handleSearchClick = () => {
    dispatch(setShowSearchBar(true));
  };

  const handleShowCartMenu = () => {
    dispatch(setShowCart(!showCart));
  };

  const numberOfCartItems = items?.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  return {
    handleSearchClick,
    handleShowCartMenu,
    numberOfCartItems,
  };
};

export default useIconNav;
