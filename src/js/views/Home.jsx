import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="d-flex align-items-center justify-content-center vh-100">
		<Link to="/" className="text-decoration-none">
		<h1 className="text-info">Unlock a world of connections and memories...</h1>
		</Link>
  </div>
);
