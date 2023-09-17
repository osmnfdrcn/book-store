import { IAuthor, IBook, IGenre, ILanguage, IPublisher } from "@/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
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
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [publisherFilter, setPublisherFilter] = useState<string[]>([]);
  const [authorFilter, setAuthorFilter] = useState<string[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [showGenres, setShowGenres] = useState(true);
  const [showAuthors, setShowAuthors] = useState(false);
  const [showPublishers, setShowPublishers] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  //filter state-lerinde secilen alanin id'leri tutuluyor
  const handleFilterClick = useCallback(
    (
      value: string,
      setState: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
      setState((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [...prev, value];
        }
      });
    },
    []
  );

  const handleGenreClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterClick(e.target.value, setGenreFilter);
  };
  const handleAuthorClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterClick(e.target.value, setAuthorFilter);
  };
  const handleLanguageClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterClick(e.target.value, setLanguageFilter);
  };
  const handlePublisherClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterClick(e.target.value, setPublisherFilter);
  };

  //filter-state'erinde tutulan id'lere gore API'ye yapilacak istek guncelleniyor.
  let url = "?";
  useEffect(() => {
    !!authorFilter.length
      ? (url += `authorId=${authorFilter.toString()}&`)
      : null;
    !!languageFilter.length
      ? (url += `languageId=${languageFilter.toString()}&`)
      : null;
    !!genreFilter.length ? (url += `genreId=${genreFilter.toString()}&`) : null;
    !!publisherFilter.length
      ? (url += `publisherId=${publisherFilter.toString()}&`)
      : null;
  }, [genreFilter, authorFilter, languageFilter, publisherFilter]);

  const handleClearFilter = useCallback(() => {
    setGenreFilter([]);
    setAuthorFilter([]);
    setLanguageFilter([]);
    setPublisherFilter([]);
    router.push("/");
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    jump(1);
    router.push(url);
    setIsLoading(false);
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
      setShowItem: setShowGenres,
      showItem: showGenres,
      data: sortArray(genres),
      itemFilter: genreFilter,
      onChange: handleGenreClick,
      itemType: "genreId",
    },
    {
      name: "YAYIMCI",
      setShowItem: setShowPublishers,
      showItem: showPublishers,
      data: sortArray(publishers),
      itemFilter: publisherFilter,
      onChange: handlePublisherClick,
      itemType: "publisherId",
    },
    {
      name: "YAZAR",
      setShowItem: setShowAuthors,
      showItem: showAuthors,
      data: sortArray(authors),
      itemFilter: authorFilter,
      onChange: handleAuthorClick,
      itemType: "authorId",
    },
    {
      name: "DIL",
      setShowItem: setShowLanguages,
      showItem: showLanguages,
      data: sortArray(languages),
      itemFilter: languageFilter,
      onChange: handleLanguageClick,
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
