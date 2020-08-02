import React from "react";
import {ActionCreatorAddPost, ActionCreatorUPText} from "../redux/maincontent-reducer";
import MyPost from "./MyPost";
import StoreContext from "../StoreContext";


let MyPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let onPostChange = (text) => {
                    let action = ActionCreatorUPText(text);
                    store.dispatch(action);
                };
                let addPost = () => {
                    store.dispatch(ActionCreatorAddPost());
                };
                return <MyPost updateText={onPostChange}
                               craftPost={addPost}
                               posts={state.MainContentPage.posts}
                               textAreaUpDate={state.MainContentPage.textAreaUpDate}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostContainer;