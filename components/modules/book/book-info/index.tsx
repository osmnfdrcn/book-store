import { IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: IBook;
  children: React.ReactNode;
};

const BookInfo = ({ children, book }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start  w-full sm:w-2/3 mx-auto mt-[45px] pt-2 gap-4">
        <div className="relative aspect-square w-full h-[350px]   overflow-hidden">
          <Image
            src={book?.image!}
            fill
            alt={book?.title!}
            className="object-contain w-full"
          />
        </div>
        <div className=" flex justify-between  w-full">
          <div className=" flex flex-col items-center px-4">
            <p className="text-xl text-slate-800 font-semibold">
              {book?.title} /{" "}
              <Link
                href={`/authors/${book?.author.slug}`}
                className={
                  "underline underline-offset-4 decoration-red-400 decoration-4"
                }
              >
                {book?.author.name}
              </Link>
            </p>
            <p className="text-md text-slate-600 mb-2 ">
              {book?.publisher.name} / {book?.genre.name}
            </p>
            <p className="text-2xl text-slate-800 font-bold mb-2 ">
              {book?.price}TL / {book.stock} adet kaldi
            </p>
            <p className="text-md text-slate-500 font-light text-justify">
              {book?.description}
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default BookInfo;
