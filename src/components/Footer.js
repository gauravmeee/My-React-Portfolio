import React from 'react';

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white py-8">
      {/* Subtle space elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small floating elements */}
        <div className="absolute top-1/2 right-[15%] w-1 h-1 bg-indigo-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-[20%] w-1 h-1 bg-purple-400 rounded-full animate-pulse-slow delay-150"></div>
        <div className="absolute top-1/3 right-[30%] w-[2px] h-[2px] bg-yellow-300 rounded-full animate-pulse-slow delay-300"></div>
        
        {/* Tiny rocket */}
        <div className="absolute top-[40%] right-[25%] text-sm transform rotate-45 animate-float opacity-20">🚀</div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-4 text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">GK</span>
            <span className="text-indigo-600">meena</span>
          </div>

          {/* Navigation */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            <a
              href="https://leetcode.com/gaurav_meena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
            <a
              href="https://codeforces.com/profile/gaurav_meena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1F8ACB] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GKmeena. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
