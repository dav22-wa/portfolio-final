import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Building2, GraduationCap, ArrowRight, Check, X, Sparkles } from 'lucide-react';

interface WhoIsThisForProps {
  onNavigate?: (page: string) => void;
}

export function WhoIsThisFor({ onNavigate }: WhoIsThisForProps) {
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);

  const handleAudienceClick = (audienceId: string) => {
    setSelectedAudience(audienceId);
  };

  const handleDirectContact = (subject: string) => {
    setSelectedAudience(null);
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: "startups",
      icon: Rocket,
      title: "Startups & Small Businesses",
      tagline: "High-Velocity MVPs & Applied AI",
      description: "Need AI integration, custom software, or full-stack web platforms built fast without technical bloat? I engineer resilient MVPs, API backends, and automated workflows that scale.",
      outcomes: [
        "Rapid prototype-to-production in weeks, not months",
        "Cost-effective inference & local RAG architectures",
        "Clean, maintainable Python, Flask & React codebases"
      ],
      ctaText: "Build Your Product With Dave",
      badge: "VENTURE BUILDERS"
    },
    {
      id: "local-businesses",
      icon: Building2,
      title: "Local Embu & Naivasha Businesses",
      tagline: "Operational Automation & Digital Presence",
      description: "Modernizing operations with digital management systems, automated attendance, inventory tools, and high-performance customer websites that drive actual revenue and eliminate manual labor.",
      outcomes: [
        "Automated attendance, inventory & record systems",
        "Seamless M-Pesa, SMS & WhatsApp integrations",
        "High-speed, SEO-optimized web platforms"
      ],
      ctaText: "Automate Your Business",
      badge: "ENTERPRISE & LOCAL"
    },
    {
      id: "developers-students",
      icon: GraduationCap,
      title: "Young Developers & Students",
      tagline: "Mentorship & Practical Engineering",
      description: "Mentoring the next generation of African builders. Breaking down the path from zero programming background to first-class technical competence, global awards, and real client projects.",
      outcomes: [
        "From zero code to building production machine learning",
        "First Class Honours study & project discipline",
        "Moving past tutorial paralysis to ship real software"
      ],
      ctaText: "Join Dave's Mentorship",
      badge: "FUTURE BUILDERS"
    }
  ];

  const activeData = cards.find(c => c.id === selectedAudience);

  return (
    <section id="who-i-help" className="py-24 lg:py-32 w-full bg-[#0c101d] text-[#d4d4d4] border-t border-[#1e293b] relative">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-kicker">WHO I HELP</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-none mb-4">
            SOLVING REAL PROBLEMS FOR <span className="text-[#00a8ff]">THREE CORE AUDIENCES</span>.
          </h2>
          <p className="text-[#94a3b8] font-sans text-base sm:text-lg leading-relaxed">
            I don't believe in generic software. I tailor real-world engineering solutions to founders shipping products, businesses modernizing operations, and ambitious students learning to build.
          </p>
        </div>

        {/* 3-Column Card Grid (Dan Martell structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-[#0e1424] border border-[#1e293b] hover:border-[#00a8ff]/60 p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative rounded-2xl shadow-xl group hover:-translate-y-1.5"
              >
                {/* Visual Corner Tag */}
                <div className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-2.5 rounded-md bg-[#131b2e] border border-[#1e293b] text-[#00a8ff]">
                  {card.badge}
                </div>

                <div>
                  {/* Icon Block */}
                  <div className="w-14 h-14 bg-[#131b2e] border border-[#1e293b] flex items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105 text-[#00a8ff]">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white mb-2 group-hover:text-[#00a8ff] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00a8ff] mb-4">
                    {card.tagline}
                  </p>

                  <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="w-full h-px bg-[#1e293b] mb-6" />

                  {/* Immediate Outcomes */}
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Key Outcomes Delivered:
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {card.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#00a8ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#00a8ff]" />
                        </span>
                        <span className="text-xs text-[#d4d4d4] font-sans font-medium">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* "Learn More" Button */}
                <button
                  onClick={() => handleAudienceClick(card.id)}
                  className="w-full py-3.5 px-5 bg-[#131b2e] border border-[#1e293b] group-hover:bg-[#00a8ff] group-hover:text-black group-hover:border-[#00a8ff] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Audience Detail Modal */}
      <AnimatePresence>
        {selectedAudience && activeData && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e1424] border border-[#1e293b] rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedAudience(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#131b2e] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] mb-4">
                <activeData.icon className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono text-[#00a8ff] uppercase font-bold tracking-widest block mb-1">
                {activeData.badge}
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase mb-2">
                {activeData.title}
              </h3>
              <p className="text-sm text-[#94a3b8] mb-6">
                {activeData.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                How We Collaborate:
              </h4>
              <ul className="space-y-2 mb-6">
                {activeData.outcomes.map((o, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-[#00a8ff] shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => handleDirectContact(activeData.title)}
                  className="flex-1 py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all text-center"
                >
                  {activeData.ctaText}
                </button>
                <button
                  onClick={() => setSelectedAudience(null)}
                  className="px-5 py-3 bg-[#131b2e] border border-[#1e293b] text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
