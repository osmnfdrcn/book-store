import Button from "@/components/ui/button";
import { IBook } from "@/types";
import { v4 as uuidv4 } from "uuid";
import FilterItem from "./filterItem";
import useFilters from "./useFilters";

type Props = {
  books: IBook[];
  jump: (p: number) => void;
  showFilterBar: boolean;
};

const Filters = ({ books, jump, showFilterBar }: Props) => {
  const { filtersVariants, buttonVariants, calculateNumberOfItems, isLoading } =
    useFilters(books, jump);
  return (
    <div
      className={` ${
        showFilterBar
          ? "block absolute z-10 top-[48px] lg:top-[125px] h-auto left-0 w-full lg:hidden  dark:bg-slate-800 bg-slate-100 "
          : "hidden lg:block lg:static"
      } pb-8`}
    >
      <div className="  px-4 sm:px-7  md:px-10 lg:px-0 h-full lg:w-[300px] flex flex-col ">
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
              onClick={b.onClick}
              loading={isLoading}
              disabled={isLoading}
              className={b.style}
            >
              {b.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
