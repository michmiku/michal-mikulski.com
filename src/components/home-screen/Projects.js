import React from "react";
import mern from "../../images/mern.jpg"
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className="info-projects" style={{ marginBottom: "80px" }}>
            <h1 style={{ paddingBottom: '20px' }}>Projects</h1>
            <div className="card text-center" style={{ width: "14rem", backgroundColor: 'rgb(71, 71, 71)' }}>
                <img src={mern} className="card-img-top" alt="mern" />
                <div className="card-body">
                    <Link to="/music" className="btn btn-link" href="#" style={{ fontSize: '18px' }}>Music player</Link>
                    <a className="btn btn-link" href="https://github.com/michmiku/portfolio" style={{ fontSize: '18px' }}>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;

