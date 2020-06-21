import React, { useEffect } from 'react'
import ScrollSpy from "./ScrollSpy"
import Footer from './Footer'
import axios from 'axios'
import Settings from "../../Settings.json"

const HomeScreen = () => {
    useEffect(() => {
        axios.get(Settings.server + 'music/')
    }, [])
    return (
        <div className="container-fluid pl-0 pr-0 home-container">
            <ScrollSpy />
            <Footer />
        </div>
    )
}
export default HomeScreen