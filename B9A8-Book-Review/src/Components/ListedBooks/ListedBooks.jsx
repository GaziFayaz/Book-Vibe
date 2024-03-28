import React, { createContext, useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";

export const SortContext = createContext("");
const ListedBooks = () => {
	const [sortType, setSortType] = useState("");
	const activeTab = "tab-active";
	return (
		<SortContext.Provider value={sortType}>
			<div className="flex flex-col items-center">
				<header className="font-bold text-3xl text-center bg-[#1313130d] block py-[33px] w-full rounded-3xl">
					Books
				</header>
				<details className="dropdown mt-5 mx-auto mb-[56px]">
					<summary className="m-1 btn bg-default text-white">
						<p className="text-lg font-semibold">Sort By</p>
						<BiSolidChevronDown className="text-xl" />
					</summary>
					<ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-gray-300">
						<li onClick={() => setSortType("rating")}>
							<a>Rating</a>
						</li>
						<li onClick={() => setSortType("pageNumber")}>
							<a>Number of Pages</a>
						</li>
						<li onClick={() => setSortType("publishYear")}>
							<a>Publisher Year</a>
						</li>
					</ul>
				</details>
				<div
					role="tablist"
					className="tabs tabs-lifted tabs-lg self-start w-full"
				>
					<NavLink
						onClick={() => setSortType("")}
						to={`read-books`}
						role="tab"
						className={({ isActive }) =>
							isActive ? `active tab  font-bold ${activeTab}` : "tab "
						}
					>
						Read Books
					</NavLink>
					<NavLink
						onClick={() => setSortType("")}
						to={`wishlist-books`}
						role="tab"
						className={({ isActive }) =>
							isActive ? `active tab font-bold ${activeTab}` : "tab  "
						}
					>
						Wishlist Books
					</NavLink>
				</div>
				<Outlet></Outlet>
			</div>
		</SortContext.Provider>
	);
};

export default ListedBooks;
