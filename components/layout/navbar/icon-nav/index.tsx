"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import CartMenu from "./cart-menu";
import useIconNav from "./useIconNav";
import ThemeSwitcher from "./ThemeSwitcher";

const IconNav = () => {
  const { handleSearchClick, handleShowCartMenu, numberOfCartItems } =
    useIconNav();
  return (
    <div className="relative h-full flex items-center justify-between gap-4">
      <ThemeSwitcher />
      <div
        className="dark:text-white  text-slate-600 font-bold cursor-pointer hover:scale-110 transition"
        onClick={handleSearchClick}
      >
        <RiSearchLine size={35} />
      </div>
      <div
        className="relative dark:text-white  text-slate-600 cursor-pointer"
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

export default IconNav;
