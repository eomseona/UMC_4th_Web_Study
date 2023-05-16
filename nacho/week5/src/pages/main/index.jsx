import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Main = () => {
    return (
        <div>
        <Header/>
            <div class ="main-wrap">
                <img class="main-pic" alt="날씨의 아이" title="홈으로 이동"/>
            </div>
        <Footer/>
        </div>
    );
};

export default Main;