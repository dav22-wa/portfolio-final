import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

function BrandLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      {/* Custom 'DW' Monogram */}
      <path d="M8 4V28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M8 4H16C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28H8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 14L15 22L18 14L21 22L24 14" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map(l => l.href.substring(1)), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 w-full z-[100] transition-colors duration-300",
      isScrolled ? "bg-[#0b0b0b] border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 font-display font-bold text-2xl text-white tracking-tight group">
          <BrandLogo />
          <span className="group-hover:text-brand-gold transition-colors uppercase tracking-widest">David Waihenya</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.substring(1);
            return (
              <a 
                key={link.label} 
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all duration-200 relative py-2",
                  isActive ? "text-brand-gold" : "text-white hover:text-brand-gold"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className="px-6 py-3 bg-brand-gold text-black text-sm font-bold uppercase tracking-widest rounded hover:bg-yellow-600 transition-colors cursor-pointer">
            Work With Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-gold p-2 -mr-2"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#0b0b0b] flex flex-col pt-24 px-6 items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold p-2"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="flex flex-col space-y-8 items-center text-center w-full max-w-sm">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "text-3xl font-display font-bold uppercase tracking-widest transition-colors w-full pb-4 border-b border-white/10",
                      isActive ? "text-brand-gold" : "text-white hover:text-brand-gold"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a href="#contact" onClick={() => setIsMobileOpen(false)} className="mt-8 px-8 py-4 w-full bg-brand-gold text-black text-xl font-bold uppercase tracking-widest rounded hover:bg-yellow-600 transition-colors">
                Work With Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
