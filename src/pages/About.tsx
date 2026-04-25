import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, Navigation2, Target, Users, Zap, ExternalLink, X } from 'lucide-react';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
    { id: 1, date: '20 June 2024', comments: 'No Comments', title: 'Leveraging Descriptive Solutions for Business Growth.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 2, date: '10 Aug 2024', comments: 'No Comments', title: 'How to Create Modern Web Site For Your Business.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, date: '15 Aug 2024', comments: 'No Comments', title: 'Scaling Your Enterprise Infrastructure in 2025.', image: 'https://images.unsplash.com/photo-1504384764586-bb4cebc125f3?auto=format&fit=crop&q=80&w=800' },
];

export default function About() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const [activeModal, setActiveModal] = useState<any>(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [activeModal]);

    return (
        <div className="relative">
            {/* Modal */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModal(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-950 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden"
                        >
                            <button 
                                onClick={() => setActiveModal(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 hover:text-red-600 rounded-full flex items-center justify-center transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{activeModal.title}</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 border-l-4 border-red-500 pl-4 py-1 font-medium bg-slate-50 dark:bg-slate-900">{activeModal.desc || activeModal.date}</p>
                                <div className="prose text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                    <p>Comprehensive details about this section would be loaded here. At Connexative, we pride ourselves on deep technical expertise and delivering measurable results for every client engagement.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* About Hero */}
            <section className="relative pt-40 pb-20 bg-slate-950 flex items-center min-h-[50vh] overflow-hidden">
                {/* Modern Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2560&auto=format&fit=crop" alt="Abstract Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>
                
                {/* Decorative moving shapes */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-64 -top-64 w-[800px] h-[800px] border-[1px] border-red-500/10 rounded-full blur-sm"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        About Us
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-3 text-slate-400 font-medium tracking-wide uppercase text-sm"
                    >
                        <Link to="/" onClick={scrollToTop} className="hover:text-red-500 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-red-500">About Us</span>
                    </motion.div>
                </div>
            </section>

            {/* Core About Content */}
            <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
                {/* Decorative dot pattern */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(#c51a1b_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold tracking-wider text-sm uppercase">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                                ABOUT US
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                We provide our clients with <span className="text-red-600">innovative solutions.</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                                At Connexative, we develop smart, maintainable software solutions that help businesses scale efficiently and adapt to change. Our team combines technical expertise with creative problem-solving to deliver systems that are reliable, future-ready, and tailored to each client’s unique goals.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                <button onClick={() => setActiveModal({title: "Best IT Solutions & Service", desc: "Our award-winning approach to IT."})} className="flex items-center gap-4 group text-left">
                                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                                        <Target size={24} />
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">Best IT Solutions<br/>& Service</span>
                                </button>
                                <button onClick={() => setActiveModal({title: "24/7 Customer Service", desc: "Always online. Always ready."})} className="flex items-center gap-4 group text-left">
                                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                                        <Zap size={24} />
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">24 Hour's<br/>Customer Service</span>
                                </button>
                            </div>

                            <div className="pt-8">
                                <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-xl shadow-slate-900/20 group">
                                    EXPLORE MORE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team Work" className="rounded-3xl object-cover h-64 w-full shadow-lg" />
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Office" className="rounded-3xl object-cover h-80 w-full shadow-lg -mt-16" />
                            </div>
                            
                            <motion.div 
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-10 left-10 bg-white dark:bg-slate-950 p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-6"
                            >
                                <div className="text-red-600">
                                    <Users size={48} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-slate-900 dark:text-white">826 <span className="text-red-600">+</span></div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Satisfied Clients</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ProjectShowcase />

            {/* Blog / Articles Section */}
            <section className="py-32 bg-slate-50 dark:bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">OUR SPECIALITIES</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Exploring Its Potential in<br/>Various Industries.
                            </h3>
                        </div>
                        <button className="flex items-center gap-2 font-bold text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors uppercase tracking-wider text-sm group">
                            VIEW all post <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <motion.button 
                                key={post.id}
                                onClick={() => setActiveModal({title: post.title, desc: post.date})}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 text-left focus:outline-none"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-4">
                                        <span className="text-red-600">{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span>{post.comments}</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-red-600 transition-colors">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                                        READ MORE <ExternalLink size={16} className="text-red-600" />
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
