import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    inquiryType: 'Custom AI & Systems Architecture',
    subject: '', 
    budgetKES: 'KES 150,000 - 500,000',
    message: '' 
  });
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
      setFormData({ 
        name: '', 
        email: '', 
        inquiryType: 'Custom AI & Systems Architecture',
        subject: '', 
        budgetKES: 'KES 150,000 - 500,000',
        message: '' 
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 w-full bg-[#060813] border-t border-[#1e293b] text-[#d4d4d4]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <span className="section-kicker">WORK WITH DAVE WAIHENYA</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-[0.96] mb-4 uppercase tracking-tight">
            LET'S BUILD SOMETHING <span className="text-[#00a8ff]">REAL</span>.
          </h2>
          <p className="font-sans text-[#94a3b8] text-base sm:text-lg">
            Available for custom AI architecture, web platforms with Davamos Tech, operational systems for Kenyan businesses, and technical keynotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Subject Photo Container */}
            <div className="relative border border-[#1e293b] rounded-2xl overflow-hidden w-full max-w-[380px] aspect-[4/5] bg-[#0e1424] mb-8 shadow-xl group">
              <img 
                src="/assets/contact.jpeg" 
                alt="Dave Waihenya Contact" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'none' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "/assets/hero.jpeg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060813] via-[#060813]/85 to-transparent p-5">
                <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">DIRECT INQUIRIES</p>
                <p className="text-lg font-display font-extrabold text-white uppercase mt-0.5">Dave Waihenya</p>
                <p className="text-xs text-[#94a3b8]">Embu &amp; Naivasha, Kenya · Available Globally</p>
              </div>
            </div>

            {/* Direct Information Blocks */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                <div className="w-10 h-10 rounded-lg bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">LOCATION</p>
                  <p className="text-sm font-bold text-white">University of Embu &amp; Naivasha, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                <div className="w-10 h-10 rounded-lg bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">EMAIL</p>
                  <a href="mailto:davidwaihenya254@gmail.com" className="text-sm font-bold text-white hover:text-[#00a8ff] transition-colors">
                    davidwaihenya254@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                <div className="w-10 h-10 rounded-lg bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">PHONE / WHATSAPP</p>
                  <a href="tel:+254792477722" className="text-sm font-bold text-white hover:text-[#00a8ff] transition-colors">
                    +254 792 477 722
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1e293b]">
              <a href="https://github.com/dav22-wa" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-400 hover:text-[#00a8ff] hover:border-[#00a8ff] transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/david-waihenya" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-400 hover:text-[#00a8ff] hover:border-[#00a8ff] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/waihenya_david" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#0e1424] border border-[#1e293b] text-slate-400 hover:text-[#00a8ff] hover:border-[#00a8ff] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Strategic Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#0e1424] border border-[#1e293b] rounded-3xl p-8 sm:p-10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00a8ff]/10 border border-[#00a8ff] flex items-center justify-center text-[#00a8ff] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-2">
                    Inquiry Sent Successfully
                  </h3>
                  <p className="font-sans text-[#94a3b8] text-sm max-w-md mx-auto">
                    Your message has reached Dave Waihenya directly. You will receive a response within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-8 py-3 bg-[#00a8ff] text-black font-extrabold uppercase tracking-wider text-xs rounded-full hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                        placeholder="e.g. Alex Mwangi"
                      />
                      {errors.name && <p className="text-red-400 text-xs font-bold mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                        placeholder="alex@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs font-bold mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">What Do You Need?</label>
                      <select 
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors cursor-pointer"
                      >
                        <option value="Custom AI & Systems Architecture">Custom AI &amp; Systems Architecture</option>
                        <option value="Davamos Tech Web & Software Development">Davamos Tech Web / Software Development</option>
                        <option value="Operational Systems (Inventory & Attendance)">Operational Systems (Inventory / Attendance)</option>
                        <option value="Developer Mentorship & Guidance">Developer Mentorship &amp; Guidance</option>
                        <option value="Keynote Speaking & Workshops">Keynote Speaking &amp; Workshops</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budgetKES" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Estimated Budget (KES)</label>
                      <select 
                        id="budgetKES"
                        value={formData.budgetKES}
                        onChange={(e) => setFormData({...formData, budgetKES: e.target.value})}
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors cursor-pointer"
                      >
                        <option value="KES 50,000 - 150,000">KES 50,000 - 150,000 (Small Project)</option>
                        <option value="KES 150,000 - 500,000">KES 150,000 - 500,000 (Standard MVP / Web)</option>
                        <option value="KES 500,000 - 1,500,000">KES 500,000 - 1,500,000 (Enterprise AI)</option>
                        <option value="Flexible / Retainer">Flexible / Monthly Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Project Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      placeholder="e.g. Building a custom customer portal with M-Pesa"
                    />
                    {errors.subject && <p className="text-red-400 text-xs font-bold mt-1.5">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Project Scope / Details</label>
                    <textarea 
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                      placeholder="Tell Dave about your goals, current roadblocks, timeline, and desired outcomes..."
                    />
                    {errors.message && <p className="text-red-400 text-xs font-bold mt-1.5">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#00a8ff] text-black font-extrabold tracking-wider hover:bg-white transition-all text-xs uppercase rounded-full cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,168,255,0.35)]"
                  >
                    <span>Transmit Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
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
