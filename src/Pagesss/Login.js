import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextWithFirebase } from "../firebaseAuth/FirebaseAuth";

const Login = () => {
	const [error, setError] = useState("");
	const { UserLoginCreate, setLoader } = useContext(ContextWithFirebase);

	const navigate = useNavigate();
	const location = useLocation();

	console.log(location);

	const from = location.state?.from?.pathname || "/";

	const handleUserSubmission = e => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		UserLoginCreate(email, password)
			.then(update => {
				const user = update.user;
				setError("");
				console.log(user);
				if (user.emailVerified) {
					navigate(from, { replace: true });
				} else {
					toast.error("your email is not verified . please verify your email ");
				}
			})
			.catch(error => {
				console.error(error);
				setError(error.message);
			})
			.finally(() => {
				setLoader(false);
			});
	};
	return (
		<div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 bg-blue-200 dark:text-gray-100">
			<h1 className="text-2xl font-bold text-center">Login</h1>
			<form
				onSubmit={handleUserSubmission}
				action=""
				className="space-y-6 ng-untouched ng-pristine ng-valid">
				<div className="space-y-1 text-sm">
					<label htmlFor="username" className="block dark:text-gray-400">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="username"
						placeholder="Enter Your Email"
						className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
					/>
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="password" className="block dark:text-gray-400">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
					/>
					<div className="flex justify-end text-xs dark:text-gray-400">
						<a rel="noopener noreferrer" href="#">
							Forgot Password?
						</a>
					</div>
				</div>
				<p>{error}</p>
				<button className="block w-full p-3 text-center rounded-sm bg-black text-white dark:text-gray-900 dark:bg-violet-400">
					Log In
				</button>
			</form>

			<p className="text-xs text-center sm:px-6 dark:text-gray-400">
				Do You have an account?
				<Link to="/register" className="underline dark:text-gray-100">
					Registration
				</Link>
			</p>
		</div>
	);
};

export default Login;
