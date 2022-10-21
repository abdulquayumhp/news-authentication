import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextWithFirebase } from "../firebaseAuth/FirebaseAuth";

const Register = () => {
	const [error, setError] = useState("");
	const { NewUserAccountCreate, updateUserProfile, verifyEmail } =
		useContext(ContextWithFirebase);

	const navigate = useNavigate();
	// console.log(NewUserAccountCreate);
	const handleUserSubmission = e => {
		e.preventDefault();
		const name = e.target.name.value;
		const photoURL = e.target.ImageURL.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(name, photoURL, email, password);

		NewUserAccountCreate(email, password)
			.then(update => {
				const user = update.user;
				console.log(user);
				setError("");
				UpdateUserProfile(name, photoURL);
				EmailVerification();
				toast.success("please verify your email address");
				navigate("/login");
			})
			.catch(error => {
				console.error(error);
				setError(error.message);
			});
	};

	const UpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch(error => console.error(error));
	};

	const EmailVerification = () => {
		verifyEmail()
			.then(() => {})
			.catch(error => console.error(error));
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
						Username
					</label>
					<input
						type="text"
						name="name"
						id="username"
						placeholder="Enter Your Name"
						className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
					/>
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="username" className="block dark:text-gray-400">
						Send Your Image URL
					</label>
					<input
						type="text"
						name="ImageURL"
						id="username"
						placeholder="Image URL"
						className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
					/>
				</div>
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
					Sign in
				</button>
			</form>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				<p className="px-3 text-sm dark:text-gray-400">
					Login with social accounts
				</p>
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
			</div>
			<div className="flex justify-center space-x-4">
				<button aria-label="Log in with Google" className="p-3 rounded-sm">
					<FaGoogle />
				</button>
				<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
					<FaTwitter />
				</button>
				<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
					<FaGithub />
				</button>
			</div>
			<p className="text-xs text-center sm:px-6 dark:text-gray-400">
				Do You have an account?
				<Link to="/login" className="underline dark:text-gray-100">
					Log In
				</Link>
			</p>
		</div>
	);
};

export default Register;
