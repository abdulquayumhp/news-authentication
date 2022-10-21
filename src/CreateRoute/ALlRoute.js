import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutss/Main";
import Category from "../Pagesss/Category";
import Home from "../Pagesss/Home";
import LeftSide from "../Pagesss/LeftSide";
import Login from "../Pagesss/Login";
import News from "../Pagesss/News";
import Profile from "../Pagesss/Profile";
import Register from "../Pagesss/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("http://localhost:5000/news"),
			},
			{
				path: "/category/:id",
				element: (
					<PrivetRoute>
						<Category />
					</PrivetRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/category/${params.id}`),
			},

			{
				path: "/news/:id",
				element: <News />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
			{
				path: "/lefSide",
				loader: () => fetch(`http://localhost:5000/news-categories`),
				element: <LeftSide />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/profile",
				element: (
					<PrivetRoute>
						<Profile />
					</PrivetRoute>
				),
			},
		],
	},
]);
