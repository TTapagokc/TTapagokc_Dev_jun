import React from "react";
import './MyPost.css'


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

    return (
        <div>My post
            <div className='MyPost'>
                <div>
                    <textarea onChange={textUpdate} ref={newPostElement} value={arValue} />
                </div>
                <div className='myB'>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>
    )
};

export default MyPost;