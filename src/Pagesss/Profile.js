import React, { useContext, useRef, useState } from "react";
import { ContextWithFirebase } from "../firebaseAuth/FirebaseAuth";

const Profile = () => {
	const { user } = useContext(ContextWithFirebase);
	const [name, setName] = useState(user.displayName);
	const photoURLRef = useRef(user.photoURL);
	const handleSubmit = e => {
		e.preventDefault();
		console.log(photoURLRef.current.value);
	};
	const handleChange = e => {
		setName(e.target.value);
	};
	return (
		<div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 bg-blue-200 dark:text-gray-100">
			<form
				onSubmit={handleSubmit}
				action=""
				className="space-y-6 ng-untouched ng-pristine ng-valid">
				<div className="space-y-1 text-sm">
					<label htmlFor="username" className="block dark:text-gray-400">
						Username
					</label>
					<input
						type="text"
						onChange={handleChange}
						defaultValue={name}
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
						ref={photoURLRef}
						defaultValue={user?.photoURL}
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
						readOnly
						defaultValue={user?.email}
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

				<button className="block w-full p-3 text-center rounded-sm bg-black text-white dark:text-gray-900 dark:bg-violet-400">
					Sign in
				</button>
			</form>
		</div>
	);
};

export default Profile;
