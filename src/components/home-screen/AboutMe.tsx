import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"


interface Props {

}

const AboutMe: React.FC<Props> = () => {
    const [currentClass, setCurrentClass] = useState(false)
    const aboutMe: any = useRef(null)
    const skillsScroll = () => {
        let widnowHeight = window.innerHeight
        if (aboutMe.current.getBoundingClientRect().top < 0) {
            setCurrentClass(false)
        }
        else if (aboutMe.current.getBoundingClientRect().top - window.innerHeight + widnowHeight / 2 < 0) {
            setCurrentClass(true)
        }
        else {
            setCurrentClass(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', skillsScroll)
    }, [])
    return (
        <motion.section id="about-me" ref={aboutMe}>
            <AnimatePresence>
                {currentClass && (
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        exit={{ x: '-100vw' }}
                    >About me
                    </motion.h1>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {currentClass && (
                    <motion.p
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ x: '-100vw' }}>My name is Michał Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones I have.
                        <h2>Education</h2>
                        <h4>2016-2020</h4>
                        <p>Upper-Secondary School of Communications in Cracow</p>
                        <a href="http://tl.krakow.pl/" target="_blank">http://tl.krakow.pl/</a>
                    </motion.p>
                )}
            </AnimatePresence>

        </motion.section>

    )
}

export default AboutMe;

