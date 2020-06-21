import React, { useEffect, useRef, } from "react";
interface Props {
}
const Header: React.FC<Props> = ({ }) => {
    const headerScroll = () => {
        if (icon.current !== null) {
            icon.current.style.transform = 'translate(0px, ' + window.pageYOffset / 1.8 + '%)'
            item.current.style.transform = 'translate(0px, -' + window.pageYOffset / 18 + '%)'
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerScroll)
    }, [])
    const icon: any = useRef(null)
    const item: any = useRef(null)

    return (
        <section id="header">
            <div className="header-image"></div>


            <div ref={icon} className="header-logo"

            ></div>
            <div ref={item} className="header-item"></div>
        </section>
    )
}

export default Header;

