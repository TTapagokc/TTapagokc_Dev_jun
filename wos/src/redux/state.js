const ADDPOST = 'ADD-POST';
const UPDATETEXT = 'UPDATE-TEXT';

let _callSubscriber = () => {
  console.log('Tree render has changed')
};



let store = {
    _state: {
        MainContentPage: {
            posts: [
                {id: 1, likes: 10, postmsg: 'First try to make :D'},
                {id: 2, likes: 120, postmsg: 'I think its works'},
                {id: 3, likes: 8, postmsg: 'Ayayayayayayay!!!'},
            ],
            textAreaUpDate: "test-state",
        },
        dialogPage: {
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
                {id: 4, name: 'TTapagokc', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'},
            ],
        },
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6, postmsg: this._state.MainContentPage.textAreaUpDate,
                likes: 0
            };
            this._state.MainContentPage.posts.push(newPost);
            this._state.MainContentPage.textAreaUpDate = "";
            _callSubscriber();
        } else if (action.type === 'UPDATE-TEXT') {
            this._state.MainContentPage.textAreaUpDate = action.NewText;
            _callSubscriber();
        }
    },



    subscribe(observer) {
        _callSubscriber = observer;
    },
    getState() {
        return this._state;},
};

export const ActionCreatorAddPost = () => {
    return {type: ADDPOST};
};

export const ActionCreatorUPText = (text) => {
    return {type: UPDATETEXT, NewText: text};
};

export default store;