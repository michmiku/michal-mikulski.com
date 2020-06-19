import React, { useEffect, useRef } from "react";

const Header = () => {
    useEffect(() => {
        window.onscroll = () => {
            icon.current.style.transform = 'translate(0px, ' + window.pageYOffset / 2 + '%)'
        }
    }, [])
    const icon: any = useRef(null)
    return (
        <div className="header-container">
            <div className="header"></div>
            <div ref={icon} className="logo"></div>
        </div>
    )
}

export default Header;

