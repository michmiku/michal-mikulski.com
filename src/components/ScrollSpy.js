import React from "react";
import { Link } from 'react-scroll'

const ScrollSpy = () => {
    return (
        <div>
            <div id="list-example" className="list-group position-sticky sticky-top text-center " style={{ width: '120px', top: "250px" }}>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-1" smooth={true} duration={500}><button type="button" className="btn  btn-outline-light" style={{ backgroundColor: '#808080' }}>Item 1</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-2" smooth={true} duration={500}><button type="button" className="btn  btn-outline-light" style={{ backgroundColor: '#808080' }}>Item 2</button></Link>
                <Link className="list-group-item list-group-item-action bg-transparent border-0" to="list-item-3" smooth={true} duration={500}><button type="button" className="btn  btn-outline-light" style={{ backgroundColor: '#808080' }}>Item 3</button></Link>
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="200" className="scrollspy-example "  >
                <div className="mt-5">
                    <div id="list-item-1" className="scrollS"></div>
                    <div className="info">

                        <h4 >Item 1</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat.
                    </p>
                    </div>
                    <div id="list-item-2" className="scrollS"></div>
                    <div className="info">

                        <h4 >Item 2</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat. Fusce semper feugiat odio, ac ultricies ligula ultrices pretium. Aenean dui nibh, venenatis sed odio a, porttitor scelerisque elit. Donec in mi sollicitudin libero feugiat fermentum quis eget enim. Vestibulum pellentesque ex et erat luctus accumsan. Nullam at augue gravida, pretium ligula vel, convallis
                    </p>
                    </div>
                    <div id="list-item-3" className="scrollS"></div>
                    <div className="info" style={{ marginBottom: "80px" }}>

                        <h4 >Item 3</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat. Fusce semper feugiat odio, ac ultricies ligula ultrices pretium. Aenean dui nibh, venenatis sed odio a, porttitor scelerisque elit. Donec in mi sollicitudin libero feugiat fermentum quis eget enim. Vestibulum pellentesque ex et erat luctus accumsan. Nullam at augue gravida, pretium ligula vel, convallis quam.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSpy;

