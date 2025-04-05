import React from "react";

function About() {
  return (
    <section id="about" className="section min-h-[calc(100vh-4rem)] pt-16">
      <div className="section-container h-full p-0">
        <p className="section-subtitle">Get To Know More</p>
        <h1 className="section-title mb-6">About Me</h1>
        <div className="container h-[calc(100%-8rem)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            <div className="hidden lg:block w-full max-w-xs mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="./assets/about pic.jpg"
                  alt="Profile picture"
                  className="relative w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/*Experience*/}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <img
                        src="./assets/experience.png"
                        alt="Experience icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="font-medium text-indigo-700">Fullstack Development</li>
                    <li>Experience with MERN Stack – 1+ year</li>
                    <li>Experience with Flask – 1+ year</li>
                  </ul>
                </div>

                {/*Education*/}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <img
                        src="./assets/education.png"
                        alt="Education icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                  </div>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="font-medium text-purple-700">B.Tech in Computer Engineering</li>
                    <li>Delhi Technological University (DTU)</li>
                    <li>Expected Graduation: 2025</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full">
                <p className="text-gray-700 leading-relaxed text-sm">
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
        </div>
      </div>
    </section>
  );
}

export default About;
