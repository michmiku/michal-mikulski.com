import React from "react";

const Footer = () => {
    return (
        <footer className="py-4 text-white-50 footer" id="list-item-4">
            <div className="row footer-item">
                <div className="col text-center">
                    <a>Michał Mikulski</a><br />
                    <a>tel.: 668711145</a><br />
                    <a>email: michmiku@gmail.com</a>
                </div>
                <div className="col text-center">
                    <div style={{ paddingTop: '50px' }}>
                        <div style={{ display: 'inline-block', paddingRight: '30px', }}>
                            <a href="https://www.linkedin.com/in/micha%C5%82-mikulski-7145491ab/" target="_blank" style={{ color: 'rgb(207, 207, 207)' }}><i className="fab fa-linkedin-in fa-2x" ></i></a>
                        </div>
                        <div style={{ display: 'inline-block' }} >
                            <a href="https://github.com/michmiku" target="_blank" style={{ color: 'rgb(207, 207, 207)' }}><i className="fab fa-github fa-2x" ></i></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center footer-copyright">
                <small>Copyright &copy; Michał Mikulski</small>
            </div>
        </footer >
    )
}

export default Footer;

