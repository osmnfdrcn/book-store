import { IGenre } from "@/types";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

type Props = {
  itemType: string;
  name: string;
  setShowItem: (state: boolean) => void;
  showItem: boolean;
  data: IGenre[];
  itemFilter: string[];
  onChange: any;
  calculateNumberOfItems: (type: string, id: string) => number;
};

const FilterItem = ({
  itemType,
  name,
  setShowItem,
  showItem,
  data,
  itemFilter,
  onChange,
  calculateNumberOfItems,
}: Props) => {
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-slate-800  max-h-[300px]">
      <div
        className="text-center  text-xs cursor-pointer tracking-widest py-2  px-4 flex items-center justify-between dark:bg-slate-800/80 dark:text-white"
        onClick={() => setShowItem(!showItem)}
      >
        <span className="">{name}</span>
        {showItem ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <div className="overflow-y-scroll dark:bg-slate-700/80">
        {showItem ? (
          <>
            {data?.map((g: IGenre) => {
              const checked = itemFilter.includes(g.id);

              return (
                <div
                  className="flex items-center justify-between gap-3  bg-white py-1 px-4 text-sm font-light text-slate-500 dark:bg-slate-700/60 dark:text-white "
                  key={g.id}
                >
                  <div className="flex gap-2 ">
                    <input
                      type="checkbox"
                      id={g.name}
                      value={g.id}
                      checked={checked}
                      onChange={(e) => onChange(e)}
                    />
                    <label className="cursor-pointer" htmlFor={g.name}>
                      {g.name}{" "}
                    </label>
                  </div>
                  <p className="text-sm">
                    {calculateNumberOfItems(itemType, g.id)}
                  </p>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FilterItem;
