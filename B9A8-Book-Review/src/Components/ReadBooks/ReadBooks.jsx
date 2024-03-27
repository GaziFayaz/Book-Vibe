import React, { useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";

const ReadBooks = () => {
	const [books, setBooks] = useState([]);
	const [readBooksId, setReadBooksId] = useState([]);

	useEffect(() => {
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	useEffect(() => {
		setReadBooksId(JSON.parse(localStorage.getItem("readBooks")));
	}, []);

	return (
		<div className="flex flex-col w-full mt-10 gap-5">
			{books.map((book,index) => {
				if (readBooksId.includes(book.bookId)) {
					return <ListedBookCard book={book} key={index}></ListedBookCard>;
				}
			})}
		</div>
	);
};

export default ReadBooks;
