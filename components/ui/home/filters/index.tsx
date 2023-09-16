import { Button } from "@/components/base";
import { IAuthor, IBook, IGenre, ILanguage, IPublisher } from "@/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterItem from "../filterItem";

type Props = {
  books: IBook[];
  jump: (p: number) => void;
  showFilterBar: boolean;
};

const Filters = ({ books, jump, showFilterBar }: Props) => {
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

  const uniqueSet = <T extends unknown>(arr: T[] = []) =>
    Array.from(new Set(arr?.map((item: T) => JSON.stringify(item)))).map(
      (item) => JSON.parse(item)
    );

  const genres = uniqueSet(books?.map((b: { genre: IGenre }) => b.genre));
  const authors = uniqueSet(books?.map((b: { author: IAuthor }) => b.author));
  const publishers = uniqueSet(
    books?.map((b: { publisher: IPublisher }) => b.publisher)
  );
  const languages = uniqueSet(
    books?.map((b: { language: ILanguage }) => b.language)
  );

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

  const sortArray = <T extends { name: string }>(arr: T[]): T[] => {
    return arr.sort((a: T, b: T) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  };

  const filtersVariants = [
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

  const buttonVariants = [
    { id: 0, variant: "primary", onClick: handleSubmit, text: "ARA" },
    {
      id: 1,
      variant: "secondary",
      onClick: handleClearFilter,
      text: "SECIMLERI TEMIZLE",
    },
  ];

  return (
    <div
      className={` ${
        showFilterBar
          ? "block absolute z-10 top-[48px] lg:top-[125px] h-auto left-0 w-full lg:hidden bg-white "
          : "hidden lg:block lg:static"
      } pb-8`}
    >
      <div className="  px-4 sm:px-7  md:px-10 lg:px-0 h-full lg:w-[300px] flex flex-col gap-1">
        {filtersVariants.map((v) => (
          <FilterItem
            key={uuidv4()}
            itemType={v.itemType}
            name={v.name}
            showItem={v.showItem}
            setShowItem={v.setShowItem}
            data={v.data}
            itemFilter={v.itemFilter}
            onChange={v.onChange}
            calculateNumberOfItems={calculateNumberOfItems}
          />
        ))}
        <div className="flex flex-col gap-2 mt-2">
          {buttonVariants.map((b) => (
            <Button
              key={b.id}
              variant={b.variant}
              onClick={b.onClick}
              text={b.text}
              disabled={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
