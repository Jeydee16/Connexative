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
      return localStorage.getItem('theme') === 'dark';
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
    <nav className={`fixed w-full z-50 transition-all duration-500 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-sm ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Clickable Logo */}
        <a href="#home" onClick={scrollToTop} className="flex items-center gap-3 group focus:outline-none">
          <img src="/logo-removebg-preview.png" alt="Connexative Solutions Inc." className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
          <div className="flex flex-col ml-1 text-left hidden sm:flex">
              <span className="font-extrabold text-red-600 leading-none text-2xl tracking-tighter group-hover:tracking-normal transition-all duration-500 italic font-display">CONNEXATIVE</span>
              <span className="font-bold text-slate-800 dark:text-slate-300 leading-none text-[9px] tracking-[0.3em] mt-1.5 opacity-80 uppercase font-sans">Solutions Inc.</span>
          </div>
        </a>

        {/* Nav Links - Center floating pill */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" onClick={scrollToTop} className={`px-6 py-2.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 relative group overflow-hidden ${location.hash === '#home' || location.hash === '' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              <span className="relative z-10">Home</span>
              {(location.hash === '#home' || location.hash === '') && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-red-600 z-0" transition={{ type: 'spring', duration: 0.6 }} />
              )}
          </a>
          <a href="#about" className={`px-6 py-2.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 relative group overflow-hidden ${location.hash === '#about' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              <span className="relative z-10">About Us</span>
              {location.hash === '#about' && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-red-600 z-0" transition={{ type: 'spring', duration: 0.6 }} />
              )}
          </a>
          <a href="#industries" className={`px-6 py-2.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 relative group overflow-hidden ${location.hash === '#industries' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              <span className="relative z-10">Industries</span>
              {location.hash === '#industries' && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-red-600 z-0" transition={{ type: 'spring', duration: 0.6 }} />
              )}
          </a>
          <a href="#contact" className={`px-6 py-2.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 relative group overflow-hidden ${location.hash === '#contact' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-red-600'}`}>
              <span className="relative z-10">Contact Us</span>
              {location.hash === '#contact' && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-red-600 z-0" transition={{ type: 'spring', duration: 0.6 }} />
              )}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-600 transition-all duration-300 flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="bg-red-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-red-600/20 hover:shadow-slate-900/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95 group">
            Get A Quote
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3 relative z-[110]">
          <button 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md flex items-center justify-center shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button 
            className={`w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'bg-red-600 text-white' : 'bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white'} rounded-2xl active:scale-90 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md shadow-sm`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-4 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      
      {/* Refined Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-950 z-[105] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] p-8 md:hidden flex flex-col justify-center border-l dark:border-slate-800"
            >
              <div className="flex flex-col space-y-8">
                {[
                  { name: 'Home', path: '#home' },
                  { name: 'About Us', path: '#about' },
                  { name: 'Industries', path: '#industries' },
                  { name: 'Contact Us', path: '#contact' }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a 
                      href={item.path} 
                      className={`text-4xl font-black ${location.hash === item.path ? 'text-red-600' : 'text-slate-900 dark:text-white hover:text-red-600'} transition-colors block`} 
                      onClick={() => { setIsMobileMenuOpen(false); }}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8"
                >
                  <a 
                    href="#contact" 
                    className="bg-red-600 text-white text-center py-5 rounded-2xl font-black text-xl shadow-2xl shadow-red-600/30 block group active:scale-95 transition-all" 
                    onClick={() => { setIsMobileMenuOpen(false); }}
                  >
                    GET A QUOTE
                  </a>
                  <p className="text-center text-slate-500 dark:text-slate-500 mt-6 text-sm font-medium tracking-widest uppercase">Start Your Journey</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
