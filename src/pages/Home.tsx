import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Video, Zap, Droplet, Users, CreditCard, Code2
} from 'lucide-react';
import ContactSection from '../components/ContactSection';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop",
];

const INDUSTRIES = [
    {
        id: 'military',
        title: 'Military and Defense Systems',
        icon: ShieldCheck,
        description: 'Advanced technology solutions engineered for national security, defense operations, and tactical command centers.',
        features: [
            'Secure Communication Networks',
            'Tactical Command & Control',
            'Cyber warfare defense systems',
            'Surveillance & Reconnaissance Integration'
        ],
        gradient: 'from-orange-500 to-red-600'
    },
    {
        id: 'security-telecom',
        title: 'Security Systems & Telecom Equipments',
        icon: Video,
        description: 'Next-generation surveillance and telecommunication infrastructure for enterprise and civil applications.',
        features: [
            'CCTV & Video Analytics',
            'Access Control Systems',
            'Telecom Infrastructure Setup',
            'Unified Communications'
        ],
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        id: 'pos-payment',
        title: 'POS & Payment Gateways Systems',
        icon: CreditCard,
        description: 'Secure and efficient payment processing solutions for modern retail and digital commerce.',
        features: [
            'Point of Sale Integration',
            'Secure Payment Gateways',
            'Transaction Monitoring',
            'Multi-currency Support'
        ],
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 'hris',
        title: 'HRIS System',
        icon: Users,
        description: 'Comprehensive Human Resource Information Systems to streamline workforce management and administrative processes.',
        features: [
            'Employee Data Management',
            'Payroll & Benefits Integration',
            'Performance Tracking',
            'Automated Reporting'
        ],
        gradient: 'from-purple-500 to-pink-600'
    },
    {
        id: 'software-dev',
        title: 'Applications & Software Development',
        icon: Code2,
        description: 'Custom software solutions designed to solve complex business problems and drive digital transformation.',
        features: [
            'Custom Web Applications',
            'Mobile App Development',
            'Enterprise Software Solutions',
            'API Integration & Development'
        ],
        gradient: 'from-cyan-500 to-blue-600'
    },
    {
        id: 'petroleum',
        title: 'Oil & Lubricants and other Petroleum products',
        icon: Droplet,
        description: 'Comprehensive IT & operational systems tailored for the oil, gas, and petroleum industry.',
        features: [
            'Refinery Automation Systems',
            'Supply Chain Tracking',
            'Safety & Compliance Monitoring',
            'Petroleum Product Logistics'
        ],
        gradient: 'from-amber-500 to-orange-600'
    },
    {
        id: 'renewable-energy',
        title: 'Alternative & Renewable Energy Technologies',
        icon: Zap,
        description: 'Sustainable energy solutions harnessing alternative sources to power modern operations.',
        features: [
            'Solar & Wind Power Systems',
            'Energy Storage Solutions',
            'Smart Grid Management',
            'Green Technology Integration'
        ],
        gradient: 'from-lime-400 to-emerald-600'
    }
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
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Hero Slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); 
        return () => clearInterval(timer);
    }, []);


    return (
        <div className="relative">
            {/* Hero Section */}
            <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
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
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-white text-sm font-medium tracking-wide">Next Generation Tech Partner</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 font-display">
                            Innovative Solutions through <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Emerging Technologies.</span>
                        </h1>

                        <div className="flex flex-wrap gap-5">
                            <a href="#industries" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white dark:bg-slate-950 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 shadow-xl shadow-red-600/20 group uppercase">
                                EXPLORE INDUSTRIES <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
                                <img 
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2080&auto=format&fit=crop" 
                                    alt="CSI Datacenter" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-full font-bold tracking-[0.2em] text-[10px] uppercase border border-red-100 dark:border-red-900/20 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                                Discover Our Journey
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.1] font-display mb-8">
                                Empowering Business through <span className="text-red-600">Emerging Technologies</span>.
                            </h2>
                            <div className="space-y-6 mb-10">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                                    <span className="font-bold text-slate-900 dark:text-white border-b-2 border-red-600/20 pb-0.5">Connexative Solutions Inc. (CSI)</span> was incorporated to provide business solutions thru emerging technologies available to support its clientele. Our mission is to be the market leader in "emerging technologies", at every endeavor we take together with our clients.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                                    We ensure that our customers are supplied with most cost-effective products and are supported by the company's partners. A dynamic company not only to engage in business solutions, consultancy and integration but also to the marketing of its diverse pool of products as a Technology Provider.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                                    Our manpower, composed of talented and dynamic people, are masters in their own fields. We aim to satisfy our client as being a one-stop-shop; to analyze the needs of the market and offer optimum solutions.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-200 dark:border-slate-800">
                                <div>
                                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">100%</div>
                                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">Expert</div>
                                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Team Members</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid - "At your disposal" */}
                    <div className="pt-20 border-t border-slate-200 dark:border-slate-800">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">At your disposal...</h3>
                            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "End-to-End Systems",
                                    desc: "From I.T. systems and payment gateways to military, security, and environmental technologies.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Global Partnerships",
                                    desc: "Supplying only best-in-class industry-standard products and cost-effective solutions.",
                                    icon: ExternalLink
                                },
                                {
                                    title: "Client-Centric Value",
                                    desc: "We value clients as partners, living by the concept \"what you need, is what you get.\"",
                                    icon: Users
                                },
                                {
                                    title: "Execution Excellence",
                                    desc: "A singular focus on results and functionality—simply because we want to make things work!",
                                    icon: Zap
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 bg-red-50 dark:bg-red-900/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-500">
                                        <item.icon size={28} className="text-red-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Approach Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-display">Our Strategic Approach</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We follow a disciplined methodology to ensure every project delivers maximum value and technical excellence.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Consultation", desc: "We deep-dive into your business challenges to identify high-impact opportunities." },
                            { step: "02", title: "Engineering", desc: "Our team builds robust, scalable solutions using cutting-edge tech stacks." },
                            { step: "03", title: "Deployment", desc: "Seamless integration and ongoing support to ensure long-term success." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="text-8xl font-black text-slate-100 dark:text-slate-900/50 absolute -top-8 -left-4 z-0 group-hover:text-red-50 dark:group-hover:text-red-900/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className="relative z-10 pl-4 border-l-2 border-red-600">
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Industries Section */}
            <section id="industries" className="py-24 bg-slate-50 dark:bg-slate-900 relative isolate">
                <div className="absolute inset-0 bg-slate-950 -z-10 h-[500px]">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                        alt="Industrial Technology" 
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-white text-sm font-bold tracking-wide uppercase font-sans">Core Operations</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display tracking-tight uppercase">
                            <span className="text-red-600">Strategic</span> Industries
                        </h2>
                        <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                            Empowering critical sectors with enterprise-grade infrastructure, secure communication, and automated systems. Click on any sector to explore our specialized solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {INDUSTRIES.map((ind, idx) => {
                            const isExpanded = expandedId === ind.id;
                            return (
                                <motion.div 
                                    key={ind.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setExpandedId(isExpanded ? null : ind.id)}
                                    className={`bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border border-slate-100 dark:border-slate-800 overflow-hidden group cursor-pointer transition-all duration-300 ${isExpanded ? 'ring-2 ring-red-600/20' : 'hover:border-red-600/20'}`}
                                >
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${ind.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -mr-20 -mt-20`}></div>
                                    
                                    <div className="flex items-center gap-6 relative z-10">
                                        <div className={`w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm ${isExpanded ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20' : ''}`}>
                                            <ind.icon size={36} className={isExpanded ? 'text-red-600' : 'text-slate-400 group-hover:text-red-600 transition-colors'} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight group-hover:text-red-600 transition-colors">
                                            {ind.title}
                                        </h3>
                                    </div>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.4, ease: "circOut" }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg font-light leading-relaxed">
                                                    {ind.description}
                                                </p>
                                                
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {ind.features.map((feature, fIdx) => (
                                                        <motion.div 
                                                            key={fIdx}
                                                            initial={{ x: -10, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 + (fIdx * 0.05) }}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                                                            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="mt-8 flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-[0.2em] relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {isExpanded ? 'View Less' : 'Click for Details'}
                                        <ArrowRight size={16} className={`transform transition-transform duration-500 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
