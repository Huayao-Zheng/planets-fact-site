import React from 'react';
import './Navbar.style.css';
import { Link } from 'react-router-dom';
import planets from '../data.json';

const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <h2>THE PLANETS</h2>
            </Link>

            <ul className="nav-bar">
                {planets.map((planet, idx) => (
                    <li key={idx}>
                        <Link to={`/${planet.name.toLowerCase()}`}>{planet.name}</Link>
                    </li>
                ))}
            </ul>

            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
            </svg>
        </header>
    );
};

export default Navbar;
