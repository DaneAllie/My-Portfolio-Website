import About from "../page/About";
import Contact from "../page/Contact";
import Projects from "../page/Projects";
import Skills from "../page/Skills";
import Assignments from "../page/Assignments";

export const AllRouteList = [
	{ name: "About", path: "/", comp: <About /> },
	{ name: "Contact", path: "/contact,", comp: <Contact /> },
	{ name: "Projects", path: "/projects,", comp: <Projects /> },
	{ name: "Assignments", path: "/Assignments,", comp: <Assignments /> },
	{ name: "Skills", path: "/skills,", comp: <Skills /> }
];

/*export const AllRouteObj = [
	About :{ name: "About", path: "/", comp: <About /> },
	Contact: { name: "Contact", path: "/contact,", comp: <Contact /> },
	Projects: { name: "Projects", path: "/projects,", comp: <Projects /> },
	Skills: { name: "Skills", path: "/skills,", comp: <Skills /> }
];
}*/
