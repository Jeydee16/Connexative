import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  { 
    id: 1, 
    name: 'Alberta Infantino', 
    role: 'DEVELOPER', 
    content: 'Connexative completely transformed our workflow with a custom system built around our real business needs. Their team was attentive, fast, and highly skilled. Within months, we reduced manual work, improved accuracy, and gained valuable insights through automation. I\'d trust them again for any large-scale software project.',
    rating: 5
  },
  { 
    id: 2, 
    name: 'Hosain Al-Amin', 
    role: 'DEVELOPER', 
    content: 'Partnering with Connexative was the best decision for our startup. They quickly understood our vision, built a scalable MVP, and supported us through every iteration. Their developers are proactive and creative, ensuring smooth delivery from planning to launch. We now have a product that our users love and depend on daily.',
    rating: 5
  },
  { 
    id: 3, 
    name: 'M.Kamrul Islam', 
    role: 'CTO', 
    content: 'Connexative helped us migrate our complex infrastructure to a secure cloud platform. We experienced zero downtime during the cutover. We\'ve seen immediate improvements in performance and scalability across our operations. Their technical precision continues to impress us.',
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      {/* Tech/Circuit Board Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none pb-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              <path d="M 0 50 L 20 50 L 30 30 L 70 30 L 80 50 L 100 50" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="20" cy="50" r="3" fill="white" />
              <circle cx="80" cy="50" r="3" fill="white" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-slate-800 text-slate-400 text-xs font-bold tracking-widest uppercase mb-6 bg-slate-900/50 backdrop-blur-sm">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What Our Customer <span className="text-slate-600 dark:text-slate-400">Says</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-slate-900 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-2xl border border-slate-800 relative z-10 hover:border-red-900/50 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="text-red-500 mb-8 inline-block transform group-hover:scale-110 transition-transform">
                <Quote size={48} strokeWidth={1} fill="none" />
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-10 flex-grow font-light">
                “{t.content}”
              </p>

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={18} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              <div>
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold tracking-wider uppercase mt-1 block">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
