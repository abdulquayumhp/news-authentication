import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextWithFirebase } from "../firebaseAuth/FirebaseAuth";

const Header = () => {
	const { user, logOut } = useContext(ContextWithFirebase);
	console.log(user);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error => console.error(error));
	};
	return (
		<div>
			<div className="navbar bg-blue-100 px-20">
				<div className="flex-1">
					<Link to="/">Bangladesh News</Link>
				</div>
				<>
					{user?.uid ? (
						<>
							<span>{user?.displayName}</span>
							<Link
								onClick={handleLogOut}
								className="mx-1 bg-slate-300 py-1 px-3 rounded-sm ">
								LogOut
							</Link>
						</>
					) : (
						<>
							<Link
								className="mx-1 bg-slate-300 py-1 px-3 rounded-sm "
								to="/login">
								Login
							</Link>
							<Link
								className="mx-1 bg-slate-300 py-1 px-3 rounded-sm "
								to="/register">
								Register
							</Link>
						</>
					)}
				</>

				<div className="flex-none">
					<div className="dropdown dropdown-end"></div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className=" rounded-full">
								<Link to="/profile">
									{user?.photoURL ? <img src={user?.photoURL} /> : <FaUser />}
								</Link>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
