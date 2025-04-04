import React from "react";

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
              <p>
              <ul>
                <li><strong>Fullstack Development</strong></li>
                <li>Experience with MERN Stack – 1+ year</li>
                <li>Experience with Flask – 1+ year</li>
              </ul>
              </p>
            </div>

            {/*Education*/}
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />

              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.Tech in Computer Engineering</strong>
                </li>
                <li>Delhi Technological University (DTU)</li>
                <li>Expected Graduation: 2025</li>
              </ul>
            </div>
          </div>

          <div className="text-container">
            <p>
              Greetings! I am a final-year B.Tech student in Computer
              Engineering at Delhi Technological University (DTU), with a strong
              foundation in C++, Python, and full-stack web development (MERN
              stack). As an Executive in the Education Sector of NSS DTU, I have
              honed my leadership and communication skills. I am passionate
              about software development and aspire to work as a Software
              Engineer at top tech companies like Google, Amazon, Microsoft, and
              Apple. I am continuously learning and building impactful projects
              to strengthen my technical and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#skills")}
      />
    </section>
  );
}

export default About;
