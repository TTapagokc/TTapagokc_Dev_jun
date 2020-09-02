import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <img alt='1' src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'/>
            <div className='login-block'>
                {props.isAuth ? <div>{props.login}<br/> {props.email}</div> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;