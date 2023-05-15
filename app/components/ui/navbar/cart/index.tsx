"use client";

import { Button } from "@/app/components/base";
import { Wrapper } from "@/app/components/layout";
import useCartStore from "@/app/hooks/useCartStore";
import { CartItem, IBook } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  setIsCartOpen: (v: boolean) => void;
};

const Cart = ({ setIsCartOpen }: Props) => {
  const router = useRouter();
  const ref = useRef(null);

  const handleClickOutside = () => setIsCartOpen(false);
  useOnClickOutside(ref, handleClickOutside);

  const { cart }: any = useCartStore();

  const total = cart.items.reduce(
    (t: number, i: IBook) => (t += i.price * i.quantity),
    0
  );
  return (
    <Wrapper>
      <div
        className="w-[280px]  xs:w-[355px]  max-h-[500px] bg-white border p-4 absolute z-40 -right-[85px] top-[35px] shadow-xl overflow-y-scroll"
        ref={ref}
      >
        <div className="w-full  mt-2 flex items-center justify-between ">
          <p className="text-md font-light text-slate-500">{total}TL</p>
          <Button
            text="SEPETE GIT"
            variant="primary"
            onClick={() => router.push("cart")}
          />
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-slate-300"></hr>
        <div className="flex flex-col justify-center gap-4  ">
          {cart.items?.map((i: CartItem) => (
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-2" key={i.id}>
                <Image src={i.image} width={30} height={30} alt={i.title} />
                <p className="text-xs text-slate-500">
                  {i.title} ({i.quantity})
                </p>
              </div>
              <p className="text-xs text-slate-500">{i.price * i.quantity}TL</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
