"use client";
import { Button } from "@/app/components/base";
import { NoResult, Title } from "@/app/components/ui";
import useCartStore from "@/app/hooks/useCartStore";
import { IBook } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Cookies from "universal-cookie";

type Props = {
  book: IBook;
};
type LastVisited = { id: string; title: string; image: string; slug: string };

const ClientWrapper = ({ book }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [lastVisited, setLastVisited] = useState<LastVisited[]>([]);
  const { addToCart }: any = useCartStore();
  const router = useRouter();
  const cookies = new Cookies();

  if (!book) {
    return <NoResult title="Aradiginiz sayfa bulunamadi." />;
  }

  const { id, title, image, slug } = book;
  useEffect(() => {
    const lastVisited = cookies
      .get("lastVisited")
      ?.filter((b: LastVisited) => b.id !== id);

    let expires = new Date();
    // One week after every update
    expires.setTime(expires.getTime() + 86400 * 1000);

    if (!!lastVisited && lastVisited.length > 0) {
      cookies.set("lastVisited", [{ id, title, image, slug }, ...lastVisited], {
        path: "/",
        expires,
      });
    } else {
      cookies.set("lastVisited", [{ id, title, image, slug }], {
        path: "/",
        expires,
      });
    }

    setLastVisited(lastVisited);
  }, []);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    toast.success("Urun sepete eklenmistir.");
    setTimeout(() => router.push("cart"), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-start  w-full sm:w-2/3 mx-auto mt-[45px] pt-2 gap-2">
      <div className="aspect-square w-full h-[250px]  relative overflow-hidden">
        <Image
          src={book?.image!}
          fill
          alt={book?.title!}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex justify-between  w-full">
        <div className=" flex flex-col items-center px-4">
          <p className="text-md text-slate-500 font-light">
            {book?.title} /{" "}
            <Link
              href={`/authors/${book?.author.slug}`}
              className={"underline "}
            >
              {book?.author.name}
            </Link>
          </p>
          <p className="text-md text-slate-400 mb-2">
            {book?.publisher.name} / {book?.genre.name}
          </p>
          <p className="text-xl text-slate-600 mb-2">{book?.price}TL</p>
          <p className="text-sm text-slate-500 font-extralight text-justify">
            {book?.description}
          </p>
        </div>
      </div>
      {!!book.stock ? (
        <div className="mt-6 text-sm flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Button
              variant="rounded"
              icon={AiOutlineMinus}
              onClick={() => setQuantity((q) => q - 1)}
              disabled={quantity === 1}
            />
            {quantity}
            <Button
              variant="rounded"
              icon={AiOutlinePlus}
              onClick={() => setQuantity((q) => q + 1)}
              disabled={quantity >= book.stock}
            />
          </div>
          <Button
            variant="primary"
            text="SEPETE EKLE"
            onClick={handleAddToCart}
          />
        </div>
      ) : (
        <p className="mt-6 text-sm text-red-600">STOKTA YOK</p>
      )}
      <div className="flex justify-center items-center flex-wrap mt-8 w-full">
        <Title text="SON ZIYARET EDILENLER" />
        <div className="flex flex-wrap items-center justify-center gap-2 ">
          {lastVisited?.map((l) => (
            <Link href={`books/${l.slug}`}>
              <Image src={l.image} width={100} height={165} alt={l.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientWrapper;
