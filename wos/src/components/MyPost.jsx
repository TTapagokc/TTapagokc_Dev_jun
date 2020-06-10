import React from "react";
import './MyPost.css'
import {ActionCreatorAddPost, ActionCreatorUPText} from "../redux/maincontent-reducer";



let MyPost = (props) => {
    let newPostElement = React.createRef();
    let arValue = props.textAreaUpDate; //получение арены-тектса из стейта

    let textUpdate = () => {
        let text = newPostElement.current.value;
        //props.updateText(text);
        let action = ActionCreatorUPText(text);
        props.dispatch(action);
    };

    let addPost = () => {
        //props.craftPost();
        props.dispatch(ActionCreatorAddPost());
    };


    return (
        <div>My post
            <div className='MyPost'>
                <div>
                    <textarea placeholder={'Создать новую запись'} onChange={textUpdate} ref={newPostElement} value={arValue}/>
                </div>
                <div className='myB'>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>
    )
};

export default MyPost;