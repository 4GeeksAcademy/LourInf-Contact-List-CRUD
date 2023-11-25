import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="d-flex">
                <Link to="/" className="d-flex text-decoration-none">
                <FontAwesomeIcon icon={faAddressBook} className="fs-1 text-info mt-4 mb-4 ms-4 me-2" />
                <h2 className="text-white mt-4"> Contact <span className="text-info">List</span></h2>
                </Link>
            </div>

            <div className="ml-auto d-flex align-items-center">
                <Link to="/contact">
                    <button className="btn btn-outline-light text-info me-3">Contact List</button>
                </Link>
                <Link to="/add">
                    <button className="btn btn-outline-light text-info me-3">New contact</button>
                </Link>
                <label for="inputSearch" className="form-label"></label>
                <input type="text" className="form-control me-3" id="textSearch" aria-describedby="textSearch" placeholder="Search contact..."  style={{ width: "150px" }} />
            </div>
        </nav>
    );
};