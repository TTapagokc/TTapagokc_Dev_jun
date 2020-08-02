import './MainContetn.css';
import React from 'react';
import MyPostContainer from "./MyPostContainer";



const MainContent = () => {

    ///Масив обработки базы через .map
    // let posters = props.MainContentPage.posts.map ( p => <Post masage={p.postmsg} likeNum={p.likes}/>);

    return (
        <div className='MainContent'>Мой профиль
            <img alt='random wallpaper' src='https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg'/>
            <MyPostContainer />

        </div>
    );
}

export default MainContent;