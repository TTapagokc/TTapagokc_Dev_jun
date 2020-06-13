import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
                <img className={s.avatarMSG} src={props.link}/>
                {props.name}</NavLink>
        </div>
    );
};

export default DialogItem;