import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Sparkles, Shield, Globe, Cpu, ArrowUpRight } from 'lucide-react';

interface VenturesProps {
  onNavigate?: (page: string) => void;
}

export function Ventures({ onNavigate }: VenturesProps) {
  const ventures = [
    {
      id: "ai-solution-studio",
      name: "SYNERGY / AI Solution Studio",
      role: "Founder & Lead AI Architect",
      status: "Active Venture",
      tagline: "Autonomous Agentic Systems & Vision Models",
      description: "A premier interactive AI studio developing production agentic workflows, cost-aware local RAG models, and deep learning systems that automate complex business tasks.",
      stack: ["React", "FastAPI", "Python", "TFLite", "Agentic Pipelines"],
      metric: "98.4% Accuracy",
      link: "https://ai-solution-studio.vercel.app/",
      accent: "#00a8ff",
      icon: Cpu
    },
    {
      id: "velox-ai",
      name: "Velox AI (AI Voice Guardian)",
      role: "Founder & Lead Systems Engineer",
      status: "In Active Development",
      tagline: "Sub-120ms Real-Time Audio Moderation",
      description: "Edge-based real-time speech processing system that monitors live audio streams, detects verbal harassment and toxic threats, and triggers automated policy actions.",
      stack: ["Python", "PyAudio", "NLP", "Real-Time Speech"],
      metric: "<120ms Latency",
      link: "https://github.com/dav22-wa",
      accent: "#38bdf8",
      icon: Shield
    },
    {
      id: "davamos-tech",
      name: "Davamos Tech",
      role: "Founder & Principal Developer",
      status: "Active Agency",
      tagline: "Bespoke Full-Stack Web & Software Engineering",
      description: "Freelance web engineering agency crafting blazing-fast web platforms, custom mobile systems, and scalable backend/database architectures for Kenyan enterprises and startups.",
      stack: ["React", "Node.js", "Flask", "PostgreSQL", "M-Pesa API"],
      metric: "100% On-Time Delivery",
      link: "https://davamos.vercel.app/",
      accent: "#00a8ff",
      icon: Globe
    }
  ];

  return (
    <section id="ventures" className="py-24 lg:py-32 w-full bg-[#0c101d] text-[#d4d4d4] border-t border-[#1e293b] relative">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="section-kicker">VENTURES &amp; INITIATIVES</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-none">
              COMPANIES I'M <span className="text-[#00a8ff]">BUILDING</span>.
            </h2>
            <p className="text-[#94a3b8] font-sans text-base sm:text-lg leading-relaxed mt-4">
              I believe in building equity, not just collecting billable hours. Here are the companies and software services I am growing from the ground up.
            </p>
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('contact') : window.location.assign('/#contact')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00a8ff] border border-[#1e293b] px-6 py-3.5 hover:border-[#00a8ff] bg-[#0e1424] hover:bg-[#131b2e] transition-all rounded-full cursor-pointer self-start lg:self-end"
          >
            <span>Partner on a Venture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ventures.map((venture, idx) => {
            const Icon = venture.icon;
            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#0e1424] border border-[#1e293b] hover:border-[#00a8ff]/60 p-8 lg:p-10 flex flex-col justify-between rounded-2xl shadow-xl transition-all duration-300 group hover:-translate-y-1.5 relative"
              >
                <div>
                  {/* Top status & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#00a8ff] bg-[#00a8ff]/10 px-3 py-1 rounded-full uppercase border border-[#00a8ff]/20">
                      {venture.status}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-2xl font-display font-extrabold uppercase text-white group-hover:text-[#00a8ff] transition-colors leading-tight mb-1">
                    {venture.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {venture.role}
                  </p>
                  <p className="text-[11px] font-mono font-semibold text-[#00a8ff] mb-4">
                    {venture.tagline}
                  </p>

                  <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {venture.stack.map(st => (
                      <span key={st} className="text-[10px] font-mono font-medium text-slate-300 bg-[#131b2e] px-2.5 py-1 rounded-md border border-[#1e293b]">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom link & metric */}
                <div className="pt-6 border-t border-[#1e293b] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Key Indicator</p>
                    <p className="text-xs font-bold text-white uppercase">{venture.metric}</p>
                  </div>

                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#131b2e] group-hover:bg-[#00a8ff] group-hover:text-black text-white text-xs font-bold uppercase rounded-lg transition-all"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
