import React, { useContext, useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { SortContext } from "../ListedBooks/ListedBooks";

const ReadBooks = () => {
	const [books, setBooks] = useState([]);
	const [readBooksId, setReadBooksId] = useState([]);
	const sortType = useContext(SortContext);

	useEffect(() => {
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => {
				setBooks(data);
			});
		setReadBooksId(JSON.parse(localStorage.getItem("readBooks")));
	}, []);
	useEffect(() => {
		console.log(sortType)
		const data = books;
		if (sortType === "rating") {
			data.sort((a, b) => {
				if (a.rating > b.rating) return -1;
				else if (a.rating < b.rating) return 1;
				else return 0;
			});
			setBooks(data)
		} else if (sortType === "pageNumber") {
			data.sort((a, b) => {
				if (a.totalPages > b.totalPages) return -1;
				else if (a.totalPages < b.totalPages) return 1;
				else return 0;
			});
			setBooks(data)
		} else if (sortType === "publishYear") {
			data.sort((a, b) => {
				if (a.yearOfPublishing > b.yearOfPublishing) return -1;
				else if (a.yearOfPublishing < b.yearOfPublishing) return 1;
				else return 0;
			});
			setBooks(data)
		}
	}, [sortType]);
	
	// const sortBoo = (sortType) => {

	// }

	return (
		<SortContext.Provider>
			<div className="flex flex-col w-full mt-10 gap-5">
			<p>{sortType}</p>
			{books.map((book, index) => {
				if (readBooksId.includes(book.bookId)) {
					return <ListedBookCard book={book} key={index}></ListedBookCard>;
				}
			})}
		</div>
		</SortContext.Provider>
		
	);
};

export default ReadBooks;
