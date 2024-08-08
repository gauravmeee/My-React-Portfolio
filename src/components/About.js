import React from 'react';
// import './About.css';

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about pic.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">

            {/*Experience*/}
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />

              <h3>Experience</h3>
              <p>1+ years <br />FullStack Development</p>
            </div>

            {/*Education*/}
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />

              <h3>Education</h3>
              <p>Btech. Computer Engineering
                <br/> (Delhi Technological University)
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
              Greetings! I am Gaurav Meena, a dedicated student pursuing a B.Tech degree in Computer Engineering at Delhi Technological University. Fueled by a profound passion for technology, I am on a journey to master the intricacies of computer engineering and contribute meaningfully to the ever-evolving tech landscape.

As a relentless learner, I dedicate myself daily to expanding my skill set and staying abreast of technological advancements. With a graduation date set for 2025, I am poised to leverage my knowledge and skills to make a significant impact in the tech industry.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        
        onClick={() => window.location.href='./#skills'}
      />
    </section>
  );
}

export default About;