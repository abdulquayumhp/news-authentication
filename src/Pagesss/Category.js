import React from "react";
import { useLoaderData } from "react-router-dom";
import FullCart from "./FullCart";

const Category = () => {
	const categoryNews = useLoaderData();
	console.log(categoryNews);
	return (
		<div>
			{categoryNews.map(news => (
				<FullCart key={news._id} news={news} />
			))}
		</div>
	);
};

export default Category;
