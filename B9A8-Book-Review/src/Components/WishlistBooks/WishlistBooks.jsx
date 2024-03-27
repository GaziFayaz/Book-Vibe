import React, { useContext, useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { SortContext } from "../ListedBooks/ListedBooks";

const WishlistBooks = () => {
	const [books, setBooks] = useState([]);
	const [wishlistBooksId, setWishlistBooksId] = useState([]);

	const sortType = useContext(SortContext);

	useEffect(() => {
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => {
				setBooks(data);
			});
		setWishlistBooksId(JSON.parse(localStorage.getItem("wishlistBooks")));
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
	return (
		<div className="flex flex-col w-full mt-10 gap-5">
			{books.map((book, index) => {
				if (wishlistBooksId.includes(book.bookId)) {
					return <ListedBookCard book={book} key={index}></ListedBookCard>;
				}
			})}
		</div>
	);
};

export default WishlistBooks;
