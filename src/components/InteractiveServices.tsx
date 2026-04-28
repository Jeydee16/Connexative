import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Cpu, Cloud, Briefcase, Code2, CheckCircle2 } from 'lucide-react';

const INNOV8_SERVICES = [
  {
    id: 'office-setup',
    title: 'Office Setup',
    icon: Monitor,
    color: 'bg-red-600',
    description: 'Complete workplace deployment for modern teams.',
    features: [
      'Microsoft 365 deployment',
      'Google Workspace setup',
      'Domain and email configuration',
      'Data migration support'
    ]
  },
  {
    id: 'hardware',
    title: 'Device Leasing & Hardware',
    icon: Cpu,
    color: 'bg-red-600',
    description: 'Reliable sourcing, refresh, and rollout of business devices.',
    features: [
      'Hardware procurement',
      'Device leasing and installation',
      'Network infrastructure',
      'Workstation solutions'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    color: 'bg-red-600',
    description: 'Scalable cloud and hybrid environments for secure growth.',
    features: [
      'Cloud infrastructure deployment',
      'Hybrid cloud architecture',
      'Virtual machines and virtualization',
      'Cloud migration services'
    ]
  },
  {
    id: 'consulting',
    title: 'Service & Consulting',
    icon: Briefcase,
    color: 'bg-red-600',
    description: 'Strategic IT guidance aligned with business outcomes.',
    features: [
      'Infrastructure assessment',
      'Technology roadmap planning',
      'Cybersecurity advisory',
      'Managed IT services'
    ]
  },
  {
    id: 'business',
    title: 'Business Solutions',
    icon: Code2,
    color: 'bg-red-600',
    description: 'Digital platforms that automate operations and unlock efficiency.',
    features: [
      'Website development',
      'HRIS system',
      'Accounting system',
      'eCommerce and AI platforms'
    ]
  }
];

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState<string>('');

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-display tracking-tight mb-4">
            Everything You Need. One Strategic IT Partner.
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Connexative combines enterprise-grade infrastructure, cloud capability, and business solutions to help companies grow faster with less complexity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[32rem]">
          {INNOV8_SERVICES.map((service) => {
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveService(isActive ? '' : service.id)}
                className={`relative rounded-3xl cursor-pointer overflow-hidden flex flex-col transition-all duration-300 ${
                  isActive 
                    ? `lg:w-[40%] bg-red-800 text-white shadow-2xl` 
                    : activeService === '' 
                      ? 'lg:w-[20%] bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'
                      : 'lg:w-[15%] bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'
                }`}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              >
                <div className={`p-6 md:p-8 flex flex-col h-full ${isActive ? 'justify-start' : 'justify-center items-center'}`}>
                  <motion.div 
                    layout="position"
                    className={`flex items-center justify-center rounded-2xl mb-6 ${
                      isActive ? 'w-14 h-14 bg-white/20 backdrop-blur-sm shadow-inner' : 'w-16 h-16 bg-slate-800 border border-slate-700 mb-8'
                    }`}
                  >
                    <service.icon size={isActive ? 28 : 32} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-white' : 'text-slate-400'} />
                  </motion.div>

                  <motion.h3 
                    layout="position"
                    initial={false}
                    animate={{
                      fontSize: isActive ? '1.75rem' : '1.125rem',
                      lineHeight: isActive ? '2rem' : '1.5rem',
                      textAlign: isActive ? 'left' : 'center',
                    }}
                    className="font-bold font-display"
                  >
                    {service.title}
                  </motion.h3>

                  {!isActive && (
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-6 h-1 bg-slate-700 rounded-full mt-4 mx-auto"
                    />
                  )}

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-4 flex-grow flex flex-col"
                      >
                        <p className="text-red-100 mb-8 font-light leading-relaxed">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-white font-medium">
                              <CheckCircle2 size={20} className="text-white shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto text-sm text-center text-red-200 font-medium pb-2">
                          Click to close
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
