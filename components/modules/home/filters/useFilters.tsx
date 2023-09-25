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

type FilterVariant<T> = {
  name: string;
  setShowItem: (v: boolean) => void;
  showItem: boolean;
  data: T[];
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
    const filterKeys = ["author", "language", "genre", "publisher"];
    filterKeys.forEach((key) => {
      if (filters[key].length) {
        url += `${key}Id=${filters[key].toString()}&`;
      }
    });
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

  const createFilterVariant = <T extends { id: string; name: string }>(
    name: string,
    filterKey: keyof typeof filters, //genre, author, publisher, language
    data: T[],
    itemType: string
  ): FilterVariant<T>[] => {
    return [
      {
        name,
        setShowItem: (action: boolean) =>
          dispatch(setShowFilter({ filter: filterKey as string, action })),
        showItem: showFilters[filterKey],
        data: sortArray(data),
        itemFilter: filters[filterKey],
        onChange: (e) => handleFilterClick(e.target.value, filterKey as string),
        itemType,
      },
    ];
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

  const filtersVariants: FilterVariant<any>[] = [
    ...createFilterVariant("TUR", "genre", genres, "genreId"),
    ...createFilterVariant("YAYIMCI", "publisher", publishers, "publisherId"),
    ...createFilterVariant("YAZAR", "author", authors, "authorId"),
    ...createFilterVariant("DIL", "language", languages, "languageId"),
  ];

  const buttonVariants: ButtonVariant[] = [
    {
      id: 0,
      onClick: handleSubmit,
      text: "ARA",
      style:
        "w-full bg-rose-500 hover:bg-rose-600 transition duration-100 font-bold text-white py-1 dark:border dark:border-white",
    },
    {
      id: 1,
      onClick: handleClearFilter,
      text: "SECIMLERI TEMIZLE",
      style:
        "w-full bg-slate-800 hover:bg-slate-700 transition duration-100s font-bold text-white py-1 dark:border dark:border-white",
    },
  ];

  return { filtersVariants, buttonVariants, calculateNumberOfItems, isLoading };
};

export default useFilters;
