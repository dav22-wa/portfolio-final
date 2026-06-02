import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const filters = ["All", "AI & ML", "Web", "Cybersecurity"];

const projects = [
  {
    category: "AI & ML · Web",
    title: "AI Solution Studio",
    stack: ["React", "AI Integrations", "Vite", "Active Studio"],
    description: "An advanced, interactive platform showcasing state-of-the-art AI-powered user interfaces, systems, and product solutions built for real-world impact and business automation.",
    links: [
      { label: "Visit Live Studio ↗", url: "https://ai-solution-studio.vercel.app/" }
    ]
  },
  {
    category: "Web · Full-Stack",
    title: "Davamos Tech",
    stack: ["React", "Custom Cloud", "Node.js", "Bespoke Agency"],
    description: "A premier custom software engineering and tech agency crafting blazing-fast web platforms, bespoke mobile systems, and scalable enterprise server/database architectures.",
    links: [
      { label: "Visit Davamos Tech ↗", url: "https://davamos.vercel.app/" }
    ]
  },
  {
    category: "AI & ML",
    title: "Potato Early Blight Detection System",
    stack: ["Python", "TensorFlow", "OpenCV", "January 2026"],
    description: "A machine learning model that detects early blight from potato leaf images. Built to help smallholder Kenyan farmers catch disease before it destroys crops. Uses computer vision for preprocessing and feature extraction.",
    links: [
      { label: "Test the App →", url: "#" },
      { label: "GitHub →", url: "#" }
    ]
  },
  {
    category: "AI & ML · Cybersecurity",
    title: "AI Voice Guardian",
    stack: ["AI", "Speech Processing", "Real-Time Audio", "November 2025"],
    description: "Listens to live audio conversations and detects harassment in real time. Classifies threats, hate speech, and bullying. Scores severity as low, medium, or high. Auto-mutes severe offenders instantly.",
    links: [
      { label: "View on GitHub →", url: "#" }
    ]
  },
  {
    category: "AI & ML",
    title: "Short-Form Video Virality Predictor",
    stack: ["Python", "Streamlit", "Machine Learning", "September 2025"],
    description: "Predicts whether a TikTok or YouTube Short is Rising, Declining, Seasonal, or Stable using real engagement data — views, likes, comments, shares. Supports URL auto-fetch and manual input.",
    links: [
      { label: "View on GitHub →", url: "#" }
    ]
  },
  {
    category: "Web",
    title: "Digital Attendance Management System",
    stack: ["Python", "Flask", "MySQL", "January 2023"],
    description: "A secure web app that replaced paper attendance with digital sign-in, authentication, and tracking. Faster and more accurate than manual methods.",
    links: [
      { label: "View on GitHub →", url: "#" }
    ]
  },
  {
    category: "Web",
    title: "Personal Portfolio Website",
    stack: ["HTML", "CSS", "JavaScript", "April 2024"],
    description: "A responsive portfolio site built to showcase projects and skills with clean navigation and mobile-friendly layouts.",
    links: [
      { label: "View on GitHub →", url: "#" }
    ]
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-[60px] lg:py-[100px] w-full bg-[#0b0b0b]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label !text-brand-gold mb-4">WHAT I'VE BUILT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[0.95] mb-4 uppercase tracking-tight">
            THE PROJECTS.
          </h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "text-lg font-bold font-sans uppercase tracking-widest transition-all duration-300 relative pb-2",
                  activeFilter === filter 
                    ? "text-white" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div 
                    layoutId="project-filter-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[#111318] p-8 lg:p-10 transition-all duration-300 relative border-2 border-white/5 hover:border-[#e5b927]/60 shadow-[8px_8px_0_0_rgba(229,185,39,0.02)] hover:shadow-[12px_12px_0_0_rgba(229,185,39,0.06)] rounded-sm"
              >
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tighter leading-none group-hover:text-[#e5b927] transition-colors mb-2">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono font-bold text-white bg-[#09090b] border border-white/5 px-2.5 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  {project.links.map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1 border border-[#e5b927]/20 hover:border-[#e5b927] bg-[#e5b927]/5 hover:bg-[#e5b927] text-[#e5b927] hover:text-black font-extrabold tracking-widest uppercase text-[10px] sm:text-xs py-2 px-4 rounded-sm transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
