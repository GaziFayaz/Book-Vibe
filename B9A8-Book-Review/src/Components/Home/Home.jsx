import React from "react";
import Banner from "../Banner/Banner";
import AllBooks from "../AllBooks/AllBooks";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const books = useLoaderData()
	return (
		<>
			<Banner></Banner>
      <AllBooks books={books}></AllBooks>
		</>
	);
};

export default Home;
