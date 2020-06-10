import MainContentReducer from "./maincontent-reducer";
import dialogReducer from "./dialog-reducer";

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
            textAreaUpDate: "",
        },
        dialogPage: {
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
                {id: 4, name: 'TTapagokc', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'},
            ],
        },

    },

    getState() {
        return this._state;},
    subscribe(observer) {
        _callSubscriber = observer;
    },



    dispatch(action) {

        this._state.MainContentPage = MainContentReducer(this._state.MainContentPage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        _callSubscriber();
    },
};

export default store;