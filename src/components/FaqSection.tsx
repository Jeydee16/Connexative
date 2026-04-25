import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { 
    id: 1,
    q: "What IT Services Do You Provide?", 
    a: "We offer a comprehensive range of IT services designed to support your business growth, enhance productivity, and ensure secure digital operations. From technical support and system maintenance to cloud solutions, cybersecurity, and custom software development, our team provides end-to-end technology services tailored to your needs." 
  },
  { 
    id: 2,
    q: "How secure is your company's data?", 
    a: "Your company’s data is protected using industry-leading security practices designed to safeguard sensitive information at every level. We implement advanced encryption, multi-layer access controls, continuous monitoring, and regular security audits to ensure your data remains safe from threats. Our team follows strict compliance standards and best practices, giving you confidence that your business information is always secure, protected, and handled with the highest level of integrity." 
  },
  { 
    id: 3,
    q: "What are the main industries we serve?", 
    a: "We support a wide range of industries by delivering reliable, secure, and scalable IT solutions tailored to each sector's unique needs. Our primary clients include businesses in finance, healthcare, manufacturing, retail, logistics, professional services, and technology. Whether you're a growing startup or an established enterprise, we provide the expertise and infrastructure needed to help your industry operate efficiently and securely." 
  },
  { 
    id: 4,
    q: "How do you measure product success?", 
    a: "We measure product success using a combination of data-driven metrics and real-world user insights. Our approach focuses on understanding how well the product solves customer problems, delivers value, and supports overall business goals. Key indicators include user satisfaction, adoption and engagement rates, performance analytics, customer feedback, and ROI impact. By continuously tracking these metrics, we ensure every product continues to grow, improve, and deliver meaningful results for our clients." 
  },
  {
    id: 5,
    q: "What is your customer geography?",
    a: "We serve customers across a broad geographic footprint, supporting businesses locally, regionally, and internationally. Our clients span multiple countries and industries, allowing us to deliver flexible, scalable IT solutions tailored to different markets. Whether your organization is based in a single location or operates globally, we have the expertise and infrastructure to support your needs wherever you are."
  }
];

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Image & Title */}
          <div className="relative">
             <div className="mb-12">
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                 Keeping Your Business <br/> Safe and Available.
               </h2>
             </div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
               <div className="absolute -top-16 -left-16 w-32 h-32 bg-white dark:bg-slate-950 rounded-full blur-2xl opacity-50 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                 alt="Business Professional" 
                 className="w-full object-cover h-[500px]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
             </div>
          </div>

          {/* Right Column - FAQs */}
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">A Comprehensive Guide.</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Alternative innovation network environmental whiteboard pursue for premier methods empowerment go forward opportunities
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map(faq => (
                <div 
                  key={faq.id} 
                  className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-lg pr-8">{faq.q}</span>
                    <span className="text-slate-900 dark:text-white shrink-0">
                      {openFaqId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openFaqId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-light border-t border-slate-50 pt-4 mx-6">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
