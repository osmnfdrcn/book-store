import { IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";
type Props = {
  books: IBook[];
};

const AuthorsBooks = ({ books }: Props) => {
  return (
    <div className="p-4 md:px-0  md:py-[20px] flex flex-col gap-2 items-center justify-center">
      <p className="text-lg text-slate-600 font-thin">
        YAZARIN MAGAZAMIZDAKI KITAPLARI{" "}
      </p>
      <div className="flex gap-2 items-center justify-center w-full overflow-y-scroll">
        {books.map((b: IBook) => (
          <Link href={`/books/${b.slug}`} key={b.authorId} className="flex">
            <div className="flex flex-col items-center gap-1">
              <Image src={b?.image!} width={120} height={120} alt={b.title} />
              <p className="text-xs text-slate-400">{b.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorsBooks;
