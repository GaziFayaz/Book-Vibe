import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBooks = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch("books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	return (
		<div className="flex flex-col items-center w-full">
			<h1 className="all-books-title font-playfair text-4xl font-semibold">
				Books
			</h1>
			<div className="all-books-grid grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
				{books.map((book) => (
					<BookCard book={book} key={book.bookId}></BookCard>
				))}
			</div>
		</div>
	);
};

export default AllBooks;
