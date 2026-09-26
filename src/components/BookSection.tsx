import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Download, 
  Star, 
  ArrowRight, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Send,
  Award,
  DollarSign,
  GraduationCap,
  Palette,
  Check
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type BookColorTheme = 'emerald-cyan' | 'crimson-sapphire' | 'skyblue-ochre' | 'onyx-platinum';

export function BookSection({ isDedicatedPage = true, onNavigate }: { isDedicatedPage?: boolean; onNavigate?: (page: string) => void }) {
  const [selectedBook, setSelectedBook] = useState<'book1' | 'book2' | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'subscribed'>('idle');
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters' | 'download'>('overview');
  const [colorTheme, setColorTheme] = useState<BookColorTheme>('emerald-cyan');

  // Color themes definition
  const themes = {
    'emerald-cyan': {
      id: 'emerald-cyan',
      name: 'Emerald Wealth & Cyber Cyan',
      book1: {
        coverBg: 'bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22]',
        spineBg: 'bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#047857]',
        borderColor: 'border-[#fbbf24]/50',
        titleColor: 'text-white',
        subtitleColor: 'text-[#fef08a]',
        eyebrowColor: 'text-[#10b981]',
        accentHex: '#10b981',
        badgeBg: 'bg-gradient-to-br from-[#ffd700] via-[#e6b800] to-[#b8860b]',
        badgeText: 'text-[#1a1200]',
        glowColor: 'bg-[#10b981]/30',
        buttonHover: 'hover:bg-[#10b981]'
      },
      book2: {
        coverBg: 'bg-gradient-to-br from-[#0c1222] via-[#0f172a] to-[#030712]',
        spineBg: 'bg-gradient-to-r from-[#030712] via-[#0c1222] to-[#1e293b]',
        borderColor: 'border-[#00a8ff]/40',
        titleColor: 'text-white',
        subtitleColor: 'text-[#38bdf8]',
        eyebrowColor: 'text-[#00a8ff]',
        accentHex: '#00a8ff',
        iconBg: 'bg-[#00a8ff]/10 text-[#00a8ff] border-[#00a8ff]/40',
        glowColor: 'bg-[#00a8ff]/30',
        buttonHover: 'hover:bg-[#00a8ff]'
      }
    },
    'crimson-sapphire': {
      id: 'crimson-sapphire',
      name: 'Regal Ruby & Midnight Sapphire',
      book1: {
        coverBg: 'bg-gradient-to-br from-[#881337] via-[#9f1239] to-[#4c0519]',
        spineBg: 'bg-gradient-to-r from-[#4c0519] via-[#881337] to-[#9f1239]',
        borderColor: 'border-[#fbbf24]/60',
        titleColor: 'text-white',
        subtitleColor: 'text-[#fde047]',
        eyebrowColor: 'text-[#f43f5e]',
        accentHex: '#f43f5e',
        badgeBg: 'bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706]',
        badgeText: 'text-black',
        glowColor: 'bg-[#f43f5e]/30',
        buttonHover: 'hover:bg-[#f43f5e]'
      },
      book2: {
        coverBg: 'bg-gradient-to-br from-[#1e1b4b] via-[#1e293b] to-[#090d16]',
        spineBg: 'bg-gradient-to-r from-[#090d16] via-[#1e1b4b] to-[#312e81]',
        borderColor: 'border-[#818cf8]/40',
        titleColor: 'text-white',
        subtitleColor: 'text-[#a5b4fc]',
        eyebrowColor: 'text-[#818cf8]',
        accentHex: '#818cf8',
        iconBg: 'bg-[#818cf8]/15 text-[#818cf8] border-[#818cf8]/40',
        glowColor: 'bg-[#818cf8]/30',
        buttonHover: 'hover:bg-[#818cf8]'
      }
    },
    'skyblue-ochre': {
      id: 'skyblue-ochre',
      name: 'Electric Sky & African Ochre',
      book1: {
        coverBg: 'bg-gradient-to-br from-[#0284c7] via-[#00a8ff] to-[#0369a1]',
        spineBg: 'bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#00a8ff]',
        borderColor: 'border-white/40',
        titleColor: 'text-white',
        subtitleColor: 'text-white/95',
        eyebrowColor: 'text-[#00a8ff]',
        accentHex: '#00a8ff',
        badgeBg: 'bg-gradient-to-br from-[#ffd700] via-[#e6b800] to-[#b8860b]',
        badgeText: 'text-[#1a1200]',
        glowColor: 'bg-[#00a8ff]/30',
        buttonHover: 'hover:bg-[#00a8ff]'
      },
      book2: {
        coverBg: 'bg-gradient-to-br from-[#7c2d12] via-[#9a3412] to-[#431407]',
        spineBg: 'bg-gradient-to-r from-[#431407] via-[#7c2d12] to-[#9a3412]',
        borderColor: 'border-[#fdba74]/50',
        titleColor: 'text-white',
        subtitleColor: 'text-[#fed7aa]',
        eyebrowColor: 'text-[#fb923c]',
        accentHex: '#fb923c',
        iconBg: 'bg-[#fb923c]/15 text-[#fb923c] border-[#fb923c]/40',
        glowColor: 'bg-[#fb923c]/30',
        buttonHover: 'hover:bg-[#fb923c]'
      }
    },
    'onyx-platinum': {
      id: 'onyx-platinum',
      name: 'Onyx Black & Metallic Platinum',
      book1: {
        coverBg: 'bg-gradient-to-br from-[#18181b] via-[#09090b] to-[#000000]',
        spineBg: 'bg-gradient-to-r from-[#000000] via-[#18181b] to-[#27272a]',
        borderColor: 'border-[#e4e4e7]/50',
        titleColor: 'text-white',
        subtitleColor: 'text-[#a1a1aa]',
        eyebrowColor: 'text-white',
        accentHex: '#ffffff',
        badgeBg: 'bg-gradient-to-br from-[#e4e4e7] via-[#d4d4d8] to-[#a1a1aa]',
        badgeText: 'text-black',
        glowColor: 'bg-white/20',
        buttonHover: 'hover:bg-white hover:text-black'
      },
      book2: {
        coverBg: 'bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617]',
        spineBg: 'bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e293b]',
        borderColor: 'border-[#38bdf8]/50',
        titleColor: 'text-white',
        subtitleColor: 'text-[#7dd3fc]',
        eyebrowColor: 'text-[#38bdf8]',
        accentHex: '#38bdf8',
        iconBg: 'bg-[#38bdf8]/15 text-[#38bdf8] border-[#38bdf8]/40',
        glowColor: 'bg-[#38bdf8]/30',
        buttonHover: 'hover:bg-[#38bdf8]'
      }
    }
  };

  const currentTheme = themes[colorTheme];

  const booksData = {
    book1: {
      id: 'book1',
      eyebrow: 'FROM FIRST CLASS TO FIRST MILLION',
      headlinePrefix: 'A KENYAN COMPUTER SCIENCE GRADUATE’S ROADMAP TO ',
      headlineEmphasis: 'INCOME, BUSINESS & WEALTH',
      description: 'The raw, battle-tested roadmap from walking into university in 2022 with zero programming knowledge to graduating with First Class Honours from the University of Embu, building client systems, winning global competitions, and constructing a seven-figure technology business.',
      badgeText: 'FIRST CLASS HONOURS · 2024 BLUEPRINT',
      title: 'FROM FIRST CLASS TO FIRST MILLION',
      subtitle: 'A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth',
      author: 'DAVE WAIHENYA',
      tag: 'BSc Computer Science First Class Honours · Founder, Davamos Tech',
      chapters: [
        { num: '01', title: 'The 2022 Starting Line: Zero Knowledge & High Ambition', summary: 'Overcoming the blank terminal, dismantling imposter syndrome, and the first principles of deliberate programming.' },
        { num: '02', title: 'The First Class Protocol: Academic Rigor Meets Practical Craft', summary: 'How to study computer science for technical mastery and top honours rather than mere exam memorization.' },
        { num: '03', title: 'From Exercises to Income: Landing the First Paying Client', summary: 'Ditching toy clones and packaging engineering services that solve urgent bottlenecks for local businesses.' },
        { num: '04', title: 'The Freelancer’s Crucible: Upwork, Referrals & Global Contracts', summary: 'Pricing outcomes instead of hours, delivering on deadlines, and building financial runway as an undergraduate.' },
        { num: '05', title: 'Winning on the Global Stage: The Mozilla Challenge Playbook', summary: 'How an undergraduate in Embu, Kenya competed and won international grants in responsible computing.' },
        { num: '06', title: 'The Agency Transition: Founding Davamos Tech', summary: 'Moving from solo freelancer to agency operator, managing cash flow, and hiring high-velocity engineering talent.' },
        { num: '07', title: 'The First Million Milestone: Reinvesting in Equity & Infrastructure', summary: 'Financial discipline, capital allocation, and building lasting digital assets that compound over time.' },
        { num: '08', title: 'The Next Decade: From First Million to Institutional Impact', summary: 'The long-term vision of owning technology conglomerates, creating regional employment, and teaching future engineers.' }
      ]
    },
    book2: {
      id: 'book2',
      eyebrow: 'THE AI BUSINESS PLAYBOOK FOR AFRICA',
      headlinePrefix: 'HOW YOUNG DEVELOPERS CAN USE APPLIED AI TO ',
      headlineEmphasis: 'SOLVE REAL BUSINESS PROBLEMS',
      description: 'Stop building generic wrapper apps. This is the definitive practical manual for African engineers to identify real operational friction in agriculture, retail, logistics, and finance—and build edge computer vision, local inference, and automated agent workflows that businesses eagerly pay for.',
      badgeText: 'AI BUSINESS PLAYBOOK',
      title: 'THE AI BUSINESS PLAYBOOK FOR AFRICA',
      subtitle: 'How Young Developers Can Use AI to Solve Real Business Problems',
      author: 'DAVE WAIHENYA',
      tag: 'Applied AI Architect · Winner Mozilla Challenge · AI Solution Studio',
      chapters: [
        { num: '01', title: 'The African AI Reality: Pain Over Vanity', summary: 'Why Silicon Valley demo solutions fail in emerging markets and how to find high-margin local problems.' },
        { num: '02', title: 'Low-Resource Machine Learning: Noisy Data & Dust', summary: 'Training computer vision models for smallholder farmers with edge quantization and localized data augmentation.' },
        { num: '03', title: 'Edge-First Inference: Killing the Cloud GPU Bill', summary: 'Deploying localized ONNX and quantized models on CPU hardware without expensive dollar-denominated server costs.' },
        { num: '04', title: 'Speech & Vision at the Frontier: Agricultural & Logistics Diagnostics', summary: 'Real-world case studies: Velox AI potato blight detection and automated weighbridge transit logging.' },
        { num: '05', title: 'Agentic Business Automation: Multi-Agent Workflows for SMBs', summary: 'Building autonomous audit trails, asynchronous document parsing, and instant WhatsApp customer booking.' },
        { num: '06', title: 'Data Sovereignty, Ethics & The Mozilla Framework', summary: 'Privacy-preserving architectures, bias mitigation in local dialects, and building trustworthy AI systems.' },
        { num: '07', title: 'Pricing & Packaging AI Solutions for African Enterprises', summary: 'How to pitch corporate directors, structure pilot agreements, and guarantee quantifiable revenue and cost savings.' },
        { num: '08', title: 'The New Generation of Builders: Leading the Continent’s AI Wave', summary: 'From passive technology consumption to active creation: why African developers will build the next technology giants.' }
      ]
    }
  };

  const handleDownload = (bookKey: 'book1' | 'book2') => {
    const book = booksData[bookKey];
    const content = `# ${book.title}
## ${book.subtitle}
By ${book.author} (${book.tag})

---

### PREFACE
This publication is not theory. It is the tactical, battle-tested playbook for ambitious builders who want to stop following tutorials and start shipping software that matters.

### CHAPTER SYNOPSIS
${book.chapters.map(c => `Chapter ${c.num}: ${c.title}\n${c.summary}\n`).join('\n')}

---
© David Waihenya. All rights reserved.
Portfolio: https://davidwaihenya.vercel.app | GitHub: https://github.com/dav22-wa
`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${book.title.replace(/\s+/g, '-').toLowerCase()}-dave-waihenya.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(book.title);
    setTimeout(() => setDownloadSuccess(null), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus('subscribed');
      setTimeout(() => {
        setNewsletterStatus('idle');
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] pt-24 min-h-screen">
      
      {/* 1. HERO SECTION (Matching danmartell.com/books hero) */}
      <section className="relative w-full min-h-[480px] lg:min-h-[560px] flex items-center border-b border-[#1e293b] overflow-hidden">
        {/* Background Image: Author at workspace with warm ambient lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about.jpeg"
            alt="Dave Waihenya Books & Engineering Workspace"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.40] contrast-[1.15]"
          />
          {/* Subtle directional gradients for readable typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060813] via-[#060813]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
          <div className="max-w-3xl">
            {/* Sky Blue Eyebrow */}
            <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#00a8ff] mb-4">
              BEST-SELLING AUTHOR & BUILDER
            </p>

            {/* Massive condensed headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tighter leading-[0.92] mb-6">
              LEVEL UP YOUR <br />
              READING LIST
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#cbd5e1] font-sans leading-relaxed max-w-xl mb-8">
              Dive deep and get the playbooks to scale your software, deploy applied AI, and build high-impact companies.
            </p>

            {/* COLOR THEME SELECTOR PILL BAR */}
            <div className="p-3 rounded-2xl bg-[#0c101d]/90 backdrop-blur-md border border-[#1e293b] inline-flex flex-wrap items-center gap-2 shadow-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#94a3b8] flex items-center gap-1.5 px-2">
                <Palette className="w-3.5 h-3.5 text-[#00a8ff]" />
                <span>Cover Color Palette:</span>
              </span>
              
              <button
                onClick={() => setColorTheme('emerald-cyan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  colorTheme === 'emerald-cyan'
                    ? 'bg-[#064e3b] text-[#fef08a] border border-[#fbbf24]/60 shadow-md'
                    : 'bg-[#060813] text-[#94a3b8] hover:text-white border border-[#1e293b]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span>Emerald &amp; Cyber Cyan</span>
                {colorTheme === 'emerald-cyan' && <Check className="w-3 h-3 text-[#fef08a]" />}
              </button>

              <button
                onClick={() => setColorTheme('crimson-sapphire')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  colorTheme === 'crimson-sapphire'
                    ? 'bg-[#881337] text-white border border-[#fbbf24]/60 shadow-md'
                    : 'bg-[#060813] text-[#94a3b8] hover:text-white border border-[#1e293b]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
                <span>Regal Ruby &amp; Sapphire</span>
                {colorTheme === 'crimson-sapphire' && <Check className="w-3 h-3 text-white" />}
              </button>

              <button
                onClick={() => setColorTheme('skyblue-ochre')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  colorTheme === 'skyblue-ochre'
                    ? 'bg-[#00a8ff] text-black border border-white shadow-md'
                    : 'bg-[#060813] text-[#94a3b8] hover:text-white border border-[#1e293b]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00a8ff]" />
                <span>Electric Sky &amp; Ochre</span>
                {colorTheme === 'skyblue-ochre' && <Check className="w-3 h-3 text-black" />}
              </button>

              <button
                onClick={() => setColorTheme('onyx-platinum')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  colorTheme === 'onyx-platinum'
                    ? 'bg-neutral-800 text-white border border-white/60 shadow-md'
                    : 'bg-[#060813] text-[#94a3b8] hover:text-white border border-[#1e293b]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span>Onyx &amp; Platinum</span>
                {colorTheme === 'onyx-platinum' && <Check className="w-3 h-3 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOOK 1 SECTION: "FROM FIRST CLASS TO FIRST MILLION" (Left: 3D Hardcover with Gold Badge, Right: Bold text & Buy button) */}
      <section className="relative w-full py-20 lg:py-32 border-b border-[#1e293b] overflow-hidden bg-[#060813]">
        {/* Atmospheric ambient lighting & subtle portrait silhouette in deep shadows */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 pointer-events-none overflow-hidden">
          <img
            src="/assets/hero.jpeg"
            alt=""
            className="w-full h-full object-cover object-top filter grayscale contrast-150 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#060813]/80 to-[#060813]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-[#060813]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 3D Hardcover Book with Wall Street Journal style Gold Seal Badge */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div 
                className="relative cursor-pointer group"
                onClick={() => setSelectedBook('book1')}
              >
                {/* Gold Seal Badge (Matching Dan Martell's "The Wall Street Journal Bestseller" circular badge) */}
                <div className={`absolute -top-6 -left-6 sm:-left-8 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full ${currentTheme.book1.badgeBg} ${currentTheme.book1.badgeText} p-1.5 shadow-[0_10px_25px_rgba(230,184,0,0.4)] flex items-center justify-center text-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full border-2 border-dashed border-black/30 flex flex-col items-center justify-center p-1 leading-tight">
                    <span className="text-[7.5px] font-black uppercase tracking-wider">FIRST CLASS</span>
                    <span className="text-[10px] sm:text-[11px] font-display font-black uppercase tracking-tight my-0.5">HONOURS</span>
                    <span className="text-[7px] font-bold uppercase tracking-wider">KENYA ROADMAP</span>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3D Hardcover Book Body */}
                <div className="relative perspective-[1200px]">
                  {/* Ground Shadow */}
                  <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] h-[30px] bg-black/90 rounded-full blur-xl group-hover:scale-110 ${currentTheme.book1.glowColor} transition-all duration-500`} />

                  {/* Book 3D Box */}
                  <div 
                    className="relative w-[280px] sm:w-[320px] h-[430px] sm:h-[480px] transition-transform duration-500 ease-out transform group-hover:rotate-y-[-10deg] group-hover:rotate-x-[4deg] group-hover:-translate-y-3"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Spine */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-[36px] ${currentTheme.book1.spineBg} border-y border-l border-white/20 flex flex-col justify-between py-6 px-1 text-center shadow-2xl rounded-l-sm`}
                      style={{
                        transform: 'rotateY(-90deg) translateZ(18px)',
                        transformOrigin: 'left center'
                      }}
                    >
                      <span className="text-[8px] font-mono tracking-widest text-white/90 uppercase rotate-90 origin-center translate-y-6">
                        WAIHENYA
                      </span>
                      <span className="text-[10px] font-display font-black tracking-widest text-white uppercase rotate-90 origin-center truncate w-[270px] translate-y-12">
                        FROM FIRST CLASS TO FIRST MILLION
                      </span>
                      <div className="w-5 h-5 mx-auto rounded bg-black/40 border border-white/40 flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Front Cover */}
                    <div className={`absolute inset-0 ${currentTheme.book1.coverBg} border ${currentTheme.book1.borderColor} rounded-r-md rounded-l-xs shadow-[25px_25px_60px_rgba(0,0,0,0.85)] p-7 flex flex-col justify-between overflow-hidden transition-colors duration-500`}>
                      {/* Paper Sheen Highlights */}
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

                      {/* Header */}
                      <div className="relative z-10">
                        <div className="border-b border-white/30 pb-2 mb-4">
                          <p className="text-[8.5px] font-mono tracking-[0.2em] text-white/90 font-bold uppercase text-center">
                            UNIVERSITY OF EMBU · FIRST CLASS HONOURS
                          </p>
                        </div>
                        <p className="text-xs font-mono font-bold tracking-widest text-white text-center uppercase mb-2">
                          DAVE WAIHENYA
                        </p>
                      </div>

                      {/* Giant Central Bold Title */}
                      <div className="relative z-10 text-center my-auto">
                        <h3 className={`font-display font-black text-3xl sm:text-4xl lg:text-[42px] ${currentTheme.book1.titleColor} tracking-tight leading-[0.90] uppercase drop-shadow-md`}>
                          FROM <br />
                          FIRST CLASS <br />
                          TO FIRST <br />
                          MILLION
                        </h3>
                        <div className="w-16 h-1 bg-[#fbbf24] mx-auto my-3 rounded-full" />
                        <p className={`text-[10px] sm:text-[10.5px] font-sans font-medium ${currentTheme.book1.subtitleColor} leading-snug max-w-[220px] mx-auto`}>
                          A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth
                        </p>
                      </div>

                      {/* Footer Badge on Cover */}
                      <div className="relative z-10 border-t border-white/30 pt-3 text-center">
                        <p className="text-[9px] font-bold tracking-wider text-white uppercase">
                          The Essential Graduate Playbook
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Eyebrow, Giant Condensed Headline, Description, Pill Buy Button */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <p className={`text-xs sm:text-sm font-black uppercase tracking-widest ${currentTheme.book1.eyebrowColor} mb-4 transition-colors`}>
                {booksData.book1.eyebrow}
              </p>

              {/* Massive White Headline */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white/80 uppercase tracking-tighter leading-[0.94] mb-6">
                {booksData.book1.headlinePrefix} <br className="hidden sm:inline" />
                <span className="text-white font-black">{booksData.book1.headlineEmphasis}</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed max-w-2xl mb-8">
                {booksData.book1.description}
              </p>

              {/* White Pill Button: "Buy the Book" */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedBook('book1')}
                  className={`px-8 py-3.5 rounded-full bg-white text-black font-display font-extrabold text-sm uppercase tracking-wider ${currentTheme.book1.buttonHover} hover:text-white transition-all duration-300 shadow-xl cursor-pointer`}
                >
                  Buy the Book
                </button>

                <button
                  onClick={() => handleDownload('book1')}
                  className="px-6 py-3.5 rounded-full bg-transparent border border-[#1e293b] text-white hover:border-[#00a8ff] hover:text-[#00a8ff] font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Blueprint (.MD)</span>
                </button>
              </div>

              {downloadSuccess === booksData.book1.title && (
                <p className="mt-4 text-xs font-mono text-[#10b981] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Blueprint downloaded successfully!</span>
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. BOOK 2 SECTION: "THE AI BUSINESS PLAYBOOK FOR AFRICA" (Left: Bold Text & Buy button, Right: 3D Hardcover with Warm Bokeh Background) */}
      <section className="relative w-full py-20 lg:py-32 border-b border-[#1e293b] overflow-hidden bg-[#060813]">
        {/* Warm Golden/Amber Bokeh circles matching Dan Martell's Software as a Science background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-[#38bdf8]/10 blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00a8ff]/10 blur-[140px]" />
          <div className="absolute -bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-[#6366f1]/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Eyebrow, Giant Condensed Headline, Description, Pill Buy Button */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Eyebrow */}
              <p className={`text-xs sm:text-sm font-black uppercase tracking-widest ${currentTheme.book2.eyebrowColor} mb-4 transition-colors`}>
                {booksData.book2.eyebrow}
              </p>

              {/* Massive White Headline */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white/80 uppercase tracking-tighter leading-[0.94] mb-6">
                {booksData.book2.headlinePrefix} <br className="hidden sm:inline" />
                <span className="text-white font-black">{booksData.book2.headlineEmphasis}</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed max-w-2xl mb-8">
                {booksData.book2.description}
              </p>

              {/* White Pill Button: "Buy the Book" */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedBook('book2')}
                  className={`px-8 py-3.5 rounded-full bg-white text-black font-display font-extrabold text-sm uppercase tracking-wider ${currentTheme.book2.buttonHover} hover:text-white transition-all duration-300 shadow-xl cursor-pointer`}
                >
                  Buy the Book
                </button>

                <button
                  onClick={() => handleDownload('book2')}
                  className="px-6 py-3.5 rounded-full bg-transparent border border-[#1e293b] text-white hover:border-[#00a8ff] hover:text-[#00a8ff] font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Architecture (.MD)</span>
                </button>
              </div>

              {downloadSuccess === booksData.book2.title && (
                <p className="mt-4 text-xs font-mono text-[#00a8ff] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Architecture blueprint downloaded successfully!</span>
                </p>
              )}
            </div>

            {/* Right Column: 3D Hardcover Book Body (Charcoal Slate Hardcover with CPU icon) */}
            <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
              <div 
                className="relative cursor-pointer group"
                onClick={() => setSelectedBook('book2')}
              >
                {/* 3D Hardcover Book Body */}
                <div className="relative perspective-[1200px]">
                  {/* Ground Shadow */}
                  <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] h-[30px] bg-black/90 rounded-full blur-xl group-hover:scale-110 ${currentTheme.book2.glowColor} transition-all duration-500`} />

                  {/* Book 3D Box */}
                  <div 
                    className="relative w-[280px] sm:w-[320px] h-[430px] sm:h-[480px] transition-transform duration-500 ease-out transform group-hover:rotate-y-[10deg] group-hover:rotate-x-[4deg] group-hover:-translate-y-3"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Spine */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-[36px] ${currentTheme.book2.spineBg} border-y border-l border-white/10 flex flex-col justify-between py-6 px-1 text-center shadow-2xl rounded-l-sm`}
                      style={{
                        transform: 'rotateY(-90deg) translateZ(18px)',
                        transformOrigin: 'left center'
                      }}
                    >
                      <span className="text-[8px] font-mono tracking-widest text-[#38bdf8] uppercase rotate-90 origin-center translate-y-6">
                        WAIHENYA
                      </span>
                      <span className="text-[10px] font-display font-black tracking-widest text-white uppercase rotate-90 origin-center truncate w-[270px] translate-y-12">
                        THE AI BUSINESS PLAYBOOK FOR AFRICA
                      </span>
                      <div className="w-5 h-5 mx-auto rounded bg-black/50 border border-white/20 flex items-center justify-center">
                        <Cpu className="w-3 h-3 text-[#38bdf8]" />
                      </div>
                    </div>

                    {/* Front Cover */}
                    <div className={`absolute inset-0 ${currentTheme.book2.coverBg} border ${currentTheme.book2.borderColor} rounded-r-md rounded-l-xs shadow-[25px_25px_60px_rgba(0,0,0,0.9)] p-7 flex flex-col justify-between overflow-hidden transition-colors duration-500`}>
                      {/* Subtle Grid Texture */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                      
                      {/* Top Growth Graphic Icon */}
                      <div className="relative z-10 flex justify-center pt-2">
                        <div className={`w-12 h-12 rounded-xl ${currentTheme.book2.iconBg} flex items-center justify-center shadow-inner`}>
                          <Cpu className="w-6 h-6 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Giant Condensed White Title */}
                      <div className="relative z-10 text-center my-auto">
                        <h3 className={`font-display font-black text-3xl sm:text-4xl lg:text-[40px] ${currentTheme.book2.titleColor} tracking-tight leading-[0.90] uppercase drop-shadow-md`}>
                          THE AI <br />
                          BUSINESS <br />
                          PLAYBOOK <br />
                          FOR AFRICA
                        </h3>

                        {/* Subtitle */}
                        <p className={`text-[10px] sm:text-[10.5px] font-sans font-bold ${currentTheme.book2.subtitleColor} tracking-tight leading-snug max-w-[230px] mx-auto mt-3.5 uppercase`}>
                          How Young Developers Can Use AI to Solve Real Business Problems
                        </p>
                      </div>

                      {/* Bottom Author Credentials matching Dan's cover */}
                      <div className="relative z-10 border-t border-white/10 pt-4 text-center">
                        <p className="text-[10px] font-display font-black tracking-widest text-white uppercase">
                          DAVE WAIHENYA
                        </p>
                        <p className="text-[8px] font-mono tracking-wider text-[#94a3b8] uppercase mt-0.5">
                          WINNER MOZILLA CHALLENGE 2024 · AI STUDIO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM NEWSLETTER STRIP (THE WAIHENYA METHOD - Exactly matching screenshot footer bar) */}
      <section className="w-full bg-black border-t border-[#1e293b] py-10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Monogram Brand Mark & Headline */}
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <BrandLogo size="lg" showWordmark={false} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
                  THE WAIHENYA METHOD
                </h3>
                <p className="text-xs sm:text-sm text-[#00a8ff] font-medium">
                  The 5 minute email that could save you 5 years.
                </p>
              </div>
            </div>

            {/* Email Input + Sky Blue Subscribe Button */}
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex-1 max-w-md flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-[#0a0f1d] border border-[#1e293b] rounded-full px-5 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#00a8ff] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#38bdf8] transition-colors shrink-0 cursor-pointer shadow-lg"
              >
                {newsletterStatus === 'subscribed' ? 'Subscribed!' : 'Subscribe for Free'}
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BOOK OVERVIEW & CHAPTER MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-[#0c101d] border border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl my-8"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-6 border-b border-[#1e293b] bg-[#060813]">
                <div className="flex items-center gap-3">
                  <span 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: selectedBook === 'book1' ? currentTheme.book1.accentHex : currentTheme.book2.accentHex }} 
                  />
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
                      {booksData[selectedBook].title}
                    </h3>
                    <p className="text-xs text-[#94a3b8] font-mono">
                      By {booksData[selectedBook].author} · {booksData[selectedBook].tag}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="w-9 h-9 rounded-full bg-[#1e293b]/60 hover:bg-[#1e293b] text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b border-[#1e293b] bg-[#080c16] px-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-[#00a8ff] text-[#00a8ff]'
                      : 'border-transparent text-[#94a3b8] hover:text-white'
                  }`}
                >
                  Book Overview
                </button>
                <button
                  onClick={() => setActiveTab('chapters')}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'chapters'
                      ? 'border-[#00a8ff] text-[#00a8ff]'
                      : 'border-transparent text-[#94a3b8] hover:text-white'
                  }`}
                >
                  Table of Contents (8 Chapters)
                </button>
                <button
                  onClick={() => setActiveTab('download')}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'download'
                      ? 'border-[#00a8ff] text-[#00a8ff]'
                      : 'border-transparent text-[#94a3b8] hover:text-white'
                  }`}
                >
                  Get Digital Copy
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#00a8ff] mb-2">
                        SYNOPSIS & CORE MISSION
                      </p>
                      <h4 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-4">
                        {booksData[selectedBook].subtitle}
                      </h4>
                      <p className="text-sm text-[#cbd5e1] font-sans leading-relaxed">
                        {booksData[selectedBook].description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1e293b]">
                      <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                        <p className="text-[10px] font-mono text-[#64748b] uppercase">FORMAT</p>
                        <p className="text-sm font-bold text-white mt-1">Hardcover & Digital</p>
                        <p className="text-xs text-[#94a3b8]">240 Pages · Tactical</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                        <p className="text-[10px] font-mono text-[#64748b] uppercase">AUDIENCE</p>
                        <p className="text-sm font-bold text-white mt-1">Developers & Students</p>
                        <p className="text-xs text-[#94a3b8]">Zero Fluff · Practical</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#060813] border border-[#1e293b]">
                        <p className="text-[10px] font-mono text-[#64748b] uppercase">PROVENANCE</p>
                        <p className="text-sm font-bold text-white mt-1">First Class Honours</p>
                        <p className="text-xs text-[#94a3b8]">University of Embu</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => handleDownload(selectedBook)}
                        className="px-6 py-3 rounded-full bg-[#00a8ff] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#38bdf8] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Free Blueprint (.MD)</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('chapters')}
                        className="px-6 py-3 rounded-full bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#334155] transition-colors cursor-pointer"
                      >
                        View Chapter List
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'chapters' && (
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00a8ff] mb-4">
                      COMPLETE CHAPTER BREAKDOWN
                    </p>
                    <div className="space-y-3">
                      {booksData[selectedBook].chapters.map((ch) => (
                        <div key={ch.num} className="p-4 rounded-xl bg-[#060813] border border-[#1e293b] hover:border-[#00a8ff]/40 transition-colors">
                          <div className="flex items-start gap-4">
                            <span className="font-mono text-sm font-black text-[#00a8ff] bg-[#00a8ff]/10 px-2.5 py-1 rounded">
                              {ch.num}
                            </span>
                            <div className="flex-1">
                              <h5 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-tight">
                                {ch.title}
                              </h5>
                              <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                                {ch.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'download' && (
                  <div className="space-y-6 text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#00a8ff]/10 border border-[#00a8ff]/40 text-[#00a8ff] flex items-center justify-center mx-auto">
                      <BookOpen className="w-8 h-8" />
                    </div>

                    <div className="max-w-md mx-auto">
                      <h4 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                        GET YOUR DIGITAL EDITION
                      </h4>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        Download the comprehensive markdown playbook containing code snippets, architectural diagrams, and direct frameworks.
                      </p>
                    </div>

                    <button
                      onClick={() => handleDownload(selectedBook)}
                      className="px-8 py-4 rounded-full bg-[#00a8ff] text-black font-display font-extrabold text-sm uppercase tracking-wider hover:bg-[#38bdf8] transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Blueprint File</span>
                    </button>

                    {downloadSuccess && (
                      <p className="text-xs font-mono text-[#00a8ff] flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>File downloaded successfully! Check your downloads folder.</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#1e293b] bg-[#060813] flex items-center justify-between text-xs text-[#64748b]">
                <span>Dave Waihenya Publications · 2026</span>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="text-white hover:text-[#00a8ff] font-bold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
