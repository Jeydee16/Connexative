import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    CheckCircle2, ArrowRight, ExternalLink, Shield, Cctv, Zap, Fuel, Fingerprint, Wallet, Cpu, Linkedin, Mail, Sun, Users
} from 'lucide-react';
import ContactSection from '../components/ContactSection';

const HERO_IMAGE = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2560&auto=format&fit=crop";

const INDUSTRIES = [
    {
        id: 'military',
        title: 'Defense Systems',
        icon: Shield,
        image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop',
        description: 'Advanced technology solutions engineered for national security, defense operations, and tactical command centers.',
        features: [
            'Secure Communication Networks',
            'Tactical Command & Control',
            'Cyber warfare defense systems',
            'Surveillance & Reconnaissance'
        ],
        gradient: 'from-orange-500 to-red-600'
    },
    {
        id: 'security-telecom',
        title: 'Security & Telecom',
        icon: Cctv,
        image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2000&auto=format&fit=crop',
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
        title: 'Payment Gateways',
        icon: Wallet,
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop',
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
        title: 'HRIS Solutions',
        icon: Fingerprint,
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop',
        description: 'Comprehensive Human Resource Information Systems to streamline workforce management.',
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
        title: 'Software Systems',
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
        description: 'Custom software solutions designed to solve complex business problems and drive transformation.',
        features: [
            'Custom Web Applications',
            'Mobile App Development',
            'Enterprise Software',
            'API Integration'
        ],
        gradient: 'from-cyan-500 to-blue-600'
    },
    {
        id: 'petroleum',
        title: 'Energy & Petroleum',
        icon: Fuel,
        image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2000&auto=format&fit=crop',
        description: 'Comprehensive IT & operational systems tailored for the oil, gas, and petroleum industry.',
        features: [
            'Refinery Automation',
            'Supply Chain Tracking',
            'Safety Monitoring',
            'Logistics Management'
        ],
        gradient: 'from-amber-500 to-orange-600'
    },
    {
        id: 'renewable-energy',
        title: 'Renewable Tech',
        icon: Sun,
        image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2000&auto=format&fit=crop',
        description: 'Sustainable energy solutions harnessing alternative sources to power modern operations.',
        features: [
            'Solar & Wind Systems',
            'Energy Storage Solutions',
            'Smart Grid Management',
            'Green Tech Integration'
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
    const [expandedId, setExpandedId] = useState<string | null>(null);


    return (
        <div className="relative">
            {/* Hero Section */}
            <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
                <img
                    src={HERO_IMAGE}
                    alt="Connexative Solutions Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
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
                {/* Decorative mesh background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.02] dark:bg-red-600/[0.04] rounded-full blur-[120px] -mr-40 -mt-40 z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] dark:bg-blue-600/[0.03] rounded-full blur-[100px] -ml-20 -mb-20 z-0" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group z-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
                                    alt="CSI Emerging Technology" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600/5 rounded-full blur-[100px]" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-red-600 z-0 opacity-50" />
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-red-600 z-0 opacity-50" />
                            
                            {/* Stats Badge */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-6 top-1/4 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100 dark:border-slate-800"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Trusted by</p>
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">Industry Leaders</p>
                                    </div>
                                </div>
                            </motion.div>
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
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light text-justify">
                                    <span className="font-bold text-slate-900 dark:text-white border-b-2 border-red-600/20 pb-0.5">Connexative Solutions Inc. (CSI)</span> was incorporated to provide business solutions thru emerging technologies available to support its clientele. Our mission is to be the market leader in "emerging technologies", at every endeavor we take together with our clients.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light text-justify">
                                    We ensure that our customers are supplied with most cost-effective products and are supported by the company's partners. A dynamic company not only to engage in business solutions, consultancy and integration but also to the marketing of its diverse pool of products as a Technology Provider.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light text-justify">
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
                    <div className="pt-20 relative isolate">
                        {/* Decorative floating shapes */}
                        <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10 animate-pulse" />
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 font-display tracking-tight">At your disposal...</h3>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-12 h-1.5 bg-red-600 rounded-full"></div>
                                <div className="w-3 h-1.5 bg-red-600/30 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-red-600/20 rounded-full"></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "End-to-End Systems",
                                    desc: "From I.T. systems and payment gateways to military, security, and environmental technologies.",
                                    icon: Shield,
                                    bg: "hover:bg-red-50/50 dark:hover:bg-red-900/5"
                                },
                                {
                                    title: "Global Partnerships",
                                    desc: "Supplying only best-in-class industry-standard products and cost-effective solutions.",
                                    icon: ExternalLink,
                                    bg: "hover:bg-blue-50/50 dark:hover:bg-blue-900/5"
                                },
                                {
                                    title: "Client-Centric Value",
                                    desc: "We value clients as partners, living by the concept \"what you need, is what you get.\"",
                                    icon: Users,
                                    bg: "hover:bg-purple-50/50 dark:hover:bg-purple-900/5"
                                },
                                {
                                    title: "Execution Excellence",
                                    desc: "A singular focus on results and functionality—simply because we want to make things work!",
                                    icon: Zap,
                                    bg: "hover:bg-amber-50/50 dark:hover:bg-amber-900/5"
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className={`bg-white dark:bg-slate-950/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${item.bg}`}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent opacity-[0.02] -mr-16 -mt-16 rounded-full" />
                                    
                                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-red-600 transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:rotate-6">
                                        <item.icon size={32} className="text-red-600 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 font-display tracking-tight leading-tight group-hover:text-red-600 transition-colors duration-500">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors duration-500">
                                        {item.desc}
                                    </p>
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
            </section>            {/* Strategic Industries Section */}
            <section id="industries" className="py-24 bg-slate-950 relative isolate overflow-hidden">
                {/* Immersive Section Background Photo Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
                    <img 
                        src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop" 
                        alt="Core Infrastructure" 
                        className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000 brightness-[0.3] mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
                    <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-6 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-red-500 text-[10px] font-black tracking-[0.3em] uppercase">Core Operations</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-display tracking-tight uppercase leading-[0.9]">
                            Strategic <span className="text-red-600">Industries</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-red-600 mx-auto mb-8 rounded-full shadow-lg shadow-red-600/20" />
                        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Pioneering enterprise solutions across critical sectors with a focus on reliability, security, and next-gen integration.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-[1500px] mx-auto px-4 md:px-10 relative z-10">
                    {/* Fixed Height Flex Container to Maintain Shape During Expansion */}
                    <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[600px] items-stretch">
                        {INDUSTRIES.map((ind, idx) => {
                            const isExpanded = expandedId === ind.id;
                            const Icon = ind.icon;
                            return (
                                <motion.div
                                    key={ind.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: idx * 0.05,
                                        layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                    }}
                                    viewport={{ once: true }}
                                    onClick={() => setExpandedId(isExpanded ? null : ind.id)}
                                    className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer group flex-grow transition-all duration-700 bg-white border border-transparent min-h-[140px] ${
                                        isExpanded 
                                        ? 'lg:flex-[6] shadow-2xl shadow-black/80' 
                                        : 'lg:flex-1 hover:border-red-600/20 shadow-sm'
                                    }`}
                                >
                                    {/* Collapsed State - Minimal White Icon Card */}
                                    {!isExpanded && (
                                        <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                                            {/* Advanced Icon Container */}
                                            <div className="relative group/icon mb-8">
                                                {/* Ambient Glow */}
                                                <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                
                                                {/* Main Container */}
                                                <div className="relative w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-red-600/40 transition-all duration-500 border border-slate-100 group-hover:border-red-500 overflow-hidden">
                                                    {/* Decorative corner accent */}
                                                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-600/10 group-hover:bg-white/20 -mr-2 -mt-2 rotate-45" />
                                                    
                                                    <Icon size={26} className="text-red-600 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                                                    
                                                    {/* Glassy Overlay */}
                                                    <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none group-hover:hidden" />
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.25em] leading-tight px-2 max-w-[100px] group-hover:text-red-600 transition-colors duration-500">
                                                {ind.title}
                                            </h3>

                                            <div className="mt-8 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-red-600 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-sm bg-white">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Expanded Content - Professional Industrial Profile */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="relative h-full w-full p-8 lg:p-16 flex flex-col justify-center z-20 overflow-hidden"
                                            >
                                                <div className="max-w-4xl">
                                                    <div className="flex items-center gap-6 md:gap-10 mb-8 md:mb-12">
                                                        {/* Expanded Icon Container */}
                                                        <div className="relative shrink-0">
                                                            {/* Background Decorative Rings */}
                                                            <div className="absolute inset-0 bg-red-600/20 blur-3xl animate-pulse" />
                                                            <div className="absolute -inset-4 border border-red-600/10 rounded-3xl animate-[spin_10s_linear_infinite]" />
                                                            
                                                            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center shadow-2xl shadow-red-600/40 border border-red-500/50">
                                                                <Icon size={44} className="md:size-14" strokeWidth={1.5} />
                                                                
                                                                {/* Glass Reflection */}
                                                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 font-display tracking-tight uppercase leading-none">
                                                                {ind.title}
                                                            </h3>
                                                            <div className="h-1.5 md:h-2 w-20 md:w-32 bg-red-600 mt-3 md:mt-4 rounded-full shadow-[0_4px_12px_rgba(220,38,38,0.3)]" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex flex-col xl:flex-row gap-8 lg:gap-16 items-start">
                                                        <div className="flex-1">
                                                            <p className="text-slate-600 mb-8 md:mb-10 text-base md:text-xl font-light leading-relaxed max-w-xl">
                                                                {ind.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-4">
                                                                <a 
                                                                    href="#contact"
                                                                    className="px-8 md:px-10 py-4 md:py-5 bg-slate-950 text-white rounded-2xl font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-red-600 transition-all transform hover:translate-y-[-2px] shadow-xl inline-block"
                                                                >
                                                                    Connect with Experts
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="flex-1 grid gap-3 md:gap-4 place-content-start w-full">
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 text-left">Key Competencies</p>
                                                            {ind.features.map((feature, fIdx) => (
                                                                <div key={fIdx} className="flex items-center gap-3 md:gap-4 py-3 md:py-4 px-5 md:px-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 transition-colors">
                                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                                                        <CheckCircle2 size={14} className="text-red-600" />
                                                                    </div>
                                                                    <span className="text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-wider">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
