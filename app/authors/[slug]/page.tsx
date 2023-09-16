import Wrapper from "@/components/layout/wrapper";
import Author from "@/components/modules/author";
import NoResult from "@/components/common/noResult";
import getAuthorBySlug from "@/helpers/getAuthorBySlug";

type Props = {
  slug: string;
};

const AuthorPage = async ({ params }: { params: Props }) => {
  const author = await getAuthorBySlug(params);
  if (!author) {
    return <NoResult title="Aradiginiz sayfa bulunamadi." />;
  }

  return (
    <Wrapper>
      <Author author={author as any} />
    </Wrapper>
  );
};

export default AuthorPage;
