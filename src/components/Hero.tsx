import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

const titles = [
  "AI & Machine Learning Developer",
  "Cybersecurity Enthusiast",
  "Mozilla Challenge Winner 2024",
  "CS Student · University of Embu, Kenya"
];

export function Hero() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentTitle = titles[index];

    if (phase === 'typing') {
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => setText(currentTitle.slice(0, text.length + 1)), 60);
      } else {
        setPhase('pausing');
        timeout = setTimeout(() => setPhase('deleting'), 2500);
      }
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
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-brand-bg pt-20">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Column (Content) */}
        <motion.div 
          className="lg:w-1/2 w-full px-6 lg:pl-[calc((100vw-1200px)/2+2rem)] lg:pr-12 pt-24 lg:pt-0 pb-12 lg:pb-0 z-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-8 mb-6 font-display font-medium text-[20px] text-brand-gold tracking-wide flex items-center">
            <span>{text}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
              className="inline-block font-bold ml-[2px]"
            >
              |
            </motion.span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.95] mb-6 uppercase tracking-tight">
            BUILDING AI<br/>
            SYSTEMS THAT<br/>
            MATTER.
          </h1>
          <p className="text-lg text-white font-normal mb-10 leading-relaxed max-w-[480px]">
            I started with zero coding knowledge in 2022. Today I build machine learning models and real-time AI systems. Mozilla called my work responsible. I call it just getting started.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#projects" 
              className="btn-primary"
            >
              SEE MY WORK
            </a>
            <a 
              href="/david-waihenya-cv.pdf" 
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-sm font-medium text-white/50">
            <span className="flex items-center"><span className="mr-2 opacity-100">🏆</span> Mozilla Responsible Computing Winner 2024</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center"><span className="mr-2 opacity-100">📍</span> Embu, Kenya</span>
          </div>
        </motion.div>

        {/* Right Column (Photo) */}
        <motion.div 
          className="lg:w-1/2 w-full h-[50vh] lg:h-screen relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Gradient to blend image edge into the dark background on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10"></div>
          
          {/* Background Gradient fade for the bottom on mobile */}
          <div className="block lg:hidden absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent z-10"></div>

          {/* Real Photo Placeholder */}
          <div className="hero-photo w-full h-full bg-[#111318] flex items-center justify-center relative">
             <span className="font-display font-medium text-4xl text-white/10 absolute">PHOTO PLACEHOLDER</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
