import prisma from "@/libs/prismadb";

export default async function getLanguages() {
  try {
    const languages = await prisma.language.findMany();
    return languages;
  } catch (error: any) {
    // throw new Error(error);
  }
}
