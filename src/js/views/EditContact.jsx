import React, { useContext, useState, useEffect } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js
import { Link, useNavigate, useParams } from "react-router-dom"; // A. Import useNavigate

export const EditContact = () => {
//3. desestructuramos store y actions desde hook Context
    const { store, actions } = useContext (Context);
    const params = useParams();

    const [ name, setName ] = useState ("");
    const [ address, setAddress ] = useState ("");
    const [ phone, setPhone ] = useState ("");
    const [ email, setEmail ] = useState ("");

    const navigate = useNavigate();  // B.initialize useNavigate

    //When creating a new contact, no existing data fetching is required; the form starts with empty values. 
    //Now, for editing, we need useEffect to fetch contact details to populate the form for modification.
    
    useEffect(() => {
        async function fetchData() {
            if (params.contactId && !store.selectedContact.id) {
                // Check if contact details are not already present
                const response = await actions.getSingleContact(params.contactId);
                const selectedContact = store.selectedContact;
                console.log(selectedContact);
                setName(selectedContact.full_name);
                setAddress(selectedContact.address);
                setPhone(selectedContact.phone);
                setEmail(selectedContact.email);
            }
        }
        fetchData();
    }, [params.contactId, store.selectedContact]);


    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const updatedContact = {   //we create the object
            full_name: name, 
            address,    //when the key:value pair has the same name we can write it once, but we can also write address: address, and so on
            phone, 
            email, 
            agenda_slug: "shared_agenda"
        };

        const contactId = params.contactId; // FIXED- we need to get the contactId from params. Without this ID, the action wouldn't know which contact to update, and the server wouldn't know which record in the database to modify!
        actions.updateContact(contactId, updatedContact); // FIXED - and pass contactId to updateContact
        navigate("/contact"); // navigate to go back to contact list

    };

    const handleCancel = () => {
        navigate("/contact"); 
    };
    

    return (
        <div>
            <h1 className="text-center mt-3">Edit contact </h1>

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
                    <button type="submit" className="btn btn-info me-3">Update</button>
                    <button type="button" className="btn btn-dark" onClick={handleCancel}>Cancel</button> 
                    <div className="d-flex justify-content-center m-2 mb-5">
                    <Link className="btn btn-outline-info" to="/contact">Go back to contacts</Link>
                    </div>
                </div>
            </form>



        </div>
    )
}