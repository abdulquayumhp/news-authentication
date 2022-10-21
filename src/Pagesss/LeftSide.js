import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const LeftSide = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/news-categories")
			.then(res => res.json())
			.then(data => setCategories(data));
	}, []);

	return (
		<div>
			<h1 className="text-2xl font-semibold mb-5">All Category</h1>
			{categories.map((category, i) => (
				<p
					className="pb-3 border border-slate-200 p-2 mb-2 rounded-sm cursor-pointer"
					key={category.id}>
					<Link
						className="text-lg font-normal flex justify-between"
						to={`category/${category.id}`}>
						{i + 1} {category.name}
						<HiArrowNarrowRight className="mt-2 " />
					</Link>
				</p>
			))}
		</div>
	);
};

export default LeftSide;
