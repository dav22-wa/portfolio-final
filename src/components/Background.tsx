import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export function Background() {
  return (
    <section id="background" className="py-24 lg:py-32 w-full bg-[#07090e] border-t border-[#1f2638] text-[#d4d4d4]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-label !text-[#00f0ff] mb-3">TRAJECTORY & CREDENTIALS</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight mb-3 uppercase tracking-tight">
            WHERE I'VE BEEN. WHAT I'VE EARNED.
          </h2>
          <p className="text-base sm:text-lg text-[#b3b3b3] font-sans leading-relaxed">
            The crucible of industrial experience, top-tier academic honors, and disciplined continuous credentialing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Experience & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Experience Card */}
            <div className="bg-[#0e111a] border border-[#1f2638] rounded-lg p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-3">
                <Briefcase className="w-4 h-4 text-[#00f0ff]" />
                <span>ATTACHMENT EXPERIENCE</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-1">
                ICT Attaché — University of Embu ICT Department
              </h3>
              <p className="text-xs font-mono text-[#b3b3b3] uppercase tracking-wider mb-4">
                May 2025 – August 2025 · Embu, Kenya
              </p>
              <p className="font-sans text-sm text-[#d4d4d4] leading-relaxed mb-4">
                Configured and maintained enterprise campus network topology, deployed OS images, applied server security patches, and resolved identity verification incidents. Supervised university computing facilities and was formally commended by Head of ICT Maurice Murimi Micheni for technical capability and operational diligence.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-[#0e111a] border border-[#1f2638] rounded-lg p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-3">
                <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-1">
                  BSc. Computer Science — University of Embu
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold text-[#e5b927] uppercase tracking-wider mb-2">
                  <span>First Class Honours Graduate</span>
                  <span className="text-[#1f2638]">·</span>
                  <span>Class of 2026</span>
                </div>
                <p className="font-sans text-xs text-[#b3b3b3] leading-relaxed">
                  Focus: Artificial Intelligence, Machine Learning, Database Architecture, Network Security, Applied Cryptography, Distributed Systems.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1f2638]">
                <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight mb-1">
                  KCSE — Grade B-
                </h4>
                <p className="text-xs text-[#b3b3b3]">
                  St. Peter's Moi's Bridge Secondary School · Kakamega, Kenya
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#0e111a] border border-[#1f2638] rounded-lg p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-6">
                <Award className="w-4 h-4 text-[#00f0ff]" />
                <span>PROFESSIONAL ACCREDITATIONS</span>
              </div>
              
              <div className="space-y-6">
                
                <div className="pb-5 border-b border-[#1f2638]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                      Power Learn Project (PLP Academy)
                    </h4>
                    <span className="text-[10px] font-mono text-[#00f0ff]">Graduated</span>
                  </div>
                  <p className="text-xs text-[#b3b3b3] mt-1">
                    AI for Software Engineering · Python · Web Technologies · Venture Building
                  </p>
                </div>

                <div className="pb-5 border-b border-[#1f2638]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                      IBM Professional Certifications
                    </h4>
                    <span className="text-[10px] font-mono text-[#00f0ff]">Certified</span>
                  </div>
                  <p className="text-xs text-[#b3b3b3] mt-1">
                    Artificial Intelligence · Cybersecurity Foundations · Cloud Computing
                  </p>
                </div>

                <div className="pb-5 border-b border-[#1f2638]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                      HP LIFE Global Programs
                    </h4>
                    <span className="text-[10px] font-mono text-[#00f0ff]">Certified</span>
                  </div>
                  <p className="text-xs text-[#b3b3b3] mt-1">
                    Cybersecurity Awareness · Data Science & Applied Analytics
                  </p>
                </div>

                <div className="pb-5 border-b border-[#1f2638]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                      Cisco Networking Academy
                    </h4>
                    <span className="text-[10px] font-mono text-[#00f0ff]">Certified</span>
                  </div>
                  <p className="text-xs text-[#b3b3b3] mt-1">
                    Introduction to Cybersecurity · Networking Infrastructure Basics
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                      Cisco — CCNA & Junior Cyber Analyst
                    </h4>
                    <span className="text-[10px] font-mono text-[#e5b927]">In Progress</span>
                  </div>
                  <p className="text-xs text-[#b3b3b3] mt-1">
                    Enterprise Routing, Switching, and Cyber Threat Hunting (Expected Dec 2026)
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
