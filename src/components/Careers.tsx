import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  Users,
  Terminal,
  Laptop,
  Flame,
  Award,
  BookOpen,
  DollarSign,
  HeartHandshake,
  Send,
  X,
  FileText,
  Clock,
  MapPin,
  ChevronRight,
  Layers,
  ShieldCheck,
  Building
} from 'lucide-react';

interface CareersProps {
  onNavigate?: (page: string) => void;
}

interface JobRole {
  id: string;
  title: string;
  department: 'Engineering & AI' | 'Product & Design' | 'Operations & Media' | 'Research & AgriTech';
  location: string;
  type: string;
  compensation: string;
  experience: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  featured?: boolean;
}

export const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [activeJobForModal, setActiveJobForModal] = useState<JobRole | null>(null);
  const [isGeneralApplicationOpen, setIsGeneralApplicationOpen] = useState(false);
  
  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    github: '',
    linkedIn: '',
    yearsExperience: '1-3',
    superpower: '',
    whyUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobRoles: JobRole[] = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Systems & Agent Engineer',
      department: 'Engineering & AI',
      location: 'Remote (Global / Africa)',
      type: 'Full-Time',
      compensation: 'Competitive + Equity & Bonus',
      experience: '3+ Years',
      tagline: 'Architect autonomous multi-agent systems, RAG workflows, and enterprise AI orchestration.',
      description: 'We are expanding our AI engineering lab to build production-grade agentic frameworks, reasoning pipelines, and custom enterprise automations for fast-scaling companies.',
      responsibilities: [
        'Design and deploy multi-agent reasoning workflows using LangGraph, CrewAI, and modern Python architectures.',
        'Optimize RAG pipelines, vector databases (Pinecone, Qdrant), and streaming LLM integrations with real-time feedback loops.',
        'Build robust APIs with FastAPI/Flask and integrate with high-volume client data systems.',
        'Profile latency, compute costs, and accuracy across Claude 3.5, Gemini 1.5/2.0, and open-source models.'
      ],
      requirements: [
        'Proven track record delivering production AI/ML software with demonstrable repositories.',
        'Deep fluency in Python, TypeScript, modern async backends, and prompt engineering.',
        'Strong intuition for software architecture, telemetry, and automated evaluation frameworks.',
        'Self-directed, high-agency mentality with a relentless focus on client value.'
      ],
      featured: true
    },
    {
      id: 'fullstack-software-engineer',
      title: 'Full-Stack Software Engineer (TypeScript & Next.js)',
      department: 'Engineering & AI',
      location: 'Remote (Global)',
      type: 'Full-Time',
      compensation: 'Competitive + Performance Bonus',
      experience: '2+ Years',
      tagline: 'Craft blazing-fast, ultra-polished web apps, client dashboards, and interactive SaaS tools.',
      description: 'You will work across the entire product lifecycle—from responsive, cinematic frontends in React and Tailwind to scalable serverless microservices and database schemas.',
      responsibilities: [
        'Engineer clean, accessible, and high-performance user interfaces using React, Next.js, and Tailwind CSS.',
        'Build resilient backend microservices, authentication flows, and PostgreSQL/Firebase databases.',
        'Collaborate directly with David Waihenya on rapid prototyping of client MVPs and internal ventures.',
        'Maintain zero-bug standards, comprehensive automated testing, and CI/CD pipelines.'
      ],
      requirements: [
        'Expert proficiency in TypeScript, React, Next.js, Tailwind CSS, and Node.js.',
        'A sharp eye for typography, micro-interactions, layout precision, and mobile responsiveness.',
        'Experience with database design (PostgreSQL, Drizzle/Prisma) and serverless deployment on Vercel/Cloud Run.'
      ],
      featured: true
    },
    {
      id: 'ai-product-designer',
      title: 'Senior Product & UI/UX Designer',
      department: 'Product & Design',
      location: 'Remote',
      type: 'Full-Time / Contract',
      compensation: 'Competitive Base + Equity',
      experience: '3+ Years',
      tagline: 'Design world-class interfaces, design systems, and high-conversion editorial platforms.',
      description: 'Transform complex AI and business workflows into intuitive, elegant digital products that captivate users and elevate the brand across every touchpoint.',
      responsibilities: [
        'Create high-fidelity wireframes, interactive prototypes, and scalable Figma design systems.',
        'Design sleek, editorial-grade web pages for book releases, summits, and software launches.',
        'Work closely with engineers to ensure design fidelity and responsive pixel perfection.',
        'Conduct rapid user testing sessions to iterate on interaction flows and conversion funnels.'
      ],
      requirements: [
        'Outstanding portfolio showcasing clean typography, dark-mode design systems, and software UI.',
        'Mastery of Figma, component libraries, and motion prototyping.',
        'Understanding of HTML/CSS/Tailwind primitives to collaborate seamlessly with frontend engineers.'
      ]
    },
    {
      id: 'venture-operations-lead',
      title: 'Venture Operations & Chief of Staff',
      department: 'Operations & Media',
      location: 'Nairobi / Remote',
      type: 'Full-Time',
      compensation: 'Competitive Base + Profit Share',
      experience: '2+ Years',
      tagline: 'Orchestrate high-velocity sprints, client onboarding, and strategic venture initiatives.',
      description: 'Act as the operational backbone of Waihenya Ventures, managing project timelines, automating repetitive operations, and driving client success.',
      responsibilities: [
        'Own internal operating rhythms, weekly sprints, and cross-functional team execution.',
        'Set up automated CRM, client billing, and onboarding workflows using modern AI tools and Zapier/Make.',
        'Directly assist the founder on strategic initiatives, investor relations, and media releases.',
        'Ensure deliverable excellence across Davamos Tech and AI Solution Studio client accounts.'
      ],
      requirements: [
        'Hyper-organized, structured thinker who thrives in fast-paced startup environments.',
        'Exceptional written and verbal communication skills.',
        'Familiarity with modern productivity tools (Notion, Slack, Linear, Airtable) and AI automations.'
      ]
    },
    {
      id: 'technical-content-lead',
      title: 'Technical Content & Growth Lead',
      department: 'Operations & Media',
      location: 'Remote',
      type: 'Full-Time / Part-Time',
      compensation: 'Competitive + Performance Bonuses',
      experience: '1+ Years',
      tagline: 'Translate cutting-edge AI breakthroughs into viral articles, newsletters, and video playbooks.',
      description: 'Help scale "The Waihenya Method" and educate over 100,000 ambitious African developers and global builders through technical writing, case studies, and social playbooks.',
      responsibilities: [
        'Write deep-dive technical articles and breakdown threads on AI architectures, developer wealth, and startups.',
        'Manage the weekly email dispatch, newsletter growth funnels, and reader community.',
        'Collaborate on video scripting and social distribution across X, LinkedIn, and YouTube.',
        'Analyze content metrics to continually double down on high-resonance topics.'
      ],
      requirements: [
        'Ability to read code and distill complex AI/ML topics into engaging, actionable English.',
        'Proven experience growing a technical blog, newsletter, or social following.',
        'Passion for technology, entrepreneurship, and African tech talent acceleration.'
      ]
    },
    {
      id: 'agritech-ml-fellow',
      title: 'Agricultural AI & Vision Research Fellow',
      department: 'Research & AgriTech',
      location: 'Remote / Kenya Field Access',
      type: 'Fellowship / Project-Based',
      compensation: 'Research Grant / Stipend + Publication Support',
      experience: 'Academic or Practical ML',
      tagline: 'Advance computer vision crop disease diagnostics building upon our Mozilla Challenge foundation.',
      description: 'Contribute to open-source agricultural intelligence, training edge-deployable computer vision models for smallholder farmers across East Africa.',
      responsibilities: [
        'Collect, augment, and benchmark crop pathology image datasets in local farming contexts.',
        'Train and optimize lightweight vision models (YOLO, MobileNet, EfficientNet) for edge and offline mobile use.',
        'Publish empirical findings, open-source weights, and collaborate on grant submissions.'
      ],
      requirements: [
        'Strong background in PyTorch/TensorFlow and computer vision techniques.',
        'Passion for humanitarian, climate-resilient, and agricultural impact.',
        'Academic or practical experience in Computer Science, Data Science, or related fields.'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'All'
    ? jobRoles
    : jobRoles.filter(j => j.department === selectedDepartment);

  const departments = ['All', 'Engineering & AI', 'Product & Design', 'Operations & Media', 'Research & AgriTech'];

  const coreValues = [
    {
      number: '01',
      title: 'Extreme Ownership',
      subtitle: 'Zero Excuses. Total Accountability.',
      description: 'We don’t make excuses when things break; we take full ownership, diagnose the root cause, and deliver working solutions before being asked.',
      icon: ShieldCheck
    },
    {
      number: '02',
      title: 'Speed as a Moat',
      subtitle: 'Fast Execution Beats Slow Perfection.',
      description: 'The market moves at light speed. We value momentum, rapid prototyping, and high-frequency deployment over endless theoretical meetings.',
      icon: Zap
    },
    {
      number: '03',
      title: 'AI Leverage First',
      subtitle: 'Automate Repetition, Amplify Mind.',
      description: 'Before doing manual, repetitive tasks, we ask: "Can we build an agent, workflow, or prompt pipeline to automate this?" We multiply our human output.',
      icon: Cpu
    },
    {
      number: '04',
      title: 'First Class Standard',
      subtitle: 'Excellence is a Habit, Not a Degree.',
      description: 'Just as First Class Honours demanded discipline, every line of code, design system, and client interaction must reflect unwavering craftsmanship.',
      icon: Award
    },
    {
      number: '05',
      title: 'High Agency & Resourcefulness',
      subtitle: 'Find a Way or Make One.',
      description: 'We operate with immense independence. When obstacles appear, we don’t freeze—we experiment, research, reverse-engineer, and conquer them.',
      icon: Flame
    },
    {
      number: '06',
      title: 'Real-World Value',
      subtitle: 'Solve Problems People Pay For.',
      description: 'We don’t write code just to look clever. We build software that transforms businesses, helps farmers, and creates undeniable economic freedom.',
      icon: DollarSign
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: '100% Remote & Async Culture',
      description: 'Work from anywhere in Kenya or around the globe. We judge output, clarity, and results, not hours seated in an office chair.'
    },
    {
      icon: Laptop,
      title: 'Hardware & Workstation Stipend',
      description: 'Get equipped with top-tier hardware (MacBook Pro / high-performance workstation) and peripheral allowance for your setup.'
    },
    {
      icon: Terminal,
      title: 'Frontier AI & Compute Credits',
      description: 'Unlimited access to Claude 3.5 Sonnet, Gemini 1.5/2.0 Pro, OpenAI APIs, and dedicated GPU cloud instances for building.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning & Book Budget',
      description: 'Any book, course, conference, or technical certification you need to level up your craft is 100% expensed without hesitation.'
    },
    {
      icon: HeartHandshake,
      title: 'Direct Mentorship & Founder Access',
      description: 'Work hand-in-hand with David Waihenya. Learn how high-leverage software is packaged, sold, and scaled into multi-million shilling ventures.'
    },
    {
      icon: DollarSign,
      title: 'Performance Upside & Venture Equity',
      description: 'Top performers receive milestone bonuses, project profit sharing, and early equity stakes in our spin-out companies.'
    }
  ];

  const handleOpenApplyModal = (job: JobRole) => {
    setActiveJobForModal(job);
    setIsGeneralApplicationOpen(false);
    setIsSubmitted(false);
  };

  const handleOpenGeneralModal = () => {
    setActiveJobForModal(null);
    setIsGeneralApplicationOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#060813] text-[#d4d4d4] selection:bg-[#00a8ff] selection:text-black">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="bg-[#00a8ff] text-black font-extrabold text-[11px] md:text-xs py-2.5 px-4 text-center tracking-wider uppercase transition-all duration-300">
        <div className="max-w-[1360px] mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span>NOW HIRING FOR 2026/2027</span>
          <span className="opacity-40">•</span>
          <span>WAIHENYA VENTURES & AI LABS IS EXPANDING</span>
          <span className="opacity-40">•</span>
          <a href="#roles" className="underline hover:opacity-80 transition-opacity">
            EXPLORE OPEN POSITIONS &rarr;
          </a>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-[#1e293b]">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00a8ff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Atmospheric ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00a8ff]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="max-w-4xl">
            {/* Sky Blue Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-5 bg-[#00a8ff]/10 border border-[#00a8ff]/20 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8ff] animate-ping" />
              CAREERS AT WAIHENYA VENTURES & APEX LABS
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.04] mb-6 font-sans">
              JOIN THE <span className="text-[#00a8ff]">TEAM.</span><br />
              BUILD WHAT <br className="hidden sm:block" />
              MATTERS.
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl mb-8 font-normal">
              We are assembling an elite squad of high-agency engineers, designers, and venture builders. We don't hire passengers who want a comfortable place to hide—we build software that generates revenue, automates real businesses, and creates undeniable freedom.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#roles"
                className="inline-flex items-center gap-2 bg-[#00a8ff] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,168,255,0.4)] hover:bg-[#38bdf8] hover:shadow-[0_0_40px_rgba(0,168,255,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>View Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#culture"
                className="inline-flex items-center gap-2 bg-transparent text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-[#1e293b] hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all cursor-pointer"
              >
                <span>Our Culture & Values</span>
              </a>

              <button
                onClick={handleOpenGeneralModal}
                className="text-xs text-[#94a3b8] hover:text-white uppercase tracking-wider font-mono font-semibold underline underline-offset-4 ml-2 transition-colors cursor-pointer"
              >
                Or pitch your superpower &rarr;
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#1e293b]/70">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-sans">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#00a8ff] mt-1 font-semibold">Remote & Async First</div>
              <p className="text-xs text-[#94a3b8] mt-1">Autonomous freedom with high accountability.</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-sans">Top 1%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#00a8ff] mt-1 font-semibold">Performance Packages</div>
              <p className="text-xs text-[#94a3b8] mt-1">Direct profit sharing & venture equity.</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-sans">1-on-1</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#00a8ff] mt-1 font-semibold">Founder Apprenticeship</div>
              <p className="text-xs text-[#94a3b8] mt-1">Work directly alongside David Waihenya.</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-sans">Zero</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#00a8ff] mt-1 font-semibold">Corporate Red Tape</div>
              <p className="text-xs text-[#94a3b8] mt-1">Build, ship, and get paid for output.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MANIFESTO / STATEMENT BANNER */}
      <section className="bg-[#0b1020] border-b border-[#1e293b] py-16 px-6 lg:px-10">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00a8ff] font-bold">
                THE BUILDER'S MANIFESTO
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mt-2 leading-tight">
                "WE ARE NOT LOOKING FOR WORKERS WHO WAIT FOR PERMISSION. WE ARE LOOKING FOR CO-CREATORS WHO WANT TO BECOME DANGEROUS THROUGH COMPETENCE."
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="text-sm font-bold text-white uppercase">David Waihenya</div>
              <div className="text-xs text-[#94a3b8] font-mono mt-0.5">First Class CS · Mozilla Challenge Winner · Founder</div>
              <div className="mt-4 flex items-center justify-start lg:justify-end gap-2 text-xs font-mono text-[#00a8ff]">
                <span className="w-2 h-2 rounded-full bg-[#00a8ff]" />
                Nairobi, Kenya & Global Remote
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES & CULTURE SECTION */}
      <section id="culture" className="py-24 border-b border-[#1e293b] relative">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3">
              THE PLAYBOOK
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
              HOW WE OPERATE & WIN
            </h2>
            <p className="text-base text-[#94a3b8] mt-4">
              Skills can be taught. Tools can be learned. But culture, grit, and high agency are non-negotiable. This is the operational standard we hold each other to every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-8 hover:border-[#00a8ff]/60 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#1e293b] group-hover:text-[#00a8ff]/40 transition-colors font-mono">
                      {val.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] group-hover:bg-[#00a8ff] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#00a8ff] transition-colors mb-1">
                    {val.title}
                  </h3>
                  <div className="text-xs font-mono text-[#00a8ff] font-semibold mb-3">
                    {val.subtitle}
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OPEN POSITIONS JOB BOARD (Interactive Filter & Role Cards) */}
      <section id="roles" className="py-24 border-b border-[#1e293b] bg-[#04060d]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2">
                JOIN THE SQUAD
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
                OPEN POSITIONS
              </h2>
              <p className="text-sm text-[#94a3b8] mt-2">
                Explore currently open roles across our engineering labs, ventures, and media arm.
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                    selectedDepartment === dept
                      ? 'bg-[#00a8ff] text-black shadow-lg shadow-[#00a8ff]/20'
                      : 'bg-[#0b0f19] text-[#94a3b8] border border-[#1e293b] hover:text-white hover:border-[#94a3b8]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-6 lg:p-8 hover:border-[#00a8ff] transition-all group flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#00a8ff] bg-[#00a8ff]/10 px-2.5 py-0.5 rounded-full border border-[#00a8ff]/20">
                      {job.department}
                    </span>
                    {job.featured && (
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Priority Role
                      </span>
                    )}
                    <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#00a8ff]" /> {job.location}
                    </span>
                    <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00a8ff]" /> {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#00a8ff] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-sm text-[#94a3b8] mt-2 max-w-3xl leading-relaxed">
                    {job.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#cbd5e1]">
                    <span className="bg-[#131b2e] px-3 py-1 rounded-md border border-[#1e293b]">
                      Compensation: <strong className="text-white">{job.compensation}</strong>
                    </span>
                    <span className="bg-[#131b2e] px-3 py-1 rounded-md border border-[#1e293b]">
                      Exp: <strong className="text-white">{job.experience}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleOpenApplyModal(job)}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#38bdf8] transition-all cursor-pointer shadow-md group-hover:shadow-[0_0_20px_rgba(0,168,255,0.4)]"
                  >
                    <span>View Role & Apply</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TALENT POOL / GENERAL APPLICATION CARD */}
          <div className="mt-8 bg-gradient-to-r from-[#0b0f19] via-[#11192e] to-[#0b0f19] border border-[#00a8ff]/40 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#00a8ff]/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase">
                  OPEN TALENT NETWORK
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                  DON’T SEE YOUR EXACT ROLE? PITCH US YOUR SUPERPOWER.
                </h3>
                <p className="text-sm text-[#94a3b8] mt-2 leading-relaxed">
                  We are always eager to meet world-class software engineers, ML researchers, technical growth leads, and high-agency operators. If you think you can accelerate our mission, tell us what you'd build.
                </p>
              </div>

              <button
                onClick={handleOpenGeneralModal}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#00a8ff] transition-all cursor-pointer shrink-0"
              >
                <span>Submit General Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BENEFITS & PERKS (WHAT YOU GET) */}
      <section className="py-24 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-2">
              WHY BUILD WITH US
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
              PERKS & UNFAIR ADVANTAGES
            </h2>
            <p className="text-base text-[#94a3b8] mt-4">
              We treat our team like professional athletes. We provide the tools, freedom, and compensation you need to perform at the highest possible caliber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-8 hover:border-[#00a8ff]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FOUNDER NOTE & PHOTO SECTION */}
      <section className="py-24 border-b border-[#1e293b] bg-[#04060d]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#1e293b] shadow-2xl">
                <img
                  src="/assets/about.jpeg"
                  alt="David Waihenya"
                  className="w-full h-[460px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-transparent opacity-80" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#060813]/90 backdrop-blur-md border border-[#1e293b]">
                  <div className="text-sm font-black text-white uppercase">David Waihenya</div>
                  <div className="text-xs text-[#00a8ff] font-mono mt-0.5">Founder, Author & AI Software Engineer</div>
                  <div className="text-[11px] text-[#94a3b8] mt-1">BSc Computer Science, First Class Honours · University of Embu</div>
                </div>
              </div>
            </div>

            {/* Note Content */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3">
                A NOTE FROM THE FOUNDER
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-5">
                "YOUR DEGREE IS AN INVITATION. YOUR COMPETENCE IS YOUR DESTINY."
              </h2>
              
              <div className="space-y-4 text-base text-[#94a3b8] leading-relaxed">
                <p>
                  When I walked across the graduation stage with First Class Honors, the celebrations lasted for an afternoon. But the rent, the market, and the ambition didn’t care about a piece of paper.
                </p>
                <p>
                  I learned that real freedom doesn't come from waiting for an employer to save you. It comes from building skills that are so sharp and valuable that businesses literally cannot afford to ignore you.
                </p>
                <p>
                  That’s why I created Waihenya Ventures, AI Solution Studio, and our builder programs. We are proving that young developers and operators from Kenya and across the continent can engineer world-class AI, build profitable ventures, and compete with Silicon Valley on sheer quality and work ethic.
                </p>
                <p className="text-white font-semibold pt-2">
                  If that fire burns inside you, come build with us. You won't just get a job—you'll get an acceleration in your trajectory that will alter the course of your life.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1e293b] flex items-center gap-4">
                <a
                  href="#roles"
                  className="inline-flex items-center gap-2 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#38bdf8] transition-all cursor-pointer"
                >
                  <span>Apply to Open Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('story')}
                    className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#00a8ff] transition-colors cursor-pointer"
                  >
                    Read My Full Story &rarr;
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. BUILDER LIFE & WORK MOSAIC (Visual Proof) */}
      <section className="py-20 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-1">
                OUR ENVIRONMENT
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                INSIDE THE LAB & COMMUNITY
              </h2>
            </div>
            <div className="text-xs text-[#94a3b8] font-mono">
              Obsessed with high-leverage software & relentless growth.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#1e293b] aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Collaborative engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase font-sans">Sprint Collaboration</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#1e293b] aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                alt="Code and engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase font-sans">Deep Work Blocks</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#1e293b] aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
                alt="Keynote presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase font-sans">Builder Summits</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#1e293b] aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                alt="Hackathon and builders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase font-sans">Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM NEWSLETTER STRIP (Matching Site System) */}
      <section className="bg-[#0b0f19] border-t border-[#1e293b] py-16">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase">
            STAY ON THE RADAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-2 font-sans">
            THE WAIHENYA METHOD DISPATCH
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-xl mx-auto mt-2">
            Weekly tactics on AI engineering, venture scaling, and moving from skills to wealth. No fluff. Just executable blueprints.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You're subscribed to The Waihenya Method.");
            }}
            className="max-w-md mx-auto mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-[#131b2e] border border-[#1e293b] rounded-full px-5 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
            />
            <button
              type="submit"
              className="bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#38bdf8] transition-all cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 10. INTERACTIVE APPLICATION MODAL */}
      <AnimatePresence>
        {(activeJobForModal || isGeneralApplicationOpen) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0b0f19] border border-[#1e293b] rounded-3xl max-w-2xl w-full p-6 sm:p-8 my-8 relative shadow-2xl text-left overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveJobForModal(null);
                  setIsGeneralApplicationOpen(false);
                }}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#00a8ff] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                /* Success State */
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00a8ff]/20 border border-[#00a8ff] text-[#00a8ff] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    APPLICATION RECEIVED!
                  </h3>
                  <p className="text-sm text-[#94a3b8] max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName || 'Builder'}</span>. We review every single application with extreme care. If your skills and hunger match what we are building, we will reach out within 48–72 hours.
                  </p>
                  <button
                    onClick={() => {
                      setActiveJobForModal(null);
                      setIsGeneralApplicationOpen(false);
                      setIsSubmitted(false);
                    }}
                    className="mt-8 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-[#38bdf8] transition-all cursor-pointer"
                  >
                    Done & Return
                  </button>
                </div>
              ) : (
                /* Application Form */
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase">
                      {isGeneralApplicationOpen ? 'TALENT NETWORK' : activeJobForModal?.department}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                      {isGeneralApplicationOpen ? 'General Application / Pitch Your Superpower' : activeJobForModal?.title}
                    </h3>
                    <p className="text-xs text-[#94a3b8] mt-1 font-mono">
                      {isGeneralApplicationOpen
                        ? 'Tell us how you can accelerate our ventures or engineering labs.'
                        : `${activeJobForModal?.location} · ${activeJobForModal?.type} · ${activeJobForModal?.compensation}`}
                    </p>
                  </div>

                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Kamau"
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+254 700 000 000"
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          Experience Level
                        </label>
                        <select
                          value={formData.yearsExperience}
                          onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00a8ff]"
                        >
                          <option value="0-1">0-1 Years (Hungry Junior / Student)</option>
                          <option value="1-3">1-3 Years (Mid-Level Builder)</option>
                          <option value="3-5">3-5 Years (Senior Engineer)</option>
                          <option value="5+">5+ Years (Staff / Lead / Architect)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          GitHub / Portfolio URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          placeholder="https://github.com/username"
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                          LinkedIn or X (Twitter)
                        </label>
                        <input
                          type="url"
                          value={formData.linkedIn}
                          onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                        What is the most impressive or difficult thing you've built? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.superpower}
                        onChange={(e) => setFormData({ ...formData, superpower: e.target.value })}
                        placeholder="Tell us about a challenging system, project, AI agent, or business you created from scratch..."
                        className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl p-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#cbd5e1] mb-1">
                        Why Waihenya Ventures? What excites you about our mission?
                      </label>
                      <textarea
                        rows={2}
                        value={formData.whyUs}
                        onChange={(e) => setFormData({ ...formData, whyUs: e.target.value })}
                        placeholder="Tell us why you want to build alongside our team..."
                        className="w-full bg-[#131b2e] border border-[#1e293b] rounded-xl p-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff]"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#1e293b]">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveJobForModal(null);
                          setIsGeneralApplicationOpen(false);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] hover:text-white px-5 py-2.5 rounded-full cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-[#38bdf8] transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
