import React, { useContext } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js

export const Contact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    const urlImg = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const handleError = (event) =>{
        event.target.src = "https://img.freepik.com/free-photo/user-front-side-with-white-background_187299-40007.jpg?w=740&t=st=1700666482~exp=1700667082~hmac=a0cf24972e737bfad23258f77ed21fc8798dd4f0ce93f2f19253281da1dff8ad"
    }

    return (
        <div>
            <h1 className="text-center mb-3">Contacts</h1>
            <div>
                {store.contactList.length > 0 ? (  // conditional to ensure contactList is not empty before I map it
                    store.contactList.map((item, index) => (
                        <div className="card container-fluid" style={{ width: "40rem" }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-3">
                                    <img src={urlImg} onError={handleError} className="card-img rounded-circle" alt="profile picture" />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.full_name}</h5>
                                        <p className="card-text">{item.address}</p>
                                        <p className="card-text">{item.phone}</p>
                                        <p className="card-text">{item.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (   // if contactList is empty, display this message
                    <p>No contacts available</p>
                )}
            </div>
        </div>
    )
}