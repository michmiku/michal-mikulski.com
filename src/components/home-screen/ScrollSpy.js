import React from "react";
import { Link } from 'react-scroll'
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const ScrollSpy = () => {
    return (
        <div>
            <div id="list-example" className="list-group position-sticky sticky-top scroll-buttons" style={{ top: '250px' }}>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-1" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button">Skills</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-2" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >About Me</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-3" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >Projects</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-4" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >Contact</button></Link>
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example "  >
                <div id="list-item-1" className="scrollS"></div>
                <Skills />
                <div id="list-item-2" className="scrollS"></div>
                <AboutMe />
                <div id="list-item-3" className="scrollS"></div>
                <Projects />
            </div>
        </div>
    )
}

export default ScrollSpy;

