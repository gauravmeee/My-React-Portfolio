import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import { EffectCoverflow, Pagination } from "swiper/modules";
import pro1 from './assets/Markdown-Edit.png';
import pro2 from './assets/Project-AdBlocker.png';
import pro3 from './assets/Project-CharacterCounter.png';
import pro4 from './assets/Project-OCR.png';
import pro5 from './assets/Project-TeamRaftaar.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './card-style.css';
// import './card-mediaqueries.css';


const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

const projects = [
  { img: pro1, title: "Markdown Editor", description: "A simple app for creating and saving notes in markdown format", sourceCode: "https://github.com/gauravmeee/React-Markdown-Editor", liveProject: "https://markdown-editor-livepreview.netlify.app/" },
  { img: pro2, title: "Adblocker Extension", description: "A minimalist Chrome extension to block ads", sourceCode: "https://github.com/gauravmeee", liveProject: "" },
  { img: pro3, title: "Character Counter", description: "A realtime text editor to write, edit, and count", sourceCode: "https://github.com/gauravmeee/Grammar-Count", liveProject: "https://grammar-count.netlify.app/" },
  { img: pro4, title: "Text Extraction", description: "A Flask-based backend to extract text from uploaded files", sourceCode: "https://github.com/gauravmeee/flask-tesseract-ocr", liveProject: "https://image-text-extract.onrender.com/" },
  { img: pro5, title: "Frontend Team Raftaar", description: "An eye-catching frontend website for Team Raftaar DTU", sourceCode: "https://github.com/gauravmeee/Teamraftaar", liveProject: "https://teamraftaar.vercel.app/" },
];

const Card = ({ project }) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={project.img} alt="Image of Project" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-text text-secondary">{project.description}</p>
        <div className="button-group">
          <a href={project.sourceCode} className="btn btn-outline-primary mr-2" target="_blank" rel="noopener noreferrer">Github</a>
          <a href={project.liveProject} className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
      </div>
    </div>
  );
};

var middleSlide = Math.floor(projects.length / 2);
const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>
    <Swiper
      initialSlide={middleSlide}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3} // Default value (3 cards per view)
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
      modules={[EffectCoverflow, Pagination]} // Register modules
      className="container-fluid"
      breakpoints={{
        // When the screen width is 1200px or more, show 3 cards
        1200: {
          slidesPerView: 3,
        },
        // When the screen width is 768px or more, show 2 cards
        768: {
          slidesPerView: 2,
        },
        // When the screen width is less than 768px, show 1 cards
        480: {
          slidesPerView: 1,
        },
      }}
    >

        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card project={project} />
          </SwiperSlide>
        ))}
    </Swiper>
    <a href="#contact">
        <Icon src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Projects;
