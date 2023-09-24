import Title from "@/components/common/title";
import { IAuthor } from "@/types";
import Image from "next/image";
type Props = {
  author: IAuthor;
};

const AuthorInfo = ({ author }: Props) => {
  return (
    <div className=" w-full  ">
      <Title text={author.name} />
      <div className="flex flex-col  justify-center items-center gap-2 ">
        <Image
          src={author.image!}
          width={300}
          height={550}
          alt={author?.name!}
          placeholder="blur"
          blurDataURL={author.image!}
        />
        <p className=" text-slate-500 dark:text-slate-300 font-light text-justify px-4">
          {author.bio}
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
