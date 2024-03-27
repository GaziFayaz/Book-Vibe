import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Components/PagesToRead/PagesToRead.jsx";
import BookPage from "./Components/BookPage/BookPage.jsx";
import ReadBooks from "./Components/ReadBooks/ReadBooks.jsx";
import WishlistBooks from "./Components/WishlistBooks/WishlistBooks.jsx";
import Error from "./Components/Error/Error.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/listed-books",
				element: <ListedBooks></ListedBooks>,
				children: [
					{
						path: "/listed-books/read-books",
						element: <ReadBooks></ReadBooks>,
					},
					{
						path: "/listed-books/wishlist-books",
						element: <WishlistBooks></WishlistBooks>,
					},
				],
			},
			{
				path: "/pages-to-read",
				element: <PagesToRead></PagesToRead>,
			},
			{
				path: "book/:bookId",
				element: <BookPage></BookPage>,
				loader: () => fetch("../books.json"),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
