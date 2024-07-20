"use client";
import { fetchData } from "@/app/actions/FetchMockData";
import React, { useEffect, useState } from "react";
import { Book } from "@/app/types/Book";

const Recommended = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data: Book[] = await fetchData();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
