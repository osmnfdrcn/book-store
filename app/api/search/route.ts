import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const searchKey = searchParams.get("searchKey");

  try {
    let query: any = {};
    searchKey ? (query.slug = { contains: searchKey }) : null;

    const books = await prisma.book.findMany({
      where: query,
      include: {
        genre: true,
      },
    });

    const authors = await prisma.author.findMany({
      where: query,
    });

    const res = [...books, ...authors];

    return NextResponse.json(res);
  } catch (error: any) {
    // throw new Error(error);
  }
}
