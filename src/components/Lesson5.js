import React, { useState } from "react";

// For this component i chose function over a class, as classes are more used
//  when large amounts of data need to be processed,where as functions use less
// amounts of data and can run the processes smoothly in the background.
function Lesson5() {
	//
	// My array that holds the information entered by the user
	const [items, setItems] = useState([]);
	const [user, setuser] = useState("Dane");
	const addUser = () => {
		if (!items.find((item) => item.name === user)) {
			setItems([...items, { id: items.length, name: user }]);
		}

		// My error handling in the event a user tries to add a user already defined within the array
		else {
			alert(`${user} is already added to array`);
		}
	};
	return (
		<div>
			<h4>Enter new Developer</h4>
			<input type='devzz' value={user} onChange={(event) => setuser(event.target.value)}></input>
			<button type='submit' onClick={() => addUser()}>
				Add user
			</button>
			<h4>Users within Array:</h4>

			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			<br></br>
		</div>
	);
}
export default Lesson5;
