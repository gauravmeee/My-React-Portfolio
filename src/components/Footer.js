import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&#169; {new Date().getFullYear()} Gkmeena. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/gauravmeee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/gauravmeee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="mailto:gaurav28.official@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
