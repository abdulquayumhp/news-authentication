import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FullCart = ({ news }) => {
	const { author, title, _id, total_view, details, image_url, rating } = news;
	return (
		<div>
			<div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mb-5">
				<div className="flex space-x-4">
					<img
						alt=""
						src={author?.img}
						className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
					/>
					<div className="flex flex-col space-y-1">
						<p>{author?.name}</p>
						<p>{author?.published_date}</p>
					</div>
				</div>
				<div>
					<h2 className="mb-1 text-xl font-semibold ">{title}</h2>
					<img src={image_url} alt="" className="w-full" />

					<p className="text-sm dark:text-gray-400">
						{details.length > 250 ? (
							<>
								{details.slice(0, 250) + "..."}
								<Link to={`/news/${_id}`}>Read More</Link>
							</>
						) : (
							<span>{details}</span>
						)}
					</p>
				</div>
				<div className="flex flex-wrap justify-between">
					<div className="flex space-x-2">
						<FaStar className="text-warning me-2" />
						<span>{rating.number}</span>
					</div>
					<div className="flex space-x-2 text-sm dark:text-gray-400">
						<FaEye className="me-2" />
						<span>{total_view}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullCart;
