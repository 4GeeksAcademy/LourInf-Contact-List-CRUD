import React, {useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext.js"; 

import { ContactSearch } from './ContactSearch.jsx';              //{/* PART OF SEARCH ------> NOT WORKING, DELETE IF NEEDED */}

export const Navbar = () => {
    const  {store, actions } = useContext (Context); 
    
    
    const [searchContact, setSearchContact] = useState("");         //{/* PART OF SEARCH ------> NOT WORKING, DELETE IF NEEDED */}
    const filteredContacts = store.contactList.filter(item =>   
    item.full_name.toLowerCase().includes(searchContact.toLowerCase())     
    );



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
                
                <label htmlFor="inputSearch" className="form-label"></label>
                <input type="text" className="form-control me-3" id="textSearch" aria-describedby="textSearch" placeholder="Search contact..."  style={{ width: "150px" }}
                     value={searchContact} onChange={(event) => setSearchContact (event.target.value)} /> {/* PART OF SEARCH ------> NOT WORKING, DELETE IF NEEDED */}
            </div>
            <ContactSearch /> {/* PART OF SEARCH ------> NOT WORKING, DELETE IF NEEDED (Not sure where should I put the component, here is ok?) */}
        </nav>
    );
};