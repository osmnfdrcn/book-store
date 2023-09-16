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
          variant="rounded"
          icon={AiOutlineMinus}
          onClick={() => setQuantity((q: number) => q - 1)}
          disabled={quantity === 1}
        />
        {quantity}
        <Button
          variant="rounded"
          icon={AiOutlinePlus}
          onClick={() => setQuantity((q: number) => q + 1)}
          disabled={quantity >= stock}
        />
      </div>
      <Button variant="primary" text="SEPETE EKLE" onClick={handleAddToCart} />
    </div>
  );
};

export default Counter;
