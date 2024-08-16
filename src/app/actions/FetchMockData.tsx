"use server";
import { PrismaClient } from "@prisma/client";
import { Book } from "../types/Book";

const prisma = new PrismaClient();

export const fetchData = async (): Promise<Book[]> => {
  try {
    const books = await prisma.book.findMany();
    return books;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
};
