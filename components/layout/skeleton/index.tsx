import Wrapper from "../wrapper";

type Props = {
  page: "home" | "book" | "author" | "cart";
};

const Skeleton = ({ page }: Props) => {
  if (page === "home") {
    return (
      <Wrapper>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  gap-2 lg:gap-4 h-full mt-[40px]">
          {[...Array(20).keys()].map((i) => {
            return (
              <div className=" animate-pulse p-3   ">
                <div className="aspect-square w-full h-[180px]  relative overflow-hidden bg-slate-100 mb-2">
                  {/* image */}
                </div>
                <div className="text-sm bg-slate-100 text-center h-[12px] mb-2">
                  {/* price */}
                </div>
                <div className="text-sm bg-slate-100 text-center h-[12px]">
                  {/* price */}
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
  return null;
};

export default Skeleton;
