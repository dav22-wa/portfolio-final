import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { cn } from '../utils/cn';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <>
      <footer className="bg-[#0b0b0b] relative pt-20 pb-12 overflow-hidden">
        {/* Subtle top border separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          
          <div className="mb-8">
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              {/* Sleek 'W' Monogram */}
              <path 
                d="M5 6L13 28L18 16L23 28L31 6" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white hover:text-brand-gold transition-colors duration-300" 
              />
              <circle cx="18" cy="16" r="3" className="fill-brand-gold" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-sans font-medium text-[#888888] tracking-wider uppercase">
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="#projects" className="hover:text-brand-gold transition-colors">Projects</a>
            <a href="#background" className="hover:text-brand-gold transition-colors">Experience</a>
            <a href="#blog" className="hover:text-brand-gold transition-colors">Blog</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </div>

          <div className="flex justify-center flex-wrap gap-8 mb-10">
            <a href="https://github.com/dav22-wa" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-brand-gold transition-colors transform hover:scale-110">
              <Github className="w-6 h-6 stroke-[1.5]" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/david-waihenya" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-brand-gold transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6 stroke-[1.5]" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/waihenya_david" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-brand-gold transition-colors transform hover:scale-110">
              <Twitter className="w-6 h-6 stroke-[1.5]" />
              <span className="sr-only">Twitter / X</span>
            </a>
            <a href="https://www.facebook.com/david.waihenya.2025/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-brand-gold transition-colors transform hover:scale-110">
              <Facebook className="w-6 h-6 stroke-[1.5]" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10 text-[15px] font-sans text-white/50 hover:text-white/70 transition-colors">
            <a href="mailto:davidwaihenya254@gmail.com" className="hover:text-brand-gold transition-colors">davidwaihenya254@gmail.com</a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="tel:+254792477722" className="hover:text-brand-gold transition-colors">+254 792 477 722</a>
          </div>

          <p className="text-[13px] font-sans text-[#555555]">
            © {new Date().getFullYear()} David Waihenya. All rights reserved.
          </p>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-12 h-12 bg-transparent text-brand-gold border border-brand-gold/30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(229,185,39,0.3)] hover:bg-brand-gold/10 hover:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-[#0b0b0b]",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2]" />
      </button>
    </>
  );
}
