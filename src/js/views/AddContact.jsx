import React, { useContext, useState } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js
import { Link, useNavigate } from "react-router-dom"; // A. Import useNavigate

export const AddContact = () => {
//3. desestructuramos store y actions desde hook Context
    const { store, actions } = useContext (Context);
    const [ name, setName ] = useState ("");
    const [ address, setAddress ] = useState ("");
    const [ phone, setPhone ] = useState ("");
    const [ email, setEmail ] = useState ("");
    const navigate = useNavigate();  // B.initialize useNavigate
    
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const newContact = {   //we create the object
            full_name: name, 
            address,    /*when the key:value pair has the same name we can write it once, but we can also write address: address, and so on  */ 
            phone, 
            email, 
            agenda_slug: "shared_agenda" }
        actions.createContact(newContact);  //Now the newContact object, which contains the new contact information, is passed as a parameter to initiate the process of adding a new contact to the application by invoking the createContact action in Flux
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");

        navigate("/contact");  //C. Use navigate to go back to contact list
    }

    const handleReset = () => {  //to clear form fields by resetting state values
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="container">
            <h1 className="text-center mt-3">Add new contact </h1>
            
            <form onSubmit={handleOnSubmit}>
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="InputName" className="form-label fw-bold">Name:</label>
                        <input type="text" required className="form-control" id="InputName" aria-describedby="textHelp" value={name} onChange ={(event) =>setName (event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputAddress" className="form-label fw-bold">Address:</label>
                        <input type="text" required className="form-control" id="InputAddress" aria-describedby="textHelp" value={address} onChange ={(event) =>setAddress (event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPhone" className="form-label fw-bold">Phone:</label>
                        <input type="text" required className="form-control" id="InputPhone" aria-describedby="textHelp" value={phone} onChange ={(event) =>setPhone(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label fw-bold">Email address:</label>
                        <input type="email" required className="form-control" id="InputEmail" aria-describedby="emailHelp" value={email} onChange ={(event) =>setEmail (event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-info me-3">Submit</button>
                    <button type="reset" className="btn btn-dark" onClick={handleReset}>Reset</button>
                    <div className="d-flex justify-content-center m-2 mb-5">
                    <Link className="btn btn-outline-info" to="/contact">Go back to contacts</Link>
                    </div>
                </div>
            </form>



        </div>
    )
}