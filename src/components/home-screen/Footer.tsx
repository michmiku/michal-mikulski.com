import React from "react";
import "../../styles/css/footer.css";

const Footer = () => {
    return (
        <footer className="py-4 text-white-50 footer" id="list-item-4">
            <div className="row footer-item">
                <div className="footer-left-text col text-left ">
                    <a>Michał Mikulski</a><br />
                    <a>tel.: 668711145</a><br />
                    <a>email: michmiku@gmail.com</a>
                </div>
                <div className="footer-right-text col text-center">
                    <ul className="footer-ul">
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
            </div>
            <div className="container text-center footer-copyright" style={{ color: '#e5e5e5' }}>
                <small>Copyright &copy; Michał Mikulski</small>
            </div>
        </footer >
    )
}

export default Footer;

