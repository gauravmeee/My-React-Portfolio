import React from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md h-[12vh]">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-around items-center h-full border-b border-gray-100">
        <div className="text-2xl font-playwrite font-semibold text-blue-600">Gkmeena</div>
        <div>
          <ul className="flex gap-8 list-none text-xl">
            <li><a href="#about" className="text-gray-700 no-underline hover:text-blue-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="text-gray-700 no-underline hover:text-blue-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 no-underline hover:text-blue-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 no-underline hover:text-blue-600 hover:underline hover:underline-offset-4 hover:decoration-accent transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden h-full">
        <div className="flex justify-around items-center px-8 h-full w-full border-b border-gray-100">
          <div className="text-2xl font-playwrite font-semibold text-blue-600">Gkmeena</div>
          <div className="relative">
            <div 
              className="flex flex-col justify-between h-6 w-7 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>

            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <ul className="py-2">
                <li><a href="#about" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>About</a></li>
                <li><a href="#skills" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Skills</a></li>
                <li><a href="#projects" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Projects</a></li>
                <li><a href="#contact" className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300" onClick={handleMenuToggle}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;