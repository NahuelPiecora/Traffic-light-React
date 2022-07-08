import React, { useState } from "react";

//create your first component
const Home = () => {
const [ selectedColor, setSelectedColor] = useState("");



return (
	<div className="container-fluid">
	<div className="trafficTop"></div>
	<div className="trafficBox">
	
	<div className={"light red"+((selectedColor === "red") ? "light red glow" : "")}
	onClick={() => setSelectedColor("red")} />
	
	<div className={"light yellow"+((selectedColor === "yellow") ? "light yellow glow" : "")}
	onClick={() => setSelectedColor("yellow")} />
	
	<div className={"light green"+((selectedColor === "green") ? "light green glow" : "")}
	onClick={() => setSelectedColor("green")} />
	</div>
	</div>
	);
	};

	export default Home;