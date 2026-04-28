import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Video, Zap, Droplet, LayoutGrid, CheckCircle2 } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const INDUSTRIES = [
    {
        id: 'military',
        title: 'Military and Defense System',
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
        title: 'Security System and Telecom Equipments',
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
        id: 'renewable-energy',
        title: 'Alternative and Renewable Energy Technology',
        icon: Zap,
        description: 'Sustainable energy solutions harnessing alternative sources to power modern operations.',
        features: [
            'Solar & Wind Power Systems',
            'Energy Storage Solutions',
            'Smart Grid Management',
            'Green Technology Integration'
        ],
        gradient: 'from-emerald-400 to-teal-600'
    },
    {
        id: 'petroleum',
        title: 'Petroleum Products System',
        icon: Droplet,
        description: 'Comprehensive IT & operational systems tailored for the oil, gas, and petroleum industry.',
        features: [
            'Refinery Automation Systems',
            'Supply Chain Tracking',
            'Safety & Compliance Monitoring',
            'Pipeline Sensor Integration'
        ],
        gradient: 'from-amber-500 to-orange-600'
    }
];

export default function StrategicIndustries() {
    return (
        <div className="relative isolate pt-24 bg-slate-50 dark:bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950 -z-10">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                        alt="Industrial Technology" 
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-white text-sm font-bold tracking-wide uppercase font-sans">Core Operations</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display tracking-tight uppercase">
                            <span className="text-red-600">Strategic</span> Industries
                        </h1>
                        <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                            Empowering critical sectors with enterprise-grade infrastructure, secure communication, and automated systems for a more resilient future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 relative z-20 -mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {INDUSTRIES.map((ind, idx) => (
                            <motion.div 
                                key={ind.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border border-slate-100 dark:border-slate-800 overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${ind.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -mr-20 -mt-20`}></div>
                                
                                <div className={`w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    <ind.icon size={36} className="text-red-600" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 font-display relative z-10 tracking-tight">
                                    {ind.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg font-light leading-relaxed relative z-10">
                                    {ind.description}
                                </p>
                                
                                <div className="space-y-4 relative z-10">
                                    {ind.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-red-600 shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
