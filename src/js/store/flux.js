const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://playground.4geeks.com/apis/fake/contact/",
			contactList: [],
			selectedContact: {},
		},
		
		actions: {
			/*Notes on Syntax inside actions: 
					getActions() ==> use it to call another action (function) inside actions (function)
					const store = getStore(); ==> use it to access to some value inside store
					setStore({ key: value }); ==> use it to reset the global store value (graba los datos en el store). key: what we want to change; value: new value we want to give it
			*/


			//we add fetch as part of the object
			getContacts: async () => {
					//because we define the baseURL in the store, now I need to access baseURL from the store by using "getStore().baseURL" before constructing the API endpoint URL
				const store = getStore();
				const url = store.baseURL + "/agenda/shared_agenda";
				const options = {
					method: "GET",
					headers:{	
					}
				};
				const response = await fetch (url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					setStore({ "contactList": data}) 
					console.log(data)

				} else
					console.log("Error:", response.status, response.statusText)
				
			  },

			getSingleContact: async (contactId) => {
				const store = getStore();
				const url = `${store.baseURL}/agenda/${contactId}`;  //we can also write it like this: store.baseURL + "/agenda/" + id;
				const options = {
					method: "GET",
					headers:{	
					}
				};
				const response = await fetch (url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					setStore({ "selectedContact": data}) 
					console.log(data)

				} else
					console.log("Error:", response.status, response.statusText)
				
			},

			createContact: async (newContact) => {	  //newContact is the object that we'll receive from the form in AddContact component		
				const store = getStore();
				const url = store.baseURL;
				const options = {
					method: "POST",
					headers: {
						"Content-type": "application/json"},
					body: JSON.stringify(newContact)
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions().getContacts();   // to retrieve sth from the store we use "getStore()". In the same way, to trigger an action (we want to trigger getContacts), we use "getActions".
					//getActions().getContacts(); ensures that after creating a new contact and confirming its addition to the backend (response.ok), the local state in the application is updated to reflect this change in the frontend.
					//remember we need to do always 2 steps: update the backend and update the frontend
					//it will depend on the API, sometimes it will retrieve all contacts so I wouldn't need to trigger it, I would just use for example setStore({ "contactList": data}) 
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			},
			deleteContact: async (id) => {			
				const store = getStore();
				const url = `${store.baseURL}/agenda/${id}`;
				const options = {
					method: "DELETE",
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions.getContacts();   //I need to get back my list of contacts which now won't include the one deleted
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			},

			updateContact: async (contactId, updatedContact) => {			
				const store = getStore();
				const url = `${store.baseURL}/agenda/${contactId}`;
				const options = {
					method: "PUT",
					headers: {
						"Content-type": "application/json"},
					body: JSON.stringify(updatedContact)
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions.getContacts();   //I need to get back my list of contacts with now the updated contact
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			}
		}
	};
};

export default getState;