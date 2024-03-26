const readKey = "read-books";

const readBook = (bookId, success, error) => {
	// console.log(typeof(notify))
	const booksRead = JSON.parse(localStorage.getItem(readKey));
	if (booksRead) {
		if (!booksRead.find((book) => book === parseInt(bookId))) {
			localStorage.setItem(readKey, JSON.stringify([...booksRead, bookId]));
      success()
		} else {
			error()
		}
	} else {
		localStorage.setItem(readKey, JSON.stringify([bookId]));
    success()
	}
};

export default readBook;
