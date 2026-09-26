import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight,
  ArrowDownLeft, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Download, 
  Send, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  GraduationCap,
  Clock,
  ShieldCheck,
  Building2,
  Rocket,
  BookOpen
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectPost?: (postId: string) => void;
}

export function HomePage({ onNavigate, onSelectPost }: HomePageProps) {
  // Modal states
  const [activeModal, setActiveModal] = useState<
    'ambitious-entrepreneurs' | 
    'ambitious-builders' | 
    'ambitious-youth' | 
    'newsletter' | 
    'book-preview' | 
    'kings-club' | 
    'companies' | 
    'speaker' | 
    'blog-1' | 
    'blog-2' | 
    'blog-3' | 
    null
  >(null);

  // Form states
  const [privateListEmail, setPrivateListEmail] = useState('');
  const [privateListStatus, setPrivateListStatus] = useState<'idle' | 'subscribed'>('idle');
  const [stripEmail, setStripEmail] = useState('');
  const [stripStatus, setStripStatus] = useState<'idle' | 'subscribed'>('idle');
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'success'>('idle');
  const [speakerForm, setSpeakerForm] = useState({ name: '', email: '', event: '', date: '', location: '' });
  const [speakerStatus, setSpeakerStatus] = useState<'idle' | 'submitted'>('idle');

  const handlePrivateListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (privateListEmail.trim()) {
      setPrivateListStatus('subscribed');
      setTimeout(() => {
        setPrivateListStatus('idle');
        setPrivateListEmail('');
        setActiveModal(null);
      }, 3500);
    }
  };

  const handleStripSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stripEmail.trim()) {
      setStripStatus('subscribed');
      setTimeout(() => {
        setStripStatus('idle');
        setStripEmail('');
      }, 4000);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpName && rsvpEmail) {
      setRsvpStatus('success');
      setTimeout(() => {
        setRsvpStatus('idle');
        setRsvpName('');
        setRsvpEmail('');
        setActiveModal(null);
      }, 3500);
    }
  };

  const handleSpeakerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (speakerForm.name && speakerForm.email) {
      setSpeakerStatus('submitted');
      setTimeout(() => {
        setSpeakerStatus('idle');
        setSpeakerForm({ name: '', email: '', event: '', date: '', location: '' });
        setActiveModal(null);
      }, 3500);
    }
  };

  const handleDownloadBlueprint = () => {
    const content = `# FROM FIRST CLASS TO FIRST MILLION
## A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth
By Dave Waihenya (First Class Honors, University of Embu · Mozilla Challenge Winner)

---

### PROLOGUE: I AM NOT FINISHED YET
"There is a strange feeling that comes with achieving something you once prayed for.
You celebrate. People congratulate you. Photographs are taken. Your name appears on a list.
For a moment, everything feels complete.
Then the noise fades. You wake up the next morning and realize something: You still have a life to build.
That is where I am now.
I am David Waihenya, a Computer Science graduate from the University of Embu, a First Class Honors graduate, a builder, a learner, and someone who still has more questions than answers."

### THE REAL ROADMAP:
1. THE BEGINNING: Growing up in Kenya, Namunyiri Primary School, St. Peter’s Moi’s Bridge Secondary School.
2. UNIVERSITY OF EMBU (2022): Zero coding background to deliberate late-night lab mastery.
3. THE MOZILLA CHALLENGE: Crop disease detection computer vision for smallholder farmers. Winning the challenge and realizing technology is a bridge to real human problems.
4. WHEN REALITY HITS: Rent doesn't care that you graduated. Taking temporary work with no shame while asking: "What can I build myself?"
5. BECOMING DANGEROUS THROUGH COMPETENCE: Applied AI, edge computing, Kenyan SMB automation, and creating ventures people pay for.
6. THE ROAD AHEAD: "You do not need to see the entire staircase before taking the next step. Learn. Build. Fail. Adjust. Build again."

© Dave Waihenya. All rights reserved.
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `From_First_Class_To_First_Million_Dave_Waihenya.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-end overflow-hidden pb-16 lg:pb-24 pt-36 lg:pt-40">
        {/* Full-bleed background visual: Dave Waihenya editorial portrait */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about.jpeg"
            alt="Dave Waihenya - First Class Honors, Builder & Learner"
            className="w-full h-full object-cover object-[center_30%] filter brightness-[0.40] contrast-[1.18]"
          />
          {/* Subtle gradient vignette to guarantee contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-[#060813]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060813]/95 via-[#060813]/55 to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Sky blue kicker */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#00a8ff] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 font-sans"
            >
              Computer Science Graduate · First Class Honours · AI Builder
            </motion.p>

            {/* Clean, well-proportioned headline tagline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.04] mb-5 drop-shadow-2xl"
            >
              BECOMING DANGEROUS <br />
              <span className="text-[#00a8ff]">THROUGH COMPETENCE.</span>
            </motion.h1>

            {/* Subtitle line featuring Dave's actual words */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-md"
            >
              "I do not want graduation to become the greatest thing I ever did. Stop playing small and start building systems that solve real human problems."
            </motion.p>

            {/* Prologue quote tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-sans"
            >
              <span className="px-3 py-1 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] border border-[#00a8ff]/40 font-mono font-bold text-xs uppercase">
                The Story I Am Still Building
              </span>
              <span className="text-slate-400">
                David Waihenya · University of Embu Computer Science
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. "FOR THE AMBITIOUS ONES..." 3-COLUMN SPOTLIGHT GRID */}
      <section className="relative w-full py-20 lg:py-28 bg-[#03050c] border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          {/* Centered Eyebrow & Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-2">
              FOR THOSE READY TO BUILD...
            </h2>
            <p className="text-[#00a8ff] font-sans font-medium text-sm sm:text-base tracking-normal">
              ...turning raw knowledge into real software, businesses &amp; income.
            </p>
          </div>

          {/* 3 Full-Bleed Photographic Cards with Arrow & White Pill Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Developers Ready to Build */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-between p-6 sm:p-8 bg-[#090e1a] border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all duration-500 shadow-2xl">
              {/* Background Photo: Modern developer team in collaborative engineering session */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900" 
                  alt="Developers Ready to Build" 
                  className="w-full h-full object-cover filter brightness-[0.40] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              </div>

              {/* Card Top: Arrow icon top-left & Title */}
              <div className="relative z-10">
                <ArrowDownLeft className="w-7 h-7 text-white mb-4 transform rotate-180 group-hover:text-[#00a8ff] transition-colors" />
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase leading-tight">
                  Developers <br />Ready to Build
                </h3>
              </div>

              {/* Card Bottom: Description & Learn More White Pill Button */}
              <div className="relative z-10 pt-8">
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-snug mb-6">
                  Stop trading your youth for passive tutorials. Become the builder capable of shipping software that pays.
                </p>
                <button
                  onClick={() => setActiveModal('ambitious-entrepreneurs')}
                  className="px-6 py-2.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: African Business Builders */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-between p-6 sm:p-8 bg-[#090e1a] border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all duration-500 shadow-2xl">
              {/* Background Photo: African enterprise tech stage */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=900" 
                  alt="Business Builders & African SMBs" 
                  className="w-full h-full object-cover filter brightness-[0.38] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              </div>

              {/* Card Top: Arrow icon & Title */}
              <div className="relative z-10">
                <ArrowDownLeft className="w-7 h-7 text-white mb-4 transform rotate-180 group-hover:text-[#00a8ff] transition-colors" />
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase leading-tight">
                  Business Builders
                </h3>
              </div>

              {/* Card Bottom: Description & Learn More White Pill Button */}
              <div className="relative z-10 pt-8">
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-snug mb-6">
                  Discover applied AI systems and bespoke software from the Waihenya network to help your business grow.
                </p>
                <button
                  onClick={() => setActiveModal('ambitious-builders')}
                  className="px-6 py-2.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Young Builders */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-between p-6 sm:p-8 bg-[#090e1a] border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all duration-500 shadow-2xl">
              {/* Background Photo: Young students in coding workshop */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900" 
                  alt="Young Tech Builders" 
                  className="w-full h-full object-cover filter brightness-[0.40] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              </div>

              {/* Card Top: Arrow icon & Title */}
              <div className="relative z-10">
                <ArrowDownLeft className="w-7 h-7 text-white mb-4 transform rotate-180 group-hover:text-[#00a8ff] transition-colors" />
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase leading-tight">
                  Young Builders
                </h3>
              </div>

              {/* Card Bottom: Description & Learn More White Pill Button */}
              <div className="relative z-10 pt-8">
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-snug mb-6">
                  From Namunyiri Primary to St. Peter's Moi's Bridge &amp; University: free roadmaps for 16-25 year olds ready to build.
                </p>
                <button
                  onClick={() => setActiveModal('ambitious-youth')}
                  className="px-6 py-2.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "I'M NO DIFFERENT" STORY SECTION (Dave Waihenya's authentic words from THE STORY I AM STILL BUILDING) */}
      <section className="relative w-full py-20 lg:py-32 bg-[#060813] border-b border-[#1e293b] overflow-hidden">
        {/* Full-bleed background photo on right: Dave Waihenya authentic image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0 pointer-events-none overflow-hidden">
          <img
            src="/assets/hero.jpeg"
            alt="Dave Waihenya Journey & Purpose"
            className="w-full h-full object-cover object-[center_top] filter brightness-[0.55] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060813] via-[#060813]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-[#060813]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Authentic Autobiographical Story */}
            <div className="lg:col-span-6 xl:col-span-7 max-w-xl text-left">
              <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3">
                THE STORY I AM STILL BUILDING
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-6">
                THE JOURNEY BEHIND <br />
                <span className="text-[#00a8ff]">THE FIRST CLASS</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
                <p>
                  I could tell you about graduating with First Class Honors in Computer Science from the University of Embu...
                </p>
                <p>
                  Or winning the global Mozilla Responsible Computing Challenge with our agricultural disease detection system.
                </p>
                <p className="font-bold text-white text-lg sm:text-xl pt-1">
                  But that's all noise without the WHY.
                </p>
                <p>
                  People look at the graduation certificate and see the result. <strong className="text-white">I look at it and see the journey.</strong>
                </p>
                <p>
                  Namunyiri Primary School. St. Peter’s Moi’s Bridge Secondary. Arriving at university in September 2022 knowing nothing about coding.
                </p>
                <p>
                  The projects that refused to work. The applications that went unanswered. The financial pressure. The temporary jobs.
                </p>
                <p>
                  The moments after graduation when reality hit: rent does not care that you graduated, and food does not care that you have a First Class.
                </p>
                <p>
                  But here's what I learned... <strong className="text-white">it was all preparation.</strong>
                </p>
                <p>
                  Preparation to stop waiting for someone to come save my career, and ask the only question that matters: <em className="text-[#00a8ff]">"How can I create something valuable enough that people want to pay for it?"</em>
                </p>
                <p>
                  Because I am not interested in becoming successful overnight. <strong className="text-white">I am interested in becoming dangerous through competence.</strong>
                </p>
                <p>
                  And this time, I am not just looking for a place in someone else's story. <strong className="text-white">I am building my own.</strong>
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate('story')}
                  className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
                >
                  <span>Read My Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Spacing placeholder for desktop layout */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-5" />

          </div>
        </div>
      </section>

      {/* 4. THE WAIHENYA METHOD NEWSLETTER: "A 5 MINUTE EMAIL THAT COULD SAVE YOU 5 YEARS" */}
      <section className="relative w-full py-24 lg:py-36 bg-[#04060d] border-b border-[#1e293b] overflow-hidden">
        {/* Full photographic background: Teaching at whiteboard & tech architecture lab */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="The Waihenya Method Masterclass Whiteboard"
            className="w-full h-full object-cover object-[center_top] filter brightness-[0.35] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04060d]/80 to-[#04060d]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-[#04060d]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 flex justify-end">
          <div className="max-w-2xl text-left">
            
            {/* Sky-blue Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              THE WAIHENYA DISPATCH · WEEKLY BUILDER BLUEPRINT
            </p>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              FROM SKILLS TO INCOME: <br />
              <span className="text-slate-400">THE REAL ROADMAP</span>
            </h2>

            {/* Subtitle paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
              Tactics on deliberate practice, applied AI architectures, and building software solutions people actually pay for. Zero fluff, written weekly by David Waihenya.
            </p>

            {/* White pill button: Join The Private List */}
            <button
              onClick={() => setActiveModal('newsletter')}
              className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
            >
              <span>Join The Private List</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </section>

      {/* 5. GET THE BESTSELLING ROADMAP: FROM FIRST CLASS TO FIRST MILLION (With 3D Hardcover & Gold Badge) */}
      <section className="relative w-full py-20 lg:py-32 bg-[#060813] border-b border-[#1e293b] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Book Copy & Buy Button */}
            <div className="lg:col-span-6 text-left">
              {/* Sky Blue Eyebrow */}
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
                GET THE BESTSELLING ROADMAP
              </p>

              {/* Headline */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
                FROM FIRST CLASS TO FIRST MILLION
              </h2>

              {/* Subtitle description */}
              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
                <strong className="text-white">A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth.</strong> Born out of the real journey from Namunyiri Primary to First Class Honors at the University of Embu to building real-world software companies.
              </p>

              {/* White pill button: Get The Book Now */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('book')}
                  className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
                >
                  <span>Get The Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveModal('book-preview')}
                  className="px-6 py-3.5 bg-[#0e1424] text-slate-300 border border-[#1e293b] hover:text-white hover:border-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer"
                >
                  Quick Preview
                </button>
              </div>
            </div>

            {/* Right Column: 3D Hardcover Book Mockup with Gold Seal Bestseller Badge */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div 
                className="relative cursor-pointer group"
                onClick={() => onNavigate('book')}
              >
                {/* Circular Gold Seal Badge */}
                <div className="absolute -top-6 -right-6 sm:-right-8 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#ffd700] via-[#e6b800] to-[#b8860b] text-[#1a1200] p-1.5 shadow-[0_10px_25px_rgba(230,184,0,0.4)] flex items-center justify-center text-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full border border-dashed border-[#1a1200]/60 rounded-full flex flex-col items-center justify-center p-1">
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider leading-none">FIRST CLASS</span>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tight leading-tight">HONOURS</span>
                    <span className="text-[7px] sm:text-[8px] font-extrabold uppercase tracking-widest text-emerald-950 mt-0.5">KENYA ROADMAP</span>
                  </div>
                </div>

                {/* 3D Realistic Book Rendering: Emerald & Gold Palette */}
                <div className="relative w-[280px] sm:w-[320px] aspect-[1/1.45] rounded-r-xl rounded-l-sm bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] p-6 sm:p-7 shadow-[20px_25px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(16,185,129,0.3)] border-r-2 border-t border-b border-[#fbbf24]/40 transform lg:-rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between select-none">
                  
                  {/* Left Spine Shadow indentation */}
                  <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none rounded-l-sm border-r border-[#fbbf24]/30" />
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#fbbf24]/20 pointer-events-none" />

                  {/* Top Author Tag */}
                  <div className="relative z-10 text-center border-b border-[#fbbf24]/40 pb-3">
                    <p className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#fef08a] uppercase font-black">
                      THE KENYAN ROADMAP PLAYBOOK
                    </p>
                    <p className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white uppercase mt-0.5">
                      DAVE WAIHENYA
                    </p>
                  </div>

                  {/* Main Title: FROM FIRST CLASS TO FIRST MILLION */}
                  <div className="relative z-10 text-center my-auto py-3">
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-[0.92]">
                      FROM <br />
                      <span className="text-[#fef08a]">FIRST CLASS</span> <br />
                      TO FIRST <br />
                      <span className="text-[#34d399]">MILLION</span>
                    </h3>
                  </div>

                  {/* Subtitle & Bottom Bar */}
                  <div className="relative z-10 text-center border-t border-[#fbbf24]/40 pt-3">
                    <p className="text-[8px] sm:text-[9px] font-sans font-bold text-[#fef08a] uppercase tracking-wide leading-tight">
                      A GRADUATE’S ROADMAP FROM SKILLS <br />TO INCOME, BUSINESS AND WEALTH.
                    </p>
                  </div>

                  {/* Bottom realistic paper pages shadow */}
                  <div className="absolute -bottom-3 right-1 left-4 h-3 bg-[#fef9c3] rounded-b border border-amber-300 shadow-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(90deg,#b45309,#b45309_1px,transparent_1px,transparent_3px)]" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FREE KENYAN YOUTH & DEVELOPER INITIATIVE: APEX BUILDERS CLUB */}
      <section className="relative w-full py-24 lg:py-36 bg-[#03050b] border-b border-[#1e293b] overflow-hidden">
        {/* Left Side Photo: Focus, athletic drive, and coding dedication */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
            alt="Apex Builders Club Mentorship"
            className="w-full h-full object-cover object-[center_top] filter brightness-[0.45] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#03050b]/80 to-[#03050b]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050b] via-transparent to-[#03050b]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 flex justify-end">
          <div className="max-w-2xl text-left">
            
            {/* Sky Blue Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              FREE KENYAN YOUTH &amp; BUILDER INITIATIVE
            </p>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              THE APEX BUILDERS CLUB
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
              <strong className="text-white">The Apex Builders Club is your next-level circle.</strong> If you're 16-25, passionate about software &amp; AI, and ready to lead, push your limits, and earn your first million, this is where you step up.
            </p>

            {/* White pill button */}
            <button
              onClick={() => setActiveModal('kings-club')}
              className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
            >
              <span>Join The Builders Club</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </section>

      {/* 7. OUR COMPANIES: WAIHENYA VENTURES & STUDIOS */}
      <section className="relative w-full py-24 lg:py-36 bg-[#04060d] border-b border-[#1e293b] overflow-hidden">
        {/* Full-bleed background photo: High-tech African robotics / applied AI hardware lab */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=2000"
            alt="Waihenya Ventures Engineering Studio"
            className="w-full h-full object-cover object-[center_center] filter brightness-[0.38] contrast-[1.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04060d] via-[#04060d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-[#04060d]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl text-left">
            
            {/* Sky Blue Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              OUR COMPANIES &amp; STUDIOS
            </p>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              WAIHENYA VENTURES
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
              <strong className="text-white">Companies that help businesses scale with intelligent software.</strong> Explore AI Solution Studio, Davamos Tech, and the agricultural disease detection systems born out of the Mozilla Responsible Computing Challenge.
            </p>

            {/* White pill button */}
            <button
              onClick={() => setActiveModal('companies')}
              className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
            >
              <span>Explore Our Companies</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </section>

      {/* 8. SPEAKING: GET DAVE ON YOUR STAGE */}
      <section className="relative w-full py-24 lg:py-36 bg-[#030408] border-b border-[#1e293b] overflow-hidden">
        {/* Arena stage photo with massive LED screen and cheering crowd */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2000"
            alt="Dave Waihenya Keynote Speaker on Stage"
            className="w-full h-full object-cover object-[center_30%] filter brightness-[0.38] contrast-[1.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030408] via-[#030408]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-transparent to-[#030408]" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl text-left">
            
            {/* Sky Blue Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              SPEAKING &amp; KEYNOTES
            </p>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              GET DAVE ON YOUR STAGE
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8">
              Featured across university tech symposiums, youth summits, and developer hackathons—bringing practical, zero-fluff talks on <strong className="text-white">Applied AI, software entrepreneurship, academic discipline, and African tech sovereignty.</strong>
            </p>

            {/* White pill button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('speaking')}
                className="px-8 py-3.5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#00a8ff] hover:text-black transition-all cursor-pointer shadow-xl inline-flex items-center gap-2"
              >
                <span>Book Dave</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveModal('speaker')}
                className="px-6 py-3.5 bg-[#0e1424] text-slate-300 border border-[#1e293b] hover:text-white hover:border-[#00a8ff] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer"
              >
                Request Speaker Kit
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 9. READ OUR BLOG: GET THE LATEST BUILDER INSIGHTS */}
      <section className="relative w-full py-20 lg:py-28 bg-[#060813] border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-left mb-10 lg:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00a8ff] mb-2">
              READ OUR BLOG
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-3">
              GET THE LATEST BUILDER INSIGHTS
            </h2>
            <p className="text-slate-400 font-sans text-base sm:text-lg max-w-3xl">
              Actionable insights, proven engineering playbooks, and real lessons on AI, Python architectures, SaaS, and building sustainable tech income in Africa.
            </p>
          </div>

          {/* 3-Column Article Card Grid (Dave's authentic essays) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Article 1 */}
            <div 
              onClick={() => setActiveModal('blog-1')}
              className="bg-[#0e121d] border border-[#1e293b] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#00a8ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                  alt="From Campus to Cash"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                
                {/* Bold Thumbnail Title overlay */}
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                    Campus to Cash
                  </p>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  CAREER &amp; WEALTH
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#00a8ff] group-hover:text-white transition-colors leading-snug mb-3">
                    The 5 Steps I Used to Go From Zero Code in 2022 to First Class Honors and Paid Clients
                  </h3>
                  <p className="text-xs font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>READ MORE</span>
                    <span>»</span>
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1e293b] mt-4">
                  <span className="text-[11px] font-mono text-slate-400">
                    September 21, 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div 
              onClick={() => setActiveModal('blog-2')}
              className="bg-[#0e121d] border border-[#1e293b] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#00a8ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
                  alt="When Reality Hits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                
                {/* Bold Thumbnail Title overlay */}
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                    When Reality Hits
                  </p>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  REALITY &amp; ACTION
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#00a8ff] group-hover:text-white transition-colors leading-snug mb-3">
                    Why Rent Doesn't Care You Graduated With First Class (And What to Build Instead)
                  </h3>
                  <p className="text-xs font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>READ MORE</span>
                    <span>»</span>
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1e293b] mt-4">
                  <span className="text-[11px] font-mono text-slate-400">
                    September 14, 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div 
              onClick={() => setActiveModal('blog-3')}
              className="bg-[#0e121d] border border-[#1e293b] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#00a8ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" 
                  alt="Solving Real Problems: The Mozilla Challenge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                
                {/* Bold Thumbnail Title overlay */}
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                    Solving Real Problems
                  </p>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  APPLIED AI
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#00a8ff] group-hover:text-white transition-colors leading-snug mb-3">
                    What Winning the Mozilla Challenge Taught Me About Building Tech for Farmers &amp; Real Humans
                  </h3>
                  <p className="text-xs font-bold text-[#00a8ff] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>READ MORE</span>
                    <span>»</span>
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1e293b] mt-4">
                  <span className="text-[11px] font-mono text-slate-400">
                    September 7, 2026
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. 6-IMAGE LIFESTYLE & ACTION MOSAIC (Dave Waihenya's authentic visual story) */}
      <section className="relative w-full bg-black overflow-hidden border-b border-[#1e293b]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-[#1e293b]">
          
          {/* Tile 1: Community team gathering */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
              alt="Apex Builders Community & Hackathon" 
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Apex Builders Community</span>
            </div>
          </div>

          {/* Tile 2: High Performance Setup */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" 
              alt="High Performance Tech Setup" 
              className="w-full h-full object-cover filter brightness-[0.80] contrast-[1.15] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Velocity &amp; Execution</span>
            </div>
          </div>

          {/* Tile 3: Keynote presentation on neon stage */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" 
              alt="Mozilla Challenge Keynote Presentation" 
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.2] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Keynote Stages</span>
            </div>
          </div>

          {/* Tile 4: Cloud Infrastructure & Global Architecture */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800" 
              alt="Global Cloud & Frontier Edge Infrastructure" 
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Global Reach</span>
            </div>
          </div>

          {/* Tile 5: Outdoor reset and focus */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
              alt="Kenyan Landscape & Mental Clarity" 
              className="w-full h-full object-cover filter brightness-[0.80] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Freedom &amp; Perspective</span>
            </div>
          </div>

          {/* Tile 6: Physical training & discipline */}
          <div className="relative aspect-[4/3] overflow-hidden group bg-black">
            <img 
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800" 
              alt="Physical Fitness & Daily Discipline" 
              className="w-full h-full object-cover filter brightness-[0.80] contrast-[1.2] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Physical Peak</span>
            </div>
          </div>

        </div>
      </section>

      {/* 11. BOTTOM NEWSLETTER STRIP (THE WAIHENYA DISPATCH) */}
      <section className="relative w-full py-8 lg:py-10 bg-[#04060d] border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <BrandLogo size="md" />
            <div>
              <p className="font-display font-black text-sm uppercase tracking-wider text-white">
                THE WAIHENYA DISPATCH
              </p>
              <p className="text-xs text-[#94a3b8]">
                Weekly blueprints for African builders turning code into income.
              </p>
            </div>
          </div>

          <div className="w-full max-w-md">
            {stripStatus === 'subscribed' ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are in! Welcome to the Waihenya Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleStripSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={stripEmail}
                  onChange={(e) => setStripEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#090d16] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-4 py-3 rounded-full outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer shadow-lg shrink-0"
                >
                  Subscribe for Free
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODALS FOR INTERACTION */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#090d18] border border-[#1e293b] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left z-10"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL 1: AMBITIOUS ENTREPRENEURS / DEVELOPERS */}
              {activeModal === 'ambitious-entrepreneurs' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Mentorship &amp; Roadmaps
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4">
                    The First Class Developer Roadmap
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      In 2022, I arrived at university without knowing how to write code. Through deliberate practice and building real systems, I graduated with First Class Honors and won global awards.
                    </p>
                    <p>
                      This framework teaches you how to transition from academic tutorials to building production software that solves high-margin business problems.
                    </p>
                    <ul className="space-y-2 border-l-2 border-[#00a8ff] pl-3 text-white text-xs">
                      <li>• Stop following tutorials: build software that solves a specific local friction</li>
                      <li>• Master Applied AI, edge computing, and backend API reliability</li>
                      <li>• Package software solutions for businesses and earn your first million</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        onNavigate('book');
                      }}
                      className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                    >
                      Get The Book Roadmap
                    </button>
                    <button
                      onClick={handleDownloadBlueprint}
                      className="px-6 py-2.5 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Blueprint</span>
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 2: BUSINESS BUILDERS */}
              {activeModal === 'ambitious-builders' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Waihenya Studios &amp; Ventures
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4">
                    Applied AI for African Enterprises
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      Most African businesses waste hundreds of hours every month answering repetitive WhatsApp inquiries, managing manual inventories, and reconciling paper documents.
                    </p>
                    <p>
                      Through AI Solution Studio and Davamos Tech, we build edge-inference models and automated multi-agent systems that eliminate operational bottlenecks and protect margins.
                    </p>
                    <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b] space-y-2">
                      <p className="text-white font-bold text-xs">Our Flagship Systems:</p>
                      <p className="text-xs text-slate-400">1. Automated WhatsApp &amp; SMS Multi-Agent Support for SMBs</p>
                      <p className="text-xs text-slate-400">2. Real-Time Computer Vision for Agricultural Crop Blight Detection (Mozilla Challenge)</p>
                      <p className="text-xs text-slate-400">3. High-throughput custom web and cloud platforms</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onNavigate('what-i-do');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Explore What I Do
                  </button>
                </div>
              )}

              {/* MODAL 3: YOUNG BUILDERS */}
              {activeModal === 'ambitious-youth' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Namunyiri to First Class
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4">
                    The Young Builders Initiative
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      I attended Namunyiri Primary School and St. Peter’s Moi’s Bridge Secondary School. I know what it feels like to dream without knowing how you will ever afford to start.
                    </p>
                    <p>
                      The Young Builders Initiative provides free code audits, deliberate study roadmaps, and portfolio advice to 16-25 year olds who are serious about mastering technology.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onNavigate('story');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Read The Full Journey
                  </button>
                </div>
              )}

              {/* MODAL 4: NEWSLETTER */}
              {activeModal === 'newsletter' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Weekly Builder Dispatch
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-2">
                    Join The Private List
                  </h3>
                  <p className="text-sm text-slate-300 font-sans mb-6">
                    Join hundreds of African engineers, founders, and students who receive weekly tactics on deliberate practice, AI engineering, and building software that pays.
                  </p>

                  {privateListStatus === 'subscribed' ? (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>You are subscribed! Welcome to the private list.</span>
                    </div>
                  ) : (
                    <form onSubmit={handlePrivateListSubmit} className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your best email"
                        value={privateListEmail}
                        onChange={(e) => setPrivateListEmail(e.target.value)}
                        required
                        className="w-full bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-sm px-4 py-3 rounded-xl outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer"
                      >
                        Subscribe to The Private List
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* MODAL 5: BOOK PREVIEW */}
              {activeModal === 'book-preview' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Quick Syllabus Preview
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-2">
                    From First Class to First Million
                  </h3>
                  <p className="text-xs text-[#00a8ff] font-semibold mb-4">
                    A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth
                  </p>
                  <div className="space-y-3 text-xs text-slate-300 font-sans max-h-60 overflow-y-auto pr-2 mb-6">
                    <p className="border-b border-[#1e293b] pb-2">
                      <strong className="text-white">Part I: The Ground Zero Reality</strong><br />
                      Namunyiri to Embu: Why tutorials keep developers poor and how deliberate practice builds mastery in 36 months.
                    </p>
                    <p className="border-b border-[#1e293b] pb-2">
                      <strong className="text-white">Part II: The High-Leverage Craft</strong><br />
                      Applied AI, edge computer vision, and building resilient software that solves high-margin business problems.
                    </p>
                    <p className="border-b border-[#1e293b] pb-2">
                      <strong className="text-white">Part III: The African Business Blueprint</strong><br />
                      Packaging software solutions for local SMBs, closing corporate retainers, and solving revenue leakage.
                    </p>
                    <p>
                      <strong className="text-white">Part IV: Perpetual Scale &amp; Sovereignty</strong><br />
                      From hourly contractor to software equity, research, teaching, and holding tech companies across Africa.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleDownloadBlueprint}
                      className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .MD Blueprint</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        onNavigate('book');
                      }}
                      className="px-6 py-2.5 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      View Books Page
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 6: APEX BUILDERS CLUB RSVP */}
              {activeModal === 'kings-club' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Youth Community
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-2">
                    Join The Apex Builders Club
                  </h3>
                  <p className="text-sm text-slate-300 font-sans mb-6">
                    Connect with ambitious Kenyan builders, participate in live software architecture breakdowns, and receive direct code critiques from David Waihenya.
                  </p>

                  {rsvpStatus === 'success' ? (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Registration received! We will send you access details.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleRsvpSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={rsvpName}
                        onChange={(e) => setRsvpName(e.target.value)}
                        required
                        className="w-full bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-sm px-4 py-3 rounded-xl outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={rsvpEmail}
                        onChange={(e) => setRsvpEmail(e.target.value)}
                        required
                        className="w-full bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-sm px-4 py-3 rounded-xl outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer"
                      >
                        Claim Free Invitation
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* MODAL 7: COMPANIES PORTFOLIO */}
              {activeModal === 'companies' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Waihenya Ventures Portfolio
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4">
                    Our Software &amp; AI Ventures
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display font-bold text-white text-base">AI Solution Studio</h4>
                        <a 
                          href="https://ai-solution-studio.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#00a8ff] hover:text-white flex items-center gap-1 text-xs font-mono"
                        >
                          <span>Live App</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-slate-300">
                        Production multi-agent AI workflows, intelligent document comprehension, and low-latency API automations for African commercial enterprises.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display font-bold text-white text-base">Davamos Tech</h4>
                        <a 
                          href="https://davamos.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#00a8ff] hover:text-white flex items-center gap-1 text-xs font-mono"
                        >
                          <span>Live App</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-slate-300">
                        High-velocity bespoke software engineering, scalable cloud backends, and responsive digital platforms for scaling startups and institutions.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e1424] border border-[#1e293b]">
                      <h4 className="font-display font-bold text-white text-base mb-1">Mozilla Challenge Crop Diagnostics</h4>
                      <p className="text-xs text-slate-300">
                        Award-winning edge computer vision model enabling smallholder Kenyan farmers to detect crop disease early and safeguard livelihoods.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onNavigate('what-i-do');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    View All Services &amp; Capabilities
                  </button>
                </div>
              )}

              {/* MODAL 8: SPEAKER INQUIRY */}
              {activeModal === 'speaker' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Keynote Inquiry
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-2">
                    Book Dave Waihenya
                  </h3>
                  <p className="text-sm text-slate-300 font-sans mb-6">
                    Deliver a high-impact, practical keynote on Applied AI, academic discipline, and African tech entrepreneurship for your summit or university.
                  </p>

                  {speakerStatus === 'submitted' ? (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Speaker inquiry received! We will reply within 24 hours.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSpeakerSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={speakerForm.name}
                          onChange={(e) => setSpeakerForm({ ...speakerForm, name: e.target.value })}
                          required
                          className="bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={speakerForm.email}
                          onChange={(e) => setSpeakerForm({ ...speakerForm, email: e.target.value })}
                          required
                          className="bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Event / Organization Name"
                        value={speakerForm.event}
                        onChange={(e) => setSpeakerForm({ ...speakerForm, event: e.target.value })}
                        required
                        className="w-full bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Proposed Date"
                          value={speakerForm.date}
                          onChange={(e) => setSpeakerForm({ ...speakerForm, date: e.target.value })}
                          className="bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Location / Virtual"
                          value={speakerForm.location}
                          onChange={(e) => setSpeakerForm({ ...speakerForm, location: e.target.value })}
                          className="bg-[#0e1424] border border-[#1e293b] focus:border-[#00a8ff] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer mt-2"
                      >
                        Submit Speaker Inquiry
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* MODALS 9-11: BLOG ESSAYS */}
              {activeModal === 'blog-1' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Career &amp; Wealth
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-3">
                    From Zero Code to First Class Honors: The 5 Steps
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      In September 2022, I arrived at the University of Embu having never written a single line of code. No prior computer studies, no developer family background.
                    </p>
                    <p>
                      The turning point was embracing deliberate practice: reading documentation directly, breaking down algorithms by hand, staying in the lab past 9:00 PM, and testing code on real-world problems.
                    </p>
                    <p>
                      Graduating with First Class Honors proved that talent is merely the starting line; relentless, structured execution is what separates wishful thinking from mastery.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      if (onSelectPost) onSelectPost('1');
                      else onNavigate('blog');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Read Full Essay
                  </button>
                </div>
              )}

              {activeModal === 'blog-2' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Reality &amp; Action
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-3">
                    When Reality Hits: Why Rent Doesn't Care You Graduated
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      "The degree is finished. But the bills continue. Rent does not care that you graduated. Food does not care that you have a First Class."
                    </p>
                    <p>
                      This essay explores the uncomfortable gap between academic victory and commercial sustainability. I share the temporary work I took with no shame, and why I stopped waiting for job offers to build software products people pay for.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      if (onSelectPost) onSelectPost('2');
                      else onNavigate('blog');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Read Full Essay
                  </button>
                </div>
              )}

              {activeModal === 'blog-3' && (
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] mb-2 block">
                    Applied AI
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-3">
                    What the Mozilla Challenge Taught Me About Technology
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    <p>
                      "A farmer should not have to wait until an entire crop is damaged before discovering that something is wrong. Technology could help detect a problem earlier and provide useful guidance."
                    </p>
                    <p>
                      Winning the Mozilla Responsible Computing Challenge was exciting, but the bigger victory happened inside me: realizing that technology is a bridge between knowledge and real human lives.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      if (onSelectPost) onSelectPost('3');
                      else onNavigate('blog');
                    }}
                    className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Read Full Essay
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
