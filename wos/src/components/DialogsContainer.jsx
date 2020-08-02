import React from "react";
import {ActionCreatorAddMSG, ActionCreatorUPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState().dialogPage;
            let MsgTextOnChange = (text) => {
                store.dispatch(ActionCreatorUPTextDialogs(text));
            };
            let onSendMessageClick = () => {
                store.dispatch(ActionCreatorAddMSG());
            };

            return <Dialogs dialogPage={state}
                            UPTextDialogs={MsgTextOnChange}
                            sendMessage={onSendMessageClick}/>
        }
        }

    </StoreContext.Consumer>
}

export default DialogsContainer;
