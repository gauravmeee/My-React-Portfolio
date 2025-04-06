import React from 'react';

function Profile() {
    return (
        <section id="profile" className="section min-h-[calc(100vh-4rem)] pt-16 relative overflow-hidden">
            {/* Galaxy Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-indigo-800 to-black opacity-90">
                {/* Animated stars */}
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Rocket */}
                <div className="absolute top-20 right-[20%] animate-float">
                    <div className="text-4xl rotate-45">🚀</div>
                </div>
                {/* Planet */}
                <div className="absolute bottom-20 left-[15%] animate-float-slow">
                    <div className="text-5xl">🪐</div>
                </div>
                {/* Star */}
                <div className="absolute top-40 left-[25%] animate-pulse">
                    <div className="text-3xl">⭐</div>
                </div>
                {/* Satellite */}
                <div className="absolute top-1/3 right-[15%] animate-float-delayed">
                    <div className="text-3xl">🛸</div>
                </div>
            </div>

            <div className="section-container h-full p-0 relative">
                <div className="flex flex-col items-center justify-center gap-8">
                    {/* Profile Image with Galaxy Ring */}
                    <div className="w-48 h-48 md:w-64 md:h-64 relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-spin-slow"></div>
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-900 to-black"></div>
                        <img 
                            src="./assets/profile pic.jpg" 
                            alt="Gaurav Meena" 
                            className="w-full h-full rounded-full object-cover relative z-10 p-1"
                        />
                        {/* Glowing effect */}
                        <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-xl animate-pulse-slow"></div>
                    </div>
                    <div className="text-center relative z-10">
                        <p className="text-lg text-indigo-200 mb-2">Hello, I'm</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Gaurav Meena</h1>
                        <p className="text-xl text-indigo-200 mb-6">Full Stack Developer</p>
                        <div className="flex gap-4 justify-center mb-8">
                            <button
                                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/75"
                                onClick={() => window.open('https://drive.google.com/file/d/1o74OTbcjWq62jN6HZe21Y4ZLVzUAy8_m/view?usp=drive_link', '_blank')}
                            >
                                Download CV
                            </button>
                            <button 
                                className="px-6 py-3 border-2 border-indigo-400 text-indigo-200 rounded-full hover:bg-indigo-900/50 transition-all duration-300 hover:border-indigo-300 hover:text-indigo-100"
                                onClick={() => window.location.href='./#contact'}
                            >
                                Contact Info
                            </button>
                        </div>
                        <div className="flex gap-6 justify-center">
                            <a
                                href="https://leetcode.com/gaurav_meena"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-200 hover:text-orange-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                                </svg>
                            </a>
                            <a
                                href="https://codeforces.com/profile/gaurav_meena"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-200 hover:text-[#1F8ACB] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;


