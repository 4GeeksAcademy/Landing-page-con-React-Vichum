import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import CardComponent from "./Cardcomponent";
import Navbar from "./Navbar";
import WelcomeBanner from "./WelcomeBanner.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Navbar/>
			<WelcomeBanner/>
			<CardComponent/>

		</div>
	);
};

export default Home;
