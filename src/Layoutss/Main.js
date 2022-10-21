import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pagesss/Header";
import LeftSide from "../Pagesss/LeftSide";
import RightSide from "../Pagesss/RightSide";

const Main = () => {
	return (
		<div>
			<Header />
			<div className="flex mx-auto  lg:w-9/12 mt-5">
				<div className="w-[300px] p-5 ">
					<LeftSide />
				</div>
				<div className="flex-1  ">
					<Outlet />
				</div>
				<div className="w-[300px]  ">
					<RightSide />
				</div>
			</div>
		</div>
	);
};

export default Main;
