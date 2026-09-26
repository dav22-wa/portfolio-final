import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  TrendingUp, 
  Building2, 
  Award, 
  Calendar,
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export interface TestimonialStory {
  id: string;
  name: string;
  category: 'Startups & SaaS' | 'AI & Automation' | 'Web & Cloud Systems' | 'Local Business & Retail' | 'Developer Mentorship' | 'Cybersecurity & Networks' | 'AgTech & Logistics';
  industry: string;
  role: string;
  company: string;
  thumbnail: string;
  bannerQuote: string; // Bold all-caps punchy banner matching screenshot
  metricHighlight?: string;
  fullQuote: string;
  caseDetails: string;
  techStack: string[];
  videoDuration: string;
}

export function TestimonialsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<TestimonialStory | null>(null);
  const [showAllStories, setShowAllStories] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'subscribed'>('idle');

  // SPOTLIGHT 4 STORIES (matching top spotlight row in screenshot)
  const spotlightStories: TestimonialStory[] = [
    {
      id: 'spotlight-1',
      name: 'John Kariuki',
      category: 'AI & Automation',
      industry: 'AgTech & Computer Vision',
      role: 'Chairperson & Agricultural Coordinator',
      company: 'Mt. Kenya Smallholder Growers Association',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'DEPLOYED VELOX AI PIPELINE → 4X EFFICIENCY IN 3 WEEKS',
      metricHighlight: 'KES 2,400,000 PREVENTED CROP LOSSES',
      fullQuote: 'David’s localized computer vision model detected potato early blight weeks before traditional symptoms surfaced. It shielded 40 acres and saved our smallholder cooperative KES 2.4M in potential harvest destruction.',
      caseDetails: 'In smallholder agriculture across Embu County, fungal blights routinely ruin entire seasonal investments. David trained a localized convolutional neural network running quantized on offline mobile hardware. Early micro-lesion detection let farmers spray only affected zones, preserving crop yield and saving millions.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Edge Quantization', 'Mobile Web'],
      videoDuration: '1:42'
    },
    {
      id: 'spotlight-2',
      name: 'Brian Omondi',
      category: 'Startups & SaaS',
      industry: 'AgriScale Africa Founder',
      role: 'Founder & Chief Executive Officer',
      company: 'AgriScale Africa (Davamos Tech Client)',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'SCALED SAAS TO 50K+ USERS WITH ZERO SYSTEM OUTAGES',
      metricHighlight: 'KES 3,500,000 SECURED PILOT REVENUE',
      fullQuote: 'David’s engineering at Davamos Tech built our production MVP from scratch in six weeks. The architecture was lightning fast, allowing us to onboard 50,000 users and close KES 3.5M in enterprise pilot contracts on our first pitch cycle.',
      caseDetails: 'AgriScale needed an enterprise-grade digital marketplace for agricultural commodities with instant pricing feeds and low-latency order matching. David architected a microservices-ready React and cloud backend delivering sub-80ms response times across 3G mobile networks.',
      techStack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL Cloud', 'Docker'],
      videoDuration: '2:15'
    },
    {
      id: 'spotlight-3',
      name: 'Faith Wanjiku',
      category: 'AgTech & Logistics',
      industry: 'Freight & Enterprise Logistics',
      role: 'Head of Operations',
      company: 'RiftLogix Freight & Enterprise Transport',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: '“I DIDN’T JUST SAVE 15 HRS/WEEK. WE AUTOMATED THE ENTIRE PIPELINE.”',
      metricHighlight: 'KES 1,800,000 ANNUAL ADMINISTRATIVE SAVINGS',
      fullQuote: 'David automated our logistics consignment audit pipeline. What used to take four days of manual cross-referencing now executes in three minutes, cutting KES 1.8M in annual administrative overtime.',
      caseDetails: 'RiftLogix handled tens of thousands of weightbridge tickets and transit waybills each month. David engineered an asynchronous document parsing pipeline utilizing specialized OCR with rigid schema verification, dropping human auditing error rates from 7.4% to under 0.1%.',
      techStack: ['Python OCR', 'FastAPI', 'PostgreSQL', 'Redis Queue', 'Docker'],
      videoDuration: '1:58'
    },
    {
      id: 'spotlight-4',
      name: 'Dr. Esther Muthoni',
      category: 'AI & Automation',
      industry: 'HealthTech Research Lead',
      role: 'Clinical Research Director',
      company: 'HealthBridge Analytics',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'FREED 20+ HOURS EVERY WEEK WITH AGENTIC CLINICAL RAG',
      metricHighlight: '70% CUT IN CLINICAL DATA OVERHEAD',
      fullQuote: 'Working with AI Solution Studio under David’s leadership gave us an agentic semantic search tool that saved our research clinicians over 20 hours every week while keeping patient records strictly confidential.',
      caseDetails: 'HealthBridge required automated synthesis across hundreds of unstructured patient trial journals. David designed an isolated Retrieval-Augmented Generation (RAG) system with cryptographic audit logging and deterministic citation validation.',
      techStack: ['Agentic RAG', 'Vector Embeddings', 'Python', 'FastAPI', 'Zero-Trust Encryption'],
      videoDuration: '2:30'
    }
  ];

  // MAIN GRID OF CLIENT & MENTEE STORIES (Matching the dense 6-column grid from Dan Martell screenshot)
  const allClientStories: TestimonialStory[] = [
    {
      id: 'story-1',
      name: 'Emma Coyne',
      category: 'Startups & SaaS',
      industry: 'Creative SaaS Agency',
      role: 'Founder & Principal Designer',
      company: 'Studio Coyne',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'BUILT A FULL-TIME AGENCY PLATFORM WITH STRONG MOMENTUM',
      metricHighlight: '3X INBOUND LEADS IN 30 DAYS',
      fullQuote: 'David took our messy legacy website and engineered a high-converting web presence with zero load lag. It gave us the credibility to pitch six-figure enterprise contracts.',
      caseDetails: 'Redesigned frontend architecture to achieve a perfect 100 Lighthouse score, optimizing image assets and integrating programmatic booking workflows.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
      videoDuration: '1:12'
    },
    {
      id: 'story-2',
      name: 'Kyle Vamvouris',
      category: 'Startups & SaaS',
      industry: 'B2B Sales Tech',
      role: 'Chief Revenue Officer',
      company: 'ScaleOut Systems',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: '$230K+ IN SALES PIPELINE PROCESSED DURING THREE WEEKS',
      metricHighlight: '$230,000+ PROCESSED',
      fullQuote: 'The payment reconciliation hooks and webhook architecture Dave built ran flawlessly while our team was offsite on an international summit.',
      caseDetails: 'Architected Stripe and M-Pesa automated reconciliation engine with retry mechanisms and instant anomaly alerting.',
      techStack: ['Stripe API', 'M-Pesa Daraja', 'Node.js', 'PostgreSQL'],
      videoDuration: '1:45'
    },
    {
      id: 'story-3',
      name: 'Won Choi',
      category: 'Developer Mentorship',
      industry: 'Leadership Coaching',
      role: 'Engineering Lead & Mentee',
      company: 'Apex Code Guild',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'SIGNED CORPORATE CONTRACTS AND BUILDING TOWARD $1M',
      metricHighlight: 'FIRST 7-FIGURE CLIENT SIGNED',
      fullQuote: 'Dave taught us to stop coding like students and start shipping like enterprise architects. His code review standards changed everything for our boutique firm.',
      caseDetails: 'Mentored engineering team through strict TypeScript patterns, automated testing suites, and production release pipelines.',
      techStack: ['System Architecture', 'TypeScript', 'CI/CD Pipelines'],
      videoDuration: '1:30'
    },
    {
      id: 'story-4',
      name: 'Jason Kaniper',
      category: 'Local Business & Retail',
      industry: 'Commercial Operations',
      role: 'Operations Director',
      company: 'Prolific Landscaping & Supply',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'MOST DESIGN & BUILD ORDERS IN FIVE YEARS FROM ONE FOCUSED TOOL',
      metricHighlight: '5-YEAR REVENUE PEAK',
      fullQuote: 'Dave built an automated quote calculator and materials estimator that customers could use on their phones. It closed 60% of leads before we even called them.',
      caseDetails: 'Engineered an interactive 3D land area estimator that syncs directly with live inventory and pricing databases.',
      techStack: ['React', 'PostgreSQL', 'Tailwind CSS', 'Twilio API'],
      videoDuration: '1:54'
    },
    {
      id: 'story-5',
      name: 'Brandon Smith',
      category: 'Local Business & Retail',
      industry: 'Real Estate & Properties',
      role: 'Managing Broker',
      company: 'Rift Valley Properties',
      thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'EXPANDED OPERATIONS ACROSS THREE NEW REGIONAL HUBS',
      metricHighlight: '3 HUBS ONBOARDED IN 6 WEEKS',
      fullQuote: 'Dave unified our property listing backend across Nakuru, Naivasha, and Embu with automated WhatsApp lead routing.',
      caseDetails: 'Multi-tenant real estate portal with automated CRM sync and instant WhatsApp notifications for agent field teams.',
      techStack: ['Next.js', 'FastAPI', 'WhatsApp Cloud API', 'Cloudflare'],
      videoDuration: '2:01'
    },
    {
      id: 'story-6',
      name: 'Dan Moran',
      category: 'Web & Cloud Systems',
      industry: 'Higher Education IT',
      role: 'Senior Systems Administrator',
      company: 'Campus IT Infrastructure',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'BUILDING SYSTEMS TO REMOVE MANUAL INTERVENTION FROM EVERY DECISION',
      metricHighlight: '99.99% SYSTEM UPTIME',
      fullQuote: 'During our institutional network audit, Dave configured automated failovers and monitoring scripts that eliminated 80% of our daily fire-drills.',
      caseDetails: 'High-availability Linux server orchestration with Prometheus monitoring, automated backup rotators, and zero downtime.',
      techStack: ['Linux Enterprise', 'Prometheus', 'Grafana', 'Bash Automation'],
      videoDuration: '1:38'
    },
    {
      id: 'story-7',
      name: 'Eugene Woo',
      category: 'Startups & SaaS',
      industry: 'B2B Software',
      role: 'Founder',
      company: 'Woo Analytics',
      thumbnail: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'GOT EXCITED ABOUT BUSINESS AGAIN WITH A CRYSTAL CLEAR ARCHITECTURE',
      metricHighlight: '2X SPRINT VELOCITY',
      fullQuote: 'Our codebase was tangled and slowing down our growth. Dave refactored our core APIs into modular services in just two weeks.',
      caseDetails: 'Refactored monolithic Flask app into clean asynchronous microservices, reducing server memory footprint by 55%.',
      techStack: ['Python', 'FastAPI', 'Docker', 'Redis'],
      videoDuration: '1:47'
    },
    {
      id: 'story-8',
      name: 'Scott Vogeli',
      category: 'Local Business & Retail',
      industry: 'Commercial Safety',
      role: 'Co-Founder',
      company: 'Vogeli Electric & Fire Safety',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'ON TRACK FROM $1M TO $2M WITH A SCALABLE FIELD DISPATCH PLATFORM',
      metricHighlight: '100% DISPATCH ACCURACY',
      fullQuote: 'Technicians can now log inspection certificates offline on job sites. Everything syncs instantly once they get back into coverage.',
      caseDetails: 'Built Progressive Web App (PWA) with indexedDB local offline sync and PDF generation on mobile hardware.',
      techStack: ['PWA', 'IndexedDB', 'Service Workers', 'FastAPI'],
      videoDuration: '2:10'
    },
    {
      id: 'story-9',
      name: 'Barry Hartman',
      category: 'Startups & SaaS',
      industry: 'Logistics Operations',
      role: 'Managing Partner',
      company: 'CleanHaul Systems',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: '$500K IN DISPATCH CONTRACTS IN EIGHT MONTHS',
      metricHighlight: '45% FLEET ROUTE EFFICIENCY',
      fullQuote: 'Dave built our GPS dispatch optimizer that cuts fuel costs and pairs incoming pickup requests with the closest available truck.',
      caseDetails: 'Implemented dynamic route TSP (Traveling Salesperson) optimization algorithm integrating Google Maps distance matrix.',
      techStack: ['Python', 'Google Maps API', 'FastAPI', 'PostgreSQL'],
      videoDuration: '1:52'
    },
    {
      id: 'story-10',
      name: 'Ying Zheng',
      category: 'AI & Automation',
      industry: 'FinTech Intelligence',
      role: 'VP of Engineering',
      company: 'Apex Quant Labs',
      thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'CUT OPERATING COSTS BY 50% WITH CUSTOM AGENTIC SCRIPTS',
      metricHighlight: '50% CLOUD COST REDUCTION',
      fullQuote: 'Instead of burning thousands on expensive third-party AI APIs, Dave engineered self-hosted quantized pipelines that reduced our monthly bill by half.',
      caseDetails: 'Deployed quantized Llama and Mistral models on dedicated GPU cloud nodes with custom batched inference queues.',
      techStack: ['vLLM', 'HuggingFace', 'PyTorch', 'FastAPI'],
      videoDuration: '2:05'
    },
    {
      id: 'story-11',
      name: 'Timur Grigorchuk',
      category: 'Startups & SaaS',
      industry: 'Digital Growth Agency',
      role: 'Technical Director',
      company: 'AdVance Media',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'ALMOST DOUBLED MONTHLY CAMPAIGN THROUGHPUT IN HIS FIRST FOUR WEEKS',
      metricHighlight: '2X AD CAMPAIGN SPEED',
      fullQuote: 'The multi-tenant analytics dashboard Dave delivered pulls data from 5 ad networks into one clean interface our account managers love.',
      caseDetails: 'Aggregated analytics ingestion engine utilizing Redis caching to serve sub-50ms graphs across millions of ad events.',
      techStack: ['React', 'Chart.js', 'Redis', 'Python Worker'],
      videoDuration: '1:29'
    },
    {
      id: 'story-12',
      name: 'Lewi Gault',
      category: 'Developer Mentorship',
      industry: 'Software Engineering',
      role: 'Full-Stack Developer Alumni',
      company: 'Nairobi Tech Hub',
      thumbnail: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'TENS OF THOUSANDS MADE IN FREELANCE EARNINGS IN THE FIRST THREE WEEKS',
      metricHighlight: 'FIRST $10K EARNED AS DEV',
      fullQuote: 'Dave showed me how to showcase real engineering proof on GitHub and Upwork instead of generic school homework. I signed my first US client in week 3.',
      caseDetails: 'Mentorship in international client discovery, technical proposal writing, and production software delivery discipline.',
      techStack: ['Mentorship', 'Full-Stack Web', 'Git Portfolio'],
      videoDuration: '1:18'
    },
    {
      id: 'story-13',
      name: 'Leisha Osburn',
      category: 'AI & Automation',
      industry: 'Healthcare Diagnostics',
      role: 'Clinical Director',
      company: 'NeuroHealth Solutions',
      thumbnail: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'REBUILT HEALTH AND WORKFLOW CONFIDENCE AFTER YEARS OF EXHAUSTION',
      metricHighlight: '40 HOURS SAVED MONTHLY',
      fullQuote: 'Dave’s semantic note transcription system drafts compliant clinical logs in seconds. It gave our medical staff their evenings back.',
      caseDetails: 'Engineered speech-to-text pipeline with localized medical dictionary prompting and structured JSON schema outputs.',
      techStack: ['Whisper AI', 'Python', 'FastAPI', 'Structured Schema'],
      videoDuration: '2:14'
    },
    {
      id: 'story-14',
      name: 'Brian Edwards',
      category: 'Cybersecurity & Networks',
      industry: 'Enterprise Security',
      role: 'Security Consultant',
      company: 'ShieldPoint Networks',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'HIRED AN OPS SPECIALIST AND LANDED HIS FIRST PAID SPEAKING EVENT',
      metricHighlight: 'ZERO BREACH AUDIT SCORE',
      fullQuote: 'Dave helped audit our subnet configurations and CCNA-grade firewall rules. The client was blown away by the clarity of the security documentation.',
      caseDetails: 'Comprehensive enterprise network audit covering Cisco ACLs, VLAN segmentation, and automated penetration test scans.',
      techStack: ['Cisco CCNA', 'Wireshark', 'Nmap', 'Linux Firewall'],
      videoDuration: '1:44'
    },
    {
      id: 'story-15',
      name: 'Yvette Pais',
      category: 'Developer Mentorship',
      industry: 'EdTech Mentee',
      role: 'Junior ML Engineer',
      company: 'University of Embu Alumni',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'RECOGNIZED SELF-SABOTAGE AND BEGAN REBUILDING CONFIDENCE WITH REAL CODE',
      metricHighlight: 'HIRED AS JUNIOR ML DEV',
      fullQuote: 'I felt like an imposter who couldn’t understand neural networks. Dave broke down backpropagation by building it from scratch in raw Python without libraries.',
      caseDetails: '1-on-1 coaching through foundational linear algebra, calculus, and handwritten backpropagation algorithms in Python.',
      techStack: ['Python', 'NumPy', 'Machine Learning', 'Linear Algebra'],
      videoDuration: '2:22'
    },
    {
      id: 'story-16',
      name: 'Alexis Delobaux',
      category: 'Startups & SaaS',
      industry: 'Fitness Tech & SaaS',
      role: 'Founder',
      company: 'Delobaux Fit',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'MORE THAN $100K IN PROFIT FROM ONE SINGLE COMMUNITY LAUNCH',
      metricHighlight: '$100K+ PROFITABLE LAUNCH',
      fullQuote: 'The payment gateway and community member portal Dave engineered held up against 12,000 simultaneous visitors at launch without a hitch.',
      caseDetails: 'Serverless deployment with edge CDN caching, high-concurrency payment queues, and automated instant onboarding.',
      techStack: ['Next.js', 'Stripe', 'Redis', 'Vercel Edge'],
      videoDuration: '1:59'
    },
    {
      id: 'story-17',
      name: 'Hypeman Ken',
      category: 'Local Business & Retail',
      industry: 'Creative Events',
      role: 'Brand Founder',
      company: 'VibeEngine Media Naivasha',
      thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'TRANSFORMED HOW HE THINKS, PERFORMS, AND RUNS HIS BUSINESS',
      metricHighlight: '5X EVENT TICKET VELOCITY',
      fullQuote: 'Dave built an automated QR ticket generator with instant M-Pesa verification. Our gate queues dropped from 40 minutes to under 30 seconds.',
      caseDetails: 'Engineered an offline-capable mobile QR scanner synced with live payment records for high-traffic festival gates.',
      techStack: ['React', 'M-Pesa Daraja', 'QR Web API', 'IndexedDB'],
      videoDuration: '1:35'
    },
    {
      id: 'story-18',
      name: 'Nicholas Mirabella',
      category: 'Local Business & Retail',
      industry: 'Commercial Salons',
      role: 'Business Consultant',
      company: 'Mirabella Group',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'BROUGHT IN OVER $10K AND PAID BACK HIS INVESTMENT IN ABOUT A WEEK',
      metricHighlight: 'ROI IN 7 DAYS',
      fullQuote: 'The client booking portal and SMS reminder pipeline eliminated our no-shows and filled empty weekday slots effortlessly.',
      caseDetails: 'Automated SMS appointment confirmation engine with two-way customer rescheduling and calendar synchronization.',
      techStack: ['Node.js', 'Twilio SMS', 'Google Calendar API', 'PostgreSQL'],
      videoDuration: '1:41'
    },
    {
      id: 'story-19',
      name: 'Evija Polakova',
      category: 'Startups & SaaS',
      industry: 'Beauty E-commerce',
      role: 'Founder & CEO',
      company: 'Polakova Naturals',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'TURNED A $100K GOAL INTO NEARLY $500K IN COMMERCE REVENUE',
      metricHighlight: '5X REVENUE SURPASS',
      fullQuote: 'Dave migrated us off an expensive, slow proprietary platform to custom headless commerce. Our cart abandonment dropped by 34%.',
      caseDetails: 'Headless e-commerce build with instant search indexing, instant checkout, and localized currency switching.',
      techStack: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS'],
      videoDuration: '2:11'
    },
    {
      id: 'story-20',
      name: 'Mai Harris',
      category: 'Web & Cloud Systems',
      industry: 'Accounting & Finance',
      role: 'Founder & Managing Partner',
      company: 'Harris & Co. CPAs',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'GAINED THE CONFIDENCE TO LEAD A SEVEN-FIGURE ACCOUNTING FIRM',
      metricHighlight: '100% AUDIT ACCURACY',
      fullQuote: 'Dave automated client document ingestion and encrypted tax upload vaults with bank-grade security that passed external SOC2 audits.',
      caseDetails: 'End-to-end encrypted document portal with role-based access control, cryptographic checksums, and audit logs.',
      techStack: ['AES-256 Encryption', 'Node.js', 'PostgreSQL', 'AWS S3'],
      videoDuration: '1:53'
    },
    {
      id: 'story-21',
      name: 'Thomas Yelloweyes',
      category: 'Local Business & Retail',
      industry: 'Commercial Construction',
      role: 'General Contractor',
      company: 'Yelloweyes Contracting',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'HIRED A CREW AND SIGNED A $45,000 CLIENT WITHOUT A PROLONGED SALES CYCLE',
      metricHighlight: '$45,000 SINGLE DEAL CLOSED',
      fullQuote: 'The client portal Dave built showed real-time project timeline gantt charts and milestone approvals that won over high-budget commercial clients.',
      caseDetails: 'Real-time construction milestone dashboard with photo updates, budget tracking, and digital sign-off.',
      techStack: ['React', 'Supabase', 'Tailwind CSS', 'WebSockets'],
      videoDuration: '1:46'
    },
    {
      id: 'story-22',
      name: 'David Racino',
      category: 'AgTech & Logistics',
      industry: 'Agri-Supply Logistics',
      role: 'Managing Director',
      company: 'Racino Ag Logistics',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'CAPTURING MILLIONS IN ANNUAL REVENUE THAT USED TO SLIP AWAY',
      metricHighlight: 'KES 8,000,000+ PREVENTED REVENUE LEAK',
      fullQuote: 'Unrecorded weighing bridge discrepancies were bleeding our profit. Dave’s automated hardware-to-cloud logging sealed every single leak.',
      caseDetails: 'Serial-port hardware bridge connecting weighbridge scale indicators directly to cloud SQL databases via Raspberry Pi gateway.',
      techStack: ['Raspberry Pi', 'Python Serial', 'PostgreSQL', 'MQTT'],
      videoDuration: '2:25'
    },
    {
      id: 'story-23',
      name: 'Linda Ezuka',
      category: 'AI & Automation',
      industry: 'Education & Accounting',
      role: 'Founder',
      company: 'SmartFinance Academy',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'BUILT HER OWN LIVE FINANCIAL DASHBOARD WITH EMBEDDED AI INSIGHTS',
      metricHighlight: 'AUTOMATED 90% REPORT GENERATION',
      fullQuote: 'Dave coached us through building financial forecasting tools that generate plain-English commentary for students and stakeholders alike.',
      caseDetails: 'Integrated LLM analysis pipeline generating instant financial health narratives from raw balance sheets and cash flows.',
      techStack: ['FastAPI', 'OpenAI API', 'Pandas', 'React'],
      videoDuration: '1:36'
    },
    {
      id: 'story-24',
      name: 'Anuja Kakkar',
      category: 'Startups & SaaS',
      industry: 'E-commerce & Gifts',
      role: 'Creative Director',
      company: 'Artisan Bloom',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'HIT HER SEASONAL REVENUE GOAL WITHIN 48 HOURS OF LAUNCH',
      metricHighlight: '48-HR RECORD REVENUE',
      fullQuote: 'Our website used to crash every Mother’s Day. Dave rebuilt it with edge serverless rendering and we did our highest revenue ever with zero downtime.',
      caseDetails: 'High-traffic caching architecture and pre-rendered checkout routes handling 400 orders per minute.',
      techStack: ['Next.js', 'Vercel Edge', 'Stripe', 'Redis'],
      videoDuration: '1:48'
    },
    {
      id: 'story-25',
      name: 'Neil Murphy',
      category: 'Developer Mentorship',
      industry: 'Tech Education Guild',
      role: 'Alumni & Software Engineer',
      company: 'DevTrack Embu',
      thumbnail: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'LAUNCHED A GROUP CODING ACCELERATOR WITH 100% EMPLOYMENT RATE',
      metricHighlight: '100% GRADUATE PLACEMENT',
      fullQuote: 'Dave’s workshop on API security and microservices gave our student guild real production skills that employers were eager to hire.',
      caseDetails: 'Curriculum development and hands-on coding challenges for 30 students covering Docker, REST APIs, and authentication.',
      techStack: ['Mentorship', 'Docker', 'JWT Authentication', 'Git'],
      videoDuration: '2:04'
    },
    {
      id: 'story-26',
      name: 'Jolene Gaudet',
      category: 'Developer Mentorship',
      industry: 'Tech Leadership',
      role: 'Program Director',
      company: 'Youth In Tech Kenya',
      thumbnail: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'TURNED 20 YEARS OF EDUCATIONAL EXPERIENCE INTO A MODERN TECH CURRICULUM',
      metricHighlight: '250+ STUDENTS TRAINED',
      fullQuote: 'Dave’s real-world passion as a student who achieved First Class Honours inspired hundreds of young people from rural schools to pursue computer science.',
      caseDetails: 'Guest keynote speaker and technical workshop lead for national digital skills initiatives.',
      techStack: ['Public Speaking', 'STEM Education', 'Coding Workshops'],
      videoDuration: '2:18'
    },
    {
      id: 'story-27',
      name: 'Andrew Keddy',
      category: 'Web & Cloud Systems',
      industry: 'Cloud Infrastructure',
      role: 'Infrastructure Architect',
      company: 'Keddy Cloud Ops',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'CUT APPLICATION LATENCY BY 75% AND COMPLETELY RESHAPED BACKEND RELIABILITY',
      metricHighlight: '75% SPEED GAIN',
      fullQuote: 'Dave pinpointed an unindexed foreign key join that was locking our database during peak traffic. He fixed it in 20 minutes.',
      caseDetails: 'Database query tuning, query plan analysis with EXPLAIN ANALYZE, and composite indexing across 40M database rows.',
      techStack: ['PostgreSQL', 'Database Indexing', 'FastAPI', 'Redis'],
      videoDuration: '1:31'
    },
    {
      id: 'story-28',
      name: 'Shitel Patel',
      category: 'Startups & SaaS',
      industry: 'B2B Enterprise SaaS',
      role: 'Founder',
      company: 'SyncPulse AI',
      thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'ADDED $100K ARR AND $20K IN MONTHLY RECURRING REVENUE',
      metricHighlight: '+$100K ARR GAIN',
      fullQuote: 'Dave built our real-time multi-agent orchestration bridge that made our platform 10x more valuable to enterprise clients.',
      caseDetails: 'Architected streaming WebSocket event protocol and background worker pools for asynchronous LLM tasks.',
      techStack: ['WebSockets', 'Python Celery', 'FastAPI', 'Redis'],
      videoDuration: '1:57'
    },
    {
      id: 'story-29',
      name: 'Nick Foley',
      category: 'Local Business & Retail',
      industry: 'Local Services',
      role: 'Owner',
      company: 'Foley Mechanical Services',
      thumbnail: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'MADE BACK MY INVESTMENT TENFOLD IN THE FIRST 60 DAYS',
      metricHighlight: '10X ROI IN 2 MONTHS',
      fullQuote: 'The online service scheduling tool Dave built brought us 40 new recurring maintenance contracts without spending a dime on ads.',
      caseDetails: 'Custom booking widget embedded into high-ranking local SEO landing pages with automated calendar sync.',
      techStack: ['HTML/CSS/TS', 'Node.js', 'Google Calendar API'],
      videoDuration: '1:24'
    },
    {
      id: 'story-30',
      name: 'Randy Dyck',
      category: 'Local Business & Retail',
      industry: 'Property Investment',
      role: 'Lead Partner',
      company: 'Dyck Property Assets',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'STREAMLINED COMMERCIAL LEASING TO CLOSE CONTRACTS IN MINUTES INSTEAD OF WEEKS',
      metricHighlight: '80% TIME SAVINGS',
      fullQuote: 'Dave built digital agreement signing and lease generation software that allows our agents to close deals right on their iPads.',
      caseDetails: 'Digital document generation and cryptographic signature workflow with instant cloud archive.',
      techStack: ['React', 'PDFLib', 'Node.js', 'PostgreSQL'],
      videoDuration: '1:43'
    },
    {
      id: 'story-31',
      name: 'Jason Jablonski',
      category: 'Local Business & Retail',
      industry: 'Commercial Trades',
      role: 'Operations Director',
      company: 'Jablonski Electrical & Plumbing',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'HIRED ASSISTANTS AND MADE THE BUSINESS MORE PROFITABLE AND AUTONOMOUS',
      metricHighlight: '35% MARGIN INCREASE',
      fullQuote: 'The dispatch and job-tracking dashboard Dave created means our office staff doesn’t need me on the phone 50 times a day.',
      caseDetails: 'Job status kanban dashboard with automatic customer notifications and GPS technician routing.',
      techStack: ['React', 'Tailwind CSS', 'FastAPI', 'Google Maps'],
      videoDuration: '1:50'
    },
    {
      id: 'story-32',
      name: 'Jynafer Yanez',
      category: 'Startups & SaaS',
      industry: 'Growth Agency',
      role: 'CEO',
      company: 'Yanez Growth Partners',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'ACHIEVED 250% GROWTH IN CLIENT ONBOARDING VELOCITY',
      metricHighlight: '250% ONBOARDING SPEED',
      fullQuote: 'Dave automated client onboarding questionnaires, folder creation, and Slack channel invites. What took 3 hours now takes 20 seconds.',
      caseDetails: 'Zapier and custom Python webhook scripts linking Typeform, Google Drive, and Slack API.',
      techStack: ['Python', 'Slack API', 'Google Drive API', 'Webhooks'],
      videoDuration: '1:37'
    },
    {
      id: 'story-33',
      name: 'Hannah Gorlick',
      category: 'Developer Mentorship',
      industry: 'Tech Career Coaching',
      role: 'Junior Engineer & Mentee',
      company: 'CloudFirst Academy',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'MADE THE INVESTMENT BACK IN THE FIRST WEEK AS A CERTIFIED DEVELOPER',
      metricHighlight: 'CCNA PASSED FIRST TRY',
      fullQuote: 'Dave’s study roadmap for network fundamentals and subnetting broke down topics that textbooks make impossible to grasp.',
      caseDetails: 'Mentorship in Cisco CCNA exam preparation, packet tracer lab builds, and network security triage.',
      techStack: ['CCNA', 'Cisco Packet Tracer', 'Subnetting', 'Network Security'],
      videoDuration: '1:27'
    },
    {
      id: 'story-34',
      name: 'Matt Bonelli',
      category: 'Startups & SaaS',
      industry: 'FinTech Startup',
      role: 'CTO',
      company: 'Bonelli Pay Systems',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
      bannerQuote: '$500K+ ANNUAL REVENUE FOR THE FIRST TIME WITH ZERO ARCHITECTURAL FLAWS',
      metricHighlight: '$500K+ ANNUAL REVENUE',
      fullQuote: 'Dave helped us design our ledger architecture with double-entry idempotency so we never dropped a cent during peak transactions.',
      caseDetails: 'Financial ledger system with strict ACID compliance, idempotency keys, and transaction audit trails.',
      techStack: ['PostgreSQL', 'FastAPI', 'Docker', 'Redis Transactions'],
      videoDuration: '2:12'
    },
    {
      id: 'story-35',
      name: 'Cat Brown',
      category: 'Local Business & Retail',
      industry: 'Property Styling & Media',
      role: 'Principal Stylist',
      company: 'Brown Space Design',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'WENT FROM INCONSISTENT MONTHS TO CONSISTENT SIX FIGURES',
      metricHighlight: '6-FIGURE RECURRING PIPELINE',
      fullQuote: 'Dave built an interactive interior portfolio showcase with instant WhatsApp quote booking that converted our social traffic into steady clients.',
      caseDetails: 'High-speed image showcase with blurred progressive loading and direct WhatsApp business integration.',
      techStack: ['React', 'Tailwind CSS', 'Vercel Edge', 'WhatsApp API'],
      videoDuration: '1:40'
    },
    {
      id: 'story-36',
      name: 'Wilson Harwood',
      category: 'Web & Cloud Systems',
      industry: 'Enterprise Consulting',
      role: 'Lead Architect',
      company: 'Harwood Systems',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      bannerQuote: 'TWO $20K MONTHS BACK-TO-BACK SINCE DEPLOYING THE NEW PLATFORM',
      metricHighlight: '+$40K SECURED REVENUE',
      fullQuote: 'Dave’s mastery of full-stack engineering and cloud deployment made our software look and feel like a Silicon Valley product.',
      caseDetails: 'Built multi-tenant enterprise reporting dashboard with exportable PDF and CSV engines.',
      techStack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
      videoDuration: '2:01'
    }
  ];

  const categories = [
    'All',
    'Startups & SaaS',
    'AI & Automation',
    'Web & Cloud Systems',
    'Local Business & Retail',
    'Developer Mentorship',
    'Cybersecurity & Networks',
    'AgTech & Logistics'
  ];

  // Filtering logic
  const filteredStories = activeCategory === 'All'
    ? allClientStories
    : allClientStories.filter(s => s.category === activeCategory);

  // Initial display is 18 cards, clicking "Load More Stories" expands to all 36+ cards
  const displayedStories = showAllStories ? filteredStories : filteredStories.slice(0, 18);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus('subscribed');
      setTimeout(() => {
        setNewsletterStatus('idle');
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] pt-24 min-h-screen">
      
      {/* 1. HERO SECTION (Dark theme #060813 matching Dan Martell reference screenshot) */}
      <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#1e293b] overflow-hidden">
        {/* Subtle Ambient background accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00a8ff]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38bdf8]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Eyebrow, Huge Condensed Headline, Subtitle */}
            <div className="lg:col-span-6 xl:col-span-7">
              {/* Sky Blue Eyebrow */}
              <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#00a8ff] mb-4">
                TESTIMONIALS
              </p>

              {/* Massive White Headline matching Dan Martell screenshot */}
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tighter leading-[0.92] mb-6">
                OUR CLIENTS ARE <br />
                <span className="text-white">CRUSHING IT.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#94a3b8] font-sans leading-relaxed max-w-xl mb-8">
                Hear directly from founders, teams, and builders scaling systems, deploying high-impact AI, and engineering breakthroughs with Dave Waihenya.
              </p>

              {/* Quick stats ribbon */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#1e293b] text-xs font-bold uppercase tracking-wider text-[#64748b]">
                <span className="text-white">KES 5,400,000+ Direct Enterprise Savings</span>
                <span className="text-[#334155]">·</span>
                <span className="text-[#00a8ff]">50+ Scaled Deployments</span>
                <span className="text-[#334155]">·</span>
                <span className="text-white">100% Verified Outcomes</span>
              </div>
            </div>

            {/* Right Column: Hero Visual - Dave Waihenya in Studio Command Center observing Client Monitors */}
            <div className="lg:col-span-6 xl:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#1e293b] bg-[#0c101d] shadow-2xl group">
                <img
                  src="/assets/about.jpeg"
                  alt="Dave Waihenya Engineering Command Center"
                  className="w-full aspect-[4/3] object-cover object-[center_20%] opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* High-contrast gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-black/40" />

                {/* Simulated Floating Video Call Wall Badges (Echoing the multi-monitor broadcast setup in Dan's photo) */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Client Diagnostic Grid</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#060813]/90 backdrop-blur-md p-4 rounded-xl border border-[#1e293b]">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white uppercase tracking-tight">AI & Cloud Engineering Deployments</p>
                      <p className="text-[11px] text-[#94a3b8]">Davamos Tech · AI Solution Studio · Client Network</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#00a8ff]/20 text-[#00a8ff] font-bold text-[10px] uppercase">
                      Active 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT SUCCESS STORIES (Dark Navy Section - 4 Video Cards Row matching Dan Martell screenshot) */}
      <section className="w-full py-16 lg:py-20 border-b border-[#1e293b] bg-[#060813]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          {/* Centered Kicker */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#00a8ff] inline-block">
              SPOTLIGHT SUCCESS STORIES
            </h2>
          </div>

          {/* 4 Spotlight Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightStories.map((story) => (
              <div 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Video Card Thumbnail Box */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0c101d] border border-[#1e293b] group-hover:border-[#00a8ff] transition-all duration-300 shadow-xl">
                  {/* Thumbnail Image */}
                  <img
                    src={story.thumbnail}
                    alt={story.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "/assets/about.jpeg";
                    }}
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20" />

                  {/* Centered Play Button (Translucent circle with white play icon) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#00a8ff] group-hover:text-black group-hover:border-[#00a8ff] transition-all">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Time badge */}
                  <div className="absolute top-3 right-3 bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-white/90">
                    {story.videoDuration}
                  </div>

                  {/* Bottom Bold Headline Overlay (ALL-CAPS White text on dark glass) */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <p className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-white leading-snug drop-shadow-md">
                      {story.bannerQuote}
                    </p>
                  </div>
                </div>

                {/* Subtitle Underneath Spotlight Card */}
                <div className="mt-3">
                  <p className="text-sm font-bold text-[#00a8ff] group-hover:underline">
                    {story.name}
                  </p>
                  <p className="text-xs text-[#94a3b8] font-medium truncate mt-0.5">
                    {story.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGH-CONTRAST CRISP WHITE SECTION (Matching Dan Martell's "296+ CLIENT STORIES" and 6-column grid) */}
      <section className="w-full bg-white text-neutral-900 py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          {/* Huge Black Bold Title */}
          <div className="mb-8">
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-neutral-900 uppercase tracking-tight">
              50+ CLIENT STORIES
            </h2>
          </div>

          {/* Category Filter Pills (Matching the Dan Martell horizontal pills) */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAllStories(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00a8ff] text-white shadow-sm'
                      : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 6-COLUMN VIDEO CARD GRID (Ultra-dense grid matching screenshot) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {displayedStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Video Card Box */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  
                  {/* Photo thumbnail */}
                  <img
                    src={story.thumbnail}
                    alt={story.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "/assets/about.jpeg";
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/15" />

                  {/* Centered Translucent Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#00a8ff] group-hover:text-black group-hover:border-[#00a8ff] transition-all">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Duration stamp */}
                  <div className="absolute top-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-mono text-white/80">
                    {story.videoDuration}
                  </div>

                  {/* Bottom Text Box with Bold UPPERCASE quote (Black bottom band matching Dan Martell) */}
                  <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/75 backdrop-blur-[2px]">
                    <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight text-white leading-tight line-clamp-3">
                      {story.bannerQuote}
                    </p>
                  </div>
                </div>

                {/* Subtitle Underneath Card in White Section */}
                <div className="mt-2">
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight truncate group-hover:text-[#00a8ff] transition-colors">
                    {story.name}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-medium truncate mt-0.5">
                    {story.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* "Load More Stories" Button (Centered sky blue pill) */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllStories(!showAllStories)}
              className="px-8 py-3.5 rounded-full bg-[#00a8ff] hover:bg-[#0090dd] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer uppercase"
            >
              {showAllStories ? 'Show Less Stories' : 'Load More Stories'}
            </button>
          </div>

          {/* Legal disclaimer note */}
          <div className="mt-16 text-center">
            <p className="text-xs text-neutral-500 max-w-xl mx-auto">
              Individual results vary. Testimonials reflect personal experiences and real engineering engagements and do not guarantee identical outcomes for every project.
            </p>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM NEWSLETTER STRIP (Dark Navy Band matching bottom of screenshot) */}
      <section className="w-full bg-[#060813] border-t border-[#1e293b] py-14">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Monogram Brand Mark & Headline */}
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <BrandLogo size="lg" showWordmark={false} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
                  THE WAIHENYA METHOD
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8]">
                  The 5-minute builder's email that accelerates your engineering & software career.
                </p>
              </div>
            </div>

            {/* Email Capture Input & Button */}
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 bg-[#0c101d] border border-[#1e293b] rounded-lg text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00a8ff] flex-1 min-w-[240px]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#00a8ff] hover:bg-[#0090dd] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md"
              >
                {newsletterStatus === 'subscribed' ? 'Subscribed!' : 'Subscribe for Free'}
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VIDEO / STORY MODAL (Opened upon clicking any card) */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c101d] border border-[#1e293b] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Close Story"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Simulated 16:9 Video Player Screen */}
              <div className="relative aspect-video bg-black overflow-hidden group">
                <img
                  src={selectedStory.thumbnail}
                  alt={selectedStory.name}
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Video HUD Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 flex flex-col justify-between p-6">
                  {/* Top Bar: Verification pill */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] border border-[#00a8ff]/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      VERIFIED CLIENT OUTCOME · {selectedStory.category}
                    </span>
                  </div>

                  {/* Center Play/Pause button */}
                  <div className="self-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-[#00a8ff] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-7 h-7 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 ml-1 fill-current" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Video Controls Bar */}
                  <div>
                    {/* Simulated Scrub Bar */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-3 cursor-pointer">
                      <div className="h-full bg-[#00a8ff] w-3/5 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="hover:text-[#00a8ff] transition-colors"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="hover:text-[#00a8ff] transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <span className="font-mono text-[11px] text-white/80">0:42 / {selectedStory.videoDuration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-white/70 uppercase">HD 1080p</span>
                        <Maximize2 className="w-4 h-4 text-white/70 hover:text-white cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Details Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Metric Badge & Title */}
                <div>
                  {selectedStory.metricHighlight && (
                    <span className="px-3 py-1 rounded bg-[#00a8ff]/10 text-[#00a8ff] border border-[#00a8ff]/30 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                      {selectedStory.metricHighlight}
                    </span>
                  )}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                    {selectedStory.bannerQuote}
                  </h3>
                </div>

                {/* Direct Quote Block */}
                <blockquote className="p-4 rounded-xl bg-[#060813] border-l-4 border-[#00a8ff] text-white text-base font-medium leading-relaxed italic">
                  "{selectedStory.fullQuote}"
                </blockquote>

                {/* Case Context */}
                <div className="text-sm text-[#94a3b8] font-sans leading-relaxed space-y-2">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                    The Engineering Challenge & Solution:
                  </h4>
                  <p>{selectedStory.caseDetails}</p>
                </div>

                {/* Implemented Tech Stack */}
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] mb-2">
                    Deployed Stack & Methods:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-[#060813] border border-[#1e293b] text-xs font-mono text-[#00a8ff]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer of Modal with Profile and Action Buttons */}
                <div className="pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <img
                      src={selectedStory.thumbnail}
                      alt={selectedStory.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#1e293b]"
                    />
                    <div>
                      <p className="text-sm font-bold text-white uppercase">{selectedStory.name}</p>
                      <p className="text-xs text-[#94a3b8]">{selectedStory.role} · {selectedStory.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => {
                        setSelectedStory(null);
                        if (onNavigate) {
                          onNavigate('contact');
                        }
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#00a8ff] hover:bg-[#0090dd] text-white font-extrabold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Work With Dave</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedStory(null)}
                      className="px-4 py-2.5 rounded-lg bg-[#141926] hover:bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-[#1e293b]"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
