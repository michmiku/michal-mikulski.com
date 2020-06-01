import React, { useState } from "react";
import { Link } from 'react-scroll'
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ScrollTrigger from 'react-scroll-trigger';

const ScrollSpy = () => {

    const [enterViewPort, setEnterViewPort] = useState(0)
    const [exitViewPort, setExitViewPort] = useState(0)

    const onEnterViewport = (number) => {
        setEnterViewPort(number)
    }

    const onExitViewPort = (number) => {
        setExitViewPort(number)
    }

    return (
        <div>
            <ScrollTrigger style={{ position: 'absolute', top: '0' }} onEnter={() => { onEnterViewport(5) }}></ScrollTrigger>
            <div id="list-example" className="list-group position-sticky sticky-top scroll-buttons" style={{ top: '250px' }}>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-1" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button">Skills</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-2" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >About Me</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-3" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >Projects</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-4" smooth={true} duration={500}><button type="button" className="btn  btn-outline-dark scrollspy-button" >Contact</button></Link>
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example "  >
                <ScrollTrigger id="list-item-1" className="scrollS" onEnter={() => { onEnterViewport(1) }} onExit={() => { onExitViewPort(1) }}></ScrollTrigger>
                <Skills enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger id="list-item-2" className="scrollS" onEnter={() => { onEnterViewport(2) }} onExit={() => { onExitViewPort(2) }}></ScrollTrigger>
                <AboutMe enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger id="list-item-3" className="scrollS" onEnter={() => { onEnterViewport(3) }} onExit={() => { onExitViewPort(3) }}></ScrollTrigger>
                <Projects enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger style={{ position: 'absolute' }} onEnter={() => { onEnterViewport(4) }} onExit={() => { onExitViewPort(1) }}></ScrollTrigger>
            </div>
        </div>
    )
}

export default ScrollSpy;

