import { motion } from 'motion/react';
import { ArrowRight, Trophy, GraduationCap, Code2, BookOpen, Sparkles } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const handleNavigateStory = () => {
    if (onNavigate) {
      onNavigate('story');
    } else {
      window.location.assign('/#story');
    }
  };

  return (
    <section id="about" className="w-full bg-[#060813] text-[#d4d4d4] py-24 lg:py-32 border-t border-[#1e293b] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
              <Code2 className="w-4 h-4 text-[#00a8ff]" />
              <span>MY STORY · THE BUILDER'S JOURNEY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight mb-5 uppercase tracking-tight">
              FROM ZERO CODE IN 2022 TO <br />
              <span className="text-[#00a8ff]">FIRST CLASS HONOURS</span> &amp; GLOBAL IMPACT.
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-[#d4d4d4] font-sans leading-relaxed mb-8 max-w-2xl">
              <p>
                When I joined the <strong className="text-white">University of Embu in September 2022</strong>, I had absolutely zero background in computing. I didn't know what a variable was, let alone how a compiler worked. 
              </p>
              <p>
                While others arrived with prior advantages, I resolved to <strong className="text-white">outwork the confusion</strong>. Hundreds of hours in university labs, breaking code to understand how it worked, turned into real systems: a computer vision system detecting potato early blight for smallholder farmers, real-time voice harassment classification, and freelance web development for real businesses.
              </p>
              <p>
                In 2024, our team won the global <strong className="text-white">Mozilla Responsible Computing Challenge</strong>. In 2026, I completed my degree with <strong className="text-white">First Class Honours</strong>. Today, I am building scalable tech companies—Davamos Tech and AI Solution Studio—with a long-term dream of becoming a university lecturer to teach the next generation of African builders.
              </p>
            </div>

            {/* Milestones grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b] flex items-center gap-3">
                <Trophy className="w-5 h-5 text-[#e5b927] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">Mozilla Challenge Winner</p>
                  <p className="text-[11px] text-[#94a3b8]">Global Award for Responsible Computing 2024</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b] flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#00a8ff] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">First Class Honours Graduate</p>
                  <p className="text-[11px] text-[#94a3b8]">University of Embu · BSc Computer Science (2026)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleNavigateStory}
                className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold tracking-wider hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] transition-all cursor-pointer rounded-full text-xs sm:text-sm uppercase inline-flex items-center gap-2"
              >
                <span>READ MY FULL STORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column (Photo Details - 100% Natural Color, Crisp Contrast) */}
          <motion.div 
            className="lg:col-span-5 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative border border-[#1e293b] rounded-2xl overflow-hidden w-full max-w-[440px] aspect-[4/5] bg-[#0e1424] shadow-2xl group">
              <img 
                src="/assets/about.jpeg" 
                alt="Dave Waihenya - AI Systems Engineer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'none' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "/assets/hero.jpeg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060813] via-[#060813]/85 to-transparent p-6">
                <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">EMBU, KENYA</p>
                <p className="text-lg font-display font-extrabold text-white uppercase mt-0.5">Dave Waihenya</p>
                <p className="text-xs text-[#94a3b8]">BSc. Computer Science First Class Honours · Class of 2026</p>
                <blockquote className="mt-3 text-xs italic text-slate-300 border-l-2 border-[#00a8ff] pl-3">
                  "The degree is the foundation. The real journey begins now."
                </blockquote>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
