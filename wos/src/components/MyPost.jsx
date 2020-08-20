import React from "react";
import './MyPost.css'
import Post from "./Post";

let MyPost = (props) => {
    let newPostElement = React.createRef();
    let arValue = props.ProfilePage.textAreaUpDate; //получение арены-тектса из стейта

    let textUpdate = () => {
        let text = newPostElement.current.value;
        props.updateText(text);
    };

    let addPost = () => {
        props.craftPost();
    };

    let posters = props.ProfilePage.posts.map ( p => <Post masage={p.postmsg} key={p.id} likeNum={p.likes}/>);


    return (
        <div> My post
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