import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Projects() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />

				<div className='container'>
					<div className='main-area'>
						<h2>My Projects</h2>

						<div className='box-area'>
							<h4>Project Descriptions</h4>

							<div className='box-a'>
								Created a mapping application in C# with Android Studio using MapBox, RESTful API and JSON files that finds user location, users can drop pins for Location to travel to,
								generates the quickest route to the pin, and displays route directions.
							</div>
							<div className='box-a'>
								Created a website and android application that displays the current water levels for various damns in South African, allows users to submit a report of any
								complaints/problems have occurred. Users may also view the nearest water truck locations in the event of their household having a lack of water (Final year Project).{" "}
							</div>
							<div className='box-a'>
								Designed a C# weather application in VS where admin may login, update, deleted and add new weather forecast data. User once registered and logged in, users may be able to
								select different cities throughout South Africa to see the weather forecast, all data was stored in a relational database using SQL Server.{" "}
							</div>

							<div className='box-a'>
								Created an ecommerce website using Object Oriented PHP and SQL server, where admins may login to update, delete and add items to be sold, users may register/login and view
								items to be bought, add them to shopping cart to finalize their order before buying
							</div>
							<br></br>

							<div className='box-b'> https://github.com/</div>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Projects;
