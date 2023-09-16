import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearchBar } from "@/store/slices/appSlice";
import { RootState } from "@/store/store";
import { IBook } from "@/types";
import { useDebounce } from "usehooks-ts";
import { convertStringtoSlug } from "./helpers";

const useSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { showSearchBar } = useSelector((store: RootState) => store.app);
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce<string>(searchKey, 200);
  const [books, setBooks] = useState<IBook[]>([]);

  const handleClose = () => {
    setSearchKey("");
    dispatch(setShowSearchBar(false));
  };

  const handleSearchResultClick = (book: IBook) => {
    const url = `/${book.title ? "books" : "authors"}/${book.slug}`;
    dispatch(setShowSearchBar(false));
    setSearchKey("");
    router.push(url);
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

    if (searchKey) {
      fetchData();
    }
  }, [debouncedSearchKey]);

  return {
    searchKey,
    setSearchKey,
    books,
    showSearchBar,
    handleSearchResultClick,
    handleClose,
  };
};

export default useSearch;
