import React, { useEffect } from 'react'
import Footer from './Footer'
import axios from 'axios'
import Settings from "../../Settings.json"
import Header from './Header'
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const HomeScreen = () => {
    useEffect(() => {
        axios.get(Settings.server + 'music/')
    }, [])
    return (
        <div className="container-fluid pl-0 pr-0 ">
            <Header />
            <Skills />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    )
}
export default HomeScreen