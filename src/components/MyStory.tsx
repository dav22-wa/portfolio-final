import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Maximize2, X, Play, Trophy, GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';

interface MyStoryProps {
  onNavigate?: (page: string) => void;
}

export function MyStory({ onNavigate }: MyStoryProps) {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [heroPhotoError, setHeroPhotoError] = useState(false);
  const [gradPhotoError, setGradPhotoError] = useState(false);

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] pt-24">
      
      {/* 1. TOP CINEMATIC FULL-WIDTH BANNER IMAGE (Matching screenshot top banner) */}
      <section className="w-full relative overflow-hidden">
        <div className="w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] relative bg-[#060813]">
          {!heroPhotoError ? (
            <img 
              src="/assets/about.jpeg" 
              alt="Dave Waihenya - Building in Kenya" 
              className="w-full h-full object-cover object-[center_35%]"
              style={{ filter: 'none' }}
              onError={() => setHeroPhotoError(true)}
            />
          ) : (
            <img 
              src="/assets/hero.jpeg" 
              alt="Dave Waihenya" 
              className="w-full h-full object-cover object-[center_20%]"
              style={{ filter: 'none' }}
            />
          )}

          {/* Cinematic subtle edge shadows for transition into dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060813] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* 2. BLACK CONTAINER: "HEY, I'M DAVE. AND I WASN'T SUPPOSED TO BE HERE." (Two columns) */}
      <section className="w-full bg-[#060813] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Big punchy headline + Dramatic monochrome/contrast portrait */}
            <div className="lg:col-span-6 flex flex-col">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.94] mb-10">
                HEY, I'M DAVE. <br />
                <span className="text-[#94a3b8]">AND I WASN'T SUPPOSED TO BE HERE.</span>
              </h1>

              {/* Subject Portrait with natural contrast */}
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#0e1424] border border-[#1e293b] shadow-2xl">
                <img 
                  src="/assets/hero.jpeg" 
                  alt="Dave Waihenya - Founder & AI Systems Architect" 
                  className="w-full h-full object-cover object-[center_15%]"
                  style={{ filter: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">FOUNDER &amp; BUILDER</p>
                  <p className="text-xl font-display font-bold text-white uppercase">Dave Waihenya</p>
                  <p className="text-xs text-[#94a3b8]">BSc. Computer Science (First Class Honours) · University of Embu</p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative with bolded turning points */}
            <div className="lg:col-span-6 space-y-6 font-sans text-base sm:text-lg text-[#d4d4d4] leading-relaxed pt-2">
              <p>
                <strong className="text-white font-bold">In September 2022, I walked onto the campus of the University of Embu</strong> with virtually zero background in computing.
              </p>

              <p>
                I had never written a line of Python, Java, or C++. If you placed a blank code editor in front of me and asked what a variable, a loop, or a compiler was, I wouldn't have had a single answer.
              </p>

              <p>
                Classmates arrived with years of prior computer studies, laptops configured with developer tooling, and early confidence.
              </p>

              <p className="text-white font-bold">
                I had none of that.
              </p>

              <p>
                I remember opening the first lecture assignment and feeling completely out of my depth. The easiest path would have been to coast by, submit generic copy-pasted code, and scrape through with an average grade.
              </p>

              <p>
                Instead, that moment <strong className="text-white font-bold">triggered a relentless obsession</strong>.
              </p>

              <p>
                I made a private pact: <strong className="text-white font-bold">outwork the confusion</strong>.
              </p>

              <p>
                Hundreds of late nights in the university computer lab followed. When others left at 9:00 PM, I stayed until the security guards locked the doors. Breaking terminal scripts. Reading raw compiler error logs until the logic clicked. Writing code by hand until syntax became muscle memory.
              </p>

              <p className="text-white font-bold text-xl pt-2">
                That decision altered the trajectory of my entire life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BLACK CONTAINER: "FROM ZERO TO FIRST CLASS & GLOBAL IMPACT" */}
      <section className="w-full bg-[#060813] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.96] mb-8">
              FROM ZERO TO <span className="text-[#00a8ff]">LIMITLESS</span>
            </h2>

            <div className="space-y-6 font-sans text-base sm:text-lg text-[#d4d4d4] leading-relaxed">
              <p>
                For the first time, I had discovered something where deliberate effort directly translated into tangible leverage.
              </p>

              <p>
                <strong className="text-white font-bold">I became obsessed with software architecture, applied artificial intelligence,</strong> and proving that world-class systems could be engineered right here in Kenya without requiring Silicon Valley resources.
              </p>

              <p>
                It wasn't a straight shot to success.
              </p>

              <p>
                There were early prototypes that crashed in live demonstrations. Machine learning models that overfit on tiny datasets. Freelance clients who changed requirements overnight.
              </p>

              <p>
                But every bug was a stepping stone.
              </p>

              <p>
                Between 2023 and 2026, <strong className="text-white font-bold">I engineered and shipped production systems</strong>:
              </p>

              <ul className="space-y-2.5 pl-4 border-l-2 border-[#00a8ff] text-slate-300">
                <li><strong className="text-white">Potato Early Blight CNN</strong>: Edge computer vision empowering smallholder Kenyan farmers to diagnose crop disease weeks before harvest failure.</li>
                <li><strong className="text-white">Velox AI (AI Voice Guardian)</strong>: Sub-120ms real-time audio toxicity moderation and auto-mute pipelines.</li>
                <li><strong className="text-white">Davamos Tech &amp; AI Solution Studio</strong>: High-velocity software and enterprise agentic platforms.</li>
              </ul>

              <p>
                In 2024, our work won the global <strong className="text-white font-bold">Mozilla Responsible Computing Challenge</strong>.
              </p>

              <p>
                In 2026, I graduated from the University of Embu with <strong className="text-white font-bold">First Class Honours in BSc Computer Science</strong>.
              </p>

              <p className="text-white font-bold text-lg pt-2">
                The accolades piled up. But what I really wanted was bigger: to build companies that create durable leverage and inspire thousands of African builders to do the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHITE CONTAINER: "FROM BUILDING SYSTEMS TO BUILDING PEOPLE" */}
      <section className="w-full bg-[#f8fafc] text-[#0f172a] py-24 lg:py-32">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 lg:col-start-7 xl:col-span-5 xl:col-start-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] uppercase tracking-tight leading-[0.96] mb-8">
                FROM BUILDING SYSTEMS TO <span className="text-[#0284c7]">BUILDING PEOPLE</span>
              </h2>

              <div className="space-y-6 font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  As my technical velocity multiplied, I realized that writing code in isolation is the smallest form of leverage.
                </p>

                <p>
                  I started organizing open architecture sessions in campus labs, breaking down complex distributed systems, backend APIs, and computer vision pipelines for younger students who felt the same paralyzing confusion I felt in 2022.
                </p>

                <p>
                  I mentored dozens of junior developers—helping them bypass tutorial hell, ship their first deployed web apps, and secure high-impact software internships.
                </p>

                <p>
                  <strong className="text-[#0f172a] font-bold">I made a commitment: to prove that anyone with curiosity and discipline can master modern engineering.</strong>
                </p>

                <p>
                  I didn't just want to build standalone scripts...
                </p>

                <p>
                  I wanted to build builders who solve real African problems.
                </p>

                <p className="font-bold text-[#0f172a]">
                  I realized... it was never JUST about the code.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHITE CONTAINER: "REACHING BUILDERS AND GOING EVEN BIGGER" */}
      <section className="w-full bg-[#f8fafc] text-[#0f172a] pb-24 lg:pb-32 border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 xl:col-span-5">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] uppercase tracking-tight leading-[0.96] mb-8">
                REACHING BUILDERS <span className="text-[#0284c7]">AND GOING EVEN BIGGER</span>
              </h2>

              <div className="space-y-6 font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Today, I receive messages from students, founders, and engineers across East Africa asking the same core question: <em className="text-[#0284c7] font-semibold">"How do I transition from knowing nothing to building real AI products?"</em>
                </p>

                <p>
                  Through Davamos Tech, I engineer bespoke software architectures for ambitious startups. Through AI Solution Studio, I ship agentic workflows and local machine learning models that automate complex enterprise operations.
                </p>

                <p>
                  And through my mentorship initiatives, I document the exact mental models, study discipline, and architecture playbooks that took me from zero background to First Class Honours and global awards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHITE CONTAINER: "THE MISSION NOW" */}
      <section className="w-full bg-[#f8fafc] text-[#0f172a] pb-28 lg:pb-36 border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 lg:col-start-7 xl:col-span-5 xl:col-start-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] uppercase tracking-tight leading-[0.96] mb-8">
                THE <span className="text-[#0284c7]">MISSION</span> NOW
              </h2>

              <div className="space-y-6 font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  I shouldn't be here. On paper, starting with zero coding knowledge should have led to an ordinary, unremarkable path.
                </p>

                <p>
                  And I believe there are thousands of ambitious young minds across Africa who just need the right system, the right mental model, and the right push to break through.
                </p>

                <p>
                  <strong className="text-[#0f172a] font-bold">That's why I do this.</strong>
                </p>

                <p>
                  That's why I show up every day—building companies from the ground up, with the long-term vision of owning multiple technology ventures and eventually returning to academia as a university lecturer to teach the next generation of African engineers.
                </p>

                <p>
                  And that's why, when you're ready to engineer resilient systems, automate your operations, or build your next venture...
                </p>

                <p className="text-xl font-display font-extrabold text-[#0f172a] uppercase tracking-tight">
                  I'm here to build with you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. BLUE CTA CALLOUT BANNER (Matching "BUY BACK YOUR TIME" banner in Dan Martell's structure) */}
      <section className="w-full bg-[#0284c7] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-200 block mb-3">
            FLAGSHIP FOUNDER BLUEPRINT
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
            FROM ZERO TO INTELLIGENCE: THE PLAYBOOK
          </h2>
          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            The definitive 8-chapter blueprint on how to go from zero coding knowledge to shipping production AI systems, winning global challenges, and building scalable tech companies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate ? onNavigate('contact') : window.location.assign('/#contact')}
              className="px-8 py-4 bg-white text-black font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl cursor-pointer"
            >
              Work With Dave
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('speaking') : window.location.assign('/#speaking')}
              className="px-8 py-4 bg-[#0369a1] text-white font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black border border-sky-300/40 transition-all cursor-pointer"
            >
              Book For Keynotes
            </button>
          </div>
        </div>
      </section>

      {/* 8. PERMANENT GRADUATION RECORD & COMMENCEMENT ARCHIVE */}
      <section id="graduation" className="w-full bg-[#060813] py-20 lg:py-28 border-t border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              <GraduationCap className="w-5 h-5 text-[#00a8ff]" />
              <span>PERMANENT ACADEMIC &amp; LIFE RECORD</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[0.98] mb-3">
              FIRST CLASS HONOURS · <span className="text-[#00a8ff]">CLASS OF 2026</span>
            </h2>
            <p className="text-sm text-[#94a3b8]">
              University of Embu · Bachelor of Science in Computer Science
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Graduation Portrait */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-[#0e1424] border border-[#1e293b] rounded-2xl overflow-hidden group shadow-xl">
                {!gradPhotoError ? (
                  <img 
                    src="/assets/graduation.jpeg" 
                    alt="Dave Waihenya Graduation - BSc Computer Science First Class Honours Class of 2026" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'none' }}
                    onError={() => setGradPhotoError(true)}
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center text-[#d4d4d4] bg-[#0e1424]">
                    <div className="w-16 h-16 rounded-full bg-[#131b2e] border border-[#00a8ff]/40 flex items-center justify-center text-[#00a8ff] mb-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <p className="font-display font-bold text-lg text-white uppercase">Graduation Portrait Slot</p>
                    <p className="text-xs text-[#94a3b8] mt-2 max-w-sm">Bound to permanent path: <code className="text-[#00a8ff] bg-black/40 px-2 py-0.5 rounded">public/assets/graduation.jpeg</code></p>
                  </div>
                )}

                <button
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2.5 bg-black/80 hover:bg-[#00a8ff] hover:text-black text-white rounded-xl border border-[#1e293b] transition-all cursor-pointer shadow-lg"
                  aria-label="Expand Graduation Photo Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060813] via-[#060813]/90 to-transparent p-5 pt-8 pointer-events-none">
                  <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">PERMANENT RECORD</p>
                  <p className="text-sm font-display font-bold text-white uppercase mt-0.5">BSc Computer Science · First Class Honours</p>
                  <p className="text-xs text-[#94a3b8]">University of Embu · Class of 2026</p>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/5] bg-[#0e1424] border border-[#1e293b] rounded-2xl overflow-hidden flex flex-col justify-center items-center shadow-xl">
                <video 
                  controls 
                  playsInline
                  preload="metadata"
                  poster="/assets/graduation.jpeg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/graduation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-3 left-3 right-3 bg-[#060813]/90 backdrop-blur-sm border border-[#1e293b] p-3 rounded-xl text-left pointer-events-none">
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-[#e5b927]" />
                    <span className="text-[11px] font-bold text-white uppercase">Graduation Commencement Reel</span>
                  </div>
                  <p className="text-[10px] text-[#94a3b8] mt-0.5">Bound permanently to <code className="text-[#00a8ff]">public/assets/graduation.mp4</code></p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isPhotoLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPhotoLightboxOpen(false)}
          >
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white hover:text-black rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/assets/graduation.jpeg" 
                alt="Dave Waihenya - Graduation Milestone (Expanded View)"
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                style={{ filter: 'none' }}
              />
              <div className="mt-4 text-center">
                <p className="font-display font-bold text-xl text-white uppercase tracking-tight">
                  Dave Waihenya · BSc Computer Science (First Class Honours)
                </p>
                <p className="text-xs text-[#00a8ff] uppercase tracking-widest mt-1">
                  University of Embu · Class of 2026
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
