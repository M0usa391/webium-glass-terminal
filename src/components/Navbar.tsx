
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 ${
        isScrolled ? 'py-2 glass-panel' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-xl">تيكنولوجي تيم</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#services" className="font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              خدماتنا
            </a>
            <a href="#about" className="font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              من نحن
            </a>
            <a href="#terminal" className="font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Terminal
            </a>
          </nav>
          
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel mt-2 p-4 rounded-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </a>
            <a 
              href="#about" 
              className="font-medium py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </a>
            <a 
              href="#terminal" 
              className="font-medium py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Terminal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
