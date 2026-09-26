import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Sparkles, Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-24 lg:py-32 w-full bg-[#060813] border-t border-[#1e293b] text-[#d4d4d4] flex justify-center items-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00a8ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-[#0e1424] border border-[#1e293b] p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl"
        >
          <span className="section-kicker">JOIN 2,400+ BUILDERS &amp; FOUNDERS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.96] mb-4 uppercase tracking-tight">
            THE WEEKLY <span className="text-[#00a8ff]">BUILDER'S DISPATCH</span>.
          </h2>
          <p className="font-sans text-[#94a3b8] text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Every week, I send actionable breakdowns on Python &amp; Flask architectures, applied AI models, lessons learned running Davamos Tech, and the reality of building tech companies from Kenya.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-4 border border-[#00a8ff] bg-[#131b2e] rounded-2xl flex items-center justify-center gap-3 text-white"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00a8ff]" />
              <span className="font-display font-bold text-lg uppercase tracking-wide">
                You're in! Welcome to the builder dispatch. Check your inbox for the first guide.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center max-w-lg mx-auto gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] placeholder-slate-500 text-white font-sans text-sm pl-11 pr-4 py-3.5 rounded-full outline-none transition-colors"
                />
              </div>
              <button 
                type="submit" 
                className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold tracking-wider hover:bg-white transition-all text-xs uppercase rounded-full cursor-pointer whitespace-nowrap shadow-[0_0_18px_rgba(0,168,255,0.35)]"
              >
                JOIN THE LIST
              </button>
            </form>
          )}

          <p className="text-[#94a3b8] font-sans text-xs mt-4">
            No spam, ever. Actionable technical lessons only. Unsubscribe with 1 click.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
