import React, { useEffect } from 'react'
import ScrollSpy from "./ScrollSpy.js"
import Footer from './Footer.js'
import axios from 'axios'
import Settings from "../Settings.json"
import Header from './Header.js'

const HomeScreen = () => {
    useEffect(() => {
        axios.get(Settings.server + 'music/')
    }, [])
    return (
        <div className="container-fluid pl-0 pr-0 home-container">
            <Header />
            <ScrollSpy />
            <Footer />
        </div>
    )
}
export default HomeScreen