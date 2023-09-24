"use client";
import { IBook } from "@/types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCounter from "./useCounter";
import Button from "../../../ui/button";

type Props = {
  book: IBook;
};

const Counter = ({ book }: Props) => {
  const { stock, quantity, setQuantity, handleAddToCart } = useCounter(book);

  if (!stock) {
    return (
      <div className="mt-6 px-4 py-2 flex items-center justify-center text-lg text-white bg-red-600 font-bold">
        STOKTA YOK
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-6 text-sm gap-6 items-center">
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => setQuantity((q: number) => q - 1)}
          disabled={quantity === 1}
          className="w-8 h-8 rounded-full bg-slate-200 p-2 hover:bg-slate-300 duration-100 transition text-slate-800 font-bold"
        >
          <AiOutlineMinus size={18} />
        </Button>
        {quantity}
        <Button
          onClick={() => setQuantity((q: number) => q + 1)}
          disabled={quantity >= stock}
          className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold p-2 hover:bg-slate-300 duration-100 transition"
        >
          <AiOutlinePlus size={18} />
        </Button>
      </div>
      <Button
        onClick={handleAddToCart}
        className="bg-slate-800 hover:bg-slate-600 duration-100 transition  text-white px-2 py-2 text-sm font-semibold dark:border dark:border-white"
      >
        SEPETE EKLE
      </Button>
    </div>
  );
};

export default Counter;
