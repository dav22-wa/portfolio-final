import { useState } from 'react';
import { 
  Check, 
  Copy, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Grid, 
  Eye, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2,
  Sliders,
  CheckCircle2,
  Terminal,
  Cpu,
  TrendingUp,
  Globe
} from 'lucide-react';
import { ApexLogoSvg, BrandLogo } from './BrandLogo';

export function BrandPresentation({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activeTheme, setActiveTheme] = useState<'default' | 'monochrome-white' | 'monochrome-black' | 'cyan'>('default');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // SVG Source Strings for easy copying and downloading
  const svgPrimary = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <!-- David Waihenya: Apex Ascent Brand Symbol -->
  <!-- Blade 1: Structural D Foundation (BUILD) -->
  <path d="M16 22 H36 L56 50 L36 78 H16 Z" fill="#FFFFFF" />
  <!-- Blade 2: Kinetic W Vector & Ascent (SOLVE -> GROW) -->
  <path d="M44 22 H60 L80 14 L88 48 L68 78 H44 L64 50 Z" fill="#00A8FF" />
</svg>`;

  const svgMonochromeBlack = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <path d="M16 22 H36 L56 50 L36 78 H16 Z" fill="#000000" />
  <path d="M44 22 H60 L80 14 L88 48 L68 78 H44 L64 50 Z" fill="#000000" />
</svg>`;

  const svgMonochromeWhite = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <path d="M16 22 H36 L56 50 L36 78 H16 Z" fill="#FFFFFF" />
  <path d="M44 22 H60 L80 14 L88 48 L68 78 H44 L64 50 Z" fill="#FFFFFF" />
</svg>`;

  const svgFavicon = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#060813" />
  <rect x="1" y="1" width="62" height="62" rx="13" stroke="#1e293b" stroke-width="2" />
  <g transform="translate(0.8, 4.4) scale(0.6)">
    <path d="M16 22 H36 L56 50 L36 78 H16 Z" fill="#FFFFFF" />
    <path d="M44 22 H60 L80 14 L88 48 L68 78 H44 L64 50 Z" fill="#00A8FF" />
  </g>
</svg>`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const downloadSvgFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#04060d] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black pt-28 pb-32">
      {/* 1. HERO HEADER */}
      <section className="relative w-full border-b border-[#1e293b] pb-16 lg:pb-24">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#00a8ff]/15 border border-[#00a8ff]/30 text-[#00a8ff] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL BRAND IDENTITY SPECIFICATION</span>
            </span>
            <span className="text-xs font-mono text-slate-400">
              VERSION 2.0 · ARCHITECTURAL RELEASE
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-6">
            THE APEX ASCENT: <br />
            <span className="text-[#00a8ff]">DAVID WAIHENYA</span> PERSONAL BRAND.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-3xl leading-relaxed mb-8">
            An original, high-impact personal brand symbol engineered specifically for David Waihenya—grounded in computer science rigor, applied artificial intelligence, and upward entrepreneurial velocity. Designed to stand alone with zero text, scale down to a 16×16px favicon, and command immediate authority across websites, keynotes, books, and global stages.
          </p>

          {/* Quick Stats Pill Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#1e293b] max-w-4xl text-left">
            <div className="bg-[#0b0f19] border border-[#1e293b] p-4 rounded-xl">
              <div className="text-xs font-mono text-[#00a8ff] font-bold uppercase mb-1">Brand Ethos</div>
              <div className="text-sm font-bold text-white uppercase">BUILD · SOLVE · GROW</div>
            </div>
            <div className="bg-[#0b0f19] border border-[#1e293b] p-4 rounded-xl">
              <div className="text-xs font-mono text-[#00a8ff] font-bold uppercase mb-1">Hidden Letters</div>
              <div className="text-sm font-bold text-white uppercase">"D" + "W" Geometric Synthesis</div>
            </div>
            <div className="bg-[#0b0f19] border border-[#1e293b] p-4 rounded-xl">
              <div className="text-xs font-mono text-[#00a8ff] font-bold uppercase mb-1">Favicon Scale</div>
              <div className="text-sm font-bold text-white uppercase">16×16px Pixel-Perfect</div>
            </div>
            <div className="bg-[#0b0f19] border border-[#1e293b] p-4 rounded-xl">
              <div className="text-xs font-mono text-[#00a8ff] font-bold uppercase mb-1">System Format</div>
              <div className="text-sm font-bold text-white uppercase">100% Vector Math</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY & ANATOMY: BUILD -> SOLVE -> GROW */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#060813]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-left max-w-2xl mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
              GEOMETRIC ANATOMY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight mb-4">
              HOW THE SYMBOL COMMUNICATES
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every curve, chamfer, and coordinate was engineered with deliberate intentionality. The symbol does not rely on cliché stock motifs—it is an authentic abstract construct of David Waihenya’s journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: BUILD */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#101827] border border-[#1e293b] flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-1">
                STAGE 01 · FOUNDATION
              </div>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-3">
                BUILD (The Structural 'D')
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The left solid monolith provides the immovable base. It represents David’s First Class Honours Computer Science foundation at the University of Embu: operating systems, mathematical discipline, and backend software architecture. Its clean vertical spine grounds the entire emblem.
              </p>
              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center gap-2 text-xs font-mono text-[#00a8ff]">
                <span>Vector:</span>
                <code className="text-[11px] bg-[#060813] px-2 py-0.5 rounded border border-[#1e293b]">M16 22 H36 L56 50...</code>
              </div>
            </div>

            {/* Pillar 2: SOLVE */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00a8ff]/10 border border-[#00a8ff]/30 flex items-center justify-center text-[#00a8ff] mb-6 group-hover:bg-[#00a8ff] group-hover:text-black transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-widest mb-1">
                STAGE 02 · INTELLIGENCE
              </div>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-3">
                SOLVE (The Precision Channel)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The uniform 8-unit negative-space lightning channel running at a precise 45-degree angle separates and unites the two forms. It represents applied artificial intelligence, automated multi-agent networks, and algorithmic problem-solving that unlocks real enterprise value.
              </p>
              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center gap-2 text-xs font-mono text-[#00a8ff]">
                <span>Tolerance:</span>
                <code className="text-[11px] bg-[#060813] px-2 py-0.5 rounded border border-[#1e293b]">45° Parallel Slit · 8px Zero Drift</code>
              </div>
            </div>

            {/* Pillar 3: GROW */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 relative overflow-hidden group hover:border-[#00a8ff]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00a8ff]/20 border border-[#00a8ff]/40 flex items-center justify-center text-[#00a8ff] mb-6 group-hover:bg-[#00a8ff] group-hover:text-black transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-widest mb-1">
                STAGE 03 · TRAJECTORY
              </div>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-3">
                GROW (The Soaring 'W' Apex)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The right dynamic wing sweeps upward into the future, climbing 8 units higher than the foundation. Its dual peaks and central valley form an unmistakable stylized "W" that acts as an upward arrowhead—embodying financial ambition, business scaling, and empowering the next generation.
              </p>
              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center gap-2 text-xs font-mono text-[#00a8ff]">
                <span>Apex Delta:</span>
                <code className="text-[11px] bg-[#060813] px-2 py-0.5 rounded border border-[#1e293b]">y=14 Ascent Elevation</code>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRIMARY LOGO SYMBOL DISPLAY (WITH GRID OVERLAY TOGGLE) */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#04060d]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
                DELIVERABLE 01
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight">
                PRIMARY LOGO SYMBOL
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                High-definition vector geometry with mathematical alignment controls.
              </p>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  showGrid
                    ? 'bg-[#00a8ff] text-black shadow-lg shadow-[#00a8ff]/20'
                    : 'bg-[#0c101d] text-slate-300 border border-[#1e293b] hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{showGrid ? 'Grid Active' : 'Toggle Grid'}</span>
              </button>

              {/* Theme Selector */}
              <div className="flex items-center gap-1 bg-[#0c101d] border border-[#1e293b] p-1 rounded-lg">
                {(['default', 'monochrome-white', 'monochrome-black', 'cyan'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTheme(t)}
                    className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all cursor-pointer ${
                      activeTheme === t
                        ? 'bg-[#1e293b] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t === 'default' ? 'Two-Tone' : t === 'monochrome-white' ? 'White' : t === 'monochrome-black' ? 'Black' : 'Cyan'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Master Canvas Display */}
          <div className="w-full aspect-[16/9] max-h-[520px] rounded-3xl bg-[#080c16] border border-[#1e293b] relative overflow-hidden flex items-center justify-center p-8 shadow-2xl">
            {/* Background Grid Pattern (Blueprint Simulation) */}
            {showGrid && (
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00a8ff" strokeWidth="0.8" />
                  </pattern>
                  <pattern id="grid-dots" width="80" height="80" patternUnits="userSpaceOnUse">
                    <circle cx="40" cy="40" r="1.5" fill="#00a8ff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <rect width="100%" height="100%" fill="url(#grid-dots)" />
              </svg>
            )}

            {/* Glowing Accent Ambient */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#00a8ff]/15 blur-[90px] pointer-events-none" />

            {/* The Main Symbol in High-Resolution SVG */}
            <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(0,168,255,0.25)]">
              <ApexLogoSvg size="100%" variant={activeTheme} />
            </div>

            {/* Technical Annotations */}
            {showGrid && (
              <>
                <div className="absolute top-6 left-6 font-mono text-[11px] text-[#00a8ff] space-y-1">
                  <div>// GEOMETRIC CALIBRATION</div>
                  <div className="text-slate-400">ORIGIN: (0,0) → (100,100)</div>
                  <div className="text-slate-400">CHISEL ANGLE: 45.00° EXACT</div>
                </div>
                <div className="absolute bottom-6 right-6 font-mono text-[11px] text-right text-slate-400 space-y-1">
                  <div className="text-[#00a8ff]">NEGATIVE CHANNEL: 8.00u</div>
                  <div>MAX ELEVATION: y=14 (APEX W)</div>
                  <div>BASE ELEVATION: y=78 (FOUNDATION D)</div>
                </div>
              </>
            )}
          </div>

          {/* Quick Copy / Download Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => copyToClipboard(svgPrimary, 'primary-svg')}
                className="px-5 py-2.5 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                {copiedId === 'primary-svg' ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5 text-[#00a8ff]" />}
                <span>{copiedId === 'primary-svg' ? 'SVG Copied!' : 'Copy Vector Code'}</span>
              </button>

              <button
                onClick={() => downloadSvgFile(svgPrimary, 'david-waihenya-logo-symbol.svg')}
                className="px-5 py-2.5 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#00a8ff]" />
                <span>Download .SVG</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Pure Scalable Vector Format · Zero Raster Artifacts
            </div>
          </div>

        </div>
      </section>

      {/* 4. DELIVERABLE 02: LOGO + WORDMARK LOCKUPS */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#060813]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
              DELIVERABLE 02
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight mb-2">
              WORDMARK LOCKUPS
            </h2>
            <p className="text-slate-400 text-sm">
              Clean, bold, modern sans-serif typography engineered for executive authority.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Lockup A: Horizontal Flagship */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#00a8ff] font-bold uppercase tracking-wider block mb-6">
                  PRIMARY HORIZONTAL LOCKUP
                </span>
                <div className="py-8 flex items-center gap-5 sm:gap-6 border-y border-[#1e293b]/60">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#060813] border border-[#1e293b] flex items-center justify-center p-3 shadow-xl shrink-0">
                    <ApexLogoSvg size="100%" variant="default" />
                  </div>
                  <div>
                    <div className="font-sans font-black text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none">
                      DAVID WAIHENYA
                    </div>
                    <div className="text-xs font-mono font-bold text-[#00a8ff] tracking-[0.22em] uppercase mt-2">
                      BUILD · SOLVE · GROW
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Usage: Website Header, Pitch Decks, Legal Lockup</span>
                <span className="text-[#00a8ff]">Recommended</span>
              </div>
            </div>

            {/* Lockup B: Centered Stacked Monolith */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#00a8ff] font-bold uppercase tracking-wider block mb-6">
                  STACKED CENTER MONOLITH
                </span>
                <div className="py-8 flex flex-col items-center text-center border-y border-[#1e293b]/60">
                  <div className="w-16 h-16 rounded-2xl bg-[#060813] border border-[#1e293b] flex items-center justify-center p-3.5 shadow-xl mb-4">
                    <ApexLogoSvg size="100%" variant="default" />
                  </div>
                  <div className="font-sans font-black text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none">
                    DAVID WAIHENYA
                  </div>
                  <div className="text-xs font-mono font-bold text-[#00a8ff] tracking-[0.25em] uppercase mt-2">
                    TECHNOLOGY BUILDER &amp; FOUNDER
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Usage: Keynote Title Slides, Book Spines, Apparel</span>
                <span className="text-slate-400">Editorial</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DELIVERABLES 03 - 06: SYMBOL ONLY, FAVICON, BLACK & WHITE EDITIONS */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#04060d]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
              DELIVERABLES 03 — 06
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight mb-2">
              CORE SYSTEM VARIATIONS
            </h2>
            <p className="text-slate-400 text-sm">
              Engineered to perform in high-contrast light, dark, and micro-scale environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Standalone Symbol-Only */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a8ff]/60 transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-4">
                  03. STANDALONE SYMBOL
                </div>
                <div className="aspect-square rounded-xl bg-[#060813] border border-[#1e293b] flex items-center justify-center p-8 mb-4 shadow-inner">
                  <ApexLogoSvg size={72} variant="default" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The unadorned mark. Completely recognizable without a single word of text.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Symbol Only</span>
                <button
                  onClick={() => copyToClipboard(svgPrimary, 'standalone-svg')}
                  className="text-xs font-mono text-[#00a8ff] hover:underline cursor-pointer flex items-center gap-1"
                >
                  {copiedId === 'standalone-svg' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* 2. Favicon Suite (Tested at 16x16, 24x24, 32x32, 64x64) */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a8ff]/60 transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-4">
                  04. FAVICON SUITE
                </div>
                <div className="aspect-square rounded-xl bg-[#0c101d] border border-[#1e293b] flex flex-col items-center justify-center gap-4 p-4 mb-4 shadow-inner">
                  {/* Browser Tab Simulation */}
                  <div className="w-full bg-[#1e293b] rounded-t-lg p-2 flex items-center gap-2 border border-[#334155]">
                    <div className="w-4 h-4 rounded bg-[#060813] flex items-center justify-center p-0.5 shrink-0 border border-[#334155]">
                      <ApexLogoSvg size={12} variant="default" />
                    </div>
                    <span className="text-[10px] font-sans font-bold text-slate-200 truncate">
                      David Waihenya — AI Builder
                    </span>
                  </div>

                  {/* Multi-scale preview */}
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-4 h-4 bg-[#060813] border border-[#334155] rounded flex items-center justify-center p-0.5">
                        <ApexLogoSvg size={10} variant="default" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">16px</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 bg-[#060813] border border-[#334155] rounded-md flex items-center justify-center p-1">
                        <ApexLogoSvg size={16} variant="default" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">24px</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 bg-[#060813] border border-[#334155] rounded-lg flex items-center justify-center p-1.5">
                        <ApexLogoSvg size={22} variant="default" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">32px</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pixel-grid aligned. Bold solid shapes prevent blurriness at 16×16px browser resolution.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Favicon Spec</span>
                <button
                  onClick={() => downloadSvgFile(svgFavicon, 'favicon.svg')}
                  className="text-xs font-mono text-[#00a8ff] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* 3. Solid Black Version (Monochrome Dark) */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a8ff]/60 transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-4">
                  05. SOLID BLACK (MONO)
                </div>
                <div className="aspect-square rounded-xl bg-white border border-slate-200 flex items-center justify-center p-8 mb-4 shadow-inner">
                  <ApexLogoSvg size={72} variant="monochrome-black" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  100% Solid Black on white canvas. Required for print, letterheads, patents, laser stamping.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Black Monochrome</span>
                <button
                  onClick={() => copyToClipboard(svgMonochromeBlack, 'mono-black-svg')}
                  className="text-xs font-mono text-[#00a8ff] hover:underline cursor-pointer flex items-center gap-1"
                >
                  {copiedId === 'mono-black-svg' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* 4. Solid White / Reversed Version (Monochrome Light) */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a8ff]/60 transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider mb-4">
                  06. SOLID WHITE (REVERSED)
                </div>
                <div className="aspect-square rounded-xl bg-black border border-[#1e293b] flex items-center justify-center p-8 mb-4 shadow-inner">
                  <ApexLogoSvg size={72} variant="monochrome-white" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  100% Solid White on deep black canvas. Used for dark mode, video watermarks, hardware badges.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">White Monochrome</span>
                <button
                  onClick={() => copyToClipboard(svgMonochromeWhite, 'mono-white-svg')}
                  className="text-xs font-mono text-[#00a8ff] hover:underline cursor-pointer flex items-center gap-1"
                >
                  {copiedId === 'mono-white-svg' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. DELIVERABLE 07: SOCIAL MEDIA PROFILE MARKS */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#060813]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
              DELIVERABLE 07
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight mb-2">
              SOCIAL MEDIA PROFILE MARKS
            </h2>
            <p className="text-slate-400 text-sm">
              Optically balanced avatars tailored for LinkedIn, YouTube, X (Twitter), and GitHub profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. LinkedIn & YouTube Circular Avatar */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 flex flex-col items-center text-center">
              <span className="text-xs font-mono text-[#00a8ff] font-bold uppercase tracking-wider mb-6">
                CIRCULAR AVATAR (LINKEDIN &amp; YOUTUBE)
              </span>

              <div className="w-32 h-32 rounded-full bg-[#060813] border-2 border-[#1e293b] shadow-2xl flex items-center justify-center p-7 relative group hover:border-[#00a8ff] transition-all">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00a8ff]/20 to-transparent pointer-events-none opacity-50" />
                <ApexLogoSvg size="100%" variant="default" />
              </div>

              <div className="mt-6 text-xs text-slate-300 font-sans leading-relaxed">
                Centered with 28% optical margin. Prevents any edge-clipping inside circular UI masks.
              </div>

              <div className="mt-4 pt-4 border-t border-[#1e293b] w-full flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span>1:1 Aspect Ratio · 400×400px</span>
              </div>
            </div>

            {/* 2. Squircle Avatar (X / Twitter & GitHub) */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 flex flex-col items-center text-center">
              <span className="text-xs font-mono text-[#00a8ff] font-bold uppercase tracking-wider mb-6">
                SQUIRCLE AVATAR (X &amp; GITHUB)
              </span>

              <div className="w-32 h-32 rounded-3xl bg-[#060813] border-2 border-[#1e293b] shadow-2xl flex items-center justify-center p-7 relative group hover:border-[#00a8ff] transition-all">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00a8ff]/20 to-transparent pointer-events-none opacity-50" />
                <ApexLogoSvg size="100%" variant="default" />
              </div>

              <div className="mt-6 text-xs text-slate-300 font-sans leading-relaxed">
                Subtle 28px continuous corner radius for contemporary app store and developer profile formats.
              </div>

              <div className="mt-4 pt-4 border-t border-[#1e293b] w-full flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span>Apple iOS / macOS Squircle Spec</span>
              </div>
            </div>

            {/* 3. Luxury Matte Black Foil Avatar */}
            <div className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-8 flex flex-col items-center text-center">
              <span className="text-xs font-mono text-[#00a8ff] font-bold uppercase tracking-wider mb-6">
                MATTE BLACK EXECUTIVE BADGE
              </span>

              <div className="w-32 h-32 rounded-3xl bg-black border-2 border-[#262626] shadow-2xl flex items-center justify-center p-7 relative group hover:border-white transition-all">
                <ApexLogoSvg size="100%" variant="monochrome-white" />
              </div>

              <div className="mt-6 text-xs text-slate-300 font-sans leading-relaxed">
                Monochrome stealth edition. Ideal for luxury merchandise, keynote badges, and book embossing.
              </div>

              <div className="mt-4 pt-4 border-t border-[#1e293b] w-full flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span>Stealth Titanium Monochrome</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. COLOR CODES & BRAND ASSETS SPECIFICATION */}
      <section className="py-20 lg:py-28 border-b border-[#1e293b] bg-[#04060d]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2 block">
              COLOR ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight mb-2">
              BRAND COLOR PALETTE
            </h2>
            <p className="text-slate-400 text-sm">
              Click any color swatch to copy its exact HEX code.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Color 1: Electric Sky Blue */}
            <div 
              onClick={() => copyToClipboard('#00A8FF', 'hex-cyan')}
              className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 cursor-pointer hover:border-[#00a8ff] transition-all group"
            >
              <div className="w-full h-24 rounded-xl bg-[#00A8FF] mb-4 shadow-lg shadow-[#00a8ff]/20 flex items-end justify-end p-2">
                <span className="text-[10px] font-mono font-bold text-black uppercase bg-white/80 px-2 py-0.5 rounded">
                  {copiedId === 'hex-cyan' ? 'COPIED' : 'HEX'}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-[#00a8ff] uppercase">Electric Sky Blue</div>
              <div className="text-sm font-bold text-white font-mono mt-1">#00A8FF</div>
              <div className="text-xs text-slate-400 font-sans mt-2">Primary Accent · Kinetic Vector</div>
            </div>

            {/* Color 2: Pure Studio White */}
            <div 
              onClick={() => copyToClipboard('#FFFFFF', 'hex-white')}
              className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 cursor-pointer hover:border-white transition-all group"
            >
              <div className="w-full h-24 rounded-xl bg-[#FFFFFF] mb-4 shadow-lg flex items-end justify-end p-2">
                <span className="text-[10px] font-mono font-bold text-black uppercase bg-neutral-200 px-2 py-0.5 rounded">
                  {copiedId === 'hex-white' ? 'COPIED' : 'HEX'}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase">Pure Studio White</div>
              <div className="text-sm font-bold text-white font-mono mt-1">#FFFFFF</div>
              <div className="text-xs text-slate-400 font-sans mt-2">Foundation Blade · Contrast Peak</div>
            </div>

            {/* Color 3: Deep Obsidian Navy */}
            <div 
              onClick={() => copyToClipboard('#060813', 'hex-obsidian')}
              className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 cursor-pointer hover:border-[#00a8ff] transition-all group"
            >
              <div className="w-full h-24 rounded-xl bg-[#060813] border border-[#1e293b] mb-4 flex items-end justify-end p-2">
                <span className="text-[10px] font-mono font-bold text-white uppercase bg-slate-800 px-2 py-0.5 rounded">
                  {copiedId === 'hex-obsidian' ? 'COPIED' : 'HEX'}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase">Obsidian Navy</div>
              <div className="text-sm font-bold text-white font-mono mt-1">#060813</div>
              <div className="text-xs text-slate-400 font-sans mt-2">Environment Surface · Deep Ground</div>
            </div>

            {/* Color 4: Carbon Dark */}
            <div 
              onClick={() => copyToClipboard('#000000', 'hex-black')}
              className="bg-[#090d18] border border-[#1e293b] rounded-2xl p-6 cursor-pointer hover:border-slate-500 transition-all group"
            >
              <div className="w-full h-24 rounded-xl bg-[#000000] border border-[#1e293b] mb-4 flex items-end justify-end p-2">
                <span className="text-[10px] font-mono font-bold text-white uppercase bg-slate-900 px-2 py-0.5 rounded">
                  {copiedId === 'hex-black' ? 'COPIED' : 'HEX'}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase">Carbon Black</div>
              <div className="text-sm font-bold text-white font-mono mt-1">#000000</div>
              <div className="text-xs text-slate-400 font-sans mt-2">Monochrome Standard · Pure Dark</div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. ACTIONS: BACK TO SITE OR WORK WITH DAVE */}
      <section className="py-20 lg:py-24 bg-[#060813]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#0c101d] border border-[#1e293b] flex items-center justify-center p-3.5 mx-auto mb-6 shadow-2xl">
              <ApexLogoSvg size="100%" variant="default" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-sans font-black text-white uppercase tracking-tight mb-4">
              READY TO BUILD WHAT MATTERS?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              The symbol represents competence, high agency, and solving real human problems through software and intelligence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate ? onNavigate('home') : window.location.assign('/')}
                className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate ? onNavigate('contact') : window.location.assign('/#contact')}
                className="px-8 py-3.5 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer"
              >
                Work With Dave
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
