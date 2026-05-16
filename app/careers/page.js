'use client';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, CheckCircle2, Users, Star, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roles = [
  {
    title: 'Senior Dentist',
    type: 'Full-time',
    experience: '5+ Years',
    desc: 'We are looking for an experienced Senior Dentist to lead our clinical team, perform complex procedures, and ensure the highest standards of patient care.',
    reqs: ['BDS/MDS degree', 'Valid State Dental Council Registration', 'Proven experience in advanced procedures'],
  },
  {
    title: 'Dental Assistant',
    type: 'Full-time',
    experience: '1-3 Years',
    desc: 'Join our team as a Dental Assistant to support our dentists during procedures, manage patient comfort, and maintain sterilization protocols.',
    reqs: ['Certification in Dental Assisting', 'Knowledge of dental instruments', 'Excellent communication skills'],
  },
  {
    title: 'Front Desk Executive',
    type: 'Full-time',
    experience: '0-2 Years',
    desc: 'Be the welcoming face of 32 Pearls. Manage appointments, patient queries, billing, and ensure a seamless premium experience for every visitor.',
    reqs: ['Strong interpersonal skills', 'Basic computer & billing knowledge', 'Fluent in English and local languages'],
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ef8139]/10 rounded-full border border-[#ef8139]/20 mb-6"
          >
            <Star size={16} className="text-[#ef8139] fill-[#ef8139]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef8139]">Join Our Team</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6"
          >
            Build Your Career With <br />
            <span className="text-[#ef8139]">32 Pearls Dental Clinic</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We are always looking for passionate, skilled professionals to join our premium dental care facility. Discover your next career opportunity below.
          </motion.p>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
              <Briefcase className="text-[#ef8139]" size={32} />
              Open Positions
            </h2>
            <div className="hidden md:flex items-center gap-2 text-gray-500 font-medium">
              <Users size={20} />
              <span>Currently hiring for {roles.length} roles</span>
            </div>
          </div>

          <div className="space-y-6">
            {roles.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">{role.type}</span>
                        <span className="px-3 py-1 bg-[#ef8139]/10 text-[#ef8139] text-xs font-bold rounded-full">{role.experience}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#ef8139] transition-colors">{role.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {role.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">Requirements:</p>
                      <ul className="space-y-2">
                        {role.reqs.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex items-center md:items-start">
                    <a 
                      href={`mailto:careers@32pearls.com?subject=Application for ${role.title}`}
                      className="w-full md:w-auto bg-gray-900 hover:bg-[#ef8139] text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Apply Now
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Don't see a role that fits your profile? Send us your resume anyway!</p>
            <a href="mailto:careers@32pearls.com" className="inline-flex items-center gap-2 font-bold text-[#ef8139] hover:text-gray-900 transition-colors">
              Email us directly <ChevronRight size={16} />
            </a>
          </div>

          <div className="mt-24 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-semibold transition-colors">
              <ArrowLeft size={20} /> Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
