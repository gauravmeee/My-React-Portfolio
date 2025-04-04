import React from 'react';

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
  const programmingLanguages = [
    { title: 'C++', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', iconAlt: 'C++ icon' },
    { title: 'C', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', iconAlt: 'C icon' },
    { title: 'Python', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', iconAlt: 'Python icon' },
    { title: 'JavaScript', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', iconAlt: 'JavaScript icon' },
  ];

  const frontendDevelopment = [
    { title: 'HTML', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', iconAlt: 'HTML icon' },
    { title: 'CSS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', iconAlt: 'CSS icon' },
    { title: 'ReactJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', iconAlt: 'ReactJS icon' },
    { title: 'NextJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', iconAlt: 'NextJS icon' },
  ];

  const backendDevelopment = [
    { title: 'NodeJS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', iconAlt: 'NodeJS icon' },
    { title: 'ExpressJS', iconSrc: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg', iconAlt: 'ExpressJS icon' },
    { title: 'Flask', iconSrc: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg', iconAlt: 'Flask icon' },
  ];

  const databases = [
    { title: 'MongoDB', iconSrc: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', iconAlt: 'MongoDB icon' },
    { title: 'MySQL', iconSrc: 'https://www.svgrepo.com/show/354099/mysql.svg', iconAlt: 'MySQL icon' },
    { title: 'Firebase', iconSrc: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', iconAlt: 'Firebase icon' },
    { title: 'Supabase', iconSrc: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg', iconAlt: 'Supabase icon' },
  ];

  const cloudAndDevOps = [
    { title: 'Google Cloud', iconSrc: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', iconAlt: 'Google Cloud icon' },
    { title: 'Git', iconSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', iconAlt: 'Git icon' },
    { title: 'Postman', iconSrc: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', iconAlt: 'Postman icon' },
  ];

  const dataScience = [
    { title: 'NumPy', iconSrc: 'https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg', iconAlt: 'NumPy icon' },
    { title: 'Pandas', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg', iconAlt: 'Pandas icon' },
  ];

  const developmentTools = [
    { title: 'VSCode', iconSrc: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', iconAlt: 'VSCode icon' },
    { title: 'Android', iconSrc: 'https://www.vectorlogo.zone/logos/android/android-official.svg', iconAlt: 'Android icon' },
  ];

  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="skills-details-container">
        <div className="about-containers">
          <SkillSection title="Programming Languages" skills={programmingLanguages} />
          <SkillSection title="Frontend Development" skills={frontendDevelopment} />
          <SkillSection title="Backend Development" skills={backendDevelopment} />
          <SkillSection title="Databases" skills={databases} />
          <SkillSection title="Cloud & DevOps" skills={cloudAndDevOps} />
          <SkillSection title="Data Science" skills={dataScience} />
          <SkillSection title="Development Tools" skills={developmentTools} />
        </div>
      </div>
      <a href="#projects">
        <Icon src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Skills;