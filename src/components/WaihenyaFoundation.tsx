import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Globe, 
  Layers, 
  Laptop, 
  Wifi, 
  GraduationCap, 
  Heart, 
  BookOpen, 
  ShieldCheck, 
  Check, 
  Send, 
  Activity, 
  X, 
  Mail, 
  Calendar,
  Users,
  Compass,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ApexLogoSvg } from './BrandLogo';

interface WaihenyaFoundationProps {
  onNavigate?: (page: string) => void;
  onSwitchToVentures?: () => void;
}

export function WaihenyaFoundation({ onNavigate, onSwitchToVentures }: WaihenyaFoundationProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedCurriculumTab, setSelectedCurriculumTab] = useState<'python' | 'data' | 'web' | 'ai'>('python');
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customDonation, setCustomDonation] = useState<string>('');
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [partnerStatus, setPartnerStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  // Application form state
  const [appForm, setAppForm] = useState({
    name: '',
    email: '',
    county: '',
    age: '',
    currentSkill: 'Beginner (Zero or little coding)',
    statement: ''
  });

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactName: '',
    email: '',
    partnershipType: 'Hardware & Laptop Donation',
    notes: ''
  });

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.name || !appForm.email) return;
    setApplicationStatus('submitting');
    setTimeout(() => {
      setApplicationStatus('submitted');
      setTimeout(() => {
        setApplicationStatus('idle');
        setAppForm({ name: '', email: '', county: '', age: '', currentSkill: 'Beginner (Zero or little coding)', statement: '' });
        setActiveModal(null);
      }, 3000);
    }, 1200);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.organization || !partnerForm.email) return;
    setPartnerStatus('submitting');
    setTimeout(() => {
      setPartnerStatus('submitted');
      setTimeout(() => {
        setPartnerStatus('idle');
        setPartnerForm({ organization: '', contactName: '', email: '', partnershipType: 'Hardware & Laptop Donation', notes: '' });
        setActiveModal(null);
      }, 3000);
    }, 1200);
  };

  const scrollToInitiatives = () => {
    const el = document.getElementById('initiatives-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const curriculumDetails = {
    python: {
      title: 'Phase 1: Computational Logic & Python Core',
      duration: 'Weeks 1 – 4',
      badge: 'Zero Prerequisites',
      summary: 'From printing "Hello World" to building text games, algorithms, and automated file handlers.',
      skills: ['Variable memory models', 'Control flow & functions', 'Object-oriented patterns', 'Algorithmic problem solving'],
      codeSnippet: `# Phase 1 Student Project: Crop Yield Calculator
def calculate_yield(rainfall_mm, fertilizer_kg, soil_type):
    base_yield = 1200 # kg/acre
    efficiency = 1.35 if soil_type == "loam" else 0.95
    adjusted = (base_yield + (rainfall_mm * 1.8) + (fertilizer_kg * 4.2)) * efficiency
    return round(adjusted, 2)

print(f"Projected Harvest: {calculate_yield(450, 50, 'loam')} kg/acre")`
    },
    data: {
      title: 'Phase 2: Data Structures & Local Databases',
      duration: 'Weeks 5 – 8',
      badge: 'Practical Architecture',
      summary: 'Handling real African datasets: agricultural price indexes, school registers, and mobile money ledgers with SQL.',
      skills: ['PostgreSQL & SQLite', 'Data cleaning with Pandas', 'API consumption & JSON', 'Relational normalization'],
      codeSnippet: `-- Phase 2 Student Project: Rural Cooperative Ledger
CREATE TABLE farmers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    county VARCHAR(50) DEFAULT 'Embu',
    produce_type VARCHAR(50),
    total_harvest_kg NUMERIC(10,2) DEFAULT 0.00
);

SELECT county, SUM(total_harvest_kg) AS aggregate_produce 
FROM farmers GROUP BY county ORDER BY aggregate_produce DESC;`
    },
    web: {
      title: 'Phase 3: Production Web & Mobile APIs',
      duration: 'Weeks 9 – 12',
      badge: 'Deployable Systems',
      summary: 'Shipping clean, responsive full-stack applications with TypeScript, React, and FastAPI with sub-100ms response times.',
      skills: ['FastAPI REST Backends', 'Modern React & Tailwind CSS', 'Authentication & JWT', 'Vercel & Docker Deployment'],
      codeSnippet: `// Phase 3 Student Project: SMS Alert Gateway
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { phone, alertType, message } = await req.json();
  // Dispatch critical weather alert to rural cooperatives
  const receipt = await dispatchBulkSMS({ to: phone, body: message });
  return NextResponse.json({ status: 'delivered', id: receipt.id });
}`
    },
    ai: {
      title: 'Phase 4: Applied AI & Mozilla Ethical Vision',
      duration: 'Weeks 13 – 16',
      badge: 'World-Class Competence',
      summary: 'Training custom vision models, embedding vector RAG search, and ethical AI architectures modeled after Mozilla Challenge winners.',
      skills: ['PyTorch & Edge Vision', 'Vector Embeddings & RAG', 'Low-resource Language Datasets', 'Ethical AI Auditing'],
      codeSnippet: `# Phase 4 Capstone: Edge Vision Diagnostic Model
import torch
import torchvision.models as models

model = models.mobilenet_v3_small(weights='DEFAULT')
# Fine-tune final linear layer for 10 regional crop diseases
model.classifier[3] = torch.nn.Linear(model.classifier[3].in_features, 10)
print("Edge model loaded: 9.8MB footprint. Ready for offline field deployment.")`
    }
  };

  return (
    <div className="w-full bg-[#04060d] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black">
      
      {/* 1. HERO SECTION (Matching Dan Martell Ventures Hero Style) */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-end pb-12 sm:pb-16 lg:pb-24 pt-28 sm:pt-36 lg:pt-40 overflow-hidden border-b border-[#1e293b]">
        {/* Full-bleed atmospheric background: African technology classroom & youth builders */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000"
            alt="Waihenya Foundation Tech Students & Youth Lab"
            className="w-full h-full object-cover object-[center_30%] filter brightness-[0.34] contrast-[1.2]"
          />
          {/* Subtle directional gradients for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04060d] via-[#04060d]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="max-w-3xl text-left">
            
            {/* Kicker label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-4 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#00a8ff]" />
              <span>THE WAIHENYA FOUNDATION · PHILANTHROPY & SOCIAL IMPACT</span>
            </motion.p>

            {/* Massive Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.98] sm:leading-[0.95] mb-5 sm:mb-6 drop-shadow-2xl"
            >
              INVESTING IN <br />
              <span className="text-[#00a8ff]">AFRICA’S BUILDERS.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl mb-6 sm:mb-8"
            >
              Passing the torch to the next generation of engineers, builders, and problem solvers. Providing free laptops, internet connectivity, and zero-to-one software engineering mentorship to underprivileged youth across Kenya and beyond.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <button
                onClick={scrollToInitiatives}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#00a8ff] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_25px_rgba(0,168,255,0.4)] cursor-pointer text-center"
              >
                Explore Foundation Initiatives
              </button>

              <button
                onClick={() => setActiveModal('apply-modal')}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#11192d] border border-[#1e293b] hover:border-[#00a8ff] text-white hover:text-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for 2026 Fellowship</span>
                <ArrowRight className="w-4 h-4 text-[#00a8ff]" />
              </button>

              {onSwitchToVentures && (
                <button
                  onClick={onSwitchToVentures}
                  className="w-full sm:w-auto px-4 py-3 sm:py-4 text-slate-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Commercial Ventures</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FOUNDATION IMPACT & RECOGNITION BAR (Matching Logo Bar Layout) */}
      <section className="w-full bg-[#030408] border-b border-[#1e293b] py-8 sm:py-10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 text-white font-sans font-black text-2xl sm:text-3xl">
                <Users className="w-6 h-6 text-[#00a8ff]" />
                <span>1,200+</span>
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Youth Trained in Code
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 text-white font-sans font-black text-2xl sm:text-3xl">
                <Laptop className="w-6 h-6 text-[#00a8ff]" />
                <span>150+</span>
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Laptops Distributed
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 text-white font-sans font-black text-2xl sm:text-3xl">
                <Wifi className="w-6 h-6 text-[#00a8ff]" />
                <span>12 Hubs</span>
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Connected with Starlink
              </p>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 text-white font-sans font-black text-2xl sm:text-3xl">
                <Award className="w-6 h-6 text-[#00a8ff]" />
                <span>100%</span>
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Grassroots Transparent
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "THE INITIATIVES" SHOWCASE (Matching 4-card bento layout) */}
      <section id="initiatives-section" className="py-24 lg:py-32 bg-[#ffffff] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          {/* Header Row (Two columns exactly matching screenshot style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-2 block">
                CORE INITIATIVES
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 uppercase tracking-tight leading-[0.95]">
                REAL OPPORTUNITY. <br />
                LASTING IMPACT.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
              We don’t do symbolic gestures or superficial photo-ops. We invest directly in raw talent, reliable hardware, high-speed connectivity, and hands-on technical competence that alters life trajectories.
            </div>
          </div>

          {/* 4-Card Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* CARD 1 (Top Left / Wide Card): Zero-to-One Rural Coding Bootcamps (Interactive Curriculum Explorer) */}
            <div className="md:col-span-12 lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#0284c7]/50 transition-all">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center p-1.5 shadow-md">
                      <ApexLogoSvg size="100%" variant="monochrome-white" />
                    </div>
                    <span className="font-sans font-black text-xl text-slate-950 uppercase tracking-wider">
                      ZERO-TO-ONE CODING ACADEMY
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold uppercase border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Tuition-Free · 16-Week Intensive</span>
                  </span>
                </div>

                {/* Interactive Curriculum Simulator Box */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white mb-8 shadow-inner">
                  {/* Tab Selector */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4 overflow-x-auto">
                    {(['python', 'data', 'web', 'ai'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedCurriculumTab(tab)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          selectedCurriculumTab === tab 
                            ? 'bg-[#00a8ff] text-black shadow-md' 
                            : 'text-slate-400 hover:text-white bg-slate-800/60'
                        }`}
                      >
                        {tab === 'python' && '01 · Python Basics'}
                        {tab === 'data' && '02 · SQL & Data'}
                        {tab === 'web' && '03 · Full-Stack'}
                        {tab === 'ai' && '04 · Applied AI'}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content Display */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-6 text-left">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#00a8ff] mb-1">
                        <span>{curriculumDetails[selectedCurriculumTab].duration}</span>
                        <span>·</span>
                        <span>{curriculumDetails[selectedCurriculumTab].badge}</span>
                      </div>
                      <h4 className="font-sans font-bold text-base text-white mb-2">
                        {curriculumDetails[selectedCurriculumTab].title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {curriculumDetails[selectedCurriculumTab].summary}
                      </p>
                      <div className="space-y-1">
                        {curriculumDetails[selectedCurriculumTab].skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Student Code Editor Preview */}
                    <div className="md:col-span-6 bg-black/80 rounded-xl border border-slate-800 p-3 font-mono text-[11px] text-slate-300 overflow-x-auto shadow-inner">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/70" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                        </span>
                        <span>student_project.py</span>
                      </div>
                      <pre className="text-emerald-400/90 whitespace-pre font-mono text-[10.5px] leading-relaxed">
                        {curriculumDetails[selectedCurriculumTab].codeSnippet}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    EDUCATION &amp; WORKFORCE / TECH TALENT PIPELINE
                  </p>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight mb-3">
                    From zero code knowledge to production engineers.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 max-w-xl">
                    David Waihenya began in 2022 without knowing what a variable was. Within three years, he graduated First Class and won a global Mozilla award. The Academy codifies that exact accelerated blueprint for youths in rural counties.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveModal('apply-modal')}
                  className="px-6 py-3 rounded-full border border-slate-400 text-slate-900 hover:border-black hover:bg-slate-900 hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Apply to Join Next Cohort
                </button>
                <span className="text-xs font-mono text-slate-400">100% Free · Merit Based</span>
              </div>

            </div>

            {/* CARD 2 (Top Right / Dark Card): Hardware & Starlink Connectivity Grants */}
            <div className="md:col-span-12 lg:col-span-4 bg-[#0a0e18] border border-[#1e293b] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all text-white">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-black text-xl text-white uppercase tracking-wider">
                    Hardware & Connectivity
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/20 text-[#00a8ff] px-2 py-0.5 rounded border border-[#00a8ff]/30 font-bold">
                    Direct Tools
                  </span>
                </div>

                {/* Device & Bandwidth Interactive Visualizer */}
                <div className="relative w-full aspect-[4/5] bg-[#060813] border border-[#1e293b] rounded-2xl overflow-hidden mb-6 shadow-inner p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-[#1e293b] pb-2">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live Network Mesh
                    </span>
                    <span>12 Rural Hubs Active</span>
                  </div>

                  {/* Satellite & Hub Graphic */}
                  <div className="relative flex-1 flex flex-col items-center justify-center my-3">
                    <div className="w-full h-full rounded-xl overflow-hidden relative border border-[#1e293b] bg-slate-900/80 p-4 flex flex-col justify-around text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#00a8ff]/20 border border-[#00a8ff]/40 flex items-center justify-center">
                            <Laptop className="w-5 h-5 text-[#00a8ff]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Refurbished ThinkPads</p>
                            <p className="text-[10px] font-mono text-slate-400">Core i5 / 16GB RAM / Linux</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">150+ Deployed</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                            <Wifi className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Satellite High-Speed Net</p>
                            <p className="text-[10px] font-mono text-slate-400">Unlimited 150Mbps Downlink</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-300">12 Hubs</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-amber-400" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Solar Backup Storage</p>
                            <p className="text-[10px] font-mono text-slate-400">Zero Grid Downtime</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-300">24/7 Power</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Note Ribbon */}
                  <div className="bg-[#0e1424] border border-[#1e293b] rounded-lg p-2.5 text-left text-xs">
                    <p className="text-slate-300 text-[11px] leading-tight">
                      A brilliant young mind without a computer is locked out of the modern economy. We eliminate that barrier permanently.
                    </p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                    INFRASTRUCTURE &amp; ACCESS
                  </p>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                    Laptops &amp; Bandwidth in Every County.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Partnering with global donors and tech firms to rescue enterprise-grade laptops and ship them with solar battery packs directly to rural learning centres.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1e293b]">
                <button
                  onClick={() => setActiveModal('partner-modal')}
                  className="w-full py-3 rounded-full bg-[#131a2c] border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Donate Hardware or Hub Space
                </button>
              </div>

            </div>

            {/* CARD 3 (Bottom Left / Photo Card): Mozilla Responsible Computing & Ethics Lab */}
            <div className="md:col-span-12 lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto flex flex-col justify-between p-8 sm:p-10 border border-[#1e293b] shadow-2xl group min-h-[420px]">
              {/* Background Photo */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Mozilla Ethical AI Youth Workshop"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/70 to-transparent" />

              {/* Brand Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-sans font-black text-2xl text-white uppercase tracking-wider">
                  MOZILLA ETHICS LAB.
                </span>
                <span className="text-[10px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded border border-white/20">
                  Global Winner Track
                </span>
              </div>

              {/* Bottom Text Content & Button */}
              <div className="relative z-10 text-left">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                  RESPONSIBLE AI / INDIGENOUS DATA SOVEREIGNTY
                </p>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                  AI by Africans, for African reality.
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  Building upon David Waihenya’s global award from the Mozilla Foundation. Training students to build local-first computer vision, preserve native Swahili and regional language dialects, and audit algorithms for bias.
                </p>
                <button
                  onClick={() => setActiveModal('ethics-modal')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-[#00a8ff] font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xl"
                >
                  <span>Explore Ethics Lab Syllabus</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CARD 4 (Bottom Right / Builder Fellowship & Micro-Grants) */}
            <div className="md:col-span-12 lg:col-span-7 bg-[#080d1a] border border-[#1e293b] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all text-white">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-6 h-6 text-[#00a8ff]" />
                    <span className="font-sans font-black text-xl text-white uppercase tracking-wider">
                      WAIHENYA BUILDER FELLOWSHIP
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/15 text-[#00a8ff] px-2.5 py-1 rounded-full border border-[#00a8ff]/30">
                    Seed Micro-Grants
                  </span>
                </div>

                {/* Micro-Grants & Mentorship Pipeline Display */}
                <div className="relative w-full aspect-auto sm:aspect-[21/9] bg-[#04060d] border border-[#1e293b] rounded-2xl p-4 sm:p-5 mb-8 shadow-inner overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1e293b] pb-3 mb-4 text-[11px] font-mono text-slate-400 gap-1.5">
                    <span className="text-white font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      2025–2026 Micro-Grant Cohort
                    </span>
                    <span className="text-[#00a8ff]">$500 – $2,500 Equity-Free</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Grant 1 */}
                    <div className="bg-[#0b1020] border border-[#1e293b] rounded-xl p-3 flex flex-col justify-between text-left gap-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Agritech Track</span>
                      <p className="text-xs font-bold text-white">Soil Sensor &amp; Offline USSD Telemetry</p>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Granted $1,500</span>
                    </div>

                    {/* Grant 2 */}
                    <div className="bg-[#0b1020] border border-[#1e293b] rounded-xl p-3 flex flex-col justify-between text-left gap-1">
                      <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">Health Track</span>
                      <p className="text-xs font-bold text-white">Cold-Chain Vaccine SMS Dispatch</p>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Granted $2,000</span>
                    </div>

                    {/* Grant 3 */}
                    <div className="bg-[#0b1020] border border-[#1e293b] rounded-xl p-3 flex flex-col justify-between text-left gap-1">
                      <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">Education</span>
                      <p className="text-xs font-bold text-white">Solar Raspberry Pi School Library</p>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Granted $1,200</span>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                    VENTURE INCUBATION / APPLIED PROBLEM SOLVING
                  </p>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                    Backing builders who solve actual problems.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
                    We don’t just teach theory; we provide the non-dilutive seed capital and weekly technical sprint coaching for students to launch software that serves their hometowns.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <button
                  onClick={() => setActiveModal('apply-modal')}
                  className="px-6 py-3 rounded-full bg-[#11192d] border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Apply for Seed Fellowship
                </button>
                <span className="text-xs font-mono text-slate-400">Rolling Applications</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. "BEHIND THE FOUNDATION" SECTION (Matching "Behind the Companies") */}
      <section className="py-24 lg:py-32 bg-[#04060d] text-white border-b border-[#1e293b] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Portrait photo of David Waihenya */}
            <div className="lg:col-span-6 flex flex-col text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3 block">
                WHY WE BUILD &amp; GIVE
              </span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.94] mb-8">
                PEOPLE WHO CARE. <br />
                <span className="text-[#00a8ff]">FUTURES THAT CHANGE.</span>
              </h2>

              {/* Subject Portrait Photo */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#0c101d] border border-[#1e293b] shadow-2xl group">
                <img
                  src="/assets/graduation.jpeg"
                  alt="David Waihenya - First Class Honours & Founder of Waihenya Foundation"
                  className="w-full h-full object-cover object-[center_20%] filter brightness-90 contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">
                    FOUNDER &amp; PHILANTHROPIC TRUSTEE
                  </p>
                  <p className="text-xl font-sans font-black text-white uppercase">David Waihenya</p>
                  <p className="text-xs text-slate-300">
                    BSc. Computer Science (First Class Honours) · Mozilla Challenge Winner
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Numbered Principles (01, 02, 03 exactly matching layout) */}
            <div className="lg:col-span-6 text-left space-y-10">
              <p className="text-lg sm:text-xl text-slate-200 font-sans leading-relaxed">
                "I started in 2022 with zero code knowledge. Someone believed in me and gave me the space to learn. The Waihenya Foundation exists to pass that torch to every hungry kid across Kenya and the continent."
              </p>

              {/* Principle 01 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">01</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Born from profound gratitude.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  No one succeeds alone. The mentors, open-source maintainers, and community that opened doors for David Waihenya now form the moral obligation to open doors for 10,000 more African students.
                </p>
              </div>

              {/* Principle 02 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">02</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Direct leverage over bureaucracy.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  Zero administrative overhead. 100% of studio profits pledged to the Foundation go directly into buying hardware, paying Starlink internet bills, and stocking community learning hubs.
                </p>
              </div>

              {/* Principle 03 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">03</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Competence is true dignity.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  We don’t offer pity. We teach hard, unforgiving computer science and production software engineering so our scholars can command global salaries and build enduring African companies.
                </p>
              </div>

              {/* Direct Partner Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModal('partner-modal')}
                  className="px-8 py-3.5 bg-white text-black hover:bg-[#00a8ff] hover:text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-xl cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Partner With The Foundation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveModal('donate-modal')}
                  className="px-6 py-3.5 bg-[#11192d] border border-[#1e293b] hover:border-[#00a8ff] text-white hover:text-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#00a8ff]" />
                  <span>Sponsor a Student ($50/mo)</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. "YOUR NEXT CHAPTER" CTA SECTION (Matching layout) */}
      <section className="py-24 lg:py-28 bg-[#ffffff] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-2 block">
                GET INVOLVED TODAY
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 uppercase tracking-tight leading-[0.95]">
                WANT TO CHANGE A LIFE? <br />
                COME BUILD WITH US.
              </h2>
            </div>

            {/* Right Subtitle & Pill Button */}
            <div className="lg:col-span-5 text-left space-y-6">
              <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
                Whether you represent a university, a tech enterprise with surplus hardware, or an individual mentor wanting to guide young Kenyan builders, we welcome your energy.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModal('partner-modal')}
                  className="px-8 py-4 bg-[#00a8ff] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-slate-950 hover:text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveModal('apply-modal')}
                  className="px-6 py-4 border border-slate-300 text-slate-800 hover:border-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer"
                >
                  Fellowship Application
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FOUNDATION DISPATCH BANNER (Matching bottom strip) */}
      <section className="py-12 bg-[#04060d] border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0c101d] border border-[#1e293b] flex items-center justify-center p-2 shrink-0">
              <GraduationCap className="w-5 h-5 text-[#00a8ff]" />
            </div>
            <div>
              <p className="font-sans font-bold text-white text-sm sm:text-base">
                Waihenya Foundation Quarterly Transparency Dispatch
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Financial statements, laptop distribution logs &amp; student graduation demos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveModal('donate-modal')}
              className="px-6 py-3 rounded-full bg-[#11192d] border border-[#1e293b] hover:border-[#00a8ff] text-white hover:text-[#00a8ff] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-[#00a8ff]" />
              <span>Direct Student Sponsorship</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODAL 1: Student Fellowship Application */}
      <AnimatePresence>
        {activeModal === 'apply-modal' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1020] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-2 block">
                2026 Cohort Application
              </span>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight mb-2">
                Join the Zero-to-One Academy
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Tuition is 100% free. We review applications solely on curiosity, grit, and hunger to solve real problems in your community.
              </p>

              {applicationStatus === 'submitted' ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-sans font-bold text-white text-lg">Application Received!</h4>
                  <p className="text-xs text-slate-300">
                    Our admissions committee reviews submissions every two weeks. Check your email for assessment instructions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAppSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                      placeholder="e.g. Kelvin Mwangi"
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">County / City</label>
                      <input
                        type="text"
                        required
                        value={appForm.county}
                        onChange={(e) => setAppForm({ ...appForm, county: e.target.value })}
                        placeholder="e.g. Embu / Nairobi"
                        className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Current Skill Level</label>
                    <select
                      value={appForm.currentSkill}
                      onChange={(e) => setAppForm({ ...appForm, currentSkill: e.target.value })}
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    >
                      <option>Beginner (Zero or little coding)</option>
                      <option>Intermediate (Know some Python or HTML/JS)</option>
                      <option>Self-Taught Builder (Need laptop or mentorship to ship)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">What real problem do you want to solve with technology?</label>
                    <textarea
                      rows={3}
                      required
                      value={appForm.statement}
                      onChange={(e) => setAppForm({ ...appForm, statement: e.target.value })}
                      placeholder="Tell us about the agricultural, educational, or business challenge in your community that you want to fix..."
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={applicationStatus === 'submitting'}
                    className="w-full py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {applicationStatus === 'submitting' ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Fellowship Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Partner / Hardware Donation Modal */}
      <AnimatePresence>
        {activeModal === 'partner-modal' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1020] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-2 block">
                Institutional &amp; Corporate Partnership
              </span>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight mb-2">
                Partner with Waihenya Foundation
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                We accept refurbished laptops, Starlink terminal sponsorships, solar hardware, and student micro-grant funding.
              </p>

              {partnerStatus === 'submitted' ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-sans font-bold text-white text-lg">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-slate-300">
                    David Waihenya and our partnership team will respond within 24 hours to coordinate logistical details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.organization}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                      placeholder="e.g. Acme Tech Kenya / Tech Non-Profit"
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Partnership Interest</label>
                    <select
                      value={partnerForm.partnershipType}
                      onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    >
                      <option>Hardware & Laptop Donation (Bulk Devices)</option>
                      <option>Starlink / Internet Bandwidth Sponsorship</option>
                      <option>Student Seed Micro-Grants ($500 - $2,500)</option>
                      <option>University / Innovation Hub Host Center</option>
                      <option>Technical Mentor Volunteer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Notes / Equipment Details</label>
                    <textarea
                      rows={3}
                      value={partnerForm.notes}
                      onChange={(e) => setPartnerForm({ ...partnerForm, notes: e.target.value })}
                      placeholder="Specify device counts, locations, or how your team would like to collaborate..."
                      className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={partnerStatus === 'submitting'}
                    className="w-full py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {partnerStatus === 'submitting' ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Connecting with Foundation...</span>
                      </>
                    ) : (
                      <>
                        <span>Connect with Foundation Trustees</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 3: Direct Student Sponsorship / Donation Modal */}
      <AnimatePresence>
        {activeModal === 'donate-modal' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1020] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-md w-full text-left relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-2 block">
                Direct Impact Giving
              </span>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight mb-2">
                Sponsor a Student’s Journey
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                $50/month covers unlimited Starlink internet, curated coding curriculum, solar lab electricity, and capstone deployment hosting for one student.
              </p>

              {/* Preset Amounts */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[25, 50, 100, 250].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setDonationAmount(amt); setCustomDonation(''); }}
                    className={`py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                      donationAmount === amt && !customDonation
                        ? 'bg-[#00a8ff] text-black shadow-md'
                        : 'bg-[#060813] border border-[#1e293b] text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Custom Amount (USD)</label>
                <input
                  type="number"
                  value={customDonation}
                  onChange={(e) => setCustomDonation(e.target.value)}
                  placeholder="Enter custom amount..."
                  className="w-full bg-[#060813] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00a8ff]"
                />
              </div>

              <div className="p-4 bg-[#060813] border border-[#1e293b] rounded-xl text-xs space-y-2 mb-6 font-mono text-slate-400">
                <div className="flex items-center justify-between text-white">
                  <span>Sponsorship Impact</span>
                  <span className="text-emerald-400 font-bold">100% Pass-Through</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Every dollar goes directly into field hardware & internet. Zero administrative fees deducted.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:contact@davidwaihenya.dev?subject=Waihenya%20Foundation%20Sponsorship&body=Hello%20David%2C%20I%20would%20like%20to%20support%20the%20Waihenya%20Foundation%20with%20a%20student%20sponsorship."
                  className="w-full py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Initiate Sponsorship via Email</span>
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-2.5 text-slate-400 hover:text-white font-mono text-xs uppercase transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 4: Mozilla Ethics Lab Syllabus Modal */}
      <AnimatePresence>
        {activeModal === 'ethics-modal' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1020] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left relative shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-2 block">
                Responsible AI &amp; Mozilla Foundation
              </span>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight mb-2">
                Ethical AI Youth Lab Syllabus
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Directly inspired by David Waihenya’s winning architecture in the global Mozilla Responsible Computing Challenge.
              </p>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 bg-[#060813] border border-[#1e293b] rounded-xl">
                  <p className="text-[#00a8ff] font-bold text-xs uppercase mb-1">Module 1: Data Sovereignty &amp; Consent</p>
                  <p className="text-slate-400 text-[11px]">How African agricultural and clinical data is collected, labeled, and protected under local data protection laws (ODPC Kenya).</p>
                </div>

                <div className="p-3 bg-[#060813] border border-[#1e293b] rounded-xl">
                  <p className="text-emerald-400 font-bold text-xs uppercase mb-1">Module 2: Low-Resource Dialect Modeling</p>
                  <p className="text-slate-400 text-[11px]">Training speech-to-text and NLP models on Swahili, Sheng, and regional agricultural vocabularies without foreign corporate bias.</p>
                </div>

                <div className="p-3 bg-[#060813] border border-[#1e293b] rounded-xl">
                  <p className="text-purple-400 font-bold text-xs uppercase mb-1">Module 3: Edge Inference &amp; Offline AI</p>
                  <p className="text-slate-400 text-[11px]">Optimizing models to run locally on low-cost Android phones and Raspberry Pis without requiring expensive cloud subscriptions or active LTE.</p>
                </div>

                <div className="p-3 bg-[#060813] border border-[#1e293b] rounded-xl">
                  <p className="text-amber-400 font-bold text-xs uppercase mb-1">Module 4: Algorithmic Transparency &amp; Explainability</p>
                  <p className="text-slate-400 text-[11px]">Ensuring rural farmers receive human-comprehensible diagnostic reasoning rather than opaque black-box recommendations.</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <button
                  onClick={() => { setActiveModal('apply-modal'); }}
                  className="px-6 py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                >
                  Apply to Ethics Cohort
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
