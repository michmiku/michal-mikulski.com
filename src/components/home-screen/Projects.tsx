import React, { useState, useEffect } from "react";
import music from "../../images/music.jpg"
import covid from "../../images/covid.jpeg"

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
            <div className="card text-center" style={{ width: "14rem", backgroundColor: 'rgb(71, 71, 71)', display: 'inline-block' }}>
                <img src={music} className="card-img-top" alt="music" style={{ height: '150px' }} />
                <div className="card-body">
                    <Link to="/music" className="btn btn-link" href="#" style={{ fontSize: '18px' }}>Music player</Link>
                    <a className="btn btn-link" href="https://github.com/michmiku/music-player" target="_blank" style={{ fontSize: '18px' }}>GitHub</a>
                </div>
            </div>
            <div className="card text-center" style={{ width: "14rem", backgroundColor: 'rgb(71, 71, 71)', display: 'inline-block', marginLeft: '30px' }}>
                <img src={covid} className="card-img-top" alt="covid" style={{ height: '150px' }} />
                <div className="card-body">
                    <Link to="/covid19" className="btn btn-link" href="#" style={{ fontSize: '18px' }}>Covid-19 data</Link>
                    <a className="btn btn-link" href="https://github.com/michmiku/covid19-data" target="_blank" style={{ fontSize: '18px' }}>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;

