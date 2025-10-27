import React from 'react';
import '../Style/NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar()  {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                    <Link to="/"> Acceuil </Link>
                </li>
                <li>
                    <Link to="/weather"> weather </Link>
                </li>
                <li>
                    <Link to="/About"> A propos </Link>
                </li>

                <li>
                    <Link to="/ S'authentifier">  S'authentifier</Link>
                </li>
            </ul>
        </nav>
    );
}