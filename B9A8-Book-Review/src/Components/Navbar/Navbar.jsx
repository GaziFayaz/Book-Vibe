import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeBtn = "btn btn-outline border-default text-default";
	const routesLinks = (
		<>
			<li>
				<NavLink
					to={`/`}
					className={({ isActive }) =>
						isActive
							? `active text-lg ${activeBtn}`
							: "btn text-lg bg-white border-none shadow-none"
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={`/listed-books/read-books`}
					className={({ isActive }) =>
						isActive
							? `active text-lg ${activeBtn}`
							: " btn text-lg bg-white border-none shadow-none"
					}
				>
					Listed Books
				</NavLink>
			</li>
			<li>
				<NavLink
					to={`/pages-to-read`}
					className={({ isActive }) =>
						isActive
							? `active text-lg ${activeBtn}`
							: "btn text-lg bg-white border-none shadow-none"
					}
				>
					Pages to Read
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100 px-0">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
					>
						{routesLinks}
					</ul>
				</div>
				<a className="text-3xl font-bold">Book Vibe</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{routesLinks}</ul>
			</div>
			<div className="navbar-end flex gap-3">
				<a className="btn bg-default text-base-100 font-semibold">Sign In</a>
				<a className="btn bg-[#59C6D2] text-base-100 font-semibold">Sign Up</a>
			</div>
		</div>
	);
};

export default Navbar;
