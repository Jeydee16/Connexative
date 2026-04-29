import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" onClick={scrollToTop} className="flex items-center gap-4 mb-8 focus:outline-none group w-fit">
              <div className="relative flex items-center justify-center">
                <img src="/logo-removebg-preview.png" alt="CSI Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="font-extrabold text-white text-2xl tracking-tighter uppercase font-display">Connex</span>
                  <span className="font-extrabold text-red-600 text-2xl tracking-tighter uppercase font-display">ative</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1.5px] w-4 bg-red-600/60 rounded-full" />
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-500 font-sans">Solutions</span>
                </div>
              </div>
            </a>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm mb-8 text-sm">
              Incorporated to provide business solutions through emerging technologies available to support its clientele. Our mission is to be the market leader in technology innovations.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs font-display">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li><a href="#home" onClick={scrollToTop} className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#industries" className="hover:text-red-400 transition-colors">Industries</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>


        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest font-sans">
            &copy; {new Date().getFullYear()} Connexative Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/connexative-solutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="mailto:connectme@connexative.com" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:border-red-600 hover:text-red-600 transition-all duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
