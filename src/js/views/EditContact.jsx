import React, { useContext } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js

export const EditContact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    return (
        <div>
            <h1>Edit contact Part</h1>
        </div>
    )
}