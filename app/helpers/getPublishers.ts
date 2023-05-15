import prisma from "@/app/libs/prismadb";

export default async function getPublishers() {
  try {
    const publishers = await prisma.publisher.findMany();
    return publishers;
  } catch (error: any) {
    // throw new Error(error);
  }
}
