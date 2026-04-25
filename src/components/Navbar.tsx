import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we are in browser
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white dark:bg-slate-950 shadow-md py-3' : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Clickable Logo */}
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group focus:outline-none">
          <img src="/logo.jpeg" alt="Connexative Solutions Inc." className="h-10 md:h-12 w-auto object-contain rounded-lg" />
          <div className="flex flex-col ml-1 text-left hidden sm:flex">
              <span className="font-bold text-red-600 leading-none text-2xl tracking-tight">CONNEXATIVE</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300 leading-none text-[10px] tracking-[0.2em] mt-1">SOLUTIONS INC.</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-10 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-lg px-8 py-2 rounded-full border border-slate-200 dark:border-slate-700/50">
          <Link to="/" onClick={scrollToTop} className={`font-semibold transition-colors py-2 relative group ${location.pathname === '/' ? 'text-red-600' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link to="/about" onClick={scrollToTop} className={`font-semibold transition-colors py-2 relative group ${location.pathname === '/about' ? 'text-red-600' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link to="/contact" onClick={scrollToTop} className={`font-semibold transition-colors py-2 relative group ${location.pathname === '/contact' ? 'text-red-600' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              Contact Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" onClick={scrollToTop} className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-600 transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-red-600/30 flex items-center gap-2 transform hover:-translate-y-0.5">
            Get A Quote
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 p-2 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              <Link to="/" className="text-xl font-bold text-slate-800 dark:text-slate-300" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}>Home</Link>
              <Link to="/about" className="text-xl font-bold text-slate-800 dark:text-slate-300" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}>About Us</Link>
              <Link to="/contact" className="text-xl font-bold text-slate-800 dark:text-slate-300" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}>Contact Us</Link>
              <Link to="/contact" className="bg-red-600 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-red-600/20 mt-4" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}>Get A Quote Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
