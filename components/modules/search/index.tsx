"use client";
import { setShowSearchBar } from "@/store/slices/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

const Search = () => {
  const { showSearchBar } = useAppSelector((store: RootState) => store.app);

  const [searchKey, setSearchKey] = useState("");
  const debouncedValue = useDebounce<string>(searchKey, 300);
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setSearchKey("");
    dispatch(setShowSearchBar(false));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/search?searchKey=${convertStringtoSlug(searchKey)}`
        );
        const jsonData = await response.json();
        setBooks(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    searchKey ? fetchData() : null;
  }, [debouncedValue]);

  if (!showSearchBar) {
    return null;
  }

  return (
    <div className=" w-full fixed z-[100] top-0 right-0 left-0 mx-auto inset-0 bg-gray-800 bg-opacity-90 overflow-y-auto h-full  ">
      <div className="flex flex-col items-center mt-[100px] lg:mt-[200px]  px-2">
        <div className="flex flex-col gap-4 items-center w-full md:w-2/3 lg:w-[600px] justify-center border-2 border-slate-200  bg-white rounded-lg ">
          <div className="flex items-center w-full justify-center    bg-white rounded-lg ">
            <input
              type="text"
              onChange={(e: any) => setSearchKey(e.target.value)}
              value={searchKey}
              className="px-2 py-4 rounded-lg  w-full text-sm text-slate-600 outline-none focus:border-rose-300"
              placeholder="Bir kitap ya da yazar adi giriniz..."
              autoFocus
            />
            <button className="flex items-center justify-center px-4  -ml-1 bg-white">
              <svg
                className="w-4 h-4 text-gray-800"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
          {searchKey && !!books.length ? (
            <div className=" bg-white p-2 w-full flex flex-col gap-2 border shadow-md  max-h-[400px] overflow-y-scroll">
              {books.map((b) => {
                return (
                  <Link
                    href={`/${b.title ? "books" : "authors"}/${b.slug}`}
                    key={b.id}
                  >
                    <div className="flex items-center justify-between gap-2 border-1 cursor-pointer hover:bg-slate-100  w-full h-[55px] py-2 ">
                      <div className="flex items-center justify-start  ">
                        <Image
                          src={b?.image}
                          width={30}
                          height={30}
                          alt={b?.title || b.name}
                        />
                        <p className=" text-xs md:text-sm text-slate-500 px-2">
                          {b?.title || b.name}
                        </p>
                      </div>
                      <p className=" text-xs md:text-sm text-slate-500 px-2 float-right">
                        {b?.title ? b.genre?.name : "Yazar"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <p
        className="absolute top-4 right-4 text-xl text-white font-bold cursor-pointer"
        onClick={handleClose}
      >
        {"KAPAT"}
      </p>
    </div>
  );
};

export default Search;

function convertStringtoSlug(str: string): string {
  const cleanedString = str.replace(/[^\w\s]/g, "").toLowerCase();
  const words: string[] = cleanedString.split(" ");
  const convertedStr: string = words.join("-");

  return convertedStr;
}
