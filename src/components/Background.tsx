import { motion } from 'motion/react';

export function Background() {
  return (
    <section id="background" className="py-[60px] lg:py-[100px] w-full bg-[#0b0b0b]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="section-label !text-brand-gold mb-4">BACKGROUND</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-4 uppercase tracking-tight">
            WHERE I'VE BEEN. <br className="hidden sm:block"/> WHAT I'VE EARNED.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Experience & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Experience */}
            <div>
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6 block">EXPERIENCE</span>
              
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                  ICT Attaché — University of Embu ICT Department
                </h3>
                <div className="text-[#aaaaaa] font-sans text-sm mb-5 uppercase tracking-widest">
                  May 2025 – August 2025 · Embu, Kenya
                </div>
                <p className="font-sans text-white text-[16px] leading-[1.8]">
                  I configured and maintained campus network systems, installed operating systems, applied security patches, and provided daily tech support to staff and students. I supervised computer labs, resolved portal issues, and recovered email accounts. At the end of the attachment, Head of ICT Maurice Murimi Micheni commended me for exceptional diligence and technical capability.
                </p>
              </div>
            </div>

            <hr className="border-[#2a2d35] my-12" />

            {/* Education */}
            <div>
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6 block">EDUCATION</span>
              
              <div className="mb-8">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                  BSc. Computer Science — University of Embu
                </h3>
                <div className="text-[#aaaaaa] font-sans text-sm mb-5 uppercase tracking-widest">
                  Sep 2022 – Sep 2026 (Expected)
                </div>
                <div className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed">
                  <span className="text-white font-bold mr-2">Courses:</span>
                  AI · Machine Learning · Software Engineering · Database Systems · Computer Networks · Network Security · Web Programming · ICT Project Management
                </div>
              </div>

              <div className="pt-8 border-t border-[#2a2d35]">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                  KCSE Grade B-
                </h3>
                <div className="text-[#aaaaaa] font-sans text-sm uppercase tracking-widest">
                  St. Peter's Moi's Bridge Secondary School · Kakamega · 2018–2022
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6 block">CERTIFICATIONS</span>
            
            <div className="flex flex-col border-l-[3px] border-brand-gold pl-6 sm:pl-8 space-y-8">
              
              <div className="relative pb-8 border-b border-[#2a2d35]">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                  Power Learn Project (PLP Academy)
                </h3>
                <p className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed mb-4">
                  AI for Software Engineering · Python · Web · Databases · Startup Building
                </p>
                <div className="text-brand-gold font-sans text-sm uppercase tracking-widest font-bold">
                  Feb 2025 – Jul 2025
                </div>
              </div>

              <div className="relative pb-8 border-b border-[#2a2d35]">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                  IBM
                </h3>
                <p className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed">
                  Artificial Intelligence · Cybersecurity · Cloud Computing · Data Analytics
                </p>
              </div>

              <div className="relative pb-8 border-b border-[#2a2d35]">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                  HP LIFE
                </h3>
                <p className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed">
                  Cybersecurity Awareness · Data Science & Analytics
                </p>
              </div>

              <div className="relative pb-8 border-b border-[#2a2d35]">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                  Cisco Networking Academy
                </h3>
                <p className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed">
                  Introduction to Cybersecurity · Networking Basics
                </p>
              </div>

              <div className="relative pb-8 border-b border-[#2a2d35]">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                    Cisco — CCNA
                  </h3>
                  <span className="bg-[#1e2330] text-brand-gold text-[11px] px-2 py-1 tracking-widest uppercase font-bold rounded">In Progress</span>
                </div>
                <div className="text-[#aaaaaa] font-sans text-sm uppercase tracking-widest">
                  Expected Dec 2026
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                    Cisco — Junior Cybersecurity Analyst
                  </h3>
                  <span className="bg-[#1e2330] text-brand-gold text-[11px] px-2 py-1 tracking-widest uppercase font-bold rounded">In Progress</span>
                </div>
                <div className="text-[#aaaaaa] font-sans text-sm uppercase tracking-widest">
                  Expected Dec 2026
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
