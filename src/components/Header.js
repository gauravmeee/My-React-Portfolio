import React from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-around items-center h-17vh">
        <div className="text-2xl font-playwrite font-semibold">Gkmeena</div>
        <div>
          <ul className="flex gap-8 list-none text-xl">
            <li><a href="#about" className="text-black no-underline hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent">About</a></li>
            <li><a href="#skills" className="text-black no-underline hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent">Skills</a></li>
            <li><a href="#projects" className="text-black no-underline hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent">Projects</a></li>
            <li><a href="#contact" className="text-black no-underline hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-around items-center px-8 py-4 w-full">
          <div className="text-2xl font-playwrite font-semibold">Gkmeena</div>
          <div className="relative">
            <div 
              className="flex flex-col justify-between h-6 w-7 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>

            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <ul className="py-2">
                <li><a href="#about" className="block px-4 py-2 text-xl text-black hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent" onClick={handleMenuToggle}>About</a></li>
                <li><a href="#skills" className="block px-4 py-2 text-xl text-black hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent" onClick={handleMenuToggle}>Skills</a></li>
                <li><a href="#projects" className="block px-4 py-2 text-xl text-black hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent" onClick={handleMenuToggle}>Projects</a></li>
                <li><a href="#contact" className="block px-4 py-2 text-xl text-black hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-accent" onClick={handleMenuToggle}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;