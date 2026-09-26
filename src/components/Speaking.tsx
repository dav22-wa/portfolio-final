import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MapPin, Calendar, Users, DollarSign, CheckCircle2, ArrowRight, X, Sparkles, Globe, Plane, Award, Send } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface SpeakingProps {
  onNavigate?: (page: string) => void;
}

export function Speaking({ onNavigate }: SpeakingProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventDate: '',
    format: 'In-Person Keynote',
    audienceSize: '100 - 500 attendees',
    location: 'Nairobi, Kenya',
    budget: 'Standard Domestic Tier',
    topic: 'Real Stories. Real Tactics: Building Applied AI from Kenya',
    notes: ''
  });

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('success');
  };

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] pt-24 min-h-screen">
      
      {/* 1. HERO SECTION: FULL-BLEED KEYNOTE STAGE ATMOSPHERE (Matching screenshot exactly) */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden border-b border-[#1e293b]">
        
        {/* Background Keynote Stage Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0 bg-[#060813]">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000"
            alt="Dave Waihenya Keynote Stage"
            className="w-full h-full object-cover object-[center_35%] opacity-45 mix-blend-screen scale-105 transition-transform duration-1000"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = "/assets/about.jpeg";
              target.className = "w-full h-full object-cover opacity-30";
            }}
          />
          {/* Directional Vignettes & Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060813] via-[#060813]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-[#060813]/70" />
        </div>

        {/* Hero Content (Positioned on the Left exactly as in screenshot) */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10 w-full py-20 lg:py-28">
          <div className="max-w-2xl text-left">
            
            {/* Cyan Kicker */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00a8ff] mb-3">
              KEYNOTES &amp; TECHNICAL WORKSHOPS
            </p>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.04] mb-5">
              FROM ZERO CODE <br />
              <span className="text-[#00a8ff]">TO FIRST CLASS IMPACT.</span>
            </h1>

            {/* Subtitle description */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#d4d4d4] leading-relaxed mb-5 max-w-xl">
              Students, developers, and tech organizations don't need generic motivational fluff. They need the unvarnished playbook: how deliberate practice beats talent, how to build AI models that solve real African problems, and how to create software people pay for.
            </p>

            {/* Keynote philosophy callout */}
            <p className="font-sans text-base sm:text-lg text-white font-bold leading-relaxed mb-8">
              "Technology is not just something to consume—it is something to build."
            </p>

            {/* Pill CTA button (White background, black text, rounded-full) */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-9 py-4 bg-white text-black font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00a8ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,168,255,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 shadow-2xl"
            >
              Book Dave to Speak
            </button>

          </div>
        </div>

      </section>


      {/* 2. SECTION: "SPEAKING FEE MAP" (Matching screenshot layout) */}
      <section id="fee-map" className="w-full bg-[#060813] py-20 lg:py-28 relative">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          {/* Centered Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight">
              SPEAKING FEE MAP
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-sans mt-3">
              Concentric regional fee zones originating from Embu &amp; Nairobi, Kenya.
            </p>
          </div>

          {/* Graphic Speaking Fee Map Container */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[#1e293b] bg-[#0c101d] shadow-2xl p-4 sm:p-8">
            
            {/* Concentric Vector Fee Graphic */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#060813] rounded-2xl overflow-hidden flex items-center justify-center border border-[#1e293b]/70">
              
              {/* Dotted Grid Background representing World Map Projection */}
              <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#38bdf8" fillOpacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
              </svg>

              {/* Dotted World Continents Silhouette in background */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 65%, rgba(0, 168, 255, 0.25), transparent 70%)`
                }}
              />

              {/* Concentric Sky-Blue / Cyan Wave Arcs originating from Kenya (Center-Bottom) */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 1000 600" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Concentric gradients for cyan wave bands */}
                  <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="arcGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="arcGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="arcGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="arcGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#075985" stopOpacity="0.25" />
                  </linearGradient>
                </defs>

                {/* Outer Arc 5: Global / North America / Worldwide */}
                <ellipse cx="500" cy="520" rx="460" ry="340" fill="url(#arcGrad5)" opacity="0.35" />

                {/* Arc 4: Europe / UK / Middle East */}
                <ellipse cx="500" cy="520" rx="380" ry="280" fill="url(#arcGrad4)" opacity="0.45" />

                {/* Arc 3: Pan-Africa (Nigeria, South Africa, Ghana, Egypt) */}
                <ellipse cx="500" cy="520" rx="300" ry="220" fill="url(#arcGrad3)" opacity="0.55" />

                {/* Arc 2: East Africa Regional (Uganda, Rwanda, Tanzania) */}
                <ellipse cx="500" cy="520" rx="220" ry="160" fill="url(#arcGrad2)" opacity="0.7" />

                {/* Arc 1: Domestic Kenya (Nairobi / Corporate) */}
                <ellipse cx="500" cy="520" rx="140" ry="100" fill="url(#arcGrad1)" opacity="0.85" />

                {/* Top Emblem / Geometric Accent */}
                <g transform="translate(480, 110)">
                  <polygon points="20,0 35,28 5,28" fill="#ffffff" opacity="0.9" />
                  <polygon points="12,10 24,28 0,28" fill="#bae6fd" opacity="0.75" />
                </g>

                {/* Fee Labels placed along the concentric rings */}
                {/* Ring 1 Label */}
                <g transform="translate(488, 410)">
                  <text fill="#ffffff" fontSize="13" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                    KES 150k
                  </text>
                </g>

                {/* Ring 2 Label */}
                <g transform="translate(450, 355)">
                  <text fill="#ffffff" fontSize="15" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                    KES 350k
                  </text>
                </g>

                {/* Ring 3 Label */}
                <g transform="translate(390, 295)">
                  <text fill="#ffffff" fontSize="17" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                    $3,500
                  </text>
                </g>

                {/* Ring 4 Label */}
                <g transform="translate(315, 235)">
                  <text fill="#ffffff" fontSize="19" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                    $7,500
                  </text>
                </g>

                {/* Ring 5 Label */}
                <g transform="translate(245, 175)">
                  <text fill="#ffffff" fontSize="21" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                    $15,000+
                  </text>
                </g>
              </svg>

              {/* Pin & Info Card at Home Base (Center bottom) */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-[#0284c7]/95 backdrop-blur-md text-white border border-sky-300/40 rounded-xl px-4 sm:px-6 py-3 sm:py-3.5 shadow-2xl text-center min-w-[260px] sm:min-w-[320px]">
                  
                  {/* Location Pin */}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span className="font-display font-black text-sm sm:text-base uppercase tracking-tight">
                      Embu &amp; Nairobi
                    </span>
                  </div>
                  
                  <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-sky-100 uppercase font-semibold">
                    KENYA, EAST AFRICA
                  </p>

                  <div className="w-full h-px bg-white/20 my-2" />

                  {/* Fee & Scope */}
                  <p className="font-display font-extrabold text-base sm:text-lg text-white uppercase tracking-tight">
                    KES 80k - 150k <span className="text-xs font-sans font-bold text-sky-100">IN PERSON</span>
                  </p>
                  <p className="text-[10px] text-sky-100 font-sans font-medium">
                    &lt; 2 Hour Drive from Embu / Nairobi
                  </p>
                </div>

                <p className="text-[10px] font-mono text-center text-[#94a3b8] mt-2 font-medium">
                  *All fees negotiable for universities, student summits &amp; non-profits
                </p>
              </div>

            </div>

          </div>

          {/* Centered Pill Button below the Map */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-10 py-4 bg-white text-black font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00a8ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,168,255,0.4)] transition-all cursor-pointer shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Dave to Speak
            </button>
          </div>

        </div>
      </section>

      {/* 3. BOOKING INQUIRY MODAL (Full functional scheduling drawer) */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e1424] border border-[#1e293b] rounded-3xl p-6 sm:p-10 max-w-2xl w-full relative shadow-2xl my-8"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-[#131b2e] transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>

              {bookingStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00a8ff]/10 border border-[#00a8ff] flex items-center justify-center text-[#00a8ff] mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-2">
                    Speaking Request Received
                  </h3>
                  <p className="font-sans text-[#94a3b8] text-sm max-w-md mx-auto mb-8">
                    Thank you. Dave Waihenya's team reviews all keynote inquiries within 24 hours to confirm date availability and coordinate technical requirements.
                  </p>
                  <button
                    onClick={() => {
                      setIsBookingModalOpen(false);
                      setBookingStatus('idle');
                    }}
                    className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2">
                    <Mic className="w-4 h-4" />
                    <span>EVENT COORDINATION &amp; KEYNOTE BOOKING</span>
                  </div>

                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl uppercase text-white tracking-tight mb-2">
                    Book Dave Waihenya to Speak
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] mb-6">
                    Tell us about your event, audience, and preferred keynote date.
                  </p>

                  <form onSubmit={handleSubmitBooking} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Mwangi"
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Organization / Event
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. East Africa Tech Summit"
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Proposed Date / Month
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          placeholder="e.g. November 2026"
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Event Format
                        </label>
                        <select
                          value={formData.format}
                          onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none cursor-pointer"
                        >
                          <option value="In-Person Keynote">In-Person Keynote (Mainstage)</option>
                          <option value="Half-Day Technical Masterclass">Half-Day Technical Masterclass</option>
                          <option value="Virtual Keynote & Broadcast">Virtual Keynote &amp; Broadcast</option>
                          <option value="University / Student Assembly">University / Student Assembly</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                          Expected Audience Size
                        </label>
                        <select
                          value={formData.audienceSize}
                          onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                          className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none cursor-pointer"
                        >
                          <option value="Under 100 attendees">Under 100 attendees</option>
                          <option value="100 - 500 attendees">100 - 500 attendees</option>
                          <option value="500 - 2,000 attendees">500 - 2,000 attendees</option>
                          <option value="2,000+ attendees">2,000+ attendees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                        Selected Keynote Focus
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none cursor-pointer"
                      >
                        <option value="Real Stories. Real Tactics: Building Applied AI from Kenya">
                          Real Stories. Real Tactics: Building Applied AI from Kenya
                        </option>
                        <option value="From Zero to Global Recognition in 3 Years (Mozilla Challenge & First Class)">
                          From Zero to Global Recognition in 3 Years (Mozilla Challenge &amp; First Class)
                        </option>
                        <option value="Engineering Leverage: Deploying Machine Learning Without $10k Cloud Burn">
                          Engineering Leverage: Deploying Machine Learning Without $10k Cloud Burn
                        </option>
                        <option value="Responsible Computing & AI Governance in Emerging Markets">
                          Responsible Computing &amp; AI Governance in Emerging Markets
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                        Event Location &amp; Additional Context
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="City, country, venue details, and specific outcomes you want Dave to deliver..."
                        className="w-full bg-[#060813] border border-[#1e293b] focus:border-[#00a8ff] rounded-xl px-4 py-3 text-white text-sm outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#00a8ff] text-black font-extrabold uppercase tracking-wider text-xs rounded-full hover:bg-white transition-all cursor-pointer shadow-lg mt-2"
                    >
                      Submit Speaking Inquiry
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
