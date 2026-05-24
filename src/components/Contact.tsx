import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

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
            <div className="space-y-6 lg:space-y-8 mb-12">
              <div className="flex items-center text-left">
                <span className="text-xl lg:text-2xl mr-5">📍</span>
                <span className="font-sans text-white text-lg">Embu, Kenya</span>
              </div>
              <div className="flex items-center text-left">
                <span className="text-xl lg:text-2xl mr-5">📧</span>
                <a href="mailto:davidwaihenya254@gmail.com" className="font-sans text-white text-lg hover:text-brand-gold transition-colors">davidwaihenya254@gmail.com</a>
              </div>
              <div className="flex items-center text-left">
                <span className="text-xl lg:text-2xl mr-5">📞</span>
                <a href="tel:+254792477722" className="font-sans text-white text-lg hover:text-brand-gold transition-colors">+254 792 477 722</a>
              </div>
            </div>

            <div className="pt-8 border-t border-[#2a2d35] flex flex-wrap gap-8 items-center">
              <a href="#" className="font-bold tracking-widest uppercase text-sm text-white hover:text-brand-gold transition-colors flex items-center">
                <span className="mr-2 text-xl">🐙</span> GitHub
              </a>
              <a href="#" className="font-bold tracking-widest uppercase text-sm text-white hover:text-brand-gold transition-colors flex items-center">
                <span className="mr-2 text-xl">💼</span> LinkedIn
              </a>
              <a href="#" className="font-bold tracking-widest uppercase text-sm text-white hover:text-brand-gold transition-colors flex items-center">
                <span className="mr-2 text-xl">🐦</span> Twitter/X
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
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-[#111318] border border-white/5"
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#111318] mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-4">Message sent.</h3>
                  <p className="font-sans text-[#aaaaaa] text-lg">
                    I will get back to you within 48 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 font-bold text-brand-gold uppercase tracking-widest text-sm hover:underline"
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
                    <label htmlFor="name" className="block text-sm font-bold text-white uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border rounded px-4 py-4 text-white placeholder-[#555555] font-sans text-lg focus:outline-none transition-colors",
                        errors.name ? "border-red-500 focus:border-red-500" : "border-[#2a2d35] focus:border-brand-gold hover:border-[#444]"
                      )}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm font-bold mt-2">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border rounded px-4 py-4 text-white placeholder-[#555555] font-sans text-lg focus:outline-none transition-colors",
                        errors.email ? "border-red-500 focus:border-red-500" : "border-[#2a2d35] focus:border-brand-gold hover:border-[#444]"
                      )}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm font-bold mt-2">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-white uppercase tracking-wider mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border rounded px-4 py-4 text-white placeholder-[#555555] font-sans text-lg focus:outline-none transition-colors",
                        errors.subject ? "border-red-500 focus:border-red-500" : "border-[#2a2d35] focus:border-brand-gold hover:border-[#444]"
                      )}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <p className="text-red-500 text-sm font-bold mt-2">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={cn(
                        "w-full bg-[#111318] border rounded px-4 py-4 text-white placeholder-[#555555] font-sans text-lg focus:outline-none transition-colors resize-y",
                        errors.message ? "border-red-500 focus:border-red-500" : "border-[#2a2d35] focus:border-brand-gold hover:border-[#444]"
                      )}
                      placeholder="Hello David, I'd like to talk about..."
                    />
                    {errors.message && <p className="text-red-500 text-sm font-bold mt-2">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    className="w-full btn-primary py-4 text-lg tracking-widest uppercase font-bold"
                  >
                    Send Message
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
