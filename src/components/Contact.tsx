import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const validate = () => {
    let tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-[60px] lg:py-[100px] w-full bg-[#0b0b0b]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <span className="section-label !text-brand-gold mb-4">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-6 uppercase tracking-tight">
            LET'S BUILD SOMETHING TOGETHER.
          </h2>
          <p className="font-sans text-[#aaaaaa] text-lg sm:text-xl max-w-3xl mx-auto">
            Open to freelance projects, collaborations, and entry-level opportunities in AI, web development, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="relative border-4 border-black shadow-[12px_12px_0_0_rgba(229,185,39,1)] rounded-sm overflow-hidden w-full max-w-[320px] aspect-[4/5] bg-brand-surface mb-12 group">
              <img 
                src="/assets/contact.jpeg" 
                alt="David Waihenya Contact" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>

            <div className="space-y-6 lg:space-y-8 mb-12">
              <div className="flex items-center text-left">
                <span className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm mr-5 text-xl">📍</span>
                <span className="font-sans text-white text-md">Embu, Kenya</span>
              </div>
              <div className="flex items-center text-left">
                <span className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm mr-5 text-xl">📧</span>
                <a href="mailto:davidwaihenya254@gmail.com" className="font-sans text-white text-md hover:text-[#e5b927] transition-colors">davidwaihenya254@gmail.com</a>
              </div>
              <div className="flex items-center text-left">
                <span className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm mr-5 text-xl">📞</span>
                <a href="tel:+254792477722" className="font-sans text-white text-md hover:text-[#e5b927] transition-colors">+254 792 477 722</a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
              <a href="https://github.com/dav22-wa" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-xs text-stone-400 hover:text-[#e5b927] transition-colors flex items-center">
                <Github className="mr-2 w-4 h-4 stroke-[1.5]" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/david-waihenya" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-xs text-stone-400 hover:text-[#e5b927] transition-colors flex items-center">
                <Linkedin className="mr-2 w-4 h-4 stroke-[1.5]" /> LinkedIn
              </a>
              <a href="https://x.com/waihenya_david" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-xs text-stone-400 hover:text-[#e5b927] transition-colors flex items-center">
                <Twitter className="mr-2 w-4 h-4 stroke-[1.5]" /> Twitter
              </a>
              <a href="https://www.facebook.com/david.waihenya.2025/" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-xs text-stone-400 hover:text-[#e5b927] transition-colors flex items-center">
                <Facebook className="mr-2 w-4 h-4 stroke-[1.5]" /> Facebook
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-[#111318] border-2 border-[#e5b927] shadow-[10px_10px_0_0_rgba(229,185,39,0.15)] rounded-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-[#e5b927] flex items-center justify-center text-black mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-[#e5b927] mb-2">Message Broadcast Saved!</h3>
                  <p className="font-sans text-[#aaaaaa] text-sm">
                    Strategic contact request recorded. Expect response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 font-bold text-white uppercase tracking-widest text-xs hover:text-[#e5b927] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-extrabold text-white uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border-2 rounded-sm px-4 py-3 text-white placeholder-stone-600 font-sans text-sm focus:outline-none transition-colors",
                        errors.name ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#e5b927] hover:border-white/10"
                      )}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold mt-2 font-mono uppercase">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-extrabold text-white uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border-2 rounded-sm px-4 py-3 text-white placeholder-stone-600 font-sans text-sm focus:outline-none transition-colors",
                        errors.email ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#e5b927] hover:border-white/10"
                      )}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold mt-2 font-mono uppercase">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-extrabold text-white uppercase tracking-widest mb-2">Subject / Enterprise Intent</label>
                    <input 
                      type="text" 
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border-2 rounded-sm px-4 py-3 text-white placeholder-stone-600 font-sans text-sm focus:outline-none transition-colors",
                        errors.subject ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#e5b927] hover:border-white/10"
                      )}
                      placeholder="AI Blueprint Optimization"
                    />
                    {errors.subject && <p className="text-red-500 text-xs font-bold mt-2 font-mono uppercase">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-extrabold text-white uppercase tracking-widest mb-2">Message Proposal</label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border-2 rounded-sm px-4 py-3 text-white placeholder-stone-600 font-sans text-sm focus:outline-none transition-colors resize-none",
                        errors.message ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#e5b927] hover:border-white/10"
                      )}
                      placeholder="Tell David how you desire to scale or automate..."
                    />
                    {errors.message && <p className="text-red-500 text-xs font-bold mt-2 font-mono uppercase">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#e5b927] text-black font-extrabold border-2 border-black tracking-widest hover:bg-white hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-xs uppercase transition-all rounded-sm shadow-[4px_4px_0_0_rgba(255,255,255,0.7)] cursor-pointer"
                  >
                    SEND STRATEGIC INQUIRY
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
