import React from 'react';
import { Link } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav>
            <div className='container-logo'>
                <span className='logo'>✦</span>
            </div>
            <div className='line'></div>
            <ul className='menu'>
                <Link className='link' to="/"><li><span className='number'>00</span>Home</li></Link>
                <Link className='link' to="/destination"><li><span className='number'>01</span> Destination</li></Link>
                <Link className='link' to="/crew"><li><span className='number'>02</span> Crew</li></Link>
                <Link className='link' to="/technology"><li><span className='number'>03</span> Technology</li></Link>
            </ul>
        </nav>
    );
};

export default NavBar;