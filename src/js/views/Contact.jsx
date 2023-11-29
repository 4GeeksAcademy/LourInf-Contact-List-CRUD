import React, { useContext } from "react"; //1. import useContext  
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export const Contact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    const urlImg = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const handleError = (event) =>{
        event.target.src = "https://img.freepik.com/free-photo/user-front-side-with-white-background_187299-40007.jpg?w=740&t=st=1700666482~exp=1700667082~hmac=a0cf24972e737bfad23258f77ed21fc8798dd4f0ce93f2f19253281da1dff8ad"
    }
    
    const handleDelete = (id) => {
        actions.deleteContact(id);
    };
    
     return (
            <div>
                <h1 className="text-center m-3">Contacts</h1>
                <div>
                    {store.contactList.length > 0 ? (
                        store.contactList.map((item, id) => (
                            <div className="card container-fluid mb-3" style={{ width: "70rem" }} key={id}>
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-2">
                                        <img src={urlImg} onError={handleError} className="card-img rounded-circle" alt="profile picture" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title ">{item.full_name}</h5>
                                            <p> <span className="text-info fw-bold"> Address: </span> {item.address}</p> 
                                            <p> <span className="text-info fw-bold"> Phone: </span>{item.phone} </p>
                                            <p> <span className="text-info fw-bold"> Email: </span> {item.email} </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex">
                                    <Link to={`/contact/${item.id}`}><span><FontAwesomeIcon icon={faEye} className="me-3 btn btn-outline-warning"/></span></Link>
                                        <Link to={`/edit/${item.id}`}><span><FontAwesomeIcon icon={faPencil} className="me-3 btn btn-outline-secondary"/></span></Link>
                                        <span><FontAwesomeIcon icon={faTrash} className="btn btn-outline-danger" onClick={() => handleDelete(item.id)}/></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-secondary fs-4 text-center m-5"><em>No contacts available</em></p>
                    )}
                </div>
                <div className="d-flex justify-content-center">
                <Link to="/add" className="d-flex btn btn-outline-info mb-5 fw-bold btn-lg" > Add Contact </Link>
                </div>
            </div>
        );
    };