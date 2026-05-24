import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const filters = ["All", "AI & ML", "Web", "Cybersecurity"];

const projects = [
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
          <span className="section-label !text-brand-blue mb-4">WHAT I'VE BUILT</span>
          <h2 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-display font-extrabold text-white leading-[0.95] mb-4 uppercase tracking-tight">
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
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-blue"
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
                className="group flex flex-col bg-[#111318] p-8 lg:p-10 transition-all duration-300 relative border-l-[3px] border-l-transparent hover:border-l-brand-blue"
              >
                <div className="mb-6">
                  <div className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-[2rem] sm:text-[2.5rem] font-display font-bold text-white uppercase leading-[1.1] tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-[13px] font-sans font-medium text-white bg-[#1e1e2e] px-3 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-[#aaaaaa] text-[15px] leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-6 pt-6">
                  {project.links.map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      className="text-brand-blue font-bold tracking-widest uppercase text-sm hover:text-blue-400 transition-colors"
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
