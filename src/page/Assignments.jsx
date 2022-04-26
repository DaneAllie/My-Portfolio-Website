import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HookStateObject from "../components/HookStateObject";
import HookStateArray from "../components/Lesson5";

function ClassAssignments() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />
				<div className='container'>
					<div className='main-area'>
						<h2>My Assignments</h2>

						<h3>Assignment 1</h3>
						<HookStateObject />
						<HookStateArray />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ClassAssignments;
