"use client";
import { IBook } from "@/types";
import useSearch from "./useSearch";
import SearchResult from "./search-result";
import SearchInput from "./search-input";

const Search = () => {
  const {
    searchKey,
    setSearchKey,
    books,
    showSearchBar,
    handleSearchResultClick,
    handleClose,
  } = useSearch();

  if (!showSearchBar) {
    return null;
  }
  return (
    <div className=" w-full fixed z-[100] top-0 right-0 left-0 mx-auto inset-0 bg-gray-800 bg-opacity-90 overflow-y-auto h-full  ">
      <div className="flex flex-col items-center mt-[100px] lg:mt-[200px]  px-2">
        <div className="flex flex-col gap-4 items-center w-full md:w-2/3 lg:w-[600px] justify-center border-2 border-slate-200  bg-white rounded-lg ">
          <SearchInput searchKey={searchKey} setSearchKey={setSearchKey} />
          {searchKey && !!books.length ? (
            <div className=" bg-white p-2 w-full flex flex-col gap-2 border shadow-md  max-h-[400px] overflow-y-scroll">
              {books.map((b: IBook) => {
                return (
                  <SearchResult
                    key={b.id}
                    b={b}
                    handleSearchResultClick={handleSearchResultClick}
                  />
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
