const wishlistBook = (readKey, wishlistKey, bookId, success, error) => {
  const successMessage = "Added to Wishlist!"
	const errorAlreadyRead = "Book Already Read!"
  const errorAlreadyWishlisted = "Book Already Wishlisted"
	// console.log("wishlist book")
	const booksWishlisted = JSON.parse(localStorage.getItem(wishlistKey));
	const booksRead = JSON.parse(localStorage.getItem(readKey));

	if (booksRead) {
		if (!booksRead.find((book) => book === parseInt(bookId))) {
			if (booksWishlisted) {
				if (!booksWishlisted.find((book) => book === parseInt(bookId))) {
					localStorage.setItem(wishlistKey, JSON.stringify([...booksWishlisted, bookId]));
					success(successMessage);
				}
        else{
          error(errorAlreadyWishlisted);
        }
			}
      else{
        localStorage.setItem(wishlistKey, JSON.stringify([bookId]))
        success(successMessage)
      }
		}
    else {
      error(errorAlreadyRead)
    }
	}
  else {
    if (booksWishlisted) {
      if (!booksWishlisted.find((book) => book === parseInt(bookId))) {
        localStorage.setItem(wishlistKey, JSON.stringify([...booksWishlisted, bookId]));
        success(successMessage);
      }
      else{
        error(errorAlreadyWishlisted);
      }
    }
    else{
      localStorage.setItem(wishlistKey, JSON.stringify([bookId]))
      success(successMessage)
    }
  }

};

export default wishlistBook;
