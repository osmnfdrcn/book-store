import { IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = { book: IBook };

const BookCard = ({ book }: Props) => {
  return (
    <div className="relative  h-auto transition duration-200 bg-slate-100 pt-4 brightness-100 hover:brightness-95 hover:scale-105  flex flex-col shadow-sm items-center justify-center dark:bg-slate-800">
      <div className="relative bg-no-repeat bg-center h-[200px] w-[150px] md:h-[200px] cursor-pointer transition delay-100 ">
        <Image src={book.image} alt={book.title} fill />
      </div>

      <div className="flex flex-col justify-between  items-center gap-1 py-4 px-2 h-[90px]">
        <p className="text-sm font-semibold text-center ">{book.title}</p>
        {!!book.stock ? (
          <p className="text-sm text-slate-900 dark:text-white ">
            {book.price}TL
          </p>
        ) : (
          <p className="text-red-500 text-sm text-right">STOKTA YOK</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
