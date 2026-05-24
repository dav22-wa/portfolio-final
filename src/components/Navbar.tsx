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
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sleek 'W' Monogram */}
      <path 
        d="M5 6L13 28L18 16L23 28L31 6" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white group-hover:text-[#e5b927] transition-colors duration-300" 
      />
      <circle cx="18" cy="16" r="3" className="fill-[#e5b927]" />
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
