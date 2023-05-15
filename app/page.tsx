import { Wrapper } from "./components/layout";
import { Home } from "./components/ui";
import getBooks from "./helpers/getBooks";
import { IBook } from "./types";

type Props = {
  searchParams: {
    genreId?: string;
    publisherId?: string;
    languageId?: string;
    authorId?: string;
  };
};

const App = async ({ searchParams }: Props) => {
  const genreIds = searchParams.genreId?.split(",");
  const publisherIds = searchParams.publisherId?.split(",");
  const languageIds = searchParams.languageId?.split(",");
  const authorIds = searchParams.authorId?.split(",");

  const books = await getBooks({
    genreId: genreIds,
    publisherId: publisherIds,
    languageId: languageIds,
    authorId: authorIds,
  });
  return (
    <Wrapper>
      <Home books={books as IBook[]} />
    </Wrapper>
  );
};

export default App;
