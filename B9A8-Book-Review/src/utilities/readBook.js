const readBook = (readKey, bookId, success, error) => {
	const successMessage = "Added to Read Books!"
	const errorMessage = "Book Already Read!"
	// console.log(typeof(notify))
	const booksRead = JSON.parse(localStorage.getItem(readKey));
	if (booksRead) {
		if (!booksRead.find((book) => book === parseInt(bookId))) {
			localStorage.setItem(readKey, JSON.stringify([...booksRead, bookId]));
			success(successMessage);
		} else {
			error(errorMessage);
		}
	} else {
		localStorage.setItem(readKey, JSON.stringify([bookId]));
		success(successMessage);
	}
};

export default readBook;
