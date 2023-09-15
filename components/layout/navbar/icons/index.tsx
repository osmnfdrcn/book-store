"use client";
import { setShowSearchBar } from "@/store/slices/appSlice";
import { setShowCart } from "@/store/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import CartMenu from "../cart-menu";

const Icons = () => {
  const dispatch = useAppDispatch();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);

  const handleSearchClick = () => dispatch(setShowSearchBar(true));
  const handleShowCartMenu = () => {
    dispatch(setShowCart(!showCart));
  };
  const numberOfCartItems = items?.reduce(
    (t: number, i: any) => (t += i.quantity),
    0
  );

  return (
    <div className="h-full flex items-center justify-between gap-4">
      <div
        className="text-slate-600 font-bold cursor-pointer hover:scale-110 transition"
        onClick={handleSearchClick}
      >
        <RiSearchLine size={35} />
      </div>
      <div
        className="relative text-slate-600 cursor-pointer"
        onClick={handleShowCartMenu}
      >
        <p className="rounded-full w-4 h-4 p-3 text-sm text-white bg-red-600 flex items-center justify-center absolute -top-2 -right-4 font-semibold">
          {numberOfCartItems}
        </p>
        <AiOutlineShoppingCart size={35} />
        <CartMenu />
      </div>
    </div>
  );
};

export default Icons;
