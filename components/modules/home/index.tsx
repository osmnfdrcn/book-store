"use client";
import usePagination from "@/hooks/usePagination";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "../../../types";
import NoResult from "../../common/noResult";
import BookCard from "./bookCard";
import Filters from "./filters";
import Header from "./header";

type Props = {
  books: IBook[];
};
const Home = ({ books }: Props) => {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    { data: books, itemsPerPage }
  );
  const data = currentData();

  return (
    <div className="flex flex-col  ">
      <Header
        showFilterBar={showFilterBar}
        setShowFilterBar={setShowFilterBar}
        prev={prev}
        next={next}
        maxPage={maxPage}
        currentPage={currentPage}
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
      />

      <div className="flex flex-row gap-4 ">
        <Filters books={books} showFilterBar={showFilterBar} jump={jump} />

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  gap-2 lg:gap-4 h-full ">
          {data.length ? (
            data?.map((b) => (
              <Link href={`/books/${b.slug}`} key={uuidv4()}>
                <BookCard book={b} />
              </Link>
            ))
          ) : (
            <div className="w-full col-span-5">
              {" "}
              <NoResult title="Sonuc bulunamadi!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
