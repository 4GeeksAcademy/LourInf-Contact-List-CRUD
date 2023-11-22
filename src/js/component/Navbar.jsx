import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light ms-3 mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div className="ml-auto">
                <Link to="/contact">
                    <button className="btn btn-primary  me-3">Contact</button>
                </Link>
                <Link to="/add">
                    <button className="btn btn-primary  me-3">Add new contact</button>
                </Link>
            </div>
        </nav>
    );
};