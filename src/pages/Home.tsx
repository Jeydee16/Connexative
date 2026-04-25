import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    Code, GitMerge, Database, Server, Headphones, Wrench, 
    MonitorPlay, DatabaseZap, Building2, Laptop, 
    CheckCircle2, ArrowRight, ExternalLink, X
} from 'lucide-react';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import TestimonialSection from '../components/TestimonialSection';

import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop",
];

const SPECIALTIES = [
    { title: 'Equipment and Software', desc: 'We provide equipment leasing, re-selling, and technical support, ensuring optimal performance and cost-effectiveness.', icon: MonitorPlay, details: 'Leverage our vast network of industry-leading hardware providers. We offer customized leasing plans to ensure your teams always have the best tools, without the upfront capital expense.' },
    { title: 'Data Management', desc: 'We offer comprehensive data management solutions, including data storage, archiving, and integration.', icon: DatabaseZap, details: 'Our data centers are equipped with state-of-the-art redundancy architectures. We ensure seamless data pipelines, helping businesses unlock deep analytics while remaining fully compliant.' },
    { title: 'Business Process Outsourcing', desc: 'CSI offers efficient and customizable BPO solutions tailored to individual client needs.', icon: Building2, details: 'Scale your operations efficiently. From 24/7 customer support lines to back-office data entry, we recruit, train, and manage dedicated teams to lower your operational overhead.' },
    { title: 'Software Development', desc: 'We create and implement bespoke software solutions from end-to-end to address unique business challenges.', icon: Laptop, details: 'Our agile development pods specialize in React, Node.js, and Python. We take projects from ideation to deployment, maintaining a strict focus on scalable architecture and clean code.' },
];

const SERVICES = [
    { title: 'Software Development', desc: 'Turn your ideas into reality, worry-free', icon: Code, details: 'End-to-end web and mobile app development using the latest tech stacks to ensure performance and scalability.' },
    { title: 'Software Integration', desc: 'Introduce new solutions into your ecosystem seamlessly', icon: GitMerge, details: 'Integrate legacy systems with modern APIs. We handle complex data mappings and ensure zero downtime during cutovers.' },
    { title: 'Data Management', desc: 'Protect your valuable data with secure and reliable storage solutions', icon: Database, details: 'Automated backups, encrypted transit, and highly available architectures for mission-critical enterprise data.' },
    { title: 'Hardware Management', desc: 'Buy, sell, or lease hardware equipment with ease', icon: Server, details: 'Fleet tracking, lifecycle management, and secure hardware disposal for enterprise environments.' },
    { title: 'Business Process', desc: 'Streamline your operations and boost efficiency', icon: Headphones, details: 'Omnichannel support agents and administrative assistants ready to scale with your seasonal demands.' },
    { title: 'Technical Support', desc: 'Expert technical assistance, whenever you need it', icon: Wrench, details: 'Tier 1 to Tier 3 IT support desk, available 24/7. SLA-backed guarantees for issue resolution.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
    const [heroIndex, setHeroIndex] = useState(0);
    const [activeModalItem, setActiveModalItem] = useState<{title: string, desc: string, icon: any, details: string} | null>(null);

    // Hero Slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); 
        return () => clearInterval(timer);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeModalItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [activeModalItem]);

    return (
        <div className="relative">
            {/* Modal Overlay */}
            <AnimatePresence>
                {activeModalItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModalItem(null)}
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
                                onClick={() => setActiveModalItem(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 hover:text-red-600 rounded-full flex items-center justify-center transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 border border-red-100">
                                    <activeModalItem.icon size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{activeModalItem.title}</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 border-l-4 border-red-500 pl-4 py-1 font-medium bg-slate-50 dark:bg-slate-900 pr-4">{activeModalItem.desc}</p>
                                <div className="prose text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                    <p>{activeModalItem.details}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={heroIndex}
                        src={HERO_IMAGES[heroIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent z-0" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-950/10 backdrop-blur-md border border-white/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-white text-sm font-medium tracking-wide">Next Generation Tech Partner</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                            Essential IT Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Modern Business.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
                            Connexative transforms ideas into powerful, maintainable software solutions designed for rapid scale. Let's modernize your infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white dark:bg-slate-950 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 shadow-xl shadow-red-600/20 group">
                                EXPLORE SERVICES <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity group-hover:bg-slate-900/10" />
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-8 left-8 right-8 bg-white dark:bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/30">
                                            <CheckCircle2 size={28} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-3xl text-slate-900 dark:text-white">10+</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium tracking-wide">Years of Excellence</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold tracking-wider text-sm uppercase">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                                About Connexative
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Architecting digital solutions for tomorrow.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                                Our dedicated team of developers, designers, and systems architects works closely with clients to build scalable systems, streamline processes, and deliver bleeding-edge technology that evolves.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialties & Interactive Grid */}
            <section className="py-32 bg-white dark:bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">Our Specialties</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Mastering Core Technologies</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Click on any expertise area to discover deep insights into our specialized approach and methodology.</p>
                    </div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {SPECIALTIES.map((spec, i) => (
                            <motion.button 
                                key={i}
                                variants={itemVariants}
                                onClick={() => setActiveModalItem(spec)}
                                className="text-left bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="w-16 h-16 bg-white dark:bg-slate-950 shadow-sm text-slate-900 dark:text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                                    <spec.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">{spec.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow relative z-10 font-light">{spec.desc}</p>
                                <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm mt-auto relative z-10 group-hover:text-slate-900 dark:text-white">
                                    Read More <ExternalLink size={16} />
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Grid with Cards */}
            <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-4">Connexative Services</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Comprehensive Technical Offerings</h3>
                        </div>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {SERVICES.map((srv, i) => (
                            <motion.button 
                                key={i}
                                variants={itemVariants}
                                onClick={() => setActiveModalItem(srv)}
                                className="group relative p-10 bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-slate-800 hover:border-red-500/50 transition-all duration-500 text-left"
                            >
                                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-500 mb-8 border border-slate-700">
                                    <srv.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400">{srv.title}</h4>
                                <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed font-light">{srv.desc}</p>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            <ProjectShowcase />
            <FaqSection />
            <TestimonialSection />
            <ContactSection />
        </div>
    );
}
