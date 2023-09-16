import { IAuthor } from "@/types";
import AuthorInfo from "./author-info";
import AuthorsBooks from "./authors-books";

type Props = {
  author: IAuthor;
};

const Author = ({ author }: Props) => {
  return (
    <div className="w-full md:w-1/2 mx-auto mt-[25px] md:mt-[50px] flex flex-col gap-4">
      <AuthorInfo author={author} />
      <AuthorsBooks name={author.name} books={author.books} />
    </div>
  );
};

export default Author;
