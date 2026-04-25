import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                  <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-6 focus:outline-none group">
                      <img src="/logo.jpeg" alt="Connexative Solutions Inc." className="h-10 md:h-12 w-auto object-contain rounded-lg" />
                      <div className="flex flex-col ml-1 text-left hidden sm:flex">
                          <span className="font-bold text-red-600 leading-none text-2xl tracking-tight">CONNEXATIVE</span>
                          <span className="font-semibold text-slate-300 leading-none text-[10px] tracking-[0.2em] mt-1">SOLUTIONS INC.</span>
                      </div>
                  </Link>
                  <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                      Redefining enterprise IT solutions. We build, manage, and scale the technology that powers modern businesses.
                  </p>
              </div>
              
              <div>
                  <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
                  <div className="flex flex-col gap-4">
                      <Link to="/" onClick={scrollToTop} className="hover:text-red-400 transition-colors w-fit">Home</Link>
                      <Link to="/about" onClick={scrollToTop} className="hover:text-red-400 transition-colors w-fit">About Us</Link>
                      <Link to="/contact" onClick={scrollToTop} className="hover:text-red-400 transition-colors w-fit">Contact Us</Link>
                  </div>
              </div>
              
              <div>
                  <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
                  <div className="flex flex-col gap-4">
                      <a href="#" className="hover:text-red-400 transition-colors w-fit">Privacy Policy</a>
                      <a href="#" className="hover:text-red-400 transition-colors w-fit">Terms of Service</a>
                      <a href="#" className="hover:text-red-400 transition-colors w-fit">Cookie Policy</a>
                  </div>
              </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
              <p>© {new Date().getFullYear()} Connexative Solutions Inc. All rights reserved.</p>
              <div className="flex gap-4">
                  <span className="text-slate-600 dark:text-slate-400">Built for scale.</span>
              </div>
          </div>
      </div>
    </footer>
  );
}
