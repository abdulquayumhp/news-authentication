import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
	const news = useLoaderData();
	console.log(news);
	const { title, author, details, image_url, category_id } = news;
	return (
		<div>
			<div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mb-5">
				<div>
					<img src={image_url} alt="" className="w-full" />
					<h2 className="mb-1 text-xl font-semibold ">{title}</h2>
					<p className="text-sm dark:text-gray-400">
						<span>{details}</span>
					</p>
					<Link to={`/category/${category_id}`}>Back to Category news</Link>
				</div>
			</div>
		</div>
	);
};

export default News;
