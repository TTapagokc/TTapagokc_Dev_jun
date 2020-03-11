import React from 'react';
import './NavBar.css';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className={`${s.item} ${s.active} `}>
                <NavLink to='/MainContent' activeClassName={s.activeLink}>
                    Main page
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>
                    Massages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.activeLink}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Setings' activeClassName={s.activeLink}>
                    Setings
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;