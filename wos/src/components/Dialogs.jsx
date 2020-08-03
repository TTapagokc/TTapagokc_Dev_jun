import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./DialogMessage";


const Dialogs = (props) => {

    let state = props.dialogPage;
    /*Обработка масивов даных*/
    let dialogElemnts = state.dialogData.map(dialog => <DialogItem link={dialog.link} name={dialog.name} key={dialog.id}
                                                                   id={dialog.id}/>);
    let dialogSay = state.msgElemets.map(msg => <Message say={msg.say} key={msg.id} />);

    let NewMassage = state.dialogNewMassage; //Текст ериа из BLL
    let newMSGElement = React.createRef(); //Создание ref

    let MsgTextOnChange = () => {
        let text = newMSGElement.current.value;
        props.UPTextDialogs(text);
    };
    let onSendMessageClick = () => {
        props.sendMessage();
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
                        <button onClick={onSendMessageClick}>Send Massage</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;