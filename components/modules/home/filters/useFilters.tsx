import {
  reset,
  setFilter,
  setIsLoading,
  setShowFilter,
} from "@/store/slices/filterSlice";
import { RootState } from "@/store/store";
import { IAuthor, IBook, IGenre, ILanguage, IPublisher } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortArray, uniqueSet } from "./helpers";

type FilterVariant = {
  name: string;
  setShowItem: (v: boolean) => void;
  showItem: boolean;
  data: IGenre[] | IAuthor[] | IPublisher[] | ILanguage[];
  itemFilter: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemType: string;
};

type ButtonVariant = {
  id: number;
  onClick: () => void;
  text: string;
  style: string;
};

// genre, author, publisher ve language filtre alanlarindan herhangi birinde yapilan secimlere gore diger alanlarin guncellenmesini gerceklestiriyor.
const useFilters = (books: IBook[], jump: (v: number) => void) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showFilters, filters, isLoading } = useSelector(
    (store: RootState) => store.filter
  );

  //filter state-lerinde secilen alanin id'leri tutuluyor
  const handleFilterClick = (value: string, filter: string) => {
    dispatch(setFilter({ filter, value }));
  };

  //filter-state'erinde tutulan id'lere gore API'ye yapilacak istek
  let url = "?";
  useEffect(() => {
    !!filters.author.length
      ? (url += `authorId=${filters.author.toString()}&`)
      : null;
    !!filters.language.length
      ? (url += `languageId=${filters.language.toString()}&`)
      : null;
    !!filters.genre.length
      ? (url += `genreId=${filters.genre.toString()}&`)
      : null;
    !!filters.publisher.length
      ? (url += `publisherId=${filters.publisher.toString()}&`)
      : null;
  }, [filters]);

  const handleClearFilter = () => {
    dispatch(reset());
    router.push("/");
  };

  const handleSubmit = () => {
    dispatch(setIsLoading(true));
    jump(1);
    router.push(url);
    dispatch(setIsLoading(false));
  };

  const calculateNumberOfItems = (type: string, id: string) => {
    return books.filter((b: IBook) => b[type] == id).length;
  };

  // filtrelenecek her alan  icin unique elemanlari olan bir dizi donuluyor.
  const genres = uniqueSet(books?.map((b: { genre: IGenre }) => b.genre));
  const authors = uniqueSet(books?.map((b: { author: IAuthor }) => b.author));
  const publishers = uniqueSet(
    books?.map((b: { publisher: IPublisher }) => b.publisher)
  );
  const languages = uniqueSet(
    books?.map((b: { language: ILanguage }) => b.language)
  );

  const filtersVariants: FilterVariant[] = [
    {
      name: "TUR",
      setShowItem: (action: boolean) =>
        dispatch(setShowFilter({ filter: "genre", action })),
      showItem: showFilters.genre,
      data: sortArray(genres),
      itemFilter: filters.genre,
      onChange: (e) => handleFilterClick(e.target.value, "genre"),
      itemType: "genreId",
    },
    {
      name: "YAYIMCI",
      setShowItem: (action: boolean) =>
        dispatch(setShowFilter({ filter: "publisher", action })),
      showItem: showFilters.publisher,
      data: sortArray(publishers),
      itemFilter: filters.publisher,
      onChange: (e) => handleFilterClick(e.target.value, "publisher"),
      itemType: "publisherId",
    },
    {
      name: "YAZAR",
      setShowItem: (action: boolean) =>
        dispatch(setShowFilter({ filter: "author", action })),
      showItem: showFilters.author,
      data: sortArray(authors),
      itemFilter: filters.author,
      onChange: (e) => handleFilterClick(e.target.value, "author"),
      itemType: "authorId",
    },
    {
      name: "DIL",
      setShowItem: (action: boolean) =>
        dispatch(setShowFilter({ filter: "language", action })),
      showItem: showFilters.language,
      data: sortArray(languages),
      itemFilter: filters.language,
      onChange: (e) => handleFilterClick(e.target.value, "language"),
      itemType: "languageId",
    },
  ];

  const buttonVariants: ButtonVariant[] = [
    {
      id: 0,
      onClick: handleSubmit,
      text: "ARA",
      style:
        "w-full bg-rose-500 hover:bg-rose-600 transition duration-100 font-bold text-white py-1",
    },
    {
      id: 1,
      onClick: handleClearFilter,
      text: "SECIMLERI TEMIZLE",
      style:
        "w-full bg-slate-800 hover:bg-slate-700 transition duration-100s font-bold text-white py-1",
    },
  ];
  return { filtersVariants, buttonVariants, calculateNumberOfItems, isLoading };
};

export default useFilters;
