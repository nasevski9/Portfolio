import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  
  const currentPage = useLocation().pathname;

    return (
        <header className="d-flex justify-content-center fs-3 pb-3 border-3 border-bottom border-success pt-2">
            <div className="nav px-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                      <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Projects' className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}