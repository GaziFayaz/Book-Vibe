import React, { useContext, useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { SortContext } from "../ListedBooks/ListedBooks";

const ReadBooks = () => {
	const [books, setBooks] = useState([]);
	const [readBooksId, setReadBooksId] = useState([]);
	const sortType = useContext(SortContext);

	useEffect(() => {
		console.log(sortType)
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	useEffect(() => {
		setReadBooksId(JSON.parse(localStorage.getItem("readBooks")));
	}, []);
	// useEffect(() => )

	return (
		<div className="flex flex-col w-full mt-10 gap-5">
			{books.map((book, index) => {
				if (readBooksId.includes(book.bookId)) {
					return <ListedBookCard book={book} key={index}></ListedBookCard>;
				}
			})}
		</div>
	);
};

export default ReadBooks;
