import { motion } from 'motion/react';

export function Achievements() {
  return (
    <section id="achievements" className="py-[60px] lg:py-[100px] w-full bg-[#111318]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <span className="section-label !text-brand-blue mb-4">RECOGNITION</span>
          <h2 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-display font-extrabold text-white leading-[0.95] mb-4 uppercase tracking-tight">
            A FEW THINGS I'M PROUD OF.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#0b0b0b] p-8 lg:p-12 border border-white/5 border-t-2 border-t-[#2a2d35] hover:border-t-brand-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-6">🏆</div>
            <span className="text-brand-blue uppercase tracking-widest text-xs font-bold mb-4">GLOBAL COMPETITION</span>
            <h3 className="font-display font-extrabold text-[2.2rem] sm:text-[2.5rem] text-white leading-[1] uppercase tracking-tight mb-4">
              Mozilla Responsible Computing Challenge
            </h3>
            <div className="text-brand-blue font-bold font-sans text-lg mb-6">2024</div>
            <p className="font-sans text-[#aaaaaa] text-[16px] leading-relaxed">
              Selected as a winner in Mozilla Foundation's global responsible computing challenge. This is the one that meant the most.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-[#0b0b0b] p-8 lg:p-12 border border-white/5 border-t-2 border-t-[#2a2d35] hover:border-t-brand-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-6">🎖️</div>
            <span className="text-brand-blue uppercase tracking-widest text-xs font-bold mb-4">INSTITUTIONAL RECOGNITION</span>
            <h3 className="font-display font-extrabold text-[2.2rem] sm:text-[2.5rem] text-white leading-[1] uppercase tracking-tight mb-4">
              University of Embu ICT Department
            </h3>
            <div className="text-brand-blue font-bold font-sans text-lg mb-6">2025</div>
            <p className="font-sans text-[#aaaaaa] text-[16px] leading-relaxed">
              Recognized by Head of ICT Maurice Murimi Micheni for exceptional diligence, responsibility, and technical capability during industrial attachment.
            </p>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 lg:py-12 border-y border-white/10 mb-16"
        >
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-[3.5rem] lg:text-[4.5rem] text-brand-blue mb-2 leading-none">5+</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Projects Built</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-[3.5rem] lg:text-[4.5rem] text-brand-blue mb-2 leading-none">2024</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Mozilla Winner</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-[3.5rem] lg:text-[4.5rem] text-brand-blue mb-2 leading-none">3</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Years · Zero to AI Dev</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-[3.5rem] lg:text-[4.5rem] text-brand-blue mb-2 leading-none">EMBU</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Kenya</span>
          </div>
        </motion.div>

        {/* Leadership List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <div className="flex items-center text-left w-full max-w-2xl">
            <span className="text-2xl lg:text-3xl mr-5">👥</span>
            <span className="font-sans text-white text-lg">Led a 10-member student team in a community tech project</span>
          </div>
          <div className="flex items-center text-left w-full max-w-2xl">
            <span className="text-2xl lg:text-3xl mr-5">🌱</span>
            <span className="font-sans text-white text-lg">Volunteered in local environmental initiatives</span>
          </div>
          <div className="flex items-center text-left w-full max-w-2xl">
            <span className="text-2xl lg:text-3xl mr-5">🎙️</span>
            <span className="font-sans text-white text-lg">Protocol Officer — University of Embu Career Week</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
