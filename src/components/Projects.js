import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import { EffectCoverflow, Pagination } from "swiper/modules";
import pro1 from './assets/Project-MarkdownEdit.png';
import pro2 from './assets/Project-AdBlocker.png';
import pro3 from './assets/Project-CharacterCounter.png';
import pro4 from './assets/Project-OCR.png';
import pro5 from './assets/Project-TeamRaftaar.png';
import pro6 from './assets/Project-GkmeenaApps.png';
import pro7 from './assets/Project-GkmeenaNotes.png';
import pro8 from './assets/Project-CodeBank.png';
import pro9 from './assets/Project-UnseenDiaries.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

const projects = [
  { 
    img: pro8, 
    title: "CodeBank", 
    description: "A modern platform for programming resources, contest updates, and tech opportunities with 100+ daily active users.", 
    sourceCode: "https://github.com/gauravmeee/CodeBank", 
    liveProject: "https://codebank-platform.vercel.app/",
    skills: ["Next.js", "Flask", "FastAPI", "React", "Tailwind CSS", "MongoDB"],
    detailedDescription: "A high-performance platform featuring real-time data aggregation, optimized caching, and robust error handling. Achieved 95% accessibility score and maintains 99.9% uptime while serving a growing user base."
  },
  { 
    img: pro9, 
    title: "Unseen Stories", 
    description: "A secure digital sanctuary for personal thoughts, featuring diary uploads and elegant dark theme interface.", 
    sourceCode: "https://github.com/gauravmeee/unseen-stories", 
    liveProject: "https://unseen-stories.vercel.app/",
    skills: ["Next.js", "Supabase", "React", "Tailwind CSS", "Image Processing"],
    detailedDescription: "Digital journaling platform with physical diary integration. Features secure storage, image uploads of physical diary pages, and an intuitive dark-themed interface for seamless writing experience."
  },
  { 
    img: pro7, 
    title: "GKmeena Notes", 
    description: "A very minimilistic Next.js Apps to Collect, Present and Share your Markdown notes effectively", 
    sourceCode: "https://github.com/gauravmeee/My_md_Notes", 
    liveProject: "https://gkmeena-markdown-notes.vercel.app/",
    skills: ["Next.js", "React", "Markdown", "Tailwind CSS", "Vercel"],
    detailedDescription: "A full-stack application built with Next.js that allows users to create, edit, and share markdown notes. Features include real-time preview, syntax highlighting, and easy sharing capabilities."
  },
  { 
    img: pro1, 
    title: "Markdown Editor", 
    description: "A simple React app for creating and saving notes in markdown format", 
    sourceCode: "https://github.com/gauravmeee/React-Markdown-Editor", 
    liveProject: "https://markdown-editor-livepreview.netlify.app/",
    skills: ["React", "JavaScript", "HTML", "CSS", "Netlify"],
    detailedDescription: "A lightweight markdown editor with live preview functionality. Built with React, it provides a clean interface for writing and previewing markdown content in real-time."
  },
  { 
    img: pro6, 
    title: "GKmeena Apps", 
    description: "React-vite App to Dynamically Store and Present All your and Others Useful Apps", 
    sourceCode: "https://github.com/gauravmeee/gkmeena-apps", 
    liveProject: "https://gkmeena-apps.vercel.app/",
    skills: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    detailedDescription: "A curated collection of useful web applications. Built with React and Vite, it features a clean UI and easy navigation between different apps."
  },
  { 
    img: pro4, 
    title: "Text Extraction", 
    description: "A Flask-based backend to extract text from uploaded files", 
    sourceCode: "https://github.com/gauravmeee/flask-tesseract-ocr", 
    liveProject: "https://image-text-extract.onrender.com/",
    skills: ["Python", "Flask", "Tesseract OCR", "HTML", "CSS"],
    detailedDescription: "A backend service that uses Tesseract OCR to extract text from images and PDFs. Built with Flask, it provides a simple API for text extraction."
  },
  { 
    img: pro5, 
    title: "Frontend Team Raftaar", 
    description: "An eye-catching frontend website for Team Raftaar DTU", 
    sourceCode: "https://github.com/gauravmeee/Teamraftaar", 
    liveProject: "https://teamraftaar.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel"],
    detailedDescription: "A responsive website for Team Raftaar DTU, featuring modern design elements and smooth animations. Built with pure HTML, CSS, and JavaScript."
  },
  { 
    img: pro2, 
    title: "Adblocker Extension", 
    description: "A minimalist Chrome extension to block the irritating ads", 
    sourceCode: "https://github.com/gauravmeee", 
    liveProject: "",
    skills: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    detailedDescription: "A Chrome extension that blocks unwanted advertisements. Built using the Chrome Extension API, it provides a lightweight solution for ad blocking."
  },
  { 
    img: pro3, 
    title: "Character Counter", 
    description: "A realtime text editor using html, css and js to write, edit, and count", 
    sourceCode: "https://github.com/gauravmeee/Grammar-Count", 
    liveProject: "https://grammar-count.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "Netlify"],
    detailedDescription: "A real-time text editor with character and word counting functionality. Built with vanilla JavaScript, it provides a simple interface for text editing and analysis."
  },
];

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front">
          <div className="flex flex-col h-full min-h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-2.5">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-[90%] h-[250px] mx-auto rounded-lg object-cover" 
              />
            </div>
            <div className="flex flex-col flex-grow p-4">
              <h4 className="text-xl font-semibold mb-2.5">{project.title}</h4>
              <div className="flex-grow">
                <p className="text-secondary mb-2">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <button 
                    className="text-primary hover:text-primary/80 flex items-center gap-1"
                    onClick={toggleFlip}
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                <a 
                  href={project.sourceCode} 
                  className="px-3 py-2 text-sm border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a 
                  href={project.liveProject} 
                  className="px-3 py-2 text-sm border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
              <p className="text-secondary mb-4">{project.detailedDescription}</p>
              <div className="mb-4">
                <h5 className="font-semibold mb-2">Skills Used:</h5>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button 
              className="text-primary hover:text-primary/80 flex items-center gap-1 justify-center"
              onClick={toggleFlip}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-180">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={Math.floor(projects.length / 2)}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 10,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        freeMode={true}
        cssMode={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-[1200px] mx-auto"
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="max-w-[300px] min-w-[250px] mx-2.5 my-8">
            <Card project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="#contact">
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
        />
      </a>
    </section>
  );
};

export default Projects;
