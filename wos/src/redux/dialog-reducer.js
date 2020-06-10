const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG';
const ADD_MSG_POST = 'ADD-MSG-POST';


const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MSG_POST:
            let newMSGPost = {
                id: 6, say: state.dialogNewMassage
            };
            state.msgElemets.push(newMSGPost);
            state.dialogNewMassage = "";
            return state;
        case UPDATE_TEXT_DIALOG:
            state.dialogNewMassage = action.NewDialogText;
            return state;
        default: return state;
    }
};

export const ActionCreatorUPTextDialogs = (text) => {
    return {type: UPDATE_TEXT_DIALOG, NewDialogText: text};
};
export const ActionCreatorAddMSG = () => {
    return {type: ADD_MSG_POST};
};

export default dialogReducer;