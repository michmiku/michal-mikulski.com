import React from "react";
import "../../styles/css/footer.css";

const Footer = () => {
    return (
        <footer id="list-item-4" >
            <div className="footer-container grid">
                <a className="contact">
                    <h5>Michał Mikulski</h5>
                    <h5>tel.: 668711145</h5>
                    <h5>email: michmiku@gmail.com</h5>
                </a>
                <p>copyright Michał Mikulski</p>
                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com/PopeDucks" target="_blank"><i className="fab fa-facebook-f i"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/michalko258" target="_blank"><i className="fab fa-twitter i"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/micha%C5%82-mikulski-7145491ab/" target="_blank"><i className="fab fa-linkedin-in i"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/michmiku" target="_blank"><i className="fab fa-github i"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;

