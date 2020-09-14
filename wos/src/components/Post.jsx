import React from 'react';
import './Post.css';

const Post = (props) => {
    return (

        <div>
            <div className='Ava'>
                <img alt='post item' src='https://images4.alphacoders.com/264/264528.jpg'/>
                <span>{props.masage}</span>
                <div>{props.likeNum} likes</div>
            </div>
            <div className='button'>
                <button>Like</button>
            </div>
        </div>

    );
}

export default Post;