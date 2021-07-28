import React from 'react';
import "../components/home.css"
import "../components/pureHome.css"
import background from '../components/images/homeBG.jpg';
function HomePage() {
    return (
        <div className="hero">
            <div className="hero_container">
                <div className="hero_container--left">
                    <h1>My name is Pham Nhat Phuong</h1>
                    <h2>I am a final-year student</h2>
                    <p>at Bach Khoa HCM</p>
                    <button className="hero_container--btn">
                        <a href="/CV">Go to my CV</a>
                    </button>
                </div>
                <div className="hero_container--right">
                    <img src={background} alt="myPic" className="hero_container--img" />
                </div>
            </div>
        </div>

    )
}

export default HomePage;