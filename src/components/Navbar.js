import React, { useState } from 'react';
import './Navbar.style.css';
import { Link } from 'react-router-dom';
import planets from '../data.json';
import Chevron from '../assets/icon-chevron.svg';
import Hamburger from '../assets/icon-hamburger.svg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const renderPlanetsLinks = () =>
        planets.map((planet, idx) => {
            const planetName = planet.name.toLowerCase();
            const planetThemeColor = { background: `var(--${planetName})` };

            return (
                <Link key={idx} to={`/${planetName}`}>
                    <span className="hover-line" style={planetThemeColor} />

                    <span className="colored-planet-cycle" style={planetThemeColor} />

                    {planet.name}

                    <img className="chevron-icon" src={Chevron} alt="chevron icon" />
                </Link>
            );
        });

    return (
        <header>
            <Link to="/">
                <h2>THE PLANETS</h2>
            </Link>

            <ul className={toggleMenu ? 'nav-bar active' : 'nav-bar'}>{renderPlanetsLinks()}</ul>

            <img
                onClick={() => setToggleMenu(!toggleMenu)}
                className={toggleMenu ? 'hamburger active' : 'hamburger'}
                src={Hamburger}
                alt="hamburger icon"
            />
        </header>
    );
};

export default Navbar;
