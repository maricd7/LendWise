import { NextRequest,NextResponse } from "next/server";
export default function handler(req:NextRequest, res:NextResponse) {
    const books = [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        published_year: 1960,
        genre: "Fiction",
        isbn: "9780061120084",
        available: true,
        image: "https://example.com/images/to-kill-a-mockingbird.jpg",
        lender: "John Doe"
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        published_year: 1949,
        genre: "Dystopian",
        isbn: "9780451524935",
        available: false,
        image: "https://example.com/images/1984.jpg",
        lender: "Jane Smith"
      },
      {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published_year: 1925,
        genre: "Classic",
        isbn: "9780743273565",
        available: true,
        image: "https://example.com/images/the-great-gatsby.jpg",
        lender: "Alice Johnson"
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        published_year: 1813,
        genre: "Romance",
        isbn: "9781503290563",
        available: true,
        image: "https://example.com/images/pride-and-prejudice.jpg",
        lender: "Bob Brown"
      },
      {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        published_year: 1951,
        genre: "Fiction",
        isbn: "9780316769488",
        available: false,
        image: "https://example.com/images/the-catcher-in-the-rye.jpg",
        lender: "Mary Davis"
      },
      {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        published_year: 1937,
        genre: "Fantasy",
        isbn: "9780547928227",
        available: true,
        image: "https://example.com/images/the-hobbit.jpg"
      },
      {
        id: 7,
        title: "Moby Dick",
        author: "Herman Melville",
        published_year: 1851,
        genre: "Adventure",
        isbn: "9781503280786",
        available: true,
        image: "https://example.com/images/moby-dick.jpg"
      },
      {
        id: 8,
        title: "War and Peace",
        author: "Leo Tolstoy",
        published_year: 1869,
        genre: "Historical",
        isbn: "9781400079988",
        available: false,
        lender: "Kevin Wilson"
      },
      {
        id: 9,
        title: "The Odyssey",
        author: "Homer",
        published_year: -800,
        genre: "Epic",
        isbn: "9780140268867",
        available: true,
        lender: "Laura Martinez"
      },
      {
        id: 10,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        published_year: 1866,
        genre: "Psychological Fiction",
        isbn: "9780486415871",
        available: true,
        lender: "David Lee"
      },
      {
        id: 11,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        published_year: 1847,
        genre: "Romance",
        isbn: "9780141441146",
        available: true,
        image: "https://example.com/images/jane-eyre.jpg"
      },
      {
        id: 12,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        published_year: 1320,
        genre: "Epic Poetry",
        isbn: "9780142437223",
        available: false,
        lender: "Emma Taylor"
      },
      {
        id: 13,
        title: "Brave New World",
        author: "Aldous Huxley",
        published_year: 1932,
        genre: "Dystopian",
        isbn: "9780060850524",
        available: true,
        image: "https://example.com/images/brave-new-world.jpg"
      },
      {
        id: 14,
        title: "The Iliad",
        author: "Homer",
        published_year: -750,
        genre: "Epic",
        isbn: "9780140275360",
        available: true,
        image: "https://example.com/images/the-iliad.jpg"
      },
      {
        id: 15,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        published_year: 1880,
        genre: "Philosophical Fiction",
        isbn: "9780374528379",
        available: true,
        image: "https://example.com/images/the-brothers-karamazov.jpg"
      },
      {
        id: 16,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        published_year: 1847,
        genre: "Gothic Fiction",
        isbn: "9780141439556",
        available: false,
        lender: "Sophia Anderson"
      },
      {
        id: 17,
        title: "Les Misérables",
        author: "Victor Hugo",
        published_year: 1862,
        genre: "Historical",
        isbn: "9780451419438",
        available: true,
        image: "https://example.com/images/les-miserables.jpg"
      },
      {
        id: 18,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        published_year: 1615,
        genre: "Adventure",
        isbn: "9780060934347",
        available: true,
        image: "https://example.com/images/don-quixote.jpg"
      },
      {
        id: 19,
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        published_year: 1857,
        genre: "Literary Fiction",
        isbn: "9780140449129",
        available: false,
        lender: "James Thomas"
      },
      {
        id: 20,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        published_year: 1890,
        genre: "Philosophical Fiction",
        isbn: "9780141439570",
        available: true,
        image: "https://example.com/images/the-picture-of-dorian-gray.jpg"
      }
    ];
  
    res.status(200).json(books);
  }