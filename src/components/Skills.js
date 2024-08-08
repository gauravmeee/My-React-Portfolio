import React from 'react';
// import './Skill.css';

const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

const SkillCard = ({ title, iconSrc, iconAlt, description }) => (
  <article>
    <Icon src={iconSrc} alt={iconAlt} className="icon" />
    <div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  </article>
);

const SkillSection = ({ title, skills }) => (
  <div className="details-container">
    <h2 className="skills-sub-title">{title}</h2>
    <div className="article-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const programmingSkills = [
    { title: 'C++', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', iconAlt: 'C++ icon' },
    { title: 'C', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', iconAlt: 'C icon' },
    { title: 'Python', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', iconAlt: 'Python icon' },
    { title: 'JavaScript', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', iconAlt: 'JavaScript icon' },
  ];

  const moreSkills = [
    { title: 'HTML', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', iconAlt: 'HTML icon' },
    { title: 'CSS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', iconAlt: 'CSS icon' },
    // { title: 'Angular', iconSrc: 'https://angular.io/assets/images/logos/angular/angular.svg', iconAlt: 'Angular icon' },
    { title: 'Flask', iconSrc: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg', iconAlt: 'Flask icon' },
    { title: 'MySql', iconSrc: 'https://www.svgrepo.com/show/354099/mysql.svg', iconAlt: 'MySql icon' },
  ];

  const utilityTools = [
    { title: 'VScode', iconSrc: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', iconAlt: 'VScode icon' },
    { title: 'Git', iconSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', iconAlt: 'Git icon' },
    { title: 'Android', iconSrc: 'https://www.vectorlogo.zone/logos/android/android-official.svg', iconAlt: 'Android icon' },
    { title: 'Postman', iconSrc: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', iconAlt: 'Postman icon' },
  ];

  const fullStackSkills = [
    { title: 'MongoDB', iconSrc: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', iconAlt: 'MongoDB icon' },
    { title: 'ExpressJS', iconSrc: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg', iconAlt: 'ExpressJS icon' },
    { title: 'ReactJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', iconAlt: 'ReactJS icon' },
    { title: 'NodeJS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', iconAlt: 'NodeJS icon' },
    // { title: 'NodeJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', iconAlt: 'NextJS icon' },
  ];

  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="skills-details-container">
        <div className="about-containers">
          <SkillSection title="Programming" skills={programmingSkills} />
          <SkillSection title="More" skills={moreSkills} />
          <SkillSection title="Utility Tools" skills={utilityTools} />
          <SkillSection title="FullStack" skills={fullStackSkills} />
        </div>
      </div>
      <a href="#projects">
        <Icon src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Skills;