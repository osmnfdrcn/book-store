import { IBook } from "@/types";
import BookInfo from "./book-info";
import Counter from "./counter";
import LastVisitedBooks from "./last-visited";

type Props = {
  book: IBook;
};

const Book = ({ book }: Props) => {
  return (
    <BookInfo book={book}>
      <Counter book={book} />
      <LastVisitedBooks
        id={book.id}
        title={book.title}
        image={book.image}
        slug={book.slug}
      />
    </BookInfo>
  );
};

export default Book;
