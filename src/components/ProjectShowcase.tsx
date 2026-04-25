import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECTS = [
    { id: 1, title: 'Digital Product Design', category: 'Software Development', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'App Development', category: 'Software Development', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'CMC Softwar Solution', category: 'Software Integration', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Software Development', category: 'Software Development', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Enterprise Hardware Lease', category: 'Hardware Management', img: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Customer Support BPO', category: 'Business Process Outsourcing', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
];

export default function ProjectShowcase() {
    const [projectPage, setProjectPage] = useState(0);

    const nextProjects = () => setProjectPage(p => p === 1 ? 0 : 1);
    const prevProjects = () => setProjectPage(p => p === 0 ? 1 : 0);

    return (
        <section id="projects" className="py-32 bg-white dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-100 dark:border-slate-800 pb-8">
                    <div>
                        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">OUR SPECIALITIES</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Explore Our Recent Projects.</h3>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prevProjects} className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all group">
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={nextProjects} className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all group">
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={projectPage}
                            initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 absolute inset-0"
                        >
                            {PROJECTS.slice(projectPage * 3, projectPage * 3 + 3).map((proj) => (
                                <Link to={`/project/${proj.id}`} key={proj.id} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block group cursor-pointer rounded-[2rem] overflow-hidden h-full min-h-[450px] relative shadow-lg">
                                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block px-4 py-1.5 bg-red-600/90 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider rounded-full mb-4">{proj.category}</span>
                                            <h4 className="text-3xl font-bold text-white mb-6 leading-tight">{proj.title}</h4>
                                            <div className="flex items-center gap-3 text-red-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                VIEW PROJECT DETAIL <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
