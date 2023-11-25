import React, { useContext } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js
import { Link } from "react-router-dom";

export const EditContact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    return (
        <div>
            <h1 className="text-center mt-3">Edit contact </h1>


            <form>
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="InputName" className="form-label fw-bold">Name:</label>
                        <input type="text" className="form-control" id="InputName" aria-describedby="textHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label fw-bold">Email address:</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPhone" className="form-label fw-bold">Phone:</label>
                        <input type="text" className="form-control" id="InputPhone" aria-describedby="textHelp" />
                    </div>
                    <button type="submit" className="btn btn-info me-3">Update</button>
                    <Link className="btn btn-dark" to="/contact">Cancel</Link>
                </div>
            </form>



        </div>
    )
}