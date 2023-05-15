import prisma from "@/app/libs/prismadb";

export interface IBookParams {
  publisherId?: string[];
  authorId?: string[];
  genreId?: string[];
  languageId?: string[];
  searchKey?: string;
}

export default async function getBooks(params: IBookParams) {
  try {
    const { publisherId, authorId, genreId, languageId, searchKey } = params;

    const bookPerPage = 5;
    let query: any = {};
    publisherId ? (query.publisherId = { in: publisherId }) : null;
    authorId ? (query.authorId = { in: authorId }) : null;
    genreId ? (query.genreId = { in: genreId }) : null;
    languageId ? (query.languageId = { in: languageId }) : null;
    searchKey ? (query.slug = { contains: searchKey }) : null;

    const books = await prisma.book.findMany({
      where: query,
      include: {
        author: true,
        language: true,
        genre: true,
        publisher: true,
      },
    });

    return books;
  } catch (error: any) {
    // throw new Error(error);
  }
}
