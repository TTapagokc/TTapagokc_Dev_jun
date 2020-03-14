import './MainContetn.css';
import React from 'react';
import Post from './Post.jsx';
import MyPost from "./MyPost";



const MainContent = (props) => {

    ///Масив обработки базы через .map
    let posters = props.MainContentPage.posts.map ( p => <Post masage={p.postmsg} likeNum={p.likes}/>);

    return (
        <div className='MainContent'>Мой профиль
            <img
                src='https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg'/>
            <MyPost
                dispatch={props.dispatch}
                textAreaUpDate={props.MainContentPage.textAreaUpDate} />
            {posters}
        </div>
    );
}

export default MainContent;