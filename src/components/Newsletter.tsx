import React, { useState } from 'react';
import { motion } from 'motion/react';

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
    <section id="newsletter" className="py-[100px] lg:py-[140px] w-full bg-[#0d1117] text-white flex justify-center items-center border-t border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto border-4 border-black bg-[#111318] p-8 sm:p-12 lg:p-16 rounded-sm shadow-[12px_12px_0_0_rgba(229,185,39,0.15)]"
        >
          <span className="section-label !text-[#e5b927] mb-6">THE INBOX DEBRIEF</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-6 uppercase tracking-tight">
            THE WEEKLY BRIEF THAT KEEPS YOU BUILDING.
          </h2>
          <p className="font-sans text-[#aaaaaa] text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Practical breakdowns of production AI blueprints, scale strategies, and behind-the-scenes engineering. Delivered directly to your inbox every single Sunday.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 border-2 border-[#e5b927] bg-[#111318] rounded"
            >
              <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-[#e5b927]">YOU ARE IN! WELCOME TO THE BLUEPRINT HUB.</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center max-w-xl mx-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your private email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-[#09090b] border-2 border-white/10 placeholder-stone-500 text-white font-sans text-sm sm:text-md px-6 py-4 rounded-sm focus:outline-none focus:border-[#e5b927] sm:rounded-r-none transition-colors"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-[#e5b927] text-black font-extrabold border-2 border-black tracking-widest hover:bg-white hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm uppercase transition-all whitespace-nowrap rounded-sm sm:rounded-l-none cursor-pointer"
              >
                JOIN THE LIST
              </button>
            </form>
          )}

          {status !== 'success' && (
            <p className="text-stone-500 font-sans text-[10px] mt-6 uppercase tracking-widest font-extrabold">
              Strict privacy. Unsubscribe easily with a single click.
            </p>
          )}

        </motion.div>
      </div>
    </section>
  );
}
