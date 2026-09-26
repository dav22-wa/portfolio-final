import { motion } from 'motion/react';
import { Cpu, Globe, Mic, Layers, ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhatIDoProps {
  onNavigate?: (page: string) => void;
}

export function WhatIDo({ onNavigate }: WhatIDoProps) {
  const pillars = [
    {
      id: "ai-studio",
      title: "AI Solution Studio",
      role: "Lead Architect & AI Developer",
      url: "https://ai-solution-studio.vercel.app/",
      isExternal: true,
      tagline: "State-of-the-art agentic systems, localized computer vision, and enterprise machine learning pipelines.",
      icon: Cpu,
      accent: "#00f0ff",
      badge: "Venture Practice",
      capabilities: [
        "Agentic AI & Custom Intelligent Workflows",
        "Semantic Search & Retrieval-Augmented Generation (RAG)",
        "Edge-Quantized Neural Inference for Mobile/Offline",
        "LLM Safety Audits & Bias Verification Protocols",
        "Predictive Machine Learning Product Engines"
      ]
    },
    {
      id: "davamos",
      title: "Davamos Tech",
      role: "Co-founder & Lead Software Engineer",
      url: "https://davamos.vercel.app/",
      isExternal: true,
      tagline: "Premier bespoke software engineering firm crafting blazing-fast web platforms and scalable cloud architectures.",
      icon: Globe,
      accent: "#e5b927",
      badge: "Engineering Agency",
      capabilities: [
        "High-Performance Full-Stack Web & Mobile Apps",
        "Scalable Cloud Architecture & Relational Databases",
        "Secure Enterprise API Design & High-Concurrency Microservices",
        "Sub-100ms Latency Performance Engineering",
        "Rapid Production MVP Execution for Founders"
      ]
    },
    {
      id: "speaking",
      title: "Keynote Speaking",
      role: "Global Speaker & Workshop Leader",
      action: () => onNavigate ? onNavigate('speaking') : window.location.assign('/#speaking'),
      isExternal: false,
      tagline: "High-impact keynotes on applied AI, engineering discipline, and building software in emerging economies.",
      icon: Mic,
      accent: "#00f0ff",
      badge: "In-Person & Virtual",
      capabilities: [
        "Flagship Keynotes for Tech Summits & Assemblies",
        "Transparent Regional Fee Structure Denominated in KES",
        "Deep Hands-on Machine Learning & Architecture Workshops",
        "Executive Leadership Briefings on Applied Intelligence",
        "Responsible Computing & Data Governance Sessions"
      ]
    },
    {
      id: "advisory",
      title: "Architecture & Advisory",
      role: "Systems Consultant & Technical Advisor",
      action: () => onNavigate ? onNavigate('contact') : window.location.assign('/#contact'),
      isExternal: false,
      tagline: "Direct technical guidance for founders, institutions, and enterprise teams navigating AI integration.",
      icon: Layers,
      accent: "#e5b927",
      badge: "Advisory Practice",
      capabilities: [
        "System Architecture Audits & Infrastructure Scoping",
        "Responsible Computing & Privacy Architecture Review",
        "Model Selection: Edge vs Cloud vs Quantized Local",
        "Technical Due Diligence & Engineering Team Mentorship",
        "Strategic Roadmapping from Proof-of-Concept to Production"
      ]
    }
  ];

  return (
    <section id="what-i-do" className="py-24 lg:py-32 w-full bg-[#07090e] border-t border-[#1f2638] relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#e5b927]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-label !text-[#00f0ff] mb-3">VENTURES & CORE PRACTICES</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-[0.96] mb-6 uppercase tracking-tight">
            WHAT I DO.
          </h2>
          <p className="text-[#d4d4d4] font-sans text-base sm:text-lg leading-relaxed">
            Beyond individual technical research, I build and lead organizations that engineer real software solutions. Through these studios, agency practices, and speaking forums, we deliver production AI frameworks and robust software architectures.
          </p>
        </div>

        {/* 4 Pillars Grid (Zero-pill, obsidian cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0e111a] border border-[#1f2638] hover:border-[#00f0ff]/50 rounded-lg p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#141926] border border-[#1f2638] flex items-center justify-center transition-transform duration-300 group-hover:scale-105" style={{ color: item.accent }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#141926] border border-[#1f2638]" style={{ color: item.accent }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight mb-2 group-hover:text-[#00f0ff] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3] mb-4">
                    {item.role}
                  </p>

                  <p className="text-sm text-[#d4d4d4] font-sans leading-relaxed mb-8">
                    {item.tagline}
                  </p>

                  <div className="w-full h-px bg-[#1f2638] mb-6" />

                  <h4 className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#b3b3b3] mb-4">
                    Core Capabilities & Focus:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {item.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: item.accent }} />
                        <span className="text-xs sm:text-sm text-[#d4d4d4] font-sans">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link / Button */}
                <div className="pt-4 border-t border-[#1f2638]">
                  {item.isExternal ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold font-sans uppercase tracking-wider text-xs px-5 py-3 rounded bg-[#141926] border border-[#1f2638] hover:border-[#00f0ff] hover:text-[#00f0ff] text-white transition-all cursor-pointer"
                    >
                      <span>Launch Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className="inline-flex items-center gap-2 font-bold font-sans uppercase tracking-wider text-xs px-5 py-3 rounded bg-[#141926] border border-[#1f2638] hover:border-[#00f0ff] hover:text-[#00f0ff] text-white transition-all cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
