import React from 'react';
// import './Projects.css';

function Projects() {

  const projects = [
    {
      title: 'AdBlocker',
      image: './assets/Project-AdBlocker.png',
      githubLink: '',
      liveDemoLink: '',
    },
    {
      title: 'Character Counter',
      image: './assets/Project-CharacterCounter.png',
      githubLink: 'https://github.com/gauravmeee/Teamraftaar',
      liveDemoLink: 'https://teamraftaar.vercel.app/',
    },
    {
      title: 'TR Website',
      image: './assets/Project-TeamRaftaar.png',
      githubLink: '',
      liveDemoLink: '',
    },
  ];

  const handleGithubClick = (link) => {
    window.open(link, '_blank');
  };

  const handleLiveDemoClick = (link) => {
    window.open(link, '_blank');
  };

  const handleArrowClick = () => {
    window.location.href = './#contact';
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="article-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => handleGithubClick(project.githubLink)}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => handleLiveDemoClick(project.liveDemoLink)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project End */}
      
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleArrowClick}
      />
    </section>
  );
}

export default Projects;