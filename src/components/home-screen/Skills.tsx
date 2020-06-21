import React, { useState, useEffect, useRef } from "react";
import TS from '../../assets/images/TypeScript.png'
import MongoDB from '../../assets/images/mongodb.png'
import { motion, AnimatePresence } from "framer-motion"


interface Props {

}
const skillsHover = {
    initial: {
        x: '-100vw'
    },
    hover: {
        scale: 1.2,
        textShadow: "0px 0px 8px rgba(0,0,0,0.5)",

    },
    animate: {
        x: 0,
    },


}
const Skills: React.FC<Props> = () => {
    const [currentClass, setCurrentClass] = useState(false)
    const branch: any = useRef(null)
    const leaves: any = useRef(null)
    const skills: any = useRef(null)
    const skillsScroll = () => {
        let currentScroll = window.pageYOffset
        let widnowHeight = window.innerHeight
        if (branch.current !== null) {
            branch.current.style.transform = 'translate(0px, ' + currentScroll / 5 + '%)'
            leaves.current.style.transform = 'translate(0px, ' + currentScroll / 1.5 + '%)'
        }
        if (skills.current.getBoundingClientRect().top < 0) {
            setCurrentClass(false)
        }
        else if (skills.current.getBoundingClientRect().top - window.innerHeight + widnowHeight / 2 < 0) {
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
        <motion.section id="skills" ref={skills}>
            <AnimatePresence>
                {currentClass && (
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        exit={{ x: '-100vw' }}
                    >Skills</motion.h1>
                )}
            </AnimatePresence>

            <motion.div className="skills-container grid">
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            exit={{ x: '-100vw' }}
                            transition={{ duration: 0.5 }}
                        >
                            <i className="fab fa-html5 skill-icon" style={{ color: 'rgb(234,98,40)' }}></i>
                            <h4 className="skill-text">HTML</h4>
                        </motion.a>
                    )}

                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}
                        >
                            <i className="fab fa-css3-alt skill-icon" style={{ color: 'rgb(51,163,213)' }}></i>
                            <h4 className="skill-text">CSS</h4>
                        </motion.a>
                    )}

                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}
                        >
                            <i className="fab fa-js skill-icon" style={{ color: 'rgb(255,217,58)' }}></i>
                            <h4 className="skill-text">JavaScript</h4>
                        </motion.a>
                    )}

                </AnimatePresence>

                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}

                        >
                            <img className='skill-img' src={TS} onDragStart={(e) => {
                                e.preventDefault()
                            }}></img>
                            <h4 className="skill-text img-text">TypeScript</h4>
                        </motion.a>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-bootstrap skill-icon" style={{ color: 'rgb(84,59,121)' }}></i>
                            <h4 className="skill-text">Bootstrap</h4>
                        </motion.a>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-react skill-icon" style={{ color: 'rgb(97,218,251)' }}></i>
                            <h4 className="skill-text">React/Redux</h4>
                        </motion.a>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-react skill-icon" style={{ color: 'rgb(97,218,251)' }}></i>
                            <h4 className="skill-text">React Native</h4>
                        </motion.a>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-sass skill-icon" style={{ color: 'rgb(201,97,150)' }}></i>
                            <h4 className="skill-text">Sass</h4>
                        </motion.a>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-node-js skill-icon" style={{ color: 'rgb(140,200,75)' }}></i>
                            <h4 className="skill-text">Node.js</h4>
                        </motion.a>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-node-js skill-icon" style={{ color: 'rgb(140,200,75)' }}></i>
                            <h4 className="skill-text">Express</h4>
                        </motion.a>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            variants={skillsHover}
                            initial='initial'
                            whileHover="hover"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <img className='skill-img' src={MongoDB} onDragStart={(e) => {
                                e.preventDefault()
                            }}></img>
                            <h4 className="skill-text img-text">MongoDB</h4>
                        </motion.a>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentClass && (
                        <motion.a className="skill"
                            drag
                            variants={skillsHover}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            whileHover="hover"
                            initial='initial'
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            exit={{ x: '-100vw' }}>
                            <i className="fab fa-git-alt skill-icon" style={{ color: 'rgb(240,81,51)' }}></i>
                            <h4 className="skill-text">Git</h4>
                        </motion.a>
                    )}
                </AnimatePresence>

            </motion.div>
            <div ref={leaves} className="sakura-leaves"></div>
            <div ref={branch} className="sakura-branch"></div>

        </motion.section>



    )
}

export default Skills;

