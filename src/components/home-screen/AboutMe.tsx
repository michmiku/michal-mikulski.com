import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"


interface Props {
    enterViewPort: number;
    exitViewPort: number;
}

const AboutMe: React.FC<Props> = ({ enterViewPort, exitViewPort }) => {
    const [currentClass, setCurrentClass] = useState(false)
    useEffect(() => {
        if ((enterViewPort === 2 && exitViewPort === 1) || (enterViewPort !== 1 || exitViewPort === 2) || (exitViewPort === 4)) {
            setCurrentClass(true)
        }
        if ((enterViewPort === 3 && exitViewPort === 2) || (enterViewPort === 1 && exitViewPort === 3) || (enterViewPort === 2 && exitViewPort === 0) || (enterViewPort === 1 && exitViewPort === 0) || enterViewPort === 4 || (enterViewPort === 2 && exitViewPort === 5) || (enterViewPort === 3 && exitViewPort === 3) || (enterViewPort === 3 && exitViewPort === 4) || exitViewPort === 5 || exitViewPort === 6 || (enterViewPort === 2 && exitViewPort === 3)) {
            setCurrentClass(false)
        }
    }, [enterViewPort, exitViewPort])
    return (
        currentClass ?
            <motion.section id="about-me">

                <motion.h1
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}>About me</motion.h1>
                <motion.p
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}>My name is Michał Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones I have.
                        <h2>Education</h2>
                    <h4>2016-2020</h4>
                    <p>Upper-Secondary School of Communications in Cracow</p>
                    <a href="http://tl.krakow.pl/" target="_blank">http://tl.krakow.pl/</a>
                </motion.p>
            </motion.section>
            :
            <motion.section id="about-me">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '100vw' }}
                    transition={{ delay: 0.2 }}>About me</motion.h1>
                <motion.p
                    initial={{ x: 0 }}
                    animate={{ x: '-100vw' }}
                    transition={{ duration: 0.5 }}
                >My name is Michał Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones I have.
                        <h2>Education</h2>
                    <h4>2016-2020</h4>
                    <p>Upper-Secondary School of Communications in Cracow</p>
                    <a href="http://tl.krakow.pl/" target="_blank">http://tl.krakow.pl/</a>
                </motion.p>
            </motion.section>
    )
}

export default AboutMe;

