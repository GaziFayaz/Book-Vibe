import React from "react";
import BookCard from "../BookCard/BookCard";

const AllBooks = ({ books }) => {
  console.log(books)
	return (
		<div className="flex flex-col items-center ">
			<h1 className="all-books-title font-playfair text-4xl font-semibold">
				Books
			</h1>
			<div className="all-books-grid grid grid-cols-3 gap-4">
				{books.map((book) => (
					<BookCard book={book} key={book.bookId}></BookCard>
				))}
			</div>
		</div>
	);
};

export default AllBooks;
