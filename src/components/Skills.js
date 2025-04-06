import React, { useState, useEffect, useRef } from 'react';

const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`w-6 h-6 sm:w-8 sm:h-8 ${className}`} />
);

const SkillCard = ({ title, iconSrc, iconAlt, group, isHighlighted, onHover }) => {
  return (
    <div className="p-0.5 sm:p-1">
      <article 
        className={`inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
          isHighlighted ? 'shadow-lg scale-105 bg-gradient-to-r from-indigo-50 to-purple-50 ring-1 ring-indigo-400' : 'hover:shadow-md hover:bg-gray-50'
        }`}
        onMouseEnter={() => onHover(group)}
      >
        <div className={`p-1 sm:p-1.5 rounded-md ${isHighlighted ? 'bg-indigo-100' : 'bg-gray-100'}`}>
          <Icon src={iconSrc} alt={iconAlt} />
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-semibold whitespace-nowrap">{title}</h3>
        </div>
      </article>
    </div>
  );
};

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const skillsRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Add click handler to reset the active group when clicking anywhere except skill boxes
  useEffect(() => {
    const handleClick = (event) => {
      // Check if the click is on a skill box
      const isSkillBox = event.target.closest('article');
      
      // If not clicking on a skill box, reset the state
      if (!isSkillBox) {
        setActiveGroup(null);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  // Add mouse leave handler with debounce to prevent fluctuation
  useEffect(() => {
    const handleMouseLeave = (event) => {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      // Set a timeout to reset the state after a short delay
      hoverTimeoutRef.current = setTimeout(() => {
        // Check if the mouse is over a skill box
        const isSkillBox = document.querySelector('article:hover');
        
        // If not hovering over a skill box, reset the state
        if (!isSkillBox) {
          setActiveGroup(null);
        }
      }, 100); // Small delay to prevent fluctuation
    };

    const skillsContainer = skillsContainerRef.current;
    if (skillsContainer) {
      skillsContainer.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        skillsContainer.removeEventListener('mouseleave', handleMouseLeave);
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }
  }, []);

  const skillGroups = {
    'Programming Languages': [
      { title: 'C++', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', iconAlt: 'C++ icon' },
      { title: 'C', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', iconAlt: 'C icon' },
      { title: 'Python', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', iconAlt: 'Python icon' },
      { title: 'JavaScript', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', iconAlt: 'JavaScript icon' },
    ],
    'Frontend Development': [
      { title: 'HTML', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', iconAlt: 'HTML icon' },
      { title: 'CSS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', iconAlt: 'CSS icon' },
      { title: 'ReactJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', iconAlt: 'ReactJS icon' },
      { title: 'NextJS', iconSrc: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', iconAlt: 'NextJS icon' },
    ],
    'Backend Development': [
      { title: 'NodeJS', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', iconAlt: 'NodeJS icon' },
      { title: 'ExpressJS', iconSrc: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg', iconAlt: 'ExpressJS icon' },
      { title: 'Flask', iconSrc: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg', iconAlt: 'Flask icon' },
    ],
    'Databases': [
      { title: 'MongoDB', iconSrc: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', iconAlt: 'MongoDB icon' },
      { title: 'MySQL', iconSrc: 'https://www.svgrepo.com/show/354099/mysql.svg', iconAlt: 'MySQL icon' },
      { title: 'Firebase', iconSrc: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', iconAlt: 'Firebase icon' },
      { title: 'Supabase', iconSrc: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg', iconAlt: 'Supabase icon' },
    ],
    'Cloud & DevOps': [
      { title: 'Google Cloud', iconSrc: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', iconAlt: 'Google Cloud icon' },
      { title: 'Git', iconSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', iconAlt: 'Git icon' },
      { title: 'Postman', iconSrc: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', iconAlt: 'Postman icon' },
    ],
    'Data Science': [
      { title: 'NumPy', iconSrc: 'https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg', iconAlt: 'NumPy icon' },
      { title: 'Pandas', iconSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg', iconAlt: 'Pandas icon' },
    ],
    'Development Tools': [
      { title: 'VSCode', iconSrc: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', iconAlt: 'VSCode icon' },
      { title: 'Android', iconSrc: 'https://www.vectorlogo.zone/logos/android/android-official.svg', iconAlt: 'Android icon' },
    ],
  };

  // Flatten all skills into a single array with group information
  const allSkills = Object.entries(skillGroups).flatMap(([group, skills]) =>
    skills.map(skill => ({ ...skill, group }))
  );

  return (
    <section id="skills" ref={skillsRef} className="section min-h-[calc(100vh-4rem)] pt-16">
      {/* Space Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Laptop with Space Theme */}
        <div className="absolute top-24 right-[8%] w-36 h-28 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-white rounded-lg p-2 -rotate-6 shadow-lg animate-float-slow">
            <div className="relative w-full h-full bg-indigo-900 rounded-md">
              {/* Screen Content - Code Style */}
              <div className="absolute inset-2">
                <div className="h-1 w-12 bg-green-400 rounded mb-1"></div>
                <div className="h-1 w-16 bg-purple-400 rounded mb-1"></div>
                <div className="h-1 w-10 bg-yellow-400 rounded"></div>
              </div>
              {/* Keyboard */}
              <div className="absolute bottom-1 inset-x-2 h-4 bg-indigo-800 rounded"></div>
            </div>
          </div>
        </div>

        {/* Floating Satellite */}
        <div className="absolute bottom-32 left-[5%] w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-white rounded-lg p-2 rotate-12 shadow-lg animate-float">
            <div className="relative w-full h-full">
              {/* Satellite Body */}
              <div className="absolute inset-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 rounded-lg">
                {/* Solar Panels */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-6 bg-blue-400 rounded"></div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-6 bg-blue-400 rounded"></div>
                {/* Antenna */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Binary Code Trail */}
        <div className="absolute top-1/3 right-[15%] opacity-5 transform rotate-45">
          <div className="space-y-1 text-xs font-mono text-indigo-600">
            <div>10101</div>
            <div>01010</div>
            <div>11001</div>
          </div>
        </div>
      </div>

      <div className="section-container h-full p-0">
        <div className="text-center transition-all duration-300 mb-2">
          {activeGroup ? (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 py-1.5 sm:py-2 px-4 sm:px-6 rounded-full inline-block shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {activeGroup}
              </h2>
            </div>
          ) : (
            <p className="section-subtitle">Explore My</p>
          )}
        </div>
        <h1 className="section-title mb-4 sm:mb-6">Skills</h1>
        <div className="container h-[calc(100%-8rem)]">
          <div ref={skillsContainerRef} className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
            {allSkills.map((skill, index) => (
              <SkillCard
                key={index}
                {...skill}
                isHighlighted={activeGroup === skill.group}
                onHover={setActiveGroup}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;