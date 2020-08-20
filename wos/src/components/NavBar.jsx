import React from 'react';
import './NavBar.css';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className={`${s.item} ${s.active} `}>
                <NavLink to='/profile' activeClassName={s.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/users' activeClassName={s.activeLink}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>
                    Massages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setings' activeClassName={s.activeLink}>
                    Setings
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;