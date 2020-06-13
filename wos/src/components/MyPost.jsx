import React from "react";
import './MyPost.css'
import {ActionCreatorAddPost, ActionCreatorUPText} from "../redux/maincontent-reducer";
import Post from "./Post";



let MyPost = (props) => {
    let newPostElement = React.createRef();
    let arValue = props.textAreaUpDate; //получение арены-тектса из стейта

    let textUpdate = () => {
        let text = newPostElement.current.value;
        props.updateText(text);
    };

    let addPost = () => {
        props.craftPost();
    };

    let posters = props.posts.map ( p => <Post masage={p.postmsg} likeNum={p.likes}/>);


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
            {posters}
        </div>
    )
};

export default MyPost;