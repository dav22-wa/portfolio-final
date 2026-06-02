import { motion } from 'motion/react';
import { Target, ShieldCheck, Cpu, ArrowUpRight, Check } from 'lucide-react';

export function WhoIsThisFor() {
  const segments = [
    {
      id: "ai-founders",
      icon: Cpu,
      title: "AI Founders & Tech Startups",
      description: "You are building the next generation of intelligent products but need high-velocity prototype execution, robust prompt engineering, or production LLM microservices that don't scale cost exponentially.",
      outcomes: [
        "Rapid API scaffolding with Node & Python",
        "Cost-aware retrieval-augmented models (RAG)",
        "Secure client-to-server proxy layers"
      ],
      badge: "VELOCITY"
    },
    {
      id: "social-impact",
      icon: ShieldCheck,
      title: "Social Initiatives & Trust Teams",
      description: "You require tech solutions backed by audited guidelines and real-world compliance. Benefit from a verified winner of the global Mozilla Responsible Computing Challenge.",
      outcomes: [
        "Bias-audited classification models",
        "Privacy-first edge processing pipelines",
        "Inclusive, local-first UX architectures"
      ],
      badge: "INTEGRITY"
    },
    {
      id: "scaling-ventures",
      icon: Target,
      title: "Scaling Ventures & SMBs",
      description: "You have validation and revenue, but your team has outgrown sluggish templates. You need custom databases, automated cloud workflows, and high-performance bespoke networks.",
      outcomes: [
        "Slick high-performing Next/Vite web apps",
        "Durable, structured database schemas",
        "Optimized digital scaling strategies"
      ],
      badge: "AUTOMATION"
    }
  ];

  return (
    <section className="py-[100px] lg:py-[140px] w-full bg-[#09090b] text-white border-t border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Dan Martell Bold Outline Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div className="max-w-xl text-left">
            <span className="section-label !text-[#e5b927] mb-4">TARGET AUDIENCE</span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tighter leading-none">
              WHO IS THIS <span className="text-[#e5b927]">FOR</span>?
            </h2>
            <p className="text-[#aaaaaa] font-sans text-md leading-relaxed mt-4">
              I don't just write individual lines of functions. I align robust technical ecosystems to support ambitious visionaries demanding speed, safety and scale.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 group text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#e5b927] transition-colors border-2 border-white/15 px-6 py-3.5 hover:border-[#e5b927] hover:shadow-[4px_4px_0_0_rgba(229,185,39,0.15)] transition-all rounded-sm"
            >
              <span>Verify Collaboration Fit</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#111318] border-2 border-white/5 hover:border-[#e5b927]/40 p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative rounded-sm shadow-xl group hover:-translate-y-1"
              >
                {/* Visual Corner Tag */}
                <div className="absolute top-4 right-4 text-[9px] font-sans font-extrabold tracking-widest uppercase bg-[#e5b927]/10 text-[#e5b927] py-1 px-2.5 rounded-sm">
                  {segment.badge}
                </div>

                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm mb-8 text-[#e5b927] transition-transform duration-300 group-hover:scale-115">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-tight text-white mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-[#999999] font-sans text-xs sm:text-sm leading-relaxed mb-8">
                    {segment.description}
                  </p>

                  <div className="w-full h-px bg-white/5 mb-8" />

                  {/* Bullet Outlines */}
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-4">
                    Immediate outcomes:
                  </h4>
                  <ul className="space-y-3">
                    {segment.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 bg-[#e5b927]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#e5b927]" />
                        </span>
                        <span className="text-[13px] text-zinc-300 font-sans font-medium">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
