import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {ActionCreatorAddMSG, ActionCreatorUPTextDialogs} from "../redux/dialog-reducer";

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
    let dialogElemnts = props.dialogPage.dialogData.map(dialog => <DialogItem link={dialog.link} name={dialog.name}
                                                                              id={dialog.id}/>);
    let dialogSay = props.dialogPage.msgElemets.map(msg => <Message say={msg.say}/>);

    let NewMassage = props.dialogPage.dialogNewMassage; //Текст ериа из BLL
    let newMSGElement = React.createRef(); //Создание ref
    let MsgTextOnChange = () => {
        let text = newMSGElement.current.value;
        let actionD = ActionCreatorUPTextDialogs(text);
        props.dispatch(actionD);
    };
    let AddMSG = () => {
        props.dispatch(ActionCreatorAddMSG());
        debugger;
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElemnts}
            </div>
            <div className={s.messages}>
                {dialogSay}
                <div>
                    <textarea placeholder={'Веддите сообщение'} onChange={MsgTextOnChange} ref={newMSGElement}
                              value={NewMassage}>New Massage</textarea>
                    <div>
                        <button onClick={AddMSG}>Send Massage</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;