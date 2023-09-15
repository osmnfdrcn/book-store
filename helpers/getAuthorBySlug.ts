import prisma from "@/libs/prismadb";

interface IParams {
  slug?: string;
}

export default async function getAuthorBySlug(params: IParams) {
  try {
    const { slug } = params;

    const author = await prisma.author.findUnique({
      where: {
        slug,
      },
      include: {
        books: true,
      },
    });

    if (!author) {
      return null;
    }

    return author;
  } catch (error: any) {
    throw new Error(error);
  }
}
