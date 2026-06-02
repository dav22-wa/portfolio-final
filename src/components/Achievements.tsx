import { motion } from 'motion/react';

export function Achievements() {
  return (
    <section id="achievements" className="py-[60px] lg:py-[100px] w-full bg-[#111318]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <span className="section-label !text-brand-gold mb-4">RECOGNITION</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-4 uppercase tracking-tight">
            A FEW THINGS I'M PROUD OF.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#111318] p-8 lg:p-12 border-2 border-white/5 hover:border-[#e5b927]/60 shadow-[8px_8px_0_0_rgba(229,185,39,0.03)] hover:shadow-[12px_12px_0_0_rgba(229,185,39,0.08)] transition-all duration-305 flex flex-col items-center text-center rounded-sm group relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#e5b927]" />
            <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-115">🏆</div>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-extrabold mb-3">GLOBAL COMPETITION</span>
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none uppercase tracking-tight mb-4">
              Mozilla Responsible Computing Challenge
            </h3>
            <div className="text-[#e5b927] font-extrabold font-sans text-xl mb-6">2024 WINNER</div>
            <p className="font-sans text-stone-400 text-sm leading-relaxed">
              Selected in a highly competitive worldwide cohort by the limits-breaking Mozilla Foundation. Awarded for pioneering ethical, transparent, and high-responsibility machine learning systems designed for real human impact.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-[#111318] p-8 lg:p-12 border-2 border-white/5 hover:border-[#e5b927]/60 shadow-[8px_8px_0_0_rgba(229,185,39,0.03)] hover:shadow-[12px_12px_0_0_rgba(229,185,39,0.08)] transition-all duration-305 flex flex-col items-center text-center rounded-sm group relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-zinc-700 group-hover:bg-[#e5b927] transition-colors" />
            <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-115">🎖️</div>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-extrabold mb-3">INSTITUTIONAL EXCELLENCE</span>
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none uppercase tracking-tight mb-4">
              University of Embu ICT Department
            </h3>
            <div className="text-[#e5b927] font-extrabold font-sans text-xl mb-6">OFFICIAL COMMENDATION</div>
            <p className="font-sans text-stone-400 text-sm leading-relaxed">
              Recognized with highest-tier commendation by Maurice Murimi Micheni (Head of ICT Services) for exceptional technical leadership, enterprise-grade cloud integrations, and core professional capability.
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
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-brand-gold mb-2 leading-none">5+</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Projects Built</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-brand-gold mb-2 leading-none">2024</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Mozilla Winner</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-brand-gold mb-2 leading-none">3</span>
            <span className="font-sans text-[#aaaaaa] text-[13px] font-bold uppercase tracking-widest">Years · Zero to AI Dev</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-brand-gold mb-2 leading-none">EMBU</span>
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
            <span className="text-xl lg:text-2xl mr-5">👥</span>
            <span className="font-sans text-white text-lg">Led a 10-member student team in a community tech project</span>
          </div>
          <div className="flex items-center text-left w-full max-w-2xl">
            <span className="text-xl lg:text-2xl mr-5">🌱</span>
            <span className="font-sans text-white text-lg">Volunteered in local environmental initiatives</span>
          </div>
          <div className="flex items-center text-left w-full max-w-2xl">
            <span className="text-xl lg:text-2xl mr-5">🎙️</span>
            <span className="font-sans text-white text-lg">Protocol Officer — University of Embu Career Week</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
