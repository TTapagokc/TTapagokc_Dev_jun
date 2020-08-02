import React from "react";
import {ActionCreatorAddPost, ActionCreatorUPText} from "../redux/maincontent-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        MainContentPage: state.MainContentPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(ActionCreatorUPText(text));
        },
        craftPost: () => {
            dispatch(ActionCreatorAddPost());
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;