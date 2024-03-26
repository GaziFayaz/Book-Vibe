import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<section className="banner w-full py-20 px-[120px] bg-[#1313130D] rounded-3xl">
			<div className="flex justify-between items-center">
				<div className="flex flex-col w-[60%] gap-12 h-full">
					<h1 className="banner-title font-playfair text-6xl font-bold leading-[84px]">
						Books to freshen up your bookshelf
					</h1>
					<Link to={'/listed-books'}>
						<button className="btn bg-default text-neutral-50 text-xl font-bold px-5 py-4 h-fit self-start">
							View The List
						</button>
					</Link>
				</div>
				<img
					src="https://i.ibb.co/NmqyBT1/The-Dating-Playbook-for-Men.png"
					alt=""
					className="max-h-[400px]"
				/>
			</div>
		</section>
	);
};

export default Banner;
