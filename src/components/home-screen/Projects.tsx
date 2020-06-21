import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import music from "../../assets/images/music-img.png"
import covid from "../../assets/images/covid-img.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

interface Props {
    enterViewPort: number;
    exitViewPort: number;
}

const Projects: React.FC<Props> = ({ enterViewPort, exitViewPort }) => {
    const [currentClass, setCurrentClass] = useState(false)
    useEffect(() => {
        if ((enterViewPort === 3 || enterViewPort === 4) && exitViewPort === 2 || enterViewPort === 4) {
            setCurrentClass(true)
        }
        else if (enterViewPort === 2 || exitViewPort === 4) {
            setCurrentClass(false)
        }
    }, [enterViewPort, exitViewPort])
    return (
        currentClass ?
            <motion.section id="projects">
                <motion.h1
                    initial={{ y: '50vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >Projects</motion.h1>
                <motion.div className="projects-container grid">
                    <motion.div className="card text-center project"
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <img src={music} className="card-img-top project-img " alt="music" />
                        <div className="project-text">
                            <a>

                                <Link to="/music" className="ui inverted grey basic button first-button" href="#">Music player</Link>
                                <a href="https://github.com/michmiku/music-player" target="blank" className='ui inverted grey basic button second-button' >Github</a>

                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="card text-center project"
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={covid} className="card-img-top project-img " alt="covid" />
                        <div className="project-text">
                            <a>
                                <Link to="/covid19" className="ui inverted grey basic button first-button" href="#">Covid-19 data</Link>
                                <a href="https://github.com/michmiku/covid19-data" target="blank" className="ui inverted grey basic button second-button">Github</a>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
            :
            <motion.section id="projects">
                <motion.h1
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: '50vh', opacity: 0 }}
                    transition={{ delay: 0.2 }}>Projects</motion.h1>
                <motion.div className="projects-container grid">
                    <motion.div className="card text-center project"
                        initial={{ x: 0 }}
                        animate={{ x: '-100vw' }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={music} className="card-img-top project-img " alt="music" />
                        <div className="project-text">
                            <a>

                                <Link to="/music" className="ui inverted grey basic button first-button" href="#">Music player</Link>
                                <a href="https://github.com/michmiku/music-player" target="blank" className='ui inverted grey basic button second-button' >Github</a>

                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="card text-center project"
                        initial={{ x: 0 }}
                        animate={{ x: '100vw' }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={covid} className="card-img-top project-img " alt="covid" />
                        <div className="project-text">
                            <a>
                                <Link to="/covid19" className="ui inverted grey basic button first-button" href="#">Covid-19 data</Link>
                                <a href="https://github.com/michmiku/covid19-data" target="blank" className="ui inverted grey basic button second-button">Github</a>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
    )
}

export default Projects;

