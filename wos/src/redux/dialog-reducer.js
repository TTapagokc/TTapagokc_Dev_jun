const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG';
const ADD_MSG_POST = 'ADD-MSG-POST';

let initionalState = {
    dialogNewMassage: '',

    msgElemets: [
        {id: 1, say: "hi dude"},
        {id: 2, say: "hi Horo"},
        {id: 3, say: "hi Vlad"},
        {id: 4, say: "hi suzy"},
        {id: 5, say: "hi dead"},
    ],
    dialogData: [
        {id: 1, name: "Horo", link: 'https://99px.ru/cms/templates/main_top_b.png'},
        {id: 2, name: "Crist", link: 'https://sun9-47.userapi.com/c824601/v824601769/a3fa2/W9h5JIBIT8E.jpg'},
        {id: 3, name: "Sven", link: 'https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg'},
        {
            id: 4,
            name: 'TTapagokc',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'
        },
    ],
};

const dialogReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_MSG_POST: {
            let newMSGPost = {
                id: 6, say: state.dialogNewMassage
            };
            let stateCopy = {...state};
            stateCopy.msgElemets = [...state.msgElemets];
            stateCopy.msgElemets.push(newMSGPost);
            stateCopy.dialogNewMassage = "";
            return stateCopy;
        }
        case UPDATE_TEXT_DIALOG: {
            let stateCopy = {...state}
            stateCopy.dialogNewMassage = action.NewDialogText;
            return stateCopy;
        }
        default:
            return state;

    }
};

export const ActionCreatorUPTextDialogs = (text) => {
    return {type: UPDATE_TEXT_DIALOG, NewDialogText: text};
};
export const ActionCreatorAddMSG = () => {
    return {type: ADD_MSG_POST};
};

export default dialogReducer;