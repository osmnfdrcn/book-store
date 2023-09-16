import Wrapper from "@/components/layout/wrapper";
import Book from "@/components/modules/book";
import NoResult from "@/components/common/noResult";
import getBookBySlug from "@/helpers/getBookBySlug";
import { IBook } from "@/types";

type Props = {
  slug?: string;
};

const BookDetail = async ({ params }: { params: Props }) => {
  const book = await getBookBySlug(params);
  if (!book) {
    return <NoResult title="Aradiginiz sayfa bulunamadi." />;
  }
  return (
    <Wrapper>
      <Book book={book as IBook} />
    </Wrapper>
  );
};

export default BookDetail;
