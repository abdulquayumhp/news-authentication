import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaTwitch,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
import { ContextWithFirebase } from "../firebaseAuth/FirebaseAuth";

const RightSide = () => {
	const googleProvider = new GoogleAuthProvider();
	const { googleLogin } = useContext(ContextWithFirebase);

	const handleGooglSignIn = () => {
		googleLogin(googleProvider)
			.then(update => {
				const user = update.user;
				console.log(user);
			})
			.catch(error => console.error());
	};

	return (
		<div className="m-5">
			<h1 className="text-center text-xl font-medium mb-2">Please Login</h1>
			<button
				onClick={handleGooglSignIn}
				className="btn w-full btn-outline btn-secondary mb-2">
				<FaGoogle className="mr-4" />
				Google Login
			</button>
			<button className="btn w-full btn-outline btn-secondary">
				<FaGithub className="mr-4" />
				GitHub Login
			</button>
			<h1 className=" text-xl font-medium my-2">And Can Find</h1>
			<button className="btn w-full btn-outline btn-secondary mb-2">
				<FaFacebook className="mr-4" />
				FaceBook
			</button>
			<button className="btn w-full btn-outline btn-secondary mb-2">
				<FaTwitter className="mr-4" />
				Twitter
			</button>
			<button className="btn w-full btn-outline btn-secondary mb-2">
				<FaWhatsapp className="mr-4" />
				Whatsapp
			</button>
			<button className="btn w-full btn-outline btn-secondary mb-2">
				<FaTwitch className="mr-4" />
				Twitch
			</button>
			<button className="btn w-full btn-outline btn-secondary">
				<FaInstagram className="mr-4" />
				Instagram
			</button>
		</div>
	);
};

export default RightSide;
