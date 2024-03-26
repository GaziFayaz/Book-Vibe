import React from "react";

const Home = () => {
	return (
		<>
			<section className="banner w-full py-20 px-[120px]">
				<div>
					<div className="flex flex-col w-[60%] gap-12">
						<h1 className="banner-title font-playfair text-6xl font-bold leading-[84px]">
							Books to freshen up your bookshelf
						</h1>
						<button className="btn bg-default text-neutral-50 text-xl font-bold px-5 py-4 h-fit self-start">
							View The List
						</button>
					</div>
          
				</div>
			</section>
		</>
	);
};

export default Home;
