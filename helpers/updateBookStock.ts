import prisma from "@/libs/prismadb";

export default async function updateBookStock(id: string, quantity: number) {
  try {
    const book = await prisma.book.findFirst({
      where: {
        id,
      },
    });

    if (!book) {
      throw new Error("Book not found");
    }
    const updatedBook = await prisma.book.update({
      where: {
        id,
      },
      data: {
        stock: book.stock - quantity,
      },
    });

    return updatedBook;
  } catch (error: any) {
    // throw new Error(error);
  }
}
