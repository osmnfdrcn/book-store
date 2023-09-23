"use client";
import Image from "next/image";
import Link from "next/link";
import useLastVisited from "./useLastVisited";
import Title from "@/components/common/title";

type Props = {
  id: string;
  title: string;
  image: string;
  slug: string;
};

const LastVisitedBooks = ({ id, title, image, slug }: Props) => {
  const { lastVisited } = useLastVisited({ id, title, image, slug });

  return (
    <div className="w-full mt-8">
      <Title text="SON ZIYARET EDILENLER" />
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  items-center justify-center gap-4 "
        data-testid="book-list"
      >
        {lastVisited?.map((l) => (
          <Link href={`books/${l.slug}`} key={l.id}>
            <Image src={l.image} width={100} height={165} alt={l.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastVisitedBooks;
