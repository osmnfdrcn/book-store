import { BsFilterLeft } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "@/components/ui/button";
type Props = {
  showFilterBar: boolean;
  setShowFilterBar: (s: boolean) => void;
  prev: () => void;
  next: () => void;
  maxPage: number;
  currentPage: number;
  setItemsPerPage: (v: number) => void;
  itemsPerPage: number;
};

const Header = ({
  showFilterBar,
  setShowFilterBar,
  prev,
  next,
  maxPage,
  currentPage,
  setItemsPerPage,
  itemsPerPage,
}: Props) => {
  return (
    <div className="font-semibold  flex gap-2 items-center justify-between w-full">
      <div
        className="flex gap-2 items-center cursor-pointer w-[1/3]"
        onClick={() => setShowFilterBar(!showFilterBar)}
      >
        <BsFilterLeft size={30} />{" "}
        <span className="font-light text-xs">FILTRELER</span>
      </div>
      <div className="flex gap-2 w-[1/4] items-center ">
        <div className="flex gap-2 items-center ">
          <select
            className="p-1 border text-sm text-slate-500"
            name="books"
            id="books"
            onChange={(e: any) => setItemsPerPage(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex gap-1  items-center">
          <Button
            onClick={() => prev()}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold p-2 hover:bg-slate-300 duration-100 transition"
          >
            <GrPrevious />
          </Button>

          <span className="text-xs font-light ">
            {currentPage} / {maxPage}
          </span>
          <Button
            onClick={() => next()}
            disabled={currentPage === maxPage}
            className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold p-2 hover:bg-slate-300 duration-100 transition"
          >
            <GrNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
