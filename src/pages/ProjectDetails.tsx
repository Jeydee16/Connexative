import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, PhoneCall, Mail, ArrowRight } from 'lucide-react';

const BASE_PROJECT_DATA = {
    date: '10 January, 2024',
    client: 'Itsolution Ltd',
    website: 'www.domain.com',
    location: 'New York, USA',
    overview: 'Alternative innovation to ethical network environmental whiteboard methods empowerment. Dramatically architect go forward opportunities before user-centric partnerships. Credibly implement exceptional.',
    details: 'Continually fashion orthogonal leadership skills whereas wireless metrics. Uniquely syndicate exceptional opportunities with interdependent users. Globally enhance fully tested meta-services rather than pandemic solutions. Proactively integrate client-integrate go forward architectures and turnkey meta-services.Interactively harness integrated ROI whereas frictionless products.',
    challenge: 'Innovate wireless e-markets for inexpensive e-markets. Monotonectally grow progressive processes before seamless ideas facilitate an expanded array of scenarios rather than backend users. Objectively impact intuitive users and low-risk high-yield networks. Conveniently supply visionary',
    processTitle: 'Process & Results',
    processes: [
        'Technology Consultancy',
        'Maintenance And Support',
        'We Provide best services',
        'Requirements Gathering',
        'Maintenance good Support'
    ],
    conclusion: 'Competently architect intermandated deliverables client niches continually underwhelm Appropriately communicate economically sound e-commerce after enterprise services. Dramatically target cross-media solutions and error-free platforms. Monotonectally pontificate 24/365 human capital and dynamic potentialities compellingly pursue'
};

const PROJECTS_DB: Record<string, any> = {
    '1': {
        ...BASE_PROJECT_DATA,
        title: 'Digital Product Design',
        category: 'Software Development',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000',
    },
    '2': {
        ...BASE_PROJECT_DATA,
        title: 'App Development',
        category: 'Software Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000',
        date: '15 March, 2024',
        client: 'Global Tech',
        website: 'www.globaltech.com',
        location: 'London, UK',
    },
    '3': {
        ...BASE_PROJECT_DATA,
        title: 'CMC Softwar Solution',
        category: 'Software Integration',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
        date: '22 April, 2024',
        client: 'MedCare Hospital',
        location: 'Toronto, CA',
    },
    '4': {
        ...BASE_PROJECT_DATA,
        title: 'Software Development',
        category: 'Software Development',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000',
    },
    '5': {
        ...BASE_PROJECT_DATA,
        title: 'Enterprise Hardware Lease',
        category: 'Hardware Management',
        image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=2000',
    },
    '6': {
        ...BASE_PROJECT_DATA,
        title: 'Automated Business Flow',
        category: 'Business Process',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    }
};

const MAIN_SERVICES = [
    'Software Development',
    'Data Management',
    'Software Integration',
    'Hardware Management',
    'Business Process',
    'Technical Support'
];

export default function ProjectDetails() {
    const { id } = useParams();
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Simulating fetching project based on ID. 
    // Fallback to project 1 if id doesn't match
    const project = id && PROJECTS_DB[id] ? PROJECTS_DB[id] : PROJECTS_DB['1'];

    return (
        <div className="relative bg-slate-50 dark:bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-slate-950 flex items-center overflow-hidden h-[40vh] min-h-[400px]">
                <div className="absolute inset-0 z-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-3 text-slate-400 font-medium tracking-wide uppercase text-sm"
                    >
                        <Link to="/" onClick={scrollToTop} className="hover:text-red-500 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-red-500">{project.title}</span>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Featured Image */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-slate-950"
                            >
                                <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover" />
                            </motion.div>

                            {/* Info Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-slate-950 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                <div className="space-y-1 text-center md:text-left border-r border-slate-100 dark:border-slate-800 last:border-0 md:border-r">
                                    <h4 className="text-slate-500 font-bold uppercase tracking-wider text-xs">Date</h4>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.date}</p>
                                </div>
                                <div className="space-y-1 text-center md:text-left border-r-0 md:border-r border-slate-100 dark:border-slate-800">
                                    <h4 className="text-slate-500 font-bold uppercase tracking-wider text-xs">Client</h4>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.client}</p>
                                </div>
                                <div className="space-y-1 text-center md:text-left border-r border-slate-100 dark:border-slate-800 md:border-r">
                                    <h4 className="text-slate-500 font-bold uppercase tracking-wider text-xs">Website</h4>
                                    <p className="font-semibold text-red-600">{project.website}</p>
                                </div>
                                <div className="space-y-1 text-center md:text-left">
                                    <h4 className="text-slate-500 font-bold uppercase tracking-wider text-xs">Location</h4>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.location}</p>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Here To Know About This Project</h2>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg mb-6">{project.overview}</p>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg">{project.details}</p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Challenge Of Project</h2>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg mb-10">{project.challenge}</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Process" className="rounded-2xl w-full h-64 object-cover shadow-sm" />
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Analysis" className="rounded-2xl w-full h-64 object-cover shadow-sm" />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">{project.processTitle}</h2>
                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        {project.processes.map((proc, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="text-red-600 shrink-0">
                                                    <CheckCircle2 size={24} />
                                                </div>
                                                <span className="font-bold text-slate-800 dark:text-slate-300">{proc}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg">{project.conclusion}</p>
                                </div>
                                
                                {/* Prev / Next Project Navigation */}
                                <div className="flex border-t border-slate-100 dark:border-slate-800 pt-8 items-center justify-between mt-12 gap-4">
                                    {parseInt(id || '1') > 1 ? (
                                        <Link 
                                            to={`/project/${parseInt(id || '1') - 1}`} 
                                            onClick={scrollToTop}
                                            className="group flex-1 flex flex-col items-start p-4 hover:bg-slate-50 dark:bg-slate-900 rounded-2xl transition-colors"
                                        >
                                            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors">
                                                <ChevronLeft size={16} /> Previous
                                            </div>
                                            <span className="text-slate-900 dark:text-white font-bold truncate w-full group-hover:text-red-600 transition-colors">
                                                {PROJECTS_DB[(parseInt(id || '1') - 1).toString()]?.title || 'Previous Project'}
                                            </span>
                                        </Link>
                                    ) : (
                                        <div className="flex-1"></div>
                                    )}
                                    
                                    <div className="w-px h-16 bg-slate-100 dark:bg-slate-800 hidden sm:block"></div>
                                    
                                    {parseInt(id || '1') < Object.keys(PROJECTS_DB).length ? (
                                        <Link 
                                            to={`/project/${parseInt(id || '1') + 1}`} 
                                            onClick={scrollToTop}
                                            className="group flex-1 flex flex-col items-end text-right p-4 hover:bg-slate-50 dark:bg-slate-900 rounded-2xl transition-colors"
                                        >
                                            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors">
                                                Next <ChevronRight size={16} />
                                            </div>
                                            <span className="text-slate-900 dark:text-white font-bold truncate w-full group-hover:text-red-600 transition-colors">
                                                {PROJECTS_DB[(parseInt(id || '1') + 1).toString()]?.title || 'Next Project'}
                                            </span>
                                        </Link>
                                    ) : (
                                        <div className="flex-1"></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Main Services Widget */}
                            <div className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-6 border-b border-slate-100 dark:border-slate-800 relative">
                                    Main Services
                                    <span className="absolute bottom-[-1px] left-0 w-12 h-[2px] bg-red-600"></span>
                                </h3>
                                <ul className="space-y-4">
                                    {MAIN_SERVICES.map((service, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                to="/#services"
                                                className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-slate-700 dark:text-slate-300"
                                            >
                                                {service}
                                                <ChevronRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Promo Image Widget */}
                            <div className="rounded-[2rem] overflow-hidden shadow-sm shadow-slate-200">
                                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600" alt="Consulting promo" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"/>
                            </div>

                            {/* Contact Widget */}
                            <div className="bg-slate-950 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-bl-full -mr-8 -mt-8 opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
                                
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                                        <PhoneCall size={32} />
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-4">Call Us Anytime</h4>
                                    <p className="text-3xl font-extrabold text-white mb-2">+123 (4567) 890</p>
                                    <p className="text-slate-400 mb-8 font-light flex items-center gap-2 justify-center">
                                        <Mail size={16} /> example@gmail.com
                                    </p>
                                    
                                    <Link 
                                        to="/contact" 
                                        onClick={scrollToTop}
                                        className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-white dark:bg-slate-950 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Contact Us <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
