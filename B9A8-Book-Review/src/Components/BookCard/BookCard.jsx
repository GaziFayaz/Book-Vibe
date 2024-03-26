import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
	const { bookName, bookId, author, image, rating, category, tags } = book;
	return (
		<Link to={`book/${bookId}`} className="card bg-base-100 shadow-xl p-6">
			<figure className="bg-[#F3F3F3] rounded-2xl py-2">
				<img src={image} className="max-h-[166px]" />
			</figure>

			<div className="card-body p-0 mt-3">
				<div className="flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<div key={index}>
							<p className="text-nowrap badge text-[#23BE0A] bg-[#23be0a0d]">
								{tag}
							</p>
						</div>
					))}
				</div>
				<h2 className="card-title">{bookName}</h2>
				<p>by: {author}</p>
				<hr />
				<div className="flex">
					<p>{category}</p>
					<div className="flex items-center gap-2">
						<p>{rating}</p>
						<AiTwotoneStar />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
