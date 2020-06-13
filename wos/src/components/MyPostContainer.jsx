import React from "react";
import {ActionCreatorAddPost, ActionCreatorUPText} from "../redux/maincontent-reducer";
import MyPost from "./MyPost";


let MyPostContainer = (props) => {
    let state = props.store.getState();

    let onPostChange = (text) => {
        let action = ActionCreatorUPText(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        props.store.dispatch(ActionCreatorAddPost());
    };


    return (<MyPost updateText={onPostChange}
                    craftPost={addPost}
                    posts={state.MainContentPage.posts}
                    textAreaUpDate={state.MainContentPage.textAreaUpDate}/>)
};

export default MyPostContainer;