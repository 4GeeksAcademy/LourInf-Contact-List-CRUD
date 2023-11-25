import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//Import views
import { Home } from "./views/Home.jsx";
import { Contact } from "./views/Contact.jsx";
import { AddContact } from "./views/AddContact.jsx";
import { EditContact } from "./views/EditContact.jsx";
import { ViewContact } from "./views/ViewContact.jsx";
import injectContext from "./store/appContext";
//Import components
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/edit/:contactId" element={<EditContact />} />
						<Route path="/contact/:contactId" element={<ViewContact />} />
						<Route path="*" element={<h2 class="text-center m-5"> Not found!</h2>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
