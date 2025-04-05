import React from 'react';

function Profile() {
    return (
        <section id="profile" className="section min-h-[calc(100vh-4rem)] pt-16">
            <div className="section-container h-full p-0">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="w-48 h-48 md:w-64 md:h-64">
                        <img 
                            src="./assets/profile pic.jpg" 
                            alt="Gaurav Meena" 
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Gaurav Meena</h1>
                        <p className="text-xl text-gray-700 mb-6">Full Stack Developer</p>
                        <div className="flex gap-4 justify-center mb-8">
                            <button
                                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                onClick={() => window.open('https://drive.google.com/file/d/1o74OTbcjWq62jN6HZe21Y4ZLVzUAy8_m/view?usp=drive_link', '_blank')}
                            >
                                Download CV
                            </button>
                            <button 
                                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-300"
                                onClick={() => window.location.href='./#contact'}
                            >
                                Contact Info
                            </button>
                        </div>
                        <div className="flex gap-6 justify-center">
                            <img
                                src="./assets/linkedin.png"
                                alt="LinkedIn"
                                className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => window.open('https://www.linkedin.com/in/gauravmeee/', '_blank')}
                            />
                            <img
                                src="./assets/github.png"
                                alt="GitHub"
                                className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => window.open('https://github.com/gauravmeee/', '_blank')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;


