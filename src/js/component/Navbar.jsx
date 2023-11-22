import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-primary">Contact</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
