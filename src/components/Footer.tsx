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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[#1e293b]">
            
            {/* Column 1: Explore (3 cols) */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                Explore
              </h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                <li>
                  <button onClick={() => handleLinkClick('blog')} className="hover:text-white transition-colors cursor-pointer">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('book')} className="hover:text-white transition-colors cursor-pointer">
                    Books
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('speaking')} className="hover:text-white transition-colors cursor-pointer">
                    Events
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Ventures & Labs (3 cols) */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                Ventures &amp; Labs
              </h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                <li>
                  <button onClick={() => handleLinkClick('what-i-do')} className="hover:text-white transition-colors cursor-pointer">
                    AI Solution Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('what-i-do')} className="hover:text-white transition-colors cursor-pointer">
                    Davamos Tech
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('what-i-do')} className="hover:text-white transition-colors cursor-pointer">
                    Mozilla Agtech Lab
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('foundation')} className="hover:text-white transition-colors cursor-pointer text-[#00a8ff]">
                    Waihenya Foundation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Company (3 cols) */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                <li>
                  <button onClick={() => handleLinkClick('story')} className="hover:text-white transition-colors cursor-pointer">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('what-i-do')} className="hover:text-white transition-colors cursor-pointer">
                    Ventures
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('careers')} className="hover:text-white transition-colors cursor-pointer">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('testimonials')} className="hover:text-white transition-colors cursor-pointer">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('brand')} className="hover:text-[#00a8ff] transition-colors cursor-pointer">
                    Brand Identity Spec
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Icons (3 cols) */}
            <div className="col-span-1 lg:col-span-3 flex flex-col justify-start">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a 
                  href="https://x.com/waihenya_david" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://github.com/dav22-wa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/david-waihenya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="mailto:davidwaihenya254@gmail.com" 
                  className="w-8 h-8 rounded-full bg-[#0e1424] border border-[#1e293b] text-slate-300 hover:text-[#00a8ff] hover:border-[#00a8ff] flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-slate-400 font-sans">
                Join the movement of African developers building real systems.
              </p>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Terms */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94a3b8] gap-4">
            <p>
              © {new Date().getFullYear()} David Waihenya · AI Developer &amp; Systems Builder. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <span>·</span>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">
                Terms &amp; Conditions
              </button>
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
