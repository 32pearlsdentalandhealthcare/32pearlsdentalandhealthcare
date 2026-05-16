'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Stethoscope, CheckCircle, Shield, Star, Users, Award, X } from 'lucide-react';

export default function PromotionalHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while overlay is active
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Auto fade out after 5 seconds (or user can close)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-white overflow-hidden"
        >
          {/* Skip Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-white shadow-xl rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          <section className="bg-white h-screen flex flex-col justify-between py-4">
            {/* 1. Top Header Bar */}
            <div className="w-full bg-white py-2 shadow-sm relative z-20 flex-shrink-0">
              <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src="/logo.png" alt="32 Pearls" className="h-20 md:h-28 lg:h-32 object-contain" />
                </div>
                <div className="flex items-center gap-3 pr-12 md:pr-0">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                    <Phone className="text-gray-900 w-5 h-5 fill-current" />
                  </div>
                  <a href="tel:+918296552516" className="text-xl md:text-2xl font-bold text-gray-900 hidden sm:block">
                    +91 82965 52516
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Main Hero Banner (Orange/Yellow Style) */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 relative z-10 w-full flex-grow flex items-center">
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full lg:max-h-[550px]">
                
                {/* Background Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                {/* Left Content Area */}
                <div className="relative z-10 w-full lg:w-[60%] p-6 lg:p-10 flex flex-col justify-center">
                  
                  {/* Top Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-white/20 w-fit px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30 mb-6"
                  >
                    <Star className="text-white fill-white w-5 h-5" />
                    <span className="text-white font-bold text-sm tracking-wide">STATE OF THE ART FACILITY</span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] drop-shadow-md">
                      Premium Oral & <br /> Maxillofacial Surgeries
                    </h1>
                    <h2 className="text-xl md:text-2xl font-extrabold text-white mt-2 drop-shadow-md uppercase">
                      UNDER ONE ROOF!
                    </h2>
                  </motion.div>

                  {/* Service Pills */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 md:gap-4 mb-10"
                  >
                    {['Braces', 'Clear Aligners', 'Dentures', 'Dental Implants'].map((service, idx) => (
                      <div key={idx} className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-yellow-900/10 hover:scale-105 transition-transform cursor-default">
                        <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Stethoscope className="w-3.5 h-3.5 text-yellow-600" />
                        </div>
                        <span className="text-gray-800 font-extrabold text-sm md:text-base">{service}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Bottom Badges & Call to Action */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center mt-auto pt-4"
                  >
                    {/* Offer Badge 1 */}
                    <div className="flex flex-col items-start w-full sm:w-auto">
                      <div className="text-white font-black text-xl md:text-2xl drop-shadow-md uppercase tracking-wide">NO COST EMI</div>
                      <div className="text-white drop-shadow-sm text-sm font-medium">Available across all treatments</div>
                    </div>

                    {/* Offer Badge 2 */}
                    <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-xl w-full sm:w-auto">
                      <Shield className="w-6 h-6 text-yellow-500" />
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-black text-sm uppercase">Insurance</span>
                        <span className="text-gray-500 font-bold text-xs">Treatments Covered</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a href="#appointment" onClick={() => setIsVisible(false)} className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl transition-transform hover:scale-105 w-full sm:w-auto justify-center sm:ml-auto">
                      <Calendar className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-sm">Book Appointment</span>
                    </a>
                  </motion.div>

                </div>

                {/* Right Image Area */}
                <div className="w-full lg:w-[40%] relative min-h-[250px] lg:min-h-0 lg:h-auto">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute inset-0 lg:inset-y-0 lg:-left-12 lg:right-0 mt-4 lg:mt-0 lg:py-6 pr-0 lg:pr-6 pl-4 lg:pl-0 pb-4 lg:pb-6 flex items-center justify-center lg:justify-end"
                  >
                    <div className="w-full h-full relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/20 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                      <img 
                        src="/ot_image.jpeg" 
                        alt="Operation Theater Facility" 
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Floating highlight on image */}
                      <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Advanced Setup</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 3. Statistics Row */}
            <div className="max-w-7xl mx-auto px-6 mt-4 mb-2 relative z-10 w-full flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-200 text-gray-900">
                    <Users size={32} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">10000+</h3>
                    <p className="text-sm font-semibold text-gray-500">Happy Patients</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-200 text-gray-900">
                    <Award size={32} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">13+</h3>
                    <p className="text-sm font-semibold text-gray-500">Years Experience</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-200 text-gray-900">
                    <Stethoscope size={32} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">5+</h3>
                    <p className="text-sm font-semibold text-gray-500">Expert Doctors</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-200 text-gray-900">
                    <CheckCircle size={32} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">Modern</h3>
                    <p className="text-sm font-semibold text-gray-500">Dental Care</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
