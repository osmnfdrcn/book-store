import { NextRequest, NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(request: Request, res: Response) {
  const body = await request.json();
  const { id, quantity } = body;

  try {
    if (!id || !quantity) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const book = await prisma.book.findFirst({
      where: {
        id,
      },
    });
    if (!book) {
      throw new Error("Book not found");
    }
    if (quantity > book.stock) {
      throw new Error("Stock not enough");
    }
    const newStock = book?.stock - quantity;

    const updatedBook = await prisma.book.update({
      where: {
        id,
      },
      data: {
        stock: newStock,
      },
    });
    return NextResponse.json(updatedBook, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
