import React, { createContext, useEffect, useState } from "react";

import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/fireBaseAuthContext";

export const ContextWithFirebase = createContext();
const auth = getAuth(app);

const FirebaseAuth = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(true);

	const NewUserAccountCreate = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const UserLoginCreate = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = profile => {
		return updateProfile(auth.currentUser, profile);
	};
	const logOut = () => {
		return signOut(auth);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};
	const googleLogin = provider => {
		return signInWithPopup(auth, provider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoader(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// const user = { displayName: "box" };
	const authInfo = {
		user,
		NewUserAccountCreate,
		UserLoginCreate,
		updateUserProfile,
		logOut,
		loader,
		verifyEmail,
		setLoader,
		googleLogin,
	};

	return (
		<div>
			<ContextWithFirebase.Provider value={authInfo}>
				{children}
			</ContextWithFirebase.Provider>
		</div>
	);
};

export default FirebaseAuth;
