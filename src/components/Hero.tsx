import { useState } from 'react';
import { motion } from 'motion/react';
import { CVModal } from './CVModal';
import { ArrowRight, Trophy, Sparkles, BookOpen, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleNav = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#060813] text-white pt-36 lg:pt-40 pb-16 overflow-hidden flex flex-col justify-center border-b border-[#1e293b]"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#060813] pointer-events-none">
        {/* Soft sky blue & gold ambient lights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00a8ff]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/12 w-[400px] h-[400px] bg-[#0284c7]/5 rounded-full blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* Hero content: text on left, subject photo on right */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Display Typography */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-left z-20"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* 1. Identity Statement */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00a8ff] mb-3">
              <Sparkles className="w-4 h-4 text-[#00a8ff]" />
              <span>COMPUTER SCIENCE GRADUATE · FIRST CLASS HONOURS · AI BUILDER</span>
            </div>

            {/* 2. Bold headline capturing mission */}
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.08] uppercase tracking-tight mb-5">
              BUILDING REAL SYSTEMS, <br />
              <span className="text-[#00a8ff]">SCALING VENTURES</span>, <br />
              AND ENGINEERING AFRICA'S FUTURE.
            </h1>

            {/* 3. Short supporting line */}
            <p className="text-base sm:text-lg text-[#d4d4d4] font-sans leading-relaxed mb-8 max-w-[620px]">
              First Class Honours Computer Science graduate (<strong className="text-white">University of Embu, Class of 2026</strong>) and global <strong className="text-white">Mozilla Responsible Computing Challenge Winner</strong>. Starting from zero coding background in 2022, I build production AI models, high-performance web systems, and scalable companies from the ground up.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              <button 
                onClick={() => handleNav('contact')}
                className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold tracking-wider hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(0,168,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer rounded-full text-xs sm:text-sm uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span>WORK WITH ME</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 bg-[#0e1424] text-white font-extrabold border border-[#1e293b] tracking-wider hover:border-[#00a8ff] hover:text-[#00a8ff] hover:-translate-y-0.5 transition-all cursor-pointer rounded-full text-xs sm:text-sm uppercase flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#00a8ff]" />
                <span>EXPLORE PROJECTS</span>
              </button>

              <button 
                onClick={() => handleNav('story')}
                className="px-6 py-3.5 bg-[#0e1424] text-[#d4d4d4] font-bold border border-[#1e293b] tracking-wider hover:text-white hover:border-slate-500 hover:-translate-y-0.5 transition-all cursor-pointer rounded-full text-xs sm:text-sm uppercase"
              >
                MY STORY
              </button>

              <button 
                onClick={() => setIsCVModalOpen(true)}
                className="px-5 py-3.5 bg-transparent text-[#94a3b8] font-bold hover:text-white tracking-wider text-xs sm:text-sm uppercase underline decoration-slate-700 underline-offset-4 cursor-pointer"
              >
                VIEW CV
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[#1e293b] text-xs font-medium text-[#94a3b8]">
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#e5b927]" />
                <span className="text-white font-bold">Mozilla Challenge Winner 2024</span>
              </span>
              <span className="hidden sm:inline text-slate-700">·</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00a8ff]" />
                <span>BSc Computer Science · First Class Honours</span>
              </span>
              <span className="hidden sm:inline text-slate-700">·</span>
              <span>Embu &amp; Naivasha, Kenya</span>
            </div>
          </motion.div>

          {/* Right Column: Full Subject Framing */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 relative w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subject Container with generous headroom */}
            <div className="relative w-full max-w-[480px] bg-[#0e1424] border border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl group pt-4">
              
              {/* Image Frame: Full uncropped headroom, natural lighting, crisp colors */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#060813] flex items-center justify-center">
                {!imgError ? (
                  <img 
                    src="/assets/hero.jpeg" 
                    alt="Dave Waihenya - Software Developer and AI Builder" 
                    className="w-full h-full object-cover object-[center_15%] translate-y-2 sm:translate-y-3 scale-[1.02] transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter: 'none' // Strict ban on grayscale, desaturation, or dark filters
                    }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="p-8 text-center text-[#d4d4d4] flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-[#111726] border border-[#00a8ff]/40 flex items-center justify-center text-[#00a8ff] mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <p className="font-display font-bold text-lg text-white uppercase">Dave Waihenya</p>
                    <p className="text-xs text-[#94a3b8] mt-2">Hero Photo Slot: <code className="text-[#00a8ff] bg-black/40 px-2 py-1 rounded">public/assets/hero.jpeg</code></p>
                  </div>
                )}

                {/* Directional gradient on left edge for seamless text overlap on narrow screens */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#060813]/60 to-transparent pointer-events-none hidden sm:block" />

                {/* Bottom glass metadata badge */}
                <div className="absolute inset-x-4 bottom-4 bg-[#0e1424]/90 backdrop-blur-md border border-[#1e293b] p-3.5 rounded-xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-sans font-bold tracking-widest text-[#00a8ff] uppercase">UNIVERSITY OF EMBU</p>
                    <p className="text-sm font-display font-extrabold text-white uppercase">First Class Honours · Class of 2026</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a8ff] animate-ping" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* CV Modal */}
      {isCVModalOpen && (
        <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      )}
    </section>
  );
}
