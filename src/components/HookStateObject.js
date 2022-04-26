import React, { useState } from "react";

function HookStateObject() {
	const [about, setAbout] = useState({ name: "Dane", bio: "Intern Developer" });
	return (
		<form>
			<h3>Enter your name and Role below:</h3>
			<div>
				<input className='v1' type='text' value={about.name} onChange={(e) => setAbout({ ...about, name: e.target.value })} />
				<input className='v1' type='text' value={about.bio} onChange={(e) => setAbout({ ...about, bio: e.target.value })} />
			</div>

			<div className='v2'>
				<h3>Your name:</h3>
				<p>{about.name}</p>
				<h3>Your Role: </h3>
				<p> {about.bio}</p>
				<h3>Current state of object:</h3>
				<p> {JSON.stringify(about)}</p>
			</div>
		</form>
	);
}

export default HookStateObject;
