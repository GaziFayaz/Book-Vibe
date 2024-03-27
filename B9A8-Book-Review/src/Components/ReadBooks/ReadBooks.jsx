import React, { useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";

const ReadBooks = () => {
	const [books, setBooks] = useState([]);
  const [readBooksId, setReadBooksId] = useState([])
  const [readBooks, setReadBooks] = useState([])
	useEffect(() => {
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
		setReadBooksId(JSON.parse(localStorage.getItem("readBooks")));
    setReadBooks(books.filter(book => readBooksId.includes(book.bookId)))
		// console.log(readBooks);
	}, []);

	return (
		<div className="w-full">
      {
        readBooks.map(book => <ListedBookCard key={book.bookId}></ListedBookCard>)
      }
    </div>
	);
};

export default ReadBooks;
