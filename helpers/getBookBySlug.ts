import prisma from "@/libs/prismadb";

interface IParams {
  slug?: string;
}

export default async function getBookBySlug(params: IParams) {
  try {
    const { slug } = params;

    const book = await prisma.book.findUnique({
      where: {
        slug,
      },
      include: {
        author: {
          select: {
            name: true,
            slug: true,
          },
        },
        publisher: {
          select: {
            name: true,
          },
        },
        language: true,
        genre: true,
      },
    });

    if (!book) {
      return null;
    }

    return book;
  } catch (error: any) {
    throw new Error(error);
  }
}
