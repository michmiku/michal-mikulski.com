import React, { useState, useEffect } from "react";
import mern from "../../images/mern.jpg"
import { Link } from 'react-router-dom'

interface Props {
    enterViewPort: number;
    exitViewPort: number;
}

const Projects: React.FC<Props> = ({ enterViewPort, exitViewPort }) => {
    const [currentClass, setCurrentClass] = useState('info-projects')
    useEffect(() => {
        if ((enterViewPort === 3 || enterViewPort === 4) && exitViewPort === 2) {
            setCurrentClass('current-info-aboutme')
        }
        else if (enterViewPort === 2) {
            setCurrentClass('info-aboutme')
        }
    }, [enterViewPort, exitViewPort])
    return (
        <div className={currentClass} style={{ marginBottom: "80px" }}>
            <h1 style={{ paddingBottom: '20px' }}>Projects</h1>
            <div className="card text-center" style={{ width: "14rem", backgroundColor: 'rgb(71, 71, 71)' }}>
                <img src={mern} className="card-img-top" alt="mern" />
                <div className="card-body">
                    <Link to="/music" className="btn btn-link" href="#" style={{ fontSize: '18px' }}>Music player</Link>
                    <a className="btn btn-link" href="https://github.com/michmiku/music-player" target="_blank" style={{ fontSize: '18px' }}>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;

