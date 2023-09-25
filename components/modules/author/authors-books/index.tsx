import Title from "@/components/common/title";
import { IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";
type Props = {
  books: IBook[];
};

const AuthorsBooks = ({ books }: Props) => {
  return (
    <div className="p-4 md:px-0  md:py-[20px] flex flex-col gap-2 items-center justify-center">
      <Title text="YAZARIN MAGAZAMIZDAKI KITAPLARI" />

      {books.map((b: IBook) => (
        <Link href={`/books/${b.slug}`} key={b.authorId} className="flex">
          <Image
            src={b?.image!}
            width={120}
            height={120}
            alt={b.title}
            className="mx-1"
          />
        </Link>
      ))}
    </div>
  );
};

export default AuthorsBooks;
