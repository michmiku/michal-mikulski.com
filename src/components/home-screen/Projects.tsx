import React, { useState, useEffect, useRef } from "react";
import { Button } from 'semantic-ui-react'
import music from "../../assets/images/music-img.png"
import covid from "../../assets/images/covid-img.png"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

interface Props {

}

const Projects: React.FC<Props> = () => {
    const [currentClass, setCurrentClass] = useState(false)
    const projects: any = useRef(null)
    const skillsScroll = () => {
        let widnowHeight = window.innerHeight
        if (projects.current.getBoundingClientRect().top - window.innerHeight + widnowHeight / 2 < -20) {
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

        <motion.section id="projects" ref={projects}>
            <AnimatePresence>
                {currentClass && (
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        exit={{ x: '-100vw' }}
                    >Projects</motion.h1>
                )}
            </AnimatePresence>

            <motion.div className="projects-container grid">
                <AnimatePresence>
                    {currentClass && (
                        <motion.div className="card text-center project"
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <img src={music} className="card-img-top project-img " alt="music" />
                            <div className="project-text">
                                <a>

                                    <Link to="/music" className="button" href="#">Music player</Link>
                                    <a href="https://github.com/michmiku/music-player" target="blank" className='button' >Github</a>

                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.div className="card text-center project"
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}
                        >
                            <img src={covid} className="card-img-top project-img " alt="covid" />
                            <div className="project-text">
                                <a>
                                    <Link to="/covid19" className="button" href="#">Covid-19 data</Link>
                                    <a href="https://github.com/michmiku/covid19-data" target="blank" className="button">Github</a>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </motion.section>

    )
}

export default Projects;

