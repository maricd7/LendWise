"use client";
import { fetchData } from "@/app/actions/FetchMockData";
import React, { useEffect, useState } from "react";
import { Book } from "@/app/types/Book";
import Image from "next/image";

const Recommended = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data: Book[] = await fetchData();
        console.log(data, "data");
        console.log("dadfadasd");
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-wrap gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-gray-900 shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <Image
            alt="book photo"
            src={book.image}
            width={180}
            height={360}
            className="mx-auto"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">
            {book.title}
          </h2>
          <p className="text-sm text-gray-600 text-center">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
