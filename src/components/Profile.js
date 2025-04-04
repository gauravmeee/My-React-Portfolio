import React from 'react';

function Profile() {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img 
                    src="./assets/profile pic.jpg" 
                    alt="Gaurav Meena" 
                    style={{borderRadius: `50%`, display: `block`}}
                />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Gaurav Meena</h1>
                <p className="section__text__p2">Full Stack Developer</p>
                <div className="btn-container">
                    {/* Download CV*/}
                    <button
                        className="btn btn-color-1"
                        onClick={() => window.open('https://drive.google.com/file/d/1o74OTbcjWq62jN6HZe21Y4ZLVzUAy8_m/view?usp=drive_link', `_blank`)}
                    >
                        Download CV
                    </button>

                    {/* Contact Info*/}
                    <button 
                        className="btn btn-color-2"
                        onClick={() => window.location.href='./#contact'}
                    >
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src="./assets/linkedin.png"
                        alt="LinkedIn"
                        className="icon"
                        onClick={() => window.open('https://www.linkedin.com/in/gauravmeee/', `_blank`)}
                    />
                    <img
                        src="./assets/github.png"
                        alt="GitHub"
                        className="icon"
                        onClick={() => window.open('https://github.com/gauravmeee', `_blank`)}
                    />
                </div>
            </div>
        </section>
    );
}

export default Profile;


