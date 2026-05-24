import { useState } from 'react';
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
    <section id="contact" className="py-[60px] lg:py-[100px] w-full bg-[#0d1117] text-white flex justify-center items-center">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <span className="section-label !text-brand-gold mb-6">STAY CONNECTED</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-6 uppercase tracking-tight">
            THE WEEKLY EMAIL THAT KEEPS YOU BUILDING.
          </h2>
          <p className="font-sans text-[#aaaaaa] text-lg sm:text-xl mb-12">
            Real insights on AI, tech careers, and building in Africa. No fluff. One email a week.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 border border-white/10 bg-[#111318] rounded"
            >
              <h3 className="font-display font-bold text-3xl uppercase tracking-widest text-white">You're in. I'll be in your inbox soon.</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center max-w-2xl mx-auto gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-[#111318] border border-white placeholder-white text-white font-sans text-lg px-6 py-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold sm:rounded-r-none"
              />
              <button type="submit" className="btn-primary rounded font-bold text-lg whitespace-nowrap px-8 sm:rounded-l-none uppercase tracking-widest">
                JOIN THE LIST
              </button>
            </form>
          )}

          {status !== 'success' && (
            <p className="text-[#aaaaaa] font-sans text-sm mt-6 uppercase tracking-widest">
              No spam. Unsubscribe any time.
            </p>
          )}

        </motion.div>
      </div>
    </section>
  );
}
