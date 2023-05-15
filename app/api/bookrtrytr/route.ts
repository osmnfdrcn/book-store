import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface BookData {
  title: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  publisherId: string;
  genreId: string;
  authorId: string;
  languageId: string;
  slug: string;
}

export async function GET(request: Request) {
  const body = await request.json();

  try {
    const { publisherId, authorId, genreId, languageId } = body;

    let query: any = {};
    publisherId ? (query.publisherId = { in: publisherId }) : null;
    authorId ? (query.authorId = { in: authorId }) : null;
    genreId ? (query.genreId = { in: genreId }) : null;
    languageId ? (query.languageId = { in: languageId }) : null;

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
