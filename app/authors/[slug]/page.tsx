import Wrapper from "@/components/layout/wrapper";
import { NoResult, Title } from "@/components/ui";
import getAuthorBySlug from "@/helpers/getAuthorBySlug";
import { IAuthor, IBook } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
};

const Authors = async ({ params }: { params: Props }) => {
  const author = await getAuthorBySlug(params);
  if (!author) {
    return <NoResult title="Aradiginiz sayfa bulunamadi." />;
  }
  return (
    <Wrapper>
      <div className="w-full md:w-1/2 mx-auto mt-[25px] md:mt-[50px]">
        <div className=" w-full  ">
          <Title text={author!.name} />
          <div className="flex flex-col  justify-center items-center gap-2 ">
            <Image
              src={author?.image!}
              width={250}
              height={450}
              alt={author?.name!}
              placeholder="blur"
              blurDataURL={author?.image!}
            />
            <p className="text-sm text-slate-500 font-light text-justify px-4">
              {author?.bio}
            </p>
          </div>
        </div>
        <div className="p-4 md:px-0  md:py-[20px] flex flex-col gap-2 items-center justify-center">
          <p className="text-md text-slate-400 font-thin">
            YAZARIN MAGAZAMIZDAKI KITAPLARI{" "}
          </p>
          <div className="flex gap-2 items-center justify-center w-full overflow-y-scroll">
            {author!.books.map((b: any) => (
              <Link href={`/books/${b.slug}`} key={b.authorId} className="flex">
                <div className="flex flex-col items-center gap-1">
                  <Image
                    src={b?.image!}
                    width={120}
                    height={120}
                    alt={author?.name!}
                  />
                  <p className="text-xs text-slate-400">{b.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Authors;
