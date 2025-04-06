import React from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResourcesToggle = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md h-14 md:h-16">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center h-full border-b border-gray-100 px-8 lg:px-16">
        <div className="flex items-center gap-1">
          <div className="text-3xl font-playwrite font-bold relative flex items-center">
          <span className="w-12 h-12 rounded-full font-bold flex items-center justify-center
  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600
  shadow-[inset_0_2px_6px_rgba(255,255,255,0.2)]
  border border-gray-700
  hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]
  transition-all duration-300">
  
  <span className="text-2xl text-indigo-400
    [text-shadow:0_0_10px_rgba(99,102,241,0.5)]
    drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
    Gk
  </span>
</span>


            <span className="text-indigo-600">
              meena
            </span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none text-xl">
            <li><a href="#about" className="text-gray-700 no-underline hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="text-gray-700 no-underline hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 no-underline hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 no-underline hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Contact</a></li>
            <li className="relative">
              <button 
                onClick={handleResourcesToggle}
                className="text-gray-700 no-underline hover:text-indigo-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300 flex items-center gap-1"
              >
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ${resourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b border-gray-100">My Applications</div>
                  <a 
                    href="https://mycodebank.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <img 
                      src="https://mycodebank.vercel.app/favicon.ico" 
                      alt="CodeBank" 
                      className="w-5 h-5 rounded-sm mr-2"
                    />
                    <div>
                      <div className="font-medium">CodeBank</div>
                      <div className="text-xs text-gray-500">Your ultimate platform for contests, job posts, Resources and more! 👨🏻‍💻</div>
                    </div>
                  </a>
                  <a 
                    href="https://my-unseen-stories.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-purple-600 hover:text-purple-800 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <img 
                      src="https://my-unseen-stories.vercel.app/favicon.ico" 
                      alt="Unseen Diaries" 
                      className="w-5 h-5 rounded-sm mr-2"
                    />
                    <div>
                      <div className="font-medium">Unseen Diaries</div>
                      <div className="text-xs text-gray-500">Capture your thoughts & Ideas in any format ✍️</div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden h-full">
        <div className="flex justify-between items-center h-full w-full border-b border-gray-100 px-8">
          <div className="flex items-center gap-1">
            <div className="text-2xl font-playwrite font-bold relative flex items-center">
              <span className="w-10 h-10 rounded-full font-bold flex items-center justify-center
                bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600
                shadow-[inset_0_2px_6px_rgba(255,255,255,0.2)]
                border border-gray-700
                hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]
                transition-all duration-300">
                <span className="text-xl text-indigo-400 [text-shadow:0_0_10px_rgba(99,102,241,0.5)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Gk</span>
              </span>
              <span className="text-indigo-600 ml-1">
                meena
              </span>
            </div>
          </div>
          <div className="relative">
            <div 
              className="flex flex-col justify-between h-5 w-6 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>

            <div className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <ul className="py-2">
                <li><a href="#about" className="block px-4 py-2 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>About</a></li>
                <li><a href="#skills" className="block px-4 py-2 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Skills</a></li>
                <li><a href="#projects" className="block px-4 py-2 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Projects</a></li>
                <li><a href="#contact" className="block px-4 py-2 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Contact</a></li>
                <li className="border-t border-gray-100 mt-2 pt-2">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500">My Applications</div>
                  <a 
                    href="https://mycodebank.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={handleMenuToggle}
                  >
                    <img 
                      src="https://mycodebank.vercel.app/favicon.ico" 
                      alt="CodeBank" 
                      className="w-5 h-5 rounded-sm mr-2"
                    />
                    <div>
                      <div className="font-medium">CodeBank</div>
                      <div className="text-xs text-gray-500">Your ultimate platform for contests, job posts, Resources and more! 👨🏻‍💻</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://my-unseen-stories.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-purple-600 hover:text-purple-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={handleMenuToggle}
                  >
                    <img 
                      src="https://my-unseen-stories.vercel.app/favicon.ico" 
                      alt="Unseen Diaries" 
                      className="w-5 h-5 rounded-sm mr-2"
                    />
                    <div>
                      <div className="font-medium">Unseen Diaries</div>
                      <div className="text-xs text-gray-500">Capture your thoughts & Ideas in any format ✍️</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;