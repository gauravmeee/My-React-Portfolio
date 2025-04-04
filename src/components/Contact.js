import React from 'react';

function Contact() {
  return (
    <section id="contact" className="flex justify-center flex-col py-20 h-[70vh]">
      <p className="text-center font-semibold">Get in Touch</p>
      <h1 className="text-5xl text-center font-bold">Contact Me</h1>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center items-center rounded-2rem border-2 border-primary/20 bg-light m-8 p-4 shadow-sm hover:shadow-md transition-all duration-300 w-fit">
          <div className="flex items-center justify-center gap-2 mx-4 my-2">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="cursor-default h-10 text-primary"
            />
            <p className="text-lg"><a href="mailto:gaurav28.official@gmail.com" className="hover:text-primary transition-colors duration-300">gaurav28.official@gmail.com</a></p>
          </div>
          <div className="flex items-center justify-center gap-2 mx-4 my-2">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="cursor-default h-10 text-primary"
            />
            <p className="text-lg"><a href="https://www.linkedin.com/in/gauravmeee/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-300">LinkedIn</a></p>
          </div>
          <div className="flex items-center justify-center gap-2 mx-4 my-2">
            <img
              src="./assets/github.png"
              alt="GitHub icon"
              className="cursor-default h-10 text-primary"
            />
            <p className="text-lg"><a href="https://github.com/gauravmeee" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-300">GitHub</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;