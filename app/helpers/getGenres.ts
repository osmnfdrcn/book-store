import prisma from "@/app/libs/prismadb";

export default async function getGenres() {
  try {
    const genres = await prisma.genre.findMany();
    return genres;
  } catch (error: any) {
    // throw new Error(error);
  }
}
