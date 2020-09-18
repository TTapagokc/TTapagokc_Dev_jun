import {AddMSG, UPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};


const RedirectedComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, {UPTextDialogs,AddMSG})(RedirectedComponent);

export default DialogsContainer;
