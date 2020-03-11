import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
                <img className={s.avatarMSG} src={props.link}/>
                {props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.say}
        </div>
    );
};

function Dialogs(props) {
    /*!!!Обработка масивов даных!!!*/
    let dialogElemnts = props.dialogData.map(dialog => <DialogItem link={dialog.link} name={dialog.name} id={dialog.id}/>);
    let dialogSay = props.msgElemets.map(msg => <Message say={msg.say}/>);



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElemnts}
            </div>
            <div className={s.messages}>
                {dialogSay}
            </div>
        </div>
    );
}

export default Dialogs;