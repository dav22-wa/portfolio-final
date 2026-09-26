import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Cpu, Globe, Mic, Layers, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isWhatIDoOpen, setIsWhatIDoOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileWhatIDoOpen, setIsMobileWhatIDoOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (whatIDoRef.current && !whatIDoRef.current.contains(e.target as Node)) {
        setIsWhatIDoOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    setIsWhatIDoOpen(false);
    setIsAboutOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
    setIsWhatIDoOpen(false);
    setIsAboutOpen(false);
  };

  const aboutSubHeaders = [
    {
      title: 'My Story',
      id: 'story'
    },
    {
      title: 'Speaking',
      id: 'speaking'
    },
    {
      title: 'Testimonials',
      id: 'testimonials'
    },
    {
      title: 'Brand Identity',
      id: 'brand'
    }
  ];

  const whatIDoItems = [
    {
      title: 'AI Solution Studio',
      description: 'Agentic workflows, RAG & enterprise AI systems',
      icon: Cpu,
      href: 'https://ai-solution-studio.vercel.app/',
      isExternal: true,
      badge: 'Flagship'
    },
    {
      title: 'Davamos Tech',
      description: 'Bespoke high-performance software engineering',
      icon: Globe,
      href: 'https://davamos.vercel.app/',
      isExternal: true,
      badge: 'Agency'
    },
    {
      title: 'SYNERGY & Velox AI',
      description: 'Multi-agent intelligence & audio safety platform',
      icon: Sparkles,
      action: () => scrollToSection('featured-project'),
      badge: 'Flagship System'
    },
    {
      title: 'Overview & Services',
      description: 'Full capabilities, architecture & advisory',
      icon: Layers,
      action: () => scrollToSection('who-i-help'),
      badge: 'Services'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300">
      
      {/* 1. TOP ANNOUNCEMENT BANNER BAR */}
      <div className="w-full bg-[#04060d] border-b border-[#1e293b]/70 py-2 px-4 text-center text-[11px] sm:text-xs font-sans flex items-center justify-center transition-colors">
        <button
          onClick={() => handleNavClick('book')}
          className="flex items-center gap-2.5 font-bold tracking-wider text-slate-200 hover:text-white uppercase transition-colors cursor-pointer text-[10px] sm:text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#00a8ff] animate-pulse" />
          <span>FROM FIRST CLASS TO FIRST MILLION</span>
          <span className="text-[#00a8ff] text-xs">·</span>
          <span>A KENYAN GRADUATE’S ROADMAP</span>
          <span className="text-[#00a8ff] text-xs">·</span>
          <span className="text-[#00a8ff] underline underline-offset-2">READ THE BLUEPRINT →</span>
        </button>
      </div>

      {/* 2. STICKY MAIN NAVBAR */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060813]/95 backdrop-blur-md border-b border-[#1e293b] py-3.5 shadow-2xl' 
          : 'bg-[#060813]/80 backdrop-blur-sm border-b border-[#1e293b]/50 py-4'
      }`}>
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark (Single Text Element Wordmark) */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] rounded cursor-pointer"
            aria-label="Dave Waihenya Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Clean text links: What I Do / Projects / Blog / About / Contact) */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            
            {/* What I Do Dropdown */}
            <div 
              ref={whatIDoRef}
              className="relative"
              onMouseEnter={() => setIsWhatIDoOpen(true)}
              onMouseLeave={() => setIsWhatIDoOpen(false)}
            >
              <button
                onClick={() => setIsWhatIDoOpen(!isWhatIDoOpen)}
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                  isWhatIDoOpen ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-white'
                }`}
                aria-expanded={isWhatIDoOpen}
              >
                <span>What I Do</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isWhatIDoOpen ? 'rotate-180 text-[#00a8ff]' : ''}`} />
              </button>

              <AnimatePresence>
                {isWhatIDoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-1 w-84 bg-[#0e1424] border border-[#1e293b] rounded-xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-[#1e293b] mb-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#00a8ff]">Ventures &amp; Offerings</p>
                    </div>
                    <div className="space-y-1">
                      {whatIDoItems.map((item) => {
                        const Icon = item.icon;
                        if (item.isExternal) {
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#131b2e] text-left transition-colors group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] group-hover:border-[#00a8ff] transition-colors shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white group-hover:text-[#00a8ff] transition-colors">{item.title}</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-[11px] text-[#94a3b8] leading-snug truncate mt-0.5">{item.description}</p>
                              </div>
                            </a>
                          );
                        }
                        return (
                          <button
                            key={item.title}
                            onClick={() => {
                              if (item.action) item.action();
                              setIsWhatIDoOpen(false);
                            }}
                            className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-[#131b2e] text-left transition-colors group cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] group-hover:border-[#00a8ff] transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white group-hover:text-[#00a8ff] transition-colors">{item.title}</span>
                                <span className="text-[9px] font-sans text-[#00a8ff] bg-[#00a8ff]/10 px-2 py-0.5 rounded font-bold">{item.badge}</span>
                              </div>
                              <p className="text-[11px] text-[#94a3b8] leading-snug truncate mt-0.5">{item.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Events */}
            <button
              onClick={() => handleNavClick('speaking')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                currentPage === 'speaking' ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-[#00a8ff]'
              }`}
            >
              Events
            </button>

            {/* Books */}
            <button
              onClick={() => handleNavClick('book')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                currentPage === 'book' ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-[#00a8ff]'
              }`}
            >
              Books
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                currentPage === 'careers' ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-[#00a8ff]'
              }`}
            >
              Careers
            </button>

            {/* About Dropdown */}
            <div 
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                  isAboutOpen || ['story', 'speaking', 'testimonials'].includes(currentPage)
                    ? 'text-[#00a8ff]'
                    : 'text-[#d4d4d4] hover:text-white'
                }`}
                aria-expanded={isAboutOpen}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAboutOpen ? 'rotate-180 text-[#00a8ff]' : ''}`} />
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-[#060813] border border-[#1e293b] rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="space-y-1">
                      {aboutSubHeaders.map((subItem) => {
                        const isActive = currentPage === subItem.id;
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.id)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                              isActive
                                ? 'bg-[#0c2438] text-[#38bdf8] font-bold shadow-sm'
                                : 'text-white hover:bg-[#131b2e] hover:text-[#38bdf8]'
                            }`}
                          >
                            <span>{subItem.title}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                currentPage === 'contact' ? 'text-[#00a8ff] border-b-2 border-[#00a8ff]' : 'text-[#d4d4d4] hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary CTA Button (Work With Me) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] transition-all cursor-pointer shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 bg-[#00a8ff] text-black font-extrabold text-[11px] uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer whitespace-nowrap"
            >
              Work With Me
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-white hover:text-[#00a8ff] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#060813] border-b border-[#1e293b] px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              
              {/* Accordion for What I Do */}
              <div>
                <button
                  onClick={() => setIsMobileWhatIDoOpen(!isMobileWhatIDoOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white py-2 cursor-pointer"
                >
                  <span>What I Do</span>
                  <ChevronDown className={`w-4 h-4 text-[#00a8ff] transition-transform ${isMobileWhatIDoOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileWhatIDoOpen && (
                  <div className="pl-4 mt-2 space-y-2.5 border-l-2 border-[#1e293b]">
                    {whatIDoItems.map(item => (
                      <div key={item.title}>
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between text-xs text-[#94a3b8] hover:text-[#00a8ff] py-1"
                          >
                            <span>{item.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <button
                            onClick={() => {
                              if (item.action) item.action();
                              setIsMobileOpen(false);
                            }}
                            className="text-xs text-[#94a3b8] hover:text-[#00a8ff] py-1 text-left w-full cursor-pointer"
                          >
                            {item.title}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-sm font-bold uppercase tracking-wider text-[#d4d4d4] hover:text-[#00a8ff] py-2 cursor-pointer"
              >
                Projects
              </button>

              <button
                onClick={() => handleNavClick('book')}
                className={`text-left text-sm font-bold uppercase tracking-wider py-2 cursor-pointer ${
                  currentPage === 'book' ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-[#00a8ff]'
                }`}
              >
                Books
              </button>

              <button
                onClick={() => handleNavClick('careers')}
                className={`text-left text-sm font-bold uppercase tracking-wider py-2 cursor-pointer ${
                  currentPage === 'careers' ? 'text-[#00a8ff]' : 'text-[#d4d4d4] hover:text-[#00a8ff]'
                }`}
              >
                Careers
              </button>

              <button
                onClick={() => scrollToSection('blog')}
                className="text-left text-sm font-bold uppercase tracking-wider text-[#d4d4d4] hover:text-[#00a8ff] py-2 cursor-pointer"
              >
                Blog
              </button>

              {/* Accordion for About (My Story, Speaking, Testimonials) */}
              <div>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white py-2 cursor-pointer"
                >
                  <span className={['story', 'speaking', 'testimonials'].includes(currentPage) ? 'text-[#00a8ff]' : ''}>
                    About
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#00a8ff] transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileAboutOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#1e293b]">
                    {aboutSubHeaders.map(subItem => (
                      <button
                        key={subItem.id}
                        onClick={() => handleNavClick(subItem.id)}
                        className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                          currentPage === subItem.id
                            ? 'text-[#38bdf8] bg-[#0c2438] font-bold'
                            : 'text-[#94a3b8] hover:text-white'
                        }`}
                      >
                        <span>{subItem.title}</span>
                        {currentPage === subItem.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="text-left text-sm font-bold uppercase tracking-wider text-[#d4d4d4] hover:text-[#00a8ff] py-2 cursor-pointer"
              >
                Contact
              </button>

              <div className="pt-4 border-t border-[#1e293b]">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all text-center"
                >
                  Work With Me
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
