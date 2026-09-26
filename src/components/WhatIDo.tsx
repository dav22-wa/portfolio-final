import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Globe, 
  Layers, 
  ArrowUpRight, 
  Check, 
  Send, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Play, 
  Code2, 
  Smartphone, 
  X,
  Mail,
  Building2,
  Calendar,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ApexLogoSvg } from './BrandLogo';
import { WaihenyaFoundation } from './WaihenyaFoundation';

interface WhatIDoProps {
  onNavigate?: (page: string) => void;
  initialTab?: 'ventures' | 'foundation';
}

export function WhatIDo({ onNavigate, initialTab = 'ventures' }: WhatIDoProps) {
  const [activeTab, setActiveTab] = useState<'ventures' | 'foundation'>(initialTab);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [promptInput, setPromptInput] = useState('');
  const [promptResponse, setPromptResponse] = useState<string | null>(null);
  const [isProcessingPrompt, setIsProcessingPrompt] = useState(false);
  const [scanActive, setScanActive] = useState(false);
  const [consultationStatus, setConsultationStatus] = useState<'idle' | 'submitted'>('idle');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Consultation form state
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'AI Solution Studio (Enterprise Automation)',
    message: ''
  });

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    setIsProcessingPrompt(true);
    setPromptResponse(null);

    setTimeout(() => {
      setIsProcessingPrompt(false);
      setPromptResponse(
        `AI Solution Studio Agent verified: Pipeline synthesized for "${promptInput}". Connected 4 data sources (PostgreSQL, WhatsApp, Stripe, Google Sheets) with automated SLA triage in 0.18s.`
      );
    }, 1000);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (consultationForm.name && consultationForm.email) {
      setConsultationStatus('submitted');
      setTimeout(() => {
        setConsultationStatus('idle');
        setConsultationForm({ name: '', email: '', company: '', serviceInterest: 'AI Solution Studio (Enterprise Automation)', message: '' });
        setActiveModal(null);
      }, 3500);
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('companies-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (activeTab === 'foundation') {
    return (
      <div className="w-full bg-[#04060d] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black">
        <WaihenyaFoundation 
          onNavigate={onNavigate} 
          onSwitchToVentures={() => {
            setActiveTab('ventures');
            window.location.hash = 'what-i-do';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#04060d] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matching Dan Martell Ventures Hero Style) */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-end pb-12 sm:pb-16 lg:pb-24 pt-28 sm:pt-36 lg:pt-40 overflow-hidden border-b border-[#1e293b]">
        {/* Full-bleed atmospheric background: collaborative tech workshop & whiteboard scene */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000"
            alt="AI Solution Studio Engineering Workshop"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.32] contrast-[1.2]"
          />
          {/* Subtle directional gradients for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04060d] via-[#04060d]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="max-w-3xl text-left">
            
            {/* Kicker label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-4"
            >
              WAIHENYA VENTURES · AI SOLUTION STUDIO
            </motion.p>

            {/* Massive Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.98] sm:leading-[0.95] mb-5 sm:mb-6 drop-shadow-2xl"
            >
              BUILDING <br />
              <span className="text-[#00a8ff]">WHAT’S NEXT.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl mb-6 sm:mb-8"
            >
              Software, AI and specialized engineering teams. Built around the hardest operational problems businesses and ambitious founders face every day.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <button
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#00a8ff] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_25px_rgba(0,168,255,0.4)] cursor-pointer text-center"
              >
                Explore Our Companies
              </button>

              <button
                onClick={() => onNavigate ? onNavigate('careers') : window.location.assign('/#careers')}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 text-white hover:text-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Careers</span>
                <ArrowRight className="w-4 h-4 text-[#00a8ff]" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. VENTURES LOGO BAR (Under Hero, matching screenshot) */}
      <section className="w-full bg-[#030408] border-b border-[#1e293b] py-8 sm:py-10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
            
            {/* Logo 1: AI Solution Studio */}
            <div className="flex items-center gap-2.5 font-sans font-black text-lg sm:text-xl text-white uppercase tracking-wider group cursor-pointer" onClick={scrollToPortfolio}>
              <div className="w-7 h-7 rounded-lg bg-[#0c101d] border border-[#1e293b] flex items-center justify-center p-1.5 group-hover:border-[#00a8ff] transition-colors">
                <ApexLogoSvg size="100%" variant="default" />
              </div>
              <span>AI SOLUTION STUDIO</span>
            </div>

            {/* Logo 2: Davamos Tech */}
            <div className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg text-slate-300 hover:text-white transition-colors cursor-pointer" onClick={scrollToPortfolio}>
              <Globe className="w-5 h-5 text-[#00a8ff]" />
              <span>DAVAMOS TECH</span>
            </div>

            {/* Logo 3: AgriScan AI */}
            <div className="flex items-center gap-2 font-sans font-bold text-base sm:text-lg text-slate-300 hover:text-white transition-colors cursor-pointer" onClick={scrollToPortfolio}>
              <ShieldCheck className="w-5 h-5 text-[#00a8ff]" />
              <span>AGRISCAN AI</span>
              <span className="text-[9px] font-mono uppercase bg-[#00a8ff]/20 text-[#00a8ff] px-1.5 py-0.5 rounded border border-[#00a8ff]/30">MOZILLA</span>
            </div>

            {/* Logo 4: SYNERGY Platform */}
            <div className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg text-slate-300 hover:text-white transition-colors cursor-pointer" onClick={scrollToPortfolio}>
              <Cpu className="w-5 h-5 text-[#00a8ff]" />
              <span>SYNERGY LABS</span>
            </div>

            {/* Logo 5: Waihenya Foundation */}
            <div 
              className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg text-slate-300 hover:text-white transition-colors cursor-pointer col-span-2 sm:col-span-1"
              onClick={() => {
                setActiveTab('foundation');
                window.location.hash = 'foundation';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Heart className="w-5 h-5 text-red-400" />
              <span>FOUNDATION</span>
              <span className="text-[9px] font-mono uppercase bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded border border-red-500/30">IMPACT</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "THE COMPANIES" SHOWCASE SECTION (Matching screenshot 4-card layout) */}
      <section id="companies-section" className="py-24 lg:py-32 bg-[#ffffff] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          {/* Header Row (Two columns exactly as in screenshot) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-2 block">
                THE COMPANIES
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 uppercase tracking-tight leading-[0.95]">
                GOOD COMPANIES. <br />
                REAL PROBLEMS SOLVED.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
              Different companies. A shared ambition: help entrepreneurs and growing businesses build better operations with intelligent AI, automation, and reliable modern software.
            </div>
          </div>

          {/* 4-Card Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* CARD 1 (Top Left / Wide Card): AI Solution Studio (Light Off-White Card matching "hello, Frank." style) */}
            <div className="md:col-span-12 lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#0284c7]/50 transition-all">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center p-1.5 shadow-md">
                      <ApexLogoSvg size="100%" variant="monochrome-white" />
                    </div>
                    <span className="font-sans font-black text-xl text-slate-950 uppercase tracking-wider">
                      AI SOLUTION STUDIO
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold uppercase border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Operations</span>
                  </span>
                </div>

                {/* Interactive Network Node Diagram (Matching screenshot UI mockup) */}
                <div className="relative w-full aspect-auto min-h-[300px] sm:min-h-0 sm:aspect-[21/9] bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between shadow-inner mb-6 sm:mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                  
                  {/* Central Node & Satellites */}
                  <div className="relative z-10 flex items-center justify-center h-full min-h-[200px] py-4">
                    {/* Center Core Node */}
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-950 text-white flex items-center justify-center p-2.5 sm:p-3 shadow-2xl border-2 border-[#0284c7]">
                        <ApexLogoSvg size="100%" variant="default" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-900 mt-1.5 sm:mt-2 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm whitespace-nowrap">
                        Studio Agent Core
                      </span>
                    </div>

                    {/* Satellite Service Icons connected with clean SVG lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-300 stroke-[1.5] [stroke-dasharray:4_4]">
                      <line x1="50%" y1="50%" x2="20%" y2="28%" />
                      <line x1="50%" y1="50%" x2="25%" y2="72%" />
                      <line x1="50%" y1="50%" x2="80%" y2="28%" />
                      <line x1="50%" y1="50%" x2="78%" y2="72%" />
                    </svg>

                    {/* Node 1: WhatsApp / CRM */}
                    <div className="absolute top-[12%] sm:top-[18%] left-[6%] sm:left-[14%] bg-white border border-slate-300 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-md">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 whitespace-nowrap">WhatsApp CRM</span>
                    </div>

                    {/* Node 2: PostgreSQL / Databases */}
                    <div className="absolute bottom-[12%] sm:bottom-[18%] left-[8%] sm:left-[18%] bg-white border border-slate-300 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-md">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 whitespace-nowrap">PostgreSQL</span>
                    </div>

                    {/* Node 3: Stripe / M-Pesa */}
                    <div className="absolute top-[12%] sm:top-[18%] right-[6%] sm:right-[14%] bg-white border border-slate-300 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-md">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 whitespace-nowrap">M-Pesa / Stripe</span>
                    </div>

                    {/* Node 4: Documents & RAG */}
                    <div className="absolute bottom-[12%] sm:bottom-[18%] right-[8%] sm:right-[16%] bg-white border border-slate-300 rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-md">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 whitespace-nowrap">Vector RAG</span>
                    </div>
                  </div>

                  {/* Interactive Prompt Input Bar at Bottom of Mockup */}
                  <form onSubmit={handlePromptSubmit} className="relative z-10 flex items-center gap-2 pt-2 border-t border-slate-100">
                    <input
                      type="text"
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      placeholder="Ask AI Solution Studio anything..."
                      className="flex-1 text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 sm:px-3.5 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] min-w-0"
                    />
                    <button
                      type="submit"
                      disabled={isProcessingPrompt}
                      className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-[#0284c7] transition-colors cursor-pointer shrink-0"
                    >
                      {isProcessingPrompt ? <Activity className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    </button>
                  </form>
                </div>

                {promptResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mb-6 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-900 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{promptResponse}</span>
                  </motion.div>
                )}

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    FINANCE &amp; WORKFLOW / AI SOFTWARE
                  </p>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight mb-3">
                    Clarity for your next big decision.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 max-w-xl">
                    Connect your financial data, customer communications, and operational databases. Understand cash flow, client triage, and operational bottlenecks. Ask AI Solution Studio what comes next.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveModal('ai-studio-modal')}
                  className="px-6 py-3 rounded-full border border-slate-400 text-slate-900 hover:border-black hover:bg-slate-900 hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Explore AI Solution Studio
                </button>
                <span className="text-xs font-mono text-slate-400">Flagship System</span>
              </div>

            </div>

            {/* CARD 2 (Top Right / Dark Tall Card): AgriScan AI (Matching "TopicFinder" style) */}
            <div className="md:col-span-12 lg:col-span-4 bg-[#0a0e18] border border-[#1e293b] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all text-white">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-black text-xl text-white uppercase tracking-wider">
                    AgriScan AI
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/20 text-[#00a8ff] px-2 py-0.5 rounded border border-[#00a8ff]/30 font-bold">
                    Mozilla Winner
                  </span>
                </div>

                {/* Smartphone Diagnostic Scan Screen Mockup */}
                <div className="relative w-full aspect-[4/5] bg-[#060813] border border-[#1e293b] rounded-2xl overflow-hidden mb-6 shadow-inner p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-[#1e293b] pb-2">
                    <span className="flex items-center gap-1.5 text-[#00a8ff]">
                      <span className="w-2 h-2 rounded-full bg-[#00a8ff] animate-ping" />
                      Edge Vision v2.4
                    </span>
                    <span>Offline Ready</span>
                  </div>

                  {/* Leaf Diagnostic Target Area */}
                  <div className="relative flex-1 flex flex-col items-center justify-center my-3">
                    <div className="w-full h-full rounded-xl overflow-hidden relative border border-[#1e293b] bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1592417817098-8f3d6910a5a2?auto=format&fit=crop&q=80&w=800"
                        alt="Crop leaf disease detection scan"
                        className="w-full h-full object-cover filter brightness-75"
                      />
                      {/* Scanning Reticle & Bounding Box */}
                      <div className="absolute inset-4 border-2 border-dashed border-[#00a8ff] rounded-lg pointer-events-none animate-pulse flex items-end p-2">
                        <span className="bg-[#00a8ff] text-black font-mono font-bold text-[10px] px-2 py-0.5 rounded">
                          Potato Early Blight (98.7%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Output Ribbon */}
                  <div className="bg-[#0e1424] border border-[#1e293b] rounded-lg p-2.5 text-left text-xs">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase mb-0.5">
                      Recommended Action
                    </div>
                    <p className="text-slate-300 text-[11px] leading-tight">
                      Apply organic copper fungicide within 48h to prevent 85% yield loss.
                    </p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                    COMPUTER VISION / AGTECH
                  </p>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                    Early detection for African agriculture.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    A farmer shouldn’t have to wait until an entire harvest is ruined. Edge computer vision models that diagnose crop leaf diseases offline directly in rural cooperatives.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1e293b]">
                <button
                  onClick={() => setActiveModal('agriscan-modal')}
                  className="w-full py-3 rounded-full bg-[#131a2c] border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Explore AgriScan AI
                </button>
              </div>

            </div>

            {/* CARD 3 (Bottom Left / Photo Card): Davamos Tech (Matching "SERV." photo card style) */}
            <div className="md:col-span-12 lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto flex flex-col justify-between p-8 sm:p-10 border border-[#1e293b] shadow-2xl group min-h-[420px]">
              {/* Background Photo with dark editorial gradient */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Davamos Tech Software Engineering Team"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/65 to-transparent" />

              {/* Brand Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-sans font-black text-2xl text-white uppercase tracking-wider">
                  DAVAMOS TECH.
                </span>
                <span className="text-[10px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded border border-white/20">
                  Engineering Agency
                </span>
              </div>

              {/* Bottom Text Content & Button */}
              <div className="relative z-10 text-left">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                  BESPOKE SOFTWARE / CLOUD ENGINEERING
                </p>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                  Great companies need rock-solid software.
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  David Waihenya and the Davamos team engineer high-concurrency web platforms, mobile backends, and scalable cloud architectures with zero bloat and sub-100ms latency.
                </p>
                <a
                  href="https://davamos.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-[#00a8ff] font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xl"
                >
                  <span>Visit Davamos Tech</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CARD 4 (Bottom Right / AI Engine Dashboard Card): SYNERGY Platform (Matching "Sixth Summit" style) */}
            <div className="md:col-span-12 lg:col-span-7 bg-[#080d1a] border border-[#1e293b] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all text-white">
              
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-6 h-6 text-[#00a8ff]" />
                    <span className="font-sans font-black text-xl text-white uppercase tracking-wider">
                      SYNERGY &amp; VELOX AI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/15 text-[#00a8ff] px-2.5 py-1 rounded-full border border-[#00a8ff]/30">
                    Multi-Agent AI
                  </span>
                </div>

                {/* Dashboard Engine Mockup */}
                <div className="relative w-full aspect-auto sm:aspect-[21/9] bg-[#04060d] border border-[#1e293b] rounded-2xl p-4 sm:p-5 mb-8 shadow-inner overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1e293b] pb-3 mb-4 text-[11px] font-mono text-slate-400 gap-1.5">
                    <span className="text-white font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      The AI Conversation &amp; Safety Engine
                    </span>
                    <span className="text-[#00a8ff]">Latency: 142ms</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Left Pane: Multi-Agent Dispatch */}
                    <div className="bg-[#0b1020] border border-[#1e293b] rounded-xl p-3 flex flex-col justify-between text-left">
                      <span className="text-[10px] font-mono text-[#00a8ff] uppercase font-bold mb-2 block">Agent Pipeline</span>
                      <div className="space-y-1.5 text-[11px] text-slate-300 font-mono">
                        <div className="flex items-center justify-between text-emerald-400">
                          <span>✓ Audio Stream Synced</span>
                          <span>100%</span>
                        </div>
                        <div className="flex items-center justify-between text-emerald-400">
                          <span>✓ Sentiment Scored</span>
                          <span>0.98</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-400">
                          <span>• Vector Context</span>
                          <span>Indexed</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Pane: Waveform & Threat Classification */}
                    <div className="bg-[#0b1020] border border-[#1e293b] rounded-xl p-3 flex flex-col justify-between text-left">
                      <span className="text-[10px] font-mono text-[#00a8ff] uppercase font-bold mb-2 block">Harassment Guardian</span>
                      {/* Animated Audio Waveform Graphic */}
                      <div className="flex items-center gap-1 h-8 justify-center mb-2">
                        {[40, 75, 95, 30, 85, 60, 100, 45, 90, 35, 70, 50].map((h, i) => (
                          <div
                            key={i}
                            className="w-1 bg-[#00a8ff] rounded-full transition-all duration-300"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Status: <span className="text-emerald-400 font-bold">Zero Threats Detected</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                    AI / CUSTOM SYSTEM DEVELOPMENT
                  </p>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                    From “what if” to working software.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
                    Custom software, multi-agent AI networks, and practical systems engineering. Put advanced artificial intelligence to work on the things that matter to your business.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <button
                  onClick={() => setActiveModal('synergy-modal')}
                  className="px-6 py-3 rounded-full bg-[#11192d] border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Build with AI Solution Studio
                </button>
                <span className="text-xs font-mono text-slate-400">Enterprise AI</span>
              </div>

            </div>

            {/* CARD 5: THE PHILANTHROPIC INITIATIVE: WAIHENYA FOUNDATION */}
            <div className="md:col-span-12 bg-gradient-to-r from-[#070b16] via-[#091226] to-[#070b16] border border-[#1e293b] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0c101d] border border-[#00a8ff]/40 flex items-center justify-center text-[#00a8ff]">
                      <Heart className="w-5 h-5 text-[#00a8ff]" />
                    </div>
                    <span className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
                      THE WAIHENYA FOUNDATION
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/20 text-[#00a8ff] px-2.5 py-1 rounded-full border border-[#00a8ff]/30 font-bold">
                      Social Impact Arm
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Passing the torch. 1,200+ African youth trained in code.
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    Every commercial system we deploy fuels our philanthropic pledge: tuition-free zero-to-one coding bootcamps, refurbished laptop distribution, and Starlink connectivity for underprivileged youth and rural innovation hubs in Kenya.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>150+ Laptops Donated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>12 Rural Starlink Hubs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>100% Free Tuition</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                  <button
                    onClick={() => {
                      setActiveTab('foundation');
                      window.location.hash = 'foundation';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-[#00a8ff] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_25px_rgba(0,168,255,0.4)] cursor-pointer text-center"
                  >
                    Enter Foundation Page →
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    100% Direct Pass-Through Impact
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. "BEHIND THE COMPANIES" SECTION (Matching screenshot exact layout) */}
      <section className="py-24 lg:py-32 bg-[#04060d] text-white border-b border-[#1e293b] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Dramatic editorial photo of David Waihenya speaking */}
            <div className="lg:col-span-6 flex flex-col text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3 block">
                BEHIND THE COMPANIES
              </span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.94] mb-8">
                PEOPLE WHO BUILD. <br />
                <span className="text-[#00a8ff]">IDEAS THAT MOVE.</span>
              </h2>

              {/* Subject Portrait Photo */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#0c101d] border border-[#1e293b] shadow-2xl group">
                <img
                  src="/assets/contact.jpeg"
                  alt="David Waihenya - Founder of AI Solution Studio"
                  className="w-full h-full object-cover object-[center_20%] filter brightness-90 contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">
                    FOUNDER &amp; SYSTEMS ARCHITECT
                  </p>
                  <p className="text-xl font-sans font-black text-white uppercase">David Waihenya</p>
                  <p className="text-xs text-slate-300">
                    BSc. Computer Science (First Class Honors) · Mozilla Challenge Winner
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Numbered Principles (01, 02, 03 exactly matching screenshot) */}
            <div className="lg:col-span-6 text-left space-y-10">
              <p className="text-lg sm:text-xl text-slate-200 font-sans leading-relaxed">
                A network of high-agency engineers, builders, and specialists turning real business problems into working solutions.
              </p>

              {/* Principle 01 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">01</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Built from experience.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  Lessons from building companies, training neural networks from scratch, and solving the real decisions entrepreneurs face every day.
                </p>
              </div>

              {/* Principle 02 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">02</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Better, together.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  People, ideas and specialist engineering knowledge connected through the broader David Waihenya builder ecosystem.
                </p>
              </div>

              {/* Principle 03 */}
              <div className="border-t border-[#1e293b] pt-6 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#00a8ff]">03</span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    Useful beats complicated.
                  </h3>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-8">
                  Tools for clearer decisions, automated workflows, and more time for the high-leverage work that actually matters.
                </p>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4">
                <button
                  onClick={() => setActiveModal('consultation-modal')}
                  className="px-8 py-3.5 bg-white text-black hover:bg-[#00a8ff] hover:text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-xl cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book Studio Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. "YOUR NEXT CHAPTER" CTA SECTION (Matching screenshot exact layout) */}
      <section className="py-24 lg:py-28 bg-[#ffffff] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-2 block">
                YOUR NEXT CHAPTER
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 uppercase tracking-tight leading-[0.95]">
                GOOD AT WHAT YOU DO? <br />
                COME BUILD WITH US.
              </h2>
            </div>

            {/* Right Subtitle & Pill Button */}
            <div className="lg:col-span-5 text-left space-y-6">
              <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
                Bring your skills, curiosity and ambition to a team that puts ideas into motion. Explore current opportunities across our engineering studios.
              </p>
              <button
                onClick={() => onNavigate ? onNavigate('careers') : window.location.assign('/#careers')}
                className="px-8 py-4 bg-[#00a8ff] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-slate-950 hover:text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
              >
                <span>Explore Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. NEWSLETTER CALLOUT BANNER (Matching bottom strip from screenshot) */}
      <section className="py-12 bg-[#04060d] border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0c101d] border border-[#1e293b] flex items-center justify-center p-2 shrink-0">
              <ApexLogoSvg size="100%" variant="default" />
            </div>
            <div>
              <div className="font-sans font-black text-sm uppercase tracking-wider text-white">
                THE WAIHENYA DISPATCH
              </div>
              <div className="text-xs text-[#00a8ff] font-mono">
                The weekly email that builds real software systems.
              </div>
            </div>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed to the Waihenya Dispatch!");
            }} 
            className="flex w-full md:w-auto items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-full bg-[#0c101d] border border-[#1e293b] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00a8ff] w-full md:w-72"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* MODAL: STUDIO CONSULTATION / INQUIRY */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0c101d] border border-[#1e293b] rounded-3xl p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#04060d] border border-[#1e293b] flex items-center justify-center p-2 text-[#00a8ff]">
                  <ApexLogoSvg size="100%" variant="default" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-lg text-white uppercase">
                    AI SOLUTION STUDIO
                  </h3>
                  <p className="text-xs font-mono text-[#00a8ff]">
                    Direct Architecture &amp; System Consultation
                  </p>
                </div>
              </div>

              {consultationStatus === 'submitted' ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase">Consultation Inquiry Received</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you. David Waihenya and the studio engineering squad will review your system requirements and follow up within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={consultationForm.name}
                      onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                      placeholder="e.g. Alex Kamau"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#04060d] border border-[#1e293b] text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={consultationForm.email}
                      onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#04060d] border border-[#1e293b] text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={consultationForm.company}
                      onChange={(e) => setConsultationForm({ ...consultationForm, company: e.target.value })}
                      placeholder="e.g. Apex Agri Logistics"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#04060d] border border-[#1e293b] text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Service of Interest</label>
                    <select
                      value={consultationForm.serviceInterest}
                      onChange={(e) => setConsultationForm({ ...consultationForm, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#04060d] border border-[#1e293b] text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    >
                      <option value="AI Solution Studio (Enterprise Automation)">AI Solution Studio (Enterprise Automation)</option>
                      <option value="AgriScan AI (Computer Vision Solutions)">AgriScan AI (Computer Vision Solutions)</option>
                      <option value="Davamos Tech (Full-Stack Software Engineering)">Davamos Tech (Full-Stack Software Engineering)</option>
                      <option value="SYNERGY Labs (Multi-Agent RAG & Speech AI)">SYNERGY Labs (Multi-Agent RAG &amp; Speech AI)</option>
                      <option value="Executive Advisory & Systems Scoping">Executive Advisory &amp; Systems Scoping</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">System Goal / Challenge</label>
                    <textarea
                      rows={3}
                      value={consultationForm.message}
                      onChange={(e) => setConsultationForm({ ...consultationForm, message: e.target.value })}
                      placeholder="Describe what you want to automate, build, or deploy..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#04060d] border border-[#1e293b] text-xs text-white focus:outline-none focus:border-[#00a8ff]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg cursor-pointer"
                  >
                    Request Studio Consultation
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
