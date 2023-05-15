import prisma from "@/app/libs/prismadb";

export default async function getAuthors() {
  try {
    const authors = await prisma.author.findMany();
    return authors;
  } catch (error: any) {
    // throw new Error(error);
  }
}
