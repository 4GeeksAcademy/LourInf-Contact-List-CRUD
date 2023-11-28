import React, {useContext, useEffect} from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context

export const ViewContact = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const params = useParams(); // declare params using useParams
    console.log(params); //in my url if i put /contact/99899707017 being the nr the :contactId, I can see in the console that it's taking it
    
    //console.log(store.contactList[params.contactId]);      //  ---->>> NOT WORKING: IN CONSOLE I GET "UNDEFINED" <<<----
   

    useEffect(()=>{
        async function fetchData() {
            if (params.contactId) {
            const response = await actions.getSingleContact(params.contactId);
            console.log(store.selectedContact); 
        }}
          fetchData();
    }, [])




    // ------------->>>> NOT WORKING 0 <<<<<<----------------------
    //const subindice = params.contactId
    //const person = store.contactList[subindice]
    //console.log(person)


     // ------------->>>> useEffect NOT WORKING 1 <<<<<<----------------------
    //useEffect(() => {
      //  [store.contactList, params.contactId]);
    //}


    // ------------->>>>useEffect NOT WORKING 2 <<<<<<----------------------
    //get back the param of the url
    //useEffect(() => {
    //     actions.getSingleContact(params.contactId);
    // }, [params.contactId]); 
    
    

    return(
        <div>
        <h1 >Contact</h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-dark text-white" style={{ width: "90rem" }}>
                <img src="#" className="card-img" alt="contact image" />
                    <div className="card-body d-flex flex-column col-11">
                    

                    {!store.selectedContact ? 
                        <Spinner />
                    :
                    
                    <div className="text-center flex-grow-1">
                    <h3 className="card-title text-center mb-4 text-warning">{store.selectedContact.full_name}</h3>
                    <p><strong> Name: </strong> {store.selectedContact.name}</p>
                                       
                    </div>
                    }

                        <Link to="/contact" className="btn btn-outline-secondary">
                            Go back
                        </Link> 
                    </div>
             </div>
        </div>
    )
}

