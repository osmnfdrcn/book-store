"use client";

import Button from "@/components/ui/button";
import { CartItem } from "@/types";
import Image from "next/image";
import useCartMenu from "./useCartMenu";

const CartMenu = () => {
  const { showCart, total, handleCartClick, items, ref } = useCartMenu();
  if (!showCart) {
    return null;
  }
  return (
    <div className="w-[280px]  xs:w-[355px]  max-h-[550px] bg-slate-100 border p-4 absolute z-50 right-0 top-[63px]  overflow-y-scroll">
      <div
        className="w-full  mt-2 flex items-center justify-between "
        ref={ref}
      >
        <p className="text-lg font-bold text-slate-700">{total} TL</p>
        <Button
          className="bg-slate-800 hover:bg-slate-600 duration-100 transition  text-white px-2 py-1 text-sm font-semibold"
          variant="primary"
          onClick={handleCartClick}
          disabled={!items.length}
        >
          SEPETE GIT
        </Button>
      </div>
      <hr className="h-px my-4 bg-gray-200  dark:bg-slate-300"></hr>
      <div className="flex flex-col justify-center gap-6  ">
        {items?.map((i: CartItem) => (
          <div className="flex justify-between items-center gap-4" key={i.id}>
            <div className="flex items-center gap-2">
              <Image src={i.image} width={30} height={30} alt={i.title} />
              <p className="text-sm text-slate-700 font-semibold">
                {i.title} ({i.quantity})
              </p>
            </div>
            <p className="text-sm text-slate-700 font-semibold">
              {i.price * i.quantity}TL
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartMenu;
