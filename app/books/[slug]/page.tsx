import { Wrapper } from "@/components/layout";
import { IBook } from "@/types";
import getBookBySlug from "@/helpers/getBookBySlug";
import ClientWrapper from "../ClientWrapper";

type Props = {
  slug?: string;
};

const BookDetail = async ({ params }: { params: Props }) => {
  const book = await getBookBySlug(params);

  return (
    <Wrapper>
      <ClientWrapper book={book as IBook} />
    </Wrapper>
  );
};

export default BookDetail;
