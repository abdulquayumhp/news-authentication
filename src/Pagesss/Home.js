import React from "react";
import { useLoaderData } from "react-router-dom";
import FullCart from "./FullCart";

const Home = () => {
	const allNews = useLoaderData();
	// console.log(allNews);
	return (
		<div>
			{allNews.map(news => (
				<FullCart key={news._id} news={news} />
			))}
		</div>
	);
};

export default Home;
