import React from "react";
import {AddMSG, UPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.Auth.isAuth,
    }
};


const DialogsContainer = connect(mapStateToProps, {UPTextDialogs,AddMSG})(Dialogs);

export default DialogsContainer;
