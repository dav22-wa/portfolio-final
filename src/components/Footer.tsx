import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      const el = document.getElementById(page);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail.trim()) {
      setSubscribed(true);
      setFooterEmail('');
    }
  };

  return (
    <>
      <footer className="bg-[#04060d] border-t border-[#1e293b] relative pt-20 pb-12 overflow-hidden text-[#d4d4d4]">
        
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1e293b]">
            
            {/* Column 1: Brand & Tagline (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] rounded cursor-pointer mb-5 block text-left"
                >
                  <BrandLogo size="md" />
                </button>

                <p className="text-sm font-sans text-[#94a3b8] leading-relaxed max-w-sm mb-6">
                  Software Developer, AI Builder &amp; Aspiring Entrepreneur. Building from the ground up toward owning multiple tech companies and teaching Africa's next generation of engineers.
                </p>

                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Q2/Q3 2026 contracts &amp; advisory</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-8">
                <a 
                  href="https://github.com/dav22-wa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/david-waihenya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/waihenya_david" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:davidwaihenya254@gmail.com" 
                  className="w-10 h-10 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Columns (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                <li>
                  <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('story')} className="hover:text-white transition-colors cursor-pointer">
                    My Story
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('who-i-help')} className="hover:text-white transition-colors cursor-pointer">
                    Who I Help
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors cursor-pointer">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('blog')} className="hover:text-white transition-colors cursor-pointer">
                    Blog &amp; Essays
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('book')} className="hover:text-white transition-colors cursor-pointer">
                    Books
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('speaking')} className="hover:text-white transition-colors cursor-pointer">
                    Speaking
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('testimonials')} className="hover:text-white transition-colors cursor-pointer">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Ventures & Platforms (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                VENTURES
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#94a3b8]">
                <li>
                  <a 
                    href="https://ai-solution-studio.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>AI Solution Studio</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://davamos.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Davamos Tech</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://davidwaihenya.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#00a8ff] text-[#00a8ff] font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>davidwaihenya.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/dav22-wa" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>GitHub Repositories</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Box (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                NEWSLETTER
              </h4>
              <p className="text-xs text-[#94a3b8] mb-4 leading-relaxed">
                Receive weekly notes on AI systems, Python/Flask backends, and freelancing lessons.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleFooterSubscribe} className="space-y-2">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    required
                    className="w-full bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Bottom Bar: Copyright & Location */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94a3b8] gap-4">
            <p>
              © {new Date().getFullYear()} Dave Waihenya. BSc. Computer Science (First Class Honours). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://davidwaihenya.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a8ff] transition-colors">
                davidwaihenya.vercel.app
              </a>
              <span>·</span>
              <span>Embu &amp; Naivasha, Kenya</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-[#0e1424] text-white border border-[#1e293b] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:border-[#00a8ff] hover:text-[#00a8ff] hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
