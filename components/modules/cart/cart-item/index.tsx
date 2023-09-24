"use client";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@/components/ui/button";
import { Item, updateCart } from "@/store/slices/cartSlice";
type Props = {
  item: Item;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const handleQuantityChange = (id: string, action: "increase" | "decrease") =>
    dispatch(updateCart({ id, action }));
  return (
    <div className="flex items-center justify-between mb-2 md:mb-4">
      <div className="flex items-center justify-start gap-2 text-slate-800 dark:text-slate-300">
        <Image src={item.image} width={60} height={60} alt={item.title} />
        <div className="flex flex-col ">
          <span className="text-sm  font-semibold ">{item.title}</span>
          <span className="text-sm font-extrabold">
            {item.price * item.quantity}TL
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={() => handleQuantityChange(item.id, "decrease")}
          className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold p-2 hover:bg-slate-300 duration-100 transition"
        >
          <AiOutlineMinus size={20} />
        </Button>
        <div className="text-lg font-bold w-[20px] px-2 flex justify-center ">
          {item.quantity}
        </div>
        <Button
          disabled={item.quantity === item.stock}
          onClick={() => handleQuantityChange(item.id, "increase")}
          className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold p-2 hover:bg-slate-300 duration-100 transition"
        >
          <AiOutlinePlus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
