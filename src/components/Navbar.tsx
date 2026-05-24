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
    <div className="relative w-[36px] h-[36px] flex items-center justify-center overflow-visible">
      {/* Continuous Splash Ring behind the dot */}
      <div className="absolute top-[13px] left-[15px] w-[6px] h-[6px]">
        <span className="absolute inline-flex w-[6px] h-[6px] rounded-full bg-[#e5b927] animate-ping opacity-70" style={{ animationDuration: '2.5s' }}></span>
        <span className="absolute inline-flex w-[6px] h-[6px] rounded-full bg-[#e5b927] animate-ping opacity-40" style={{ animationDuration: '2.5s', animationDelay: '1.25s' }}></span>
      </div>
      
      <motion.svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
        animate={{
          y: [0, -4, 0],
          filter: [
            "drop-shadow(0px 0px 0px rgba(229,185,39,0))",
            "drop-shadow(0px 4px 8px rgba(229,185,39,0.3))",
            "drop-shadow(0px 0px 0px rgba(229,185,39,0))"
          ]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Sleek 'W' Monogram */}
        <motion.path 
          d="M5 6L13 28L18 16L23 28L31 6" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white group-hover:text-brand-gold transition-colors duration-300" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        />
        <motion.circle 
          cx="18" cy="16" r="3" 
          className="fill-brand-gold" 
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        />
      </motion.svg>
    </div>
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
        <a href="#" className="flex items-center group">
          <BrandLogo />
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
