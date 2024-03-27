import React, { useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";

const WishlistBooks = () => {
	const [books, setBooks] = useState([]);
	const [wishlistBooksId, setWishlistBooksId] = useState([]);

	useEffect(() => {
		fetch("../books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	useEffect(() => {
		setWishlistBooksId(JSON.parse(localStorage.getItem("wishlistBooks")));
	}, []);
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
