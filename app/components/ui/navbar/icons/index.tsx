import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import React, { useState } from "react";
import useCartStore from "@/app/hooks/useCartStore";
import Cart from "../cart";

type Props = {
  setShowSearchBar: (v: boolean) => void;
  showSearchBar: boolean;
};

interface IState {
  state: unknown;
}
const Icons = ({ setShowSearchBar, showSearchBar }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    cart: { items },
  }: any = useCartStore();

  const numberOfCartItems = items?.reduce(
    (t: number, i: any) => (t += i.quantity),
    0
  );

  return (
    <div className="flex items-center justify-end gap-3  h-full relative ">
      {isCartOpen ? <Cart setIsCartOpen={setIsCartOpen} /> : null}

      <div className=" h-13 relative flex items-center justify-center gap-2">
        <i
          className="text-slate-600 cursor-pointer "
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <RiSearchLine size={25} />
          <div className="w-4 h-4 rounded-full flex items-center justify-center bg-red-600 text-white text-xs font-bold p-2.5 absolute -top-2.5 -right-2.5">
            {numberOfCartItems}
          </div>
        </i>
        <i
          className="text-slate-600 cursor-pointer "
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <AiOutlineShoppingCart size={25} />
          <div className="w-4 h-4 rounded-full flex items-center justify-center bg-red-600 text-white text-xs font-bold p-2.5 absolute -top-2.5 -right-2.5">
            {numberOfCartItems}
          </div>
        </i>
      </div>
    </div>
  );
};

export default Icons;
