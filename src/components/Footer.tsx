import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
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
      <footer className="bg-[#080808] relative pt-16 pb-12 border-t-[2px] border-brand-gold">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          
          <div className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight mb-8">
            David Waihenya
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-bold text-white tracking-widest uppercase">
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="#projects" className="hover:text-brand-gold transition-colors">Projects</a>
            <a href="#background" className="hover:text-brand-gold transition-colors">Experience</a>
            <a href="#blog" className="hover:text-brand-gold transition-colors">Blog</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10 text-[16px] font-sans text-white hover:text-white transition-colors">
            <a href="mailto:davidwaihenya254@gmail.com" className="hover:text-brand-gold transition-colors">davidwaihenya254@gmail.com</a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a href="tel:+254792477722" className="hover:text-brand-gold transition-colors">+254 792 477 722</a>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Embu, Kenya</span>
          </div>

          <p className="text-[13px] font-sans text-[#555555]">
            © 2025 David Waihenya. Built from zero.
          </p>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-gold text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}
