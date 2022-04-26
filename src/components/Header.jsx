import NavBar from "./NavBar";

function Header() {
	return (
		<div className='App'>
			<header>
				<div className='Header'>
					<h1>Junior Software Developer</h1>
					<p className='hidesmall'>"01101000 01100101 01101100 01101100 01101111"</p>
					<NavBar />
				</div>
			</header>
		</div>
	);
}

export default Header;
