import React from 'react';
import './Navbar.style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <h2>THE PLANETS</h2>
            </Link>

            <ul className="nav-bar">
                <li>
                    <Link to="/">mercury</Link>
                </li>
                <li>
                    <Link to="venus">venus</Link>
                </li>
                <li>
                    <Link to="earth">earth</Link>
                </li>
                <li>
                    <Link to="mars">mars</Link>
                </li>
                <li>
                    <Link to="jupiter">jupiter</Link>
                </li>
                <li>
                    <Link to="saturn">saturn</Link>
                </li>
                <li>
                    <Link to="uranus">uranus</Link>
                </li>
                <li>
                    <Link to="neptune">neptune</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
