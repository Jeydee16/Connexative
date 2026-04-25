import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Construct body
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Trigger mailto link
    window.location.href = `mailto:connectme@connexative.com?subject=${encodeURIComponent(subject as string)}&body=${body}`;
    alert("Message format prepared. Your default email client will now open.");
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 relative overflow-hidden">
      {/* Decorative center grid */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px] opacity-[0.05] z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">Contact Details</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">Ready to start your next big project?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg font-light leading-relaxed">Whether you need custom software development, robust IT support, or an entire infrastructure overhaul, our team is ready to deliver.</p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-white dark:bg-slate-950 shadow-md shadow-slate-200 border border-slate-100 dark:border-slate-800 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <MapPin strokeWidth={1.5} size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-light">Manila Ascott, 7F Glorietta 4, Ayala Center,<br/>Makati, 1224 Metro Manila Philippines</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-white dark:bg-slate-950 shadow-md shadow-slate-200 border border-slate-100 dark:border-slate-800 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Phone strokeWidth={1.5} size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Phone Number</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-lg">+632 8651-6522</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-white dark:bg-slate-950 shadow-md shadow-slate-200 border border-slate-100 dark:border-slate-800 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail strokeWidth={1.5} size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-lg mb-1">connectme@connexative.com</p>
                  <p className="text-slate-500 font-light">www.connexative.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">Make an Online Appointment</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">For Business Planning.</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Name *</label>
                    <input type="text" name="name" placeholder="John Doe" required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 focus:bg-white dark:bg-slate-950 transition-all font-medium placeholder:font-normal placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your E-Mail *</label>
                    <input type="email" name="email" placeholder="john@company.com" required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 focus:bg-white dark:bg-slate-950 transition-all font-medium placeholder:font-normal placeholder:text-slate-400" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject *</label>
                      <input type="text" name="subject" placeholder="Subject" required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 focus:bg-white dark:bg-slate-950 transition-all font-medium placeholder:font-normal placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone *</label>
                      <input type="tel" name="phone" placeholder="Phone" required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 focus:bg-white dark:bg-slate-950 transition-all font-medium placeholder:font-normal placeholder:text-slate-400" />
                  </div>
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message *</label>
                  <textarea name="message" placeholder="Tell us about your project..." rows={5} required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 focus:bg-white dark:bg-slate-950 transition-all resize-none font-medium placeholder:font-normal placeholder:text-slate-400"></textarea>
              </div>
              <button type="submit" className="bg-slate-900 hover:bg-red-600 text-white font-bold py-5 px-8 rounded-2xl w-full transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-red-600/30 flex items-center justify-center gap-3">
                Send Now <ExternalLink size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
