import {AddMSG, UPTextDialogs} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

export default compose(
    connect(mapStateToProps, {UPTextDialogs,AddMSG}),
    withAuthRedirect
) (Dialogs);