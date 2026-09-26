import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles, ExternalLink, ArrowRight, ShieldCheck, Zap, Layers, Terminal, CheckCircle2, Download, BookOpen } from 'lucide-react';

interface FeaturedProjectProps {
  onNavigate?: (page: string) => void;
}

export function FeaturedProject({ onNavigate }: FeaturedProjectProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'blueprint'>('architecture');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBlueprint = () => {
    const content = `# FROM ZERO TO INTELLIGENCE
## The Builder's Blueprint: How to Go from Zero Coding Knowledge to Shipping Production AI Systems & Winning Global Challenges
By Dave Waihenya (BSc Computer Science First Class Honours, Mozilla Responsible Computing Challenge Winner 2024)

---

### PREFACE: THE THREE-YEAR GAP
In September 2022, I walked onto the campus of the University of Embu without knowing what a variable was.
I had never written a line of Python, Java, or C++. Fast forward three years: I won the global Mozilla Responsible Computing Challenge, trained computer vision models for smallholder farmers, and founded AI Solution Studio and Davamos Tech.

This blueprint is not theory. It is the unvarnished playbook for ambitious builders who want to stop following tutorials and start shipping software that matters.

---

### THE FOUR PILLARS:

#### 1. OUTWORK THE CONFUSION
Tutorials give the illusion of competence. Real learning only begins when you break things and are forced to read the stack trace. Embrace compiler errors as direct instruction.

#### 2. SHIP IN THE OPEN
Build things with real users in mind. From day one, deploy your work to Vercel, Railway, or Hugging Face. A simple deployed tool used by 10 people teaches you more than 100 local Jupyter notebooks.

#### 3. GROUND INTELLIGENCE IN LOCAL REALITIES
The biggest opportunities in artificial intelligence are not generic chatbots. They are contextual, domain-specific systems: detecting early potato blight for Kenyan farmers, moderating voice toxicity in real-time, or automating manual attendance systems.

#### 4. SCALE FROM SCRIPTS TO VENTURES
Write code that creates leverage. Package your solutions into reusable platforms, agencies, and ventures like Davamos Tech and SYNERGY.
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dave_Waihenya_Builders_Blueprint.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-project" className="py-24 lg:py-32 w-full bg-[#060813] text-[#d4d4d4] border-t border-[#1e293b] relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a8ff]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="section-kicker">FLAGSHIP SYSTEM SPOTLIGHT</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
              SYNERGY: <span className="text-[#00a8ff]">MULTI-AGENT INTELLIGENCE</span> &amp; VISION.
            </h2>
            <p className="text-[#94a3b8] font-sans text-base sm:text-lg leading-relaxed mt-4">
              Instead of static web apps, I architect autonomous systems. SYNERGY is my flagship intelligence platform uniting multi-agent research, edge computer vision for agriculture, and low-latency speech moderation.
            </p>
          </div>

          {/* Toggle between System Showcase and Builder's Blueprint */}
          <div className="flex items-center gap-2 p-1.5 bg-[#0e1424] border border-[#1e293b] rounded-full self-start lg:self-end">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'architecture' ? 'bg-[#00a8ff] text-black shadow-md' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'blueprint' ? 'bg-[#00a8ff] text-black shadow-md' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Builder's Blueprint</span>
            </button>
          </div>
        </div>

        {activeTab === 'architecture' ? (
          /* Architecture Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0e1424] border border-[#1e293b] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
            
            {/* Left Column: Visual Mockup / Interactive Terminal Display */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#060813] border border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0a0e1a] border-b border-[#1e293b] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">synergy_core_engine.py</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00a8ff] bg-[#00a8ff]/10 px-2 py-0.5 rounded font-bold uppercase">
                    ACTIVE · v2.4
                  </span>
                </div>

                {/* Simulated Terminal Content */}
                <div className="p-6 font-mono text-xs sm:text-[13px] space-y-4 text-slate-300">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-3">
                    <span>SYSTEM STATUS</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE (EMBU EDGE NODE)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400">// Multi-Engine Pipeline Ingest</p>
                    <p className="text-[#00a8ff]">▶ Agent 1: Potato Blight CNN · Quantized TFLite (98.4% Acc)</p>
                    <p className="text-emerald-400">▶ Agent 2: Real-Time Audio Guardian · 118ms Stream Latency</p>
                    <p className="text-amber-300">▶ Agent 3: Autonomous RAG Knowledge Ingestion</p>
                  </div>

                  <div className="p-3.5 bg-[#0e1424] rounded-xl border border-[#1e293b] text-[11px] text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Memory Utilization</span>
                      <span className="text-white font-bold">142 MB / 512 MB</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#00a8ff] h-full rounded-full w-[28%]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                    <Terminal className="w-3.5 h-3.5 text-[#00a8ff]" />
                    <span>Engineered for low-bandwidth Kenyan agricultural cooperatives</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Breakdown & Action Buttons */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#00a8ff] uppercase">
                  AUTONOMOUS ARCHITECTURE
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase mt-1">
                  ENGINEERED FOR RESILIENCE AND LOW-RESOURCE SPEED.
                </h3>
                <p className="text-sm sm:text-base text-[#94a3b8] mt-3 leading-relaxed">
                  SYNERGY combines the lightweight computer vision model from my agricultural blight research with real-time speech processing and agentic task orchestration. It runs anywhere—from edge Raspberry Pi nodes to cloud microservices.
                </p>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                  <p className="text-2xl sm:text-3xl font-display font-extrabold text-[#00a8ff]">98.4%</p>
                  <p className="text-[11px] text-slate-400 uppercase font-bold mt-1">Blight Detection</p>
                </div>
                <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                  <p className="text-2xl sm:text-3xl font-display font-extrabold text-white">&lt;120ms</p>
                  <p className="text-[11px] text-slate-400 uppercase font-bold mt-1">Audio Latency</p>
                </div>
                <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                  <p className="text-2xl sm:text-3xl font-display font-extrabold text-[#e5b927]">3</p>
                  <p className="text-[11px] text-slate-400 uppercase font-bold mt-1">Deployable Models</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://ai-solution-studio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,168,255,0.4)] flex items-center gap-2"
                >
                  <span>Launch Live Studio Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={handleContact}
                  className="px-6 py-3.5 bg-[#131b2e] border border-[#1e293b] text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all"
                >
                  Inquire About Custom AI
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* Builder's Blueprint Download Box */
          <div className="bg-[#0e1424] border border-[#1e293b] rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#00a8ff] uppercase">
                FREE FOUNDER RESOURCE
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase mt-1">
                FROM ZERO TO INTELLIGENCE: THE BUILDER'S PLAYBOOK.
              </h3>
              <p className="text-sm sm:text-base text-[#94a3b8] mt-3 leading-relaxed">
                The exact blueprint covering how I went from zero programming knowledge in 2022 to graduating with First Class Honours, winning the Mozilla Responsible Computing Challenge, and shipping production AI systems.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00a8ff]" />
                  <span>8 Comprehensive Chapters</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00a8ff]" />
                  <span>Real Python &amp; ML Architectures</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00a8ff]" />
                  <span>Free Instant Markdown Download</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={handleDownloadBlueprint}
                className="w-full sm:w-auto px-8 py-4 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,168,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Playbook (.MD)</span>
              </button>
              {downloadSuccess && (
                <p className="text-xs text-emerald-400 font-bold mt-2">
                  ✓ Playbook downloaded successfully!
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
