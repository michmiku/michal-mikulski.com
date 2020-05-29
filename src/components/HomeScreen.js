import React, { } from 'react'
import ScrollSpy from "./ScrollSpy.js"
import Footer from './Footer.js'

const HomeScreen = () => {
    return (
        <div className="container-fluid pl-0 pr-0">
            <div className="header">
                <a>Michał Mikulski</a>
            </div>
            <ScrollSpy />
            <Footer />
        </div>
    )
}
export default HomeScreen