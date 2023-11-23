import React, { useContext } from "react"; //1. import useContext  
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'



export const Contact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    const urlImg = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const handleError = (event) =>{
        event.target.src = "https://img.freepik.com/free-photo/user-front-side-with-white-background_187299-40007.jpg?w=740&t=st=1700666482~exp=1700667082~hmac=a0cf24972e737bfad23258f77ed21fc8798dd4f0ce93f2f19253281da1dff8ad"
    }
    
  
    const handleEdit = () => {
        console.log('Edit button clicked');
        // To be written
    }

    const handleDelete = async (item) => {
        actions.deleteContact(item);
    };
    
        return (
            <div>
                <h1 className="text-center mb-3">Contacts</h1>
                <div>
                    {store.contactList.length > 0 ? (
                        store.contactList.map((item, index) => (
                            <div className="card container-fluid mb-3" style={{ width: "40rem" }} key={index}>
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-2">
                                        <img src={urlImg} onError={handleError} className="card-img rounded-circle" alt="profile picture" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.full_name}</h5>
                                            <p className="card-text">{item.address}</p>
                                            <p className="card-text">{item.phone}</p>
                                            <p className="card-text">{item.email}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <span><FontAwesomeIcon icon={faPencil} className="me-5" onClick={handleEdit} /></span>
                                        <span><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item)} /></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No contacts available</p>
                    )}
                </div>
            </div>
        );
    };