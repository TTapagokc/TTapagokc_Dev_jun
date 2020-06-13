import React from "react";
import {ActionCreatorAddMSG, ActionCreatorUPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
let state = props.store.getState().dialogPage;


    let MsgTextOnChange = (text) => {
        props.store.dispatch(ActionCreatorUPTextDialogs(text));
    };

    let onSendMessageClick = () => {
        props.store.dispatch(ActionCreatorAddMSG());
    };

    return <Dialogs dialogPage={state} UPTextDialogs={MsgTextOnChange} sendMessage={onSendMessageClick} />
}

export default DialogsContainer;