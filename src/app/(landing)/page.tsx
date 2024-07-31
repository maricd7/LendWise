import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Welcome to the Book Lending Library
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover, borrow, and enjoy a variety of books.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-blue-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
