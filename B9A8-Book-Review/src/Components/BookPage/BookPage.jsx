import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BookPage = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const navigate = useNavigate();
	const {
		bookName,
		author,
		image,
		review,
		totalPages,
		rating,
		category,
		tags,
		publisher,
		yearOfPublishing,
	} = books.find((book) => book.bookId == bookId);
	// console.log(book)
	return (
		<div className="flex flex-col gap-10 items-center">
			<div className="book-details grid grid-cols-2 w-full gap-12 mt-2">
				<div className="book-details-left p-[50px] bg-[#1313130d] rounded-2xl min-h-full flex items-center">
					<img
						src={image}
						alt=""
						className="mx-auto book-image  max-h-[564px] object-contain w-full"
					/>
				</div>
				<div className="book-details-right flex flex-col gap-2 justify-between">
					<h1 className="book-title font-playfair text-[40px] font-bold justify-start">
						{bookName}
					</h1>
					<h3 className="author-name text-xl font-medium">By: {author}</h3>
					<hr className="border-gray-400" />
					<h3 className="category text-xl font-medium text-[#131313cc]">
						{category}
					</h3>
					<hr className="border-gray-400" />
					<p className="review leading-[26px]">
						<span className="font-bold">Review:</span> {review}
					</p>
					<hr />
					<div className="tags flex items-center gap-2 flex-wrap">
						<h4 className="tags-title font-bold leading-[26px]">Tag</h4>
						{tags.map((tag, index) => (
							<h4
								className="badge text-default 
          bg-[#23be0a0d] font-medium text-nowrap"
								key={index}
							>
								#{tag}
							</h4>
						))}
					</div>
					<hr className="border-gray-400" />
					<div className="flex gap-8 mb-4">
						<div>
							<h5 className="leading-[26px] text-[#131313b3">
								Number of Pages:{" "}
							</h5>
							<h5 className="leading-[26px] text-[#131313b3">Publisher: </h5>
							<h5 className="leading-[26px] text-[#131313b3">
								Year of Publishing:{" "}
							</h5>
							<h5 className="leading-[26px] text-[#131313b3">Rating: </h5>
						</div>
						<div>
							<p className="font-semibold leading-[26px]">{totalPages}</p>
							<p className="font-semibold leading-[26px]">{publisher}</p>
							<p className="font-semibold leading-[26px]">{yearOfPublishing}</p>
							<p className="font-semibold leading-[26px]">{rating}</p>
						</div>
					</div>

					<div className="flex gap-4">
						<button className="btn btn-outline">Read</button>
						<button className="btn bg-[#50B1C9] text-white">Wishlist</button>
					</div>
				</div>
			</div>
			<button
				onClick={() => navigate(-1)}
				className="btn btn-primary text-white"
			>
				Go Back
			</button>
		</div>
	);
};

export default BookPage;
