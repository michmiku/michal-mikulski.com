import React, { } from "react";
import TS from '../../assets/images/TypeScript.png'
import MongoDB from '../../assets/images/mongodb.png'
import { motion } from "framer-motion"


interface Props {
    currentClass: any,
    item: {
        icon: string;
        text: string;
        color: string;
        img: boolean;
        duration: number
    },
}
const skillsHover = {
    initial: {
        x: '-100vw'
    },
    hover: {
        scale: 1.2,
        textShadow: "0px 0px 8px rgba(0,0,0,0.5)",
        transition: { delay: 0 }
    },
    animate: {
        x: 0,
    },


}
const Skill: React.FC<Props> = ({ currentClass, item }) => {

    return (

        currentClass && (
            !item.img ?
                <motion.a className="skill"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    variants={skillsHover}
                    initial='initial'
                    whileHover="hover"
                    animate="animate"
                    exit={{ x: '-100vw' }}
                    transition={{ duration: item.duration, delay: 0.2 }}
                >
                    <i className={item.icon} style={{ color: item.color }}></i>
                    <h4 className="skill-text">{item.text}</h4>
                </motion.a>
                :
                <motion.a className="skill"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    variants={skillsHover}
                    initial='initial'
                    whileHover="hover"
                    animate="animate"
                    transition={{ duration: item.duration, delay: 0.2 }}
                    exit={{ x: '-100vw' }}

                >
                    {item.icon === "TS" ?
                        <img className='skill-img' src={TS} onDragStart={(e) => {
                            e.preventDefault()
                        }}></img>
                        :
                        <img className='skill-img' src={MongoDB} onDragStart={(e) => {
                            e.preventDefault()
                        }}></img>
                    }

                    <h4 className="skill-text img-text">{item.text}</h4>
                </motion.a>
        )






    )
}

export default Skill;

