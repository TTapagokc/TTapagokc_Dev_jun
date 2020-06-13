import s from "./Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.message}>{props.say}</div>
    );
};

export default  Message;