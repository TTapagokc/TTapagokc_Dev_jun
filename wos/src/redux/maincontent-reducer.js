const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initionalState = {

    posts: [
        {id: 1, likes: 10, postmsg: 'First try to make :D'},
        {id: 2, likes: 120, postmsg: 'I think its works'},
        {id: 3, likes: 8, postmsg: 'Ayayayayayayay!!!'},
    ],
    textAreaUpDate: "",

};

const MainContentReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6, postmsg: state.textAreaUpDate,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.textAreaUpDate = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.textAreaUpDate = action.NewText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const ActionCreatorAddPost = () => {
    return {type: ADD_POST};
};
export const ActionCreatorUPText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, NewText: text};
};

export default MainContentReducer;