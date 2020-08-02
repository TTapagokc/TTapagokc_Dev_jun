import React from "react";
import {ActionCreatorAddMSG, ActionCreatorUPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        UPTextDialogs: (text) => {
            dispatch(ActionCreatorUPTextDialogs(text));
        },
        sendMessage: () => {
            dispatch(ActionCreatorAddMSG());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
