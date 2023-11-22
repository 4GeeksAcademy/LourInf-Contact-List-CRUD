const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			baseURL: "https://playground.4geeks.com/apis/fake/contact/",
			isLogin: false,
			contactList: [],
			selectedContact: {},
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//I add fetch as part of the object
			getContacts: async () => {
					//because I define my baseURL in the store, now I need to access baseURL from the store by using "getStore().baseURL" before constructing the API endpoint URL
				const store = getStore();
				const url = store.baseURL + "/agenda/shared_agenda";
				const options = {
					method: "GET"
					
				}
				const response = await fetch (url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					setStore({ "contactList": data}) 
					console.log(data)

				} else
					console.log("Error:", response.status, response.statusText)
		
				
			  },

		}
	};
};

export default getState;
