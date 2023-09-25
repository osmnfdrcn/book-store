import { IBook } from "@/types";
import Image from "next/image";

const SearchResult = ({
  b,
  handleSearchResultClick,
}: {
  b: IBook;
  handleSearchResultClick: (b: IBook) => void;
}) => {
  return (
    <div
      className="flex items-center justify-between gap-2 border-1 cursor-pointer hover:bg-slate-100  w-full h-[55px] py-2 "
      key={b.id}
      onClick={() => handleSearchResultClick(b)}
    >
      <div className="flex items-center justify-start  ">
        <Image src={b?.image} width={30} height={30} alt={b?.title || b.name} />
        <p className=" text-xs md:text-sm text-slate-800 px-2">
          {b?.title || b.name}
        </p>
      </div>
      <p className=" text-xs md:text-sm text-slate-800 px-2 float-right">
        {b?.title ? b.genre?.name : "Yazar"}
      </p>
    </div>
  );
};

export default SearchResult;
