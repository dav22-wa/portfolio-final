import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';
import { CVModal } from './CVModal';
import { ArrowRight, Trophy, MapPin, Sparkles, Server, Zap, CheckCircle2 } from 'lucide-react';

const titles = [
  "Lead Developer @ AI Solution Studio",
  "AI & Machine Learning Developer",
  "Mozilla Challenge Winner 2024",
  "Cybersecurity Enthusiast",
  "CS Student · University of Embu, Kenya"
];

export function Hero() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const [index, setIndex] = useState(0);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentTitle = titles[index];

    if (phase === 'typing') {
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => setText(currentTitle.slice(0, text.length + 1)), 60);
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 2000);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentTitle.slice(0, text.length - 1)), 30);
      } else {
        setPhase('typing');
        setIndex((index + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index]);

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#09090b] text-white pt-24 pb-16 overflow-hidden flex flex-col justify-center border-b border-white/5">
      {/* Dynamic Background Patterns representing "Scale" & "Buy Back Your Time" */}
      <div className="absolute inset-0 bg-[#09090b]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "radial-gradient(ellipse at 50% -20%, #e5b927, transparent 70%), radial-gradient(circle at 10% 20%, #e5b927 1px, transparent 1px), radial-gradient(circle at 90% 80%, #ffffff 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px"
        }} />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#e5b927]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 lg:pt-16">
          
          {/* Left Column (High-Contrast Core Message) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Dynamic Status / Tagline Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e5b927]/10 border border-[#e5b927]/30 rounded-full w-fit mb-6 text-xs font-bold uppercase tracking-widest text-[#e5b927]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>{text || 'AI Developer & Systems Builder'}</span>
            </div>

            {/* Bold, heavy Dan Martell display heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] uppercase tracking-tighter mb-6 select-none">
              SOFTWARE ENGINEER,<br/>
              <span className="text-[#e5b927]">ENTREPRENEUR</span>, COACH &<br/>
              DIGITAL <span className="underline decoration-[#e5b927] decoration-4 underline-offset-4">BUILDER</span>.
            </h1>

            {/* Concise bio following Dan's "Hero story" structure */}
            <p className="text-base sm:text-lg text-[#bbbbbb] font-sans leading-relaxed mb-8 max-w-[620px]">
              Helping ambitious people turn <strong className="text-white">skills into opportunities</strong>, ideas into products, and <strong className="text-white">dreams into reality</strong>.
            </p>

            {/* Strong tactical Dan Martell active CTA buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-5 mb-10">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-[#e5b927] text-black font-extrabold border-2 border-black tracking-wider hover:bg-white hover:text-black hover:shadow-[5px_5px_0_0_rgba(255,255,255,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer rounded-sm text-xs sm:text-sm uppercase shadow-[3px_3px_0_0_rgba(255,255,255,0.7)] flex items-center justify-center gap-2"
              >
                <span>SEE ACTIONS & WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#what-i-do" 
                className="px-8 py-3.5 bg-transparent text-[#e5b927] font-extrabold border-2 border-[#e5b927] tracking-wider hover:bg-[#e5b927] hover:text-black hover:-translate-y-0.5 transition-all cursor-pointer rounded-sm text-xs sm:text-sm uppercase flex items-center justify-center gap-2"
              >
                <span>WHAT I DO</span>
                <span>↓</span>
              </a>
              <button 
                onClick={() => setIsCVModalOpen(true)}
                className="px-8 py-3.5 bg-zinc-900 text-white font-extrabold border border-white/10 tracking-wider hover:bg-zinc-800 transition-all cursor-pointer rounded-sm text-xs sm:text-sm uppercase"
              >
                VIEW ORIGINAL CV
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-white/50 border-t border-white/5 pt-6 w-fit">
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#e5b927]" />
                Mozilla Challenge Winner 2024
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#e5b927]" />
                Embu, Kenya
              </span>
            </div>
          </motion.div>

          {/* Right Column (High-contrast personal branding cover photo) */}
          <motion.div 
            className="lg:col-span-5 w-full relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Dan Martell Bold Outline Frame */}
            <div className="relative w-full max-w-[420px] mx-auto aspect-[3/4] bg-[#111318] border-2 border-[#e5b927] shadow-[12px_12px_0_0_rgba(229,185,39,0.15)] overflow-hidden rounded-md group">
              <img 
                src="/assets/hero.jpeg" 
                alt="David Waihenya" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Bottom Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent z-10 p-6 flex flex-col justify-end">
                <p className="text-[10px] font-sans tracking-widest text-[#e5b927] font-bold uppercase">FOUNDER SYNERGY</p>
                <p className="text-md font-display font-bold uppercase tracking-tight text-white leading-none mt-1">David Waihenya</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dan Martell Social Proof Credibility Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-white/10 w-full"
        >
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#888888] mb-6">
            TRUSTED INTEGRITY & TECHNICAL EXCELLENCE KEY HUBS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center opacity-85 hover:opacity-100 transition-opacity duration-300">
            
            {/* Mozilla Foundation */}
            <div className="flex justify-center flex-col items-center border border-white/5 bg-[#14151a] hover:border-[#e5b927]/30 py-6 px-6 rounded-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(229,185,39,0.03)] text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg viewBox="0 0 110 24" className="h-5 w-auto text-white group-hover:text-[#e5b927] transition-colors fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h3v1.8c.8-1.2 2-2.1 3.5-2.1 2 0 3.3.9 3.8 2.3c1-.1 3.1-1.3 4.2-.3 1 1 .5 2 .5 2.8v9.1h-3.4v-8.2c0-1.1-.3-1.8-1-1.8s-1.3.8-1.3 1.8v8.2h-3.4v-8.2c0-1.1-.3-1.8-1-1.8s-1.3.8-1.3 1.8v8.2H4V6z" />
                  <path d="M30 13c0-3.9 2.5-6.5 5.8-6.5s5.8 2.6 5.8 6.5-2.5 6.5-5.8 6.5-5.8-2.6-5.8-6.5zm8.2 0c0-2.1-1-3.4-2.4-3.4s-2.4 1.3-2.4 3.4 1 3.4 2.4 3.4 2.4-1.3 2.4-3.4z" />
                  <path d="M46.5 6.4h9.1v2.5l-5.6 7.4h5.6v2.9h-9.5v-2.3l5.6-7.6h-5.2V6.4z" />
                  <rect x="59.5" y="7.5" width="2.8" height="2.8" rx="0.5" />
                  <rect x="59.5" y="14.2" width="2.8" height="2.8" rx="0.5" />
                  <path d="M68.5 19.3l4.5-13.8h2.3l-4.5 13.8z" />
                  <path d="M74.5 19.3l4.5-13.8h2.3l-4.5 13.8z" />
                  <path d="M89.7 13.8c0-2.3 1.2-3.4 3-3.4 1.3 0 2.2.7 2.2 2.2v6.6h2.9V12c0-2.8-1.8-4.3-4.3-4.3-2 0-3.3.9-3.8 2V5.5h-2.9v13.8h2.9v-5.5z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-[13px] tracking-wider text-stone-200 group-hover:text-[#e5b927] transition-colors leading-none uppercase">MOZILLA FOUNDATION</span>
              <span className="text-[9px] font-sans text-stone-500 font-bold uppercase tracking-widest mt-2">Challenge Winner 2024</span>
            </div>
            
            {/* University of Embu */}
            <div className="flex justify-center flex-col items-center border border-white/5 bg-[#14151a] hover:border-[#e5b927]/30 py-6 px-6 rounded-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(229,185,39,0.03)] text-center">
              <div className="h-12 flex items-center justify-center mb-4 select-none">
                <svg viewBox="0 0 48 48" className="w-10 h-10 group-hover:scale-105 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12 C6 6, 42 6, 42 12 C42 28, 30 42, 24 44 C18 42, 6 28, 6 12 Z" fill="#004d26" stroke="#e5b927" strokeWidth="2" />
                  <path d="M8 12.5 C8 7.5, 40 7.5, 40 12.5 C40 27, 29 40, 24 42 C19 40, 8 27, 8 12.5 Z" fill="#003319" />
                  <path d="M16 18 C16 14, 32 14, 32 18 Z" fill="#e5b927" />
                  <circle cx="24" cy="18" r="4" fill="#e5b927" />
                  <path d="M24 10 V13 M18 12 L20 14 M30 12 L28 14 M15 17 H18 M33 17 H30" stroke="#e5b927" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14 28 C19 26, 24 28, 24 28 C24 28, 29 26, 34 28 V34 C29 32, 24 34, 24 34 C24 34, 19 32, 14 34 Z" fill="#ffffff" stroke="#e5b927" strokeWidth="1" />
                  <path d="M24 28 V34" stroke="#003319" strokeWidth="1" />
                  <g fill="#e5b927">
                    <polygon points="17,21 18,23 20,23 18.5,24 19,26 17,25 15,26 15.5,24 14,23 16,23" />
                    <polygon points="24,21 25,23 27,23 25.5,24 26,26 24,25 22,26 22.5,24 21,23 23,23" />
                    <polygon points="31,21 32,23 34,23 32.5,24 33,26 31,25 29,26 29.5,24 28,23 30,23" />
                  </g>
                </svg>
              </div>
              <span className="font-display font-extrabold text-[13px] tracking-wider text-stone-200 group-hover:text-[#e5b927] transition-colors leading-none uppercase">UNIVERSITY OF EMBU</span>
              <span className="text-[9px] font-sans text-stone-500 font-bold uppercase tracking-widest mt-2">Department of ICT</span>
            </div>

            {/* Davamos Tech */}
            <div className="flex justify-center flex-col items-center border border-white/5 bg-[#14151a] hover:border-[#e5b927]/30 py-6 px-6 rounded-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(229,185,39,0.03)] text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg viewBox="0 0 44 44" className="w-10 h-10 group-hover:scale-105 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="22,2 39,12 39,32 22,42 5,32 5,12" fill="none" stroke="#2563eb" strokeWidth="1.5" className="opacity-40" />
                  <path d="M22 6 L35 13.5 V28.5 L22 36 L9 28.5 V13.5 Z" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 20 L31 25.5 M22 20 L13 25.5 M22 6 V20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="20" r="3.5" fill="#e5b927" />
                  <circle cx="22" cy="6" r="2.5" fill="#60a5fa" />
                  <circle cx="35" cy="13.5" r="2" fill="#2563eb" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-[13px] tracking-wider text-stone-200 group-hover:text-[#e5b927] transition-colors leading-none uppercase">DAVAMOS TECH</span>
              <span className="text-[9px] font-sans text-stone-500 font-bold uppercase tracking-widest mt-2">Co-founder & Lead Engineer</span>
            </div>

            {/* AI Solution Studio */}
            <div className="flex justify-center flex-col items-center border border-white/5 bg-[#14151a] hover:border-[#e5b927]/30 py-6 px-6 rounded-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(229,185,39,0.03)] text-center">
              <div className="h-12 flex items-center justify-center mb-4">
                <svg viewBox="0 0 44 44" className="w-10 h-10 group-hover:scale-105 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 32 L22 10 L32 32" stroke="#e5b927" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M17 25 H27" stroke="#e5b927" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="10" r="3.5" fill="#ffffff" stroke="#e5b927" strokeWidth="1.5" />
                  <circle cx="12" cy="32" r="3" fill="#111318" stroke="#e5b927" strokeWidth="2" />
                  <circle cx="32" cy="32" r="3" fill="#111318" stroke="#e5b927" strokeWidth="2" />
                  <path d="M22 15 V32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 3" />
                  <circle cx="22" cy="32" r="3.5" fill="#e5b927" />
                  <path d="M6 14 C6 8, 12 6, 12 6" stroke="#e5b927" strokeWidth="1.5" strokeLinecap="round" fill="none" className="opacity-50" />
                  <path d="M38 14 C38 8, 32 6, 32 6" stroke="#e5b927" strokeWidth="1.5" strokeLinecap="round" fill="none" className="opacity-50" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-[13px] tracking-wider text-stone-200 group-hover:text-[#e5b927] transition-colors leading-none uppercase">AI SOLUTION STUDIO</span>
              <span className="text-[9px] font-sans text-stone-500 font-bold uppercase tracking-widest mt-2">Lead Systems Developer</span>
            </div>

          </div>
        </motion.div>

      </div>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
}
