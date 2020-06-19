import React, { useState, useEffect } from "react";

interface Props {
    enterViewPort: number;
    exitViewPort: number;
}

const AboutMe: React.FC<Props> = ({ enterViewPort, exitViewPort }) => {
    const [currentClass, setCurrentClass] = useState('info-aboutme')
    useEffect(() => {
        if ((enterViewPort === 2 && exitViewPort === 1) || (enterViewPort !== 1 || exitViewPort === 2)) {
            setCurrentClass('current-info-aboutme')
        }
        if ((enterViewPort === 3 && exitViewPort === 2) || (enterViewPort === 1 && exitViewPort === 3) || (enterViewPort === 2 && exitViewPort === 0) || (enterViewPort === 1 && exitViewPort === 0) || enterViewPort === 4 || (enterViewPort === 2 && exitViewPort === 5) || (enterViewPort === 3 && exitViewPort === 3)) {
            setCurrentClass('info-aboutme')
        }
    }, [enterViewPort, exitViewPort])
    return (
        <div className={currentClass}>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h1>About Me</h1>
            </div>
            <div className="aboutme-text">
                <p>My name is Michał Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones I have.</p>
            </div>
            <div className="aboutme-schools">
                <h2>Education</h2>
                <h4>2016-2020</h4>
                <p>Upper-Secondary School of Communications in Cracow</p>
                <a href="http://tl.krakow.pl/" target="_blank">http://tl.krakow.pl/</a>
            </div>
        </div>
    )
}

export default AboutMe;

