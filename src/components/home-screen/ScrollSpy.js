import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-scroll'
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ScrollTrigger from 'react-scroll-trigger';
import Header from './Header'

const ScrollSpy = () => {

    const [enterViewPort, setEnterViewPort] = useState(0)
    const [exitViewPort, setExitViewPort] = useState(0)

    const onEnterViewport = (number) => {
        setEnterViewPort(number)
        console.log('enter:', number)
    }

    const onExitViewPort = (number) => {
        setExitViewPort(number)
        console.log('exit:', number)
    }

    return (
        <div>
            <Header />
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example "  >
                <ScrollTrigger style={{ position: 'absolute', top: '50px', width: '5px' }} onEnter={() => { onEnterViewport(5) }} onExit={() => { onExitViewPort(5) }}></ScrollTrigger>
                <ScrollTrigger style={{ position: 'absolute', top: '200px', width: '5px' }} onExit={() => { onExitViewPort(6) }}></ScrollTrigger>
                <ScrollTrigger id="list-item-1" className="scrollS" onEnter={() => { onEnterViewport(1) }} onExit={() => { onExitViewPort(1) }} style={{ position: 'relative', bottom: '50px' }}></ScrollTrigger>
                <Skills enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger id="list-item-2" className="scrollS" onEnter={() => { onEnterViewport(2) }} onExit={() => { onExitViewPort(2) }}></ScrollTrigger>
                <AboutMe enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger id="list-item-3" className="scrollS" onEnter={() => { onEnterViewport(3) }} onExit={() => { onExitViewPort(3) }}></ScrollTrigger>
                <Projects enterViewPort={enterViewPort} exitViewPort={exitViewPort} />
                <ScrollTrigger style={{ position: 'absolute' }} onEnter={() => { onEnterViewport(4) }} onExit={() => { onExitViewPort(4) }}></ScrollTrigger>
            </div>
        </div>
    )
}

export default ScrollSpy;

