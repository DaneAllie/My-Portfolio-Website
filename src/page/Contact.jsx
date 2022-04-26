import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />
				<div className='container'>
					<div className='main-area'>
						<h2>Contact Me</h2>

						<form>
							<label>Contact Form</label>

							<label htmlFor='email' className='hidden-label'>
								Email:
							</label>
							<input type='email' className='email' placeholder='Email'></input>

							<label for='name' className='hidden-label'>
								Name:
							</label>
							<input type='name' className='name' placeholder='Your Name'></input>

							<label for='Company' className='hidden-label'>
								Company:
							</label>
							<input type='Company' className='Company' placeholder='Your Company'></input>

							<label>How did you discover me?</label>
							<br></br>
							<br></br>
							<select className='second'>
								<option value='option1'>Word of Mouth</option>
								<option value='option2'>LinkedIn</option>
								<option value='option3'>FaceBook</option>
								<option value='option4'>Reference</option>
							</select>
							<br></br>

							<input type='submit' value='Connect'></input>
						</form>

						<br></br>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
