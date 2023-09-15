import { IBook } from "@/types";
import Image from "next/image";

type Props = { book: IBook };

const BookCard = ({ book }: Props) => {
  return (
    <div className="p-3 bg-slate-50  max-h-[300px] hover:shadow-2xl transition  ease-in-out hover:scale-105    cursor-pointer flex flex-col items-center justify-center">
      <div className="aspect-square w-[125px] h-[200px] relative overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-contain w-full"
        />
      </div>
      <div>
        <div className=" pt-5 flex flex-col  items-center justify-center">
          <p className="text-sm text-slate-600 text-center min-h-[40px]">
            {book.title}
          </p>

          {!!book.stock ? (
            <p className="text-sm text-slate-900">{book.price}TL</p>
          ) : (
            <p className="text-red-500 text-sm text-right">STOKTA YOK</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
