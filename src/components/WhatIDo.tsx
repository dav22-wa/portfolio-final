import { motion } from 'motion/react';
import { Cpu, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function WhatIDo() {
  const ventures = [
    {
      id: "ai-studio",
      title: "AI Solution Studio",
      url: "https://ai-solution-studio.vercel.app/",
      role: "Lead Architect & AI Developer",
      tagline: "State-of-the-art AI-powered user interfaces, agentic systems, and product solutions built for business automation and impact.",
      icon: Cpu,
      color: "from-[#e5b927]/20 via-[#e5b927]/5 to-transparent",
      borderColor: "hover:border-[#e5b927]/60",
      accentColor: "text-[#e5b927]",
      badgeBg: "bg-[#e5b927]/10 text-[#e5b927]",
      features: [
        "Agentic AI & Custom Intelligent Workflows",
        "Semantic Search & Retrieval-Augmented Generation (RAG)",
        "Advanced Interactive Conversational User Interfaces",
        "Large Language Model (LLM) Integration & Security",
        "Machine Learning Predictive Product Systems"
      ]
    },
    {
      id: "davamos",
      title: "Davamos Tech",
      url: "https://davamos.vercel.app/",
      role: "Co-founder & Lead Software Engineer",
      tagline: "Premier bespoke technology firm crafting blazing-fast web platforms, custom mobile systems, and highly scalable cloud infrastructure.",
      icon: Globe,
      color: "from-blue-500/10 via-blue-500/0 to-transparent",
      borderColor: "hover:border-blue-500/40",
      accentColor: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400",
      features: [
        "High-Performance Full-Stack Web & Mobile Apps",
        "Scalable Cloud Architecture & Relational Databases",
        "Secure Enterprise API Design & Integrations",
        "Tailored Software Consultation & Tech Strategy",
        "Next-Generation Optimized Digital Experiences"
      ]
    }
  ];

  return (
    <section id="what-i-do" className="py-[80px] lg:py-[120px] w-full bg-[#0b0b0b] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-label !text-brand-gold mb-4">ORGANIZATIONS & SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-6 uppercase tracking-tight">
            WHAT I DO.
          </h2>
          <p className="text-[#aaaaaa] font-sans text-lg leading-relaxed">
            Beyond building individual technical systems, I actively lead and architect technology solutions across core specialized hubs. Through these studios, we engineer intelligent AI frameworks and craft high-performance custom platforms.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {ventures.map((venture, index) => {
            const IconComponent = venture.icon;
            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group flex flex-col justify-between p-8 lg:p-12 bg-[#111318] border-2 border-white/5 hover:border-[#e5b927]/60 shadow-[8px_8px_0_0_rgba(229,185,39,0.03)] hover:shadow-[12px_12px_0_0_rgba(229,185,39,0.08)] transition-all duration-300 relative rounded-sm h-full overflow-hidden`}
              >
                {/* Visual Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Row with Icon and Badge */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 bg-white/5 border border-white/10 rounded-sm ${venture.accentColor} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className={`text-[10px] font-sans tracking-widest uppercase font-bold px-3 py-1.5 rounded-full ${venture.badgeBg}`}>
                      {venture.role}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-3xl font-display font-extrabold text-white tracking-tighter uppercase mb-4">
                    {venture.title}
                  </h3>
                  <p className="text-[#bbbbbb] font-sans text-xs sm:text-sm leading-relaxed mb-8">
                    {venture.tagline}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-white/10 mb-8" />

                  {/* Core Focus / List of capabilities */}
                  <h4 className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#666666] mb-4">
                    Core Capabilities:
                  </h4>
                  <ul className="space-y-3.5 mb-8">
                    {venture.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${venture.accentColor}`} />
                        <span className="text-[14px] text-white/80 font-sans font-medium hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="relative z-10 pt-4">
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 group/btn font-bold font-sans uppercase tracking-widest text-xs transition-all border border-white/15 px-5 py-3 rounded-sm hover:bg-[#e5b927] hover:text-black hover:border-black ${venture.accentColor}`}
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
