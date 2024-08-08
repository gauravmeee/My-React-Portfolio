import React from 'react';
// import './Profile.css';

function Profile() {
    return (
        <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile pic.jpg" alt="Gaurav profile picture"  style={{borderRadius: `50%`, display: `block`}}/>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Gaurav Meena</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          
          {/* Download CV*/}
          <button
            className="btn btn-color-2" onClick={() => window.open('./assets/resume.pdf')} >
            Download CV
          </button>

          {/* Contact Info*/}
          <button 
            className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
            Contact Info
          </button>

        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href='https://www.linkedin.com/in/gauravmeee/'}
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href='https://github.com/gauravmeee'}
          />
        </div>
      </div>
    </section>
    );
}

export default Profile;


