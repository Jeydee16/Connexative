import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// @ts-ignore
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// @ts-ignore
import markerIcon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Contact() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        // Fix for default Leaflet marker icon not loading
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x,
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
        });
    }, []);

    // Manila Ascott location coordinates
    const position: [number, number] = [14.5519, 121.0253];

    return (
        <div className="relative">
            {/* Contact Hero */}
            <section className="relative pt-40 pb-20 bg-slate-950 flex items-center min-h-[50vh] overflow-hidden">
                {/* Modern Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2560&auto=format&fit=crop" alt="Abstract Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>
                
                {/* Decorative moving shapes */}
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-64 -bottom-64 w-[800px] h-[800px] border-[1px] border-orange-500/10 rounded-full blur-sm"
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight uppercase font-display"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-3 text-slate-400 font-medium tracking-wide uppercase text-sm"
                    >
                        <Link to="/" onClick={scrollToTop} className="hover:text-red-500 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-red-500">Contact Us</span>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white dark:bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl h-[500px] border border-slate-200 dark:border-slate-700">
                        <MapContainer 
                            center={position} 
                            zoom={16} 
                            scrollWheelZoom={false} 
                            className="w-full h-full z-0 relative"
                        >
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    <div className="text-center font-sans">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Connexative Headquarters</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">7F Glorietta 4, Ayala Center<br/>Makati, Metro Manila</p>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>

            {/* Contact Details & Form */}
            <ContactSection />
        </div>
    );
}
