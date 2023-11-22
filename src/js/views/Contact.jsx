import React, { useContext } from "react"; //1. import useContext
import { Context } from "../store/appContext.js"; //2. import useContext from appContext.js

export const Contact = () => {
//3. desestructuramos store y actions desde hook Context
    const {store, actions} = useContext (Context);

    return (
        <div>
            <h1>Contact Part</h1>
        </div>
    )
}