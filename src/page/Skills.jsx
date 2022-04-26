import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Skills() {
	return (
		<div className='App'>
			<div className='content-area group'>
				<Header />

				<div className='container'>
					<div className='main-area'>
						<h2>My Skills</h2>
						<p>
							I am an innovative and logical thinker who has a keen understanding for technology. Passionate and knowledgeable in Project Management and IT Management in accordance to the{" "}
							<b>ITIL principles</b>. Skilled in the understanding of Business Model Canvas and Software Development Methodologies suc h a <b>SDLC</b> process and Agile Development.
						</p>

						<p>
							Well ve rsed in Object-Oriented Programming concepts and Design Principles and Patterns for better coding practices, with C# being my native language and an intermediate
							understandin g of <b>Java, PHP, HTML, CSS, PL/SQL and JavaScript</b>. I have advanced skills Database Design and Management in the following: Oracle Databases, Microsoft SQL
							server and SQL server management.
						</p>

						<p>
							Intermediate skills in mobile app development using <b>React</b> and Android Studio. Intermediate skills in creation of E-commerce websites, Magazine websites and
							Directory/contact websites. During m y years at Varsity College/NMU and as a self-defense <b>instructor</b>. I have learned how to work well with others and have had experience
							in some leadership roles in order to lead/work in a team efficiently and productively together.
						</p>

						<div className='table-area'>
							<h3>Programming languages:</h3>
							<table>
								<thead>
									<tr>
										<th className='skill'>Language </th>
										<th className='rating'> Rating(Max 10) </th>
										<th className='duration'> Duration </th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>C#</td>
										<td>8</td>
										<td>3 Years</td>
									</tr>
									<tr>
										<td>Java</td>
										<td>5</td>
										<td>1 Years</td>
									</tr>
									<tr>
										<td>JavaScript</td>
										<td>7</td>
										<td>1 Years</td>
									</tr>
									<tr>
										<td>PHP</td>
										<td>5</td>
										<td>2 Years</td>
									</tr>
									<tr>
										<td>PL/Sql</td>
										<td>9</td>
										<td>2 Years</td>
									</tr>

									<tr>
										<td>HTML</td>
										<td>10</td>
										<td>3 Years</td>
									</tr>
									<tr>
										<td>CSS</td>
										<td>9</td>
										<td>3 Years</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h3>Technologies used:</h3>
						<dl className='DescriptionList'>
							<dt>
								<b>Integrated Development Environments</b>
							</dt>
							<dd>Microsoft Visual Studio (IDE software)</dd>
							<dd>Net beans (IDE software)</dd>
							<dd>Android Studio (IDE software)</dd>
							<dd>Atom (IDE editor)</dd>
							<dd>React Native</dd>
							<dt>
								<b>Database Software and Systems</b>
							</dt>
							<dd>SQL Server Express</dd>
							<dd>MySQL Oracle SQL Developer</dd>
							<dd>SQL Server Management Studio</dd>
							<dd>PhpMyAdmin</dd>
							<dd>FireBase</dd>
							<dt>
								<b>Other software tools</b>
							</dt>
							<dd>Microsoft Azure</dd>
							<dd>XAMPP</dd>
							<dd>Git</dd>
							<dd>Docker</dd>
						</dl>

						<h3>Software Skills:</h3>
						<ul className='unorderedList'>
							<li>.Net Framework and .net Core</li>
							<li>ASP.NET MVC WebForms and WebAPI</li>
							<li>WPF</li>
							<li>Azure Could Computing</li>
							<li>RESTful API and JSON</li>
							<li>UI Design</li>
							<li>Web Design</li>
							<li>Microsoft Office</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Skills;
