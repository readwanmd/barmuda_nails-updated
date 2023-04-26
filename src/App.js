import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.sass';
import NavBar from './components/Navbar';
import './media-screen.sass';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';
import CopyRight from './page/CopyRight';
import Footer from './page/Footer';
import Home from './page/Home';
import Packages from './page/Packages';
import Reviews from './page/Reviews';
import Service from './page/Service';

function App() {
	const [fixNav, setFixNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY > 200) {
			setFixNav(true);
		} else {
			setFixNav(false);
		}
	};

	window.addEventListener('scroll', changeNav);

	return (
		<div>
			<div>
				<NavBar fixNav={fixNav} />
			</div>
			<div className="App">
				<Home />
				<AboutUs />
				<Service />
				<Reviews />
				<Packages />
				<Contact />
				<Footer />
				<CopyRight />
			</div>
		</div>
	);
}

export default App;
