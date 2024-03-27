import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {
	const {
		bookId,
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
	} = book;
	return (
		<div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-xl w-full p-6 border border-gray-300 gap-4">
			<figure className="rounded-2xl bg-[#1313130D] py-7 px-12">
				<img src={image} alt="Movie" className="max-h-[172px] object-contain" />
			</figure>
			<div className="card-body p-0 gap-6">
				<h2 className="card-title font-playfair font-bold text-2xl">{bookName}</h2>
				<p className="font-medium">By: {author}</p>

				<div className="tag flex items-center gap-2 mt-0 flex-wrap">
					<p className="font-bold leading-[26px]">Tag</p>
					{tags.map((tag, index) => (
						<p className="badge text-default bg-[#23BE0A0D]" key={index}>
							#{tag}
						</p>
					))}
					<div className="publish-year flex items-center gap-2">
						<FiMapPin />
						<p>Year of Publishing: {yearOfPublishing}</p>
					</div>
				</div>
				<div className="publisher-page-count flex gap-6 text-[#13131399]">
					<div className="publisher-area flex items-center gap-2">
						<FaUserGroup/>
						<p>Publisher: {publisher}</p>
					</div>
					<div className="page-count-area flex items-center gap-2">
						<AiFillFileText />
						<p>Page {totalPages}</p>
					</div>
				</div>
				<hr />
				<div className="card-actions justify-start">
						<button className="btn bg-[#328eff26]  text-[#328EFF] no-animation rounded-full font-normal btn-sm ">
						Category: {category}
					</button>
					<button className="btn bg-[#FFAC3326] text-[#FFAC33] no-animation rounded-full font-normal btn-sm">
						Rating: {rating}
					</button>
					<Link to={`/book/${bookId}`}>
						<button className="btn bg-default text-white rounded-full font-medium text-md btn-sm">View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ListedBookCard;
