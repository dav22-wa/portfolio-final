import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, Code2, ArrowUpRight } from 'lucide-react';

const filters = ["All", "AI & ML", "Web & Cloud", "Cybersecurity"];

const projects = [
  {
    category: "AI & ML · Web & Cloud",
    title: "AI Solution Studio",
    stack: ["React", "FastAPI", "Agentic Systems", "RAG"],
    status: "Active Studio",
    description: "State-of-the-art interactive platform deploying production-grade AI user interfaces, agentic systems, and localized machine learning models for enterprise automation.",
    links: [
      { label: "Visit Studio ↗", url: "https://ai-solution-studio.vercel.app/" }
    ]
  },
  {
    category: "Web & Cloud",
    title: "Davamos Tech",
    stack: ["React", "Node.js", "PostgreSQL", "Cloud Infra"],
    status: "Active Agency",
    description: "Premier bespoke software engineering firm crafting blazing-fast web platforms, custom mobile systems, and highly scalable server/database architectures for founders.",
    links: [
      { label: "Visit Davamos Tech ↗", url: "https://davamos.vercel.app/" }
    ]
  },
  {
    category: "AI & ML",
    title: "Potato Early Blight Detection System",
    stack: ["Python", "TensorFlow", "OpenCV", "Edge Quantization"],
    status: "Agricultural Vision",
    description: "A convolutional neural network model detecting early blight from leaf imagery. Built to empower smallholder Kenyan farmers to catch fungal disease weeks before widespread harvest loss.",
    links: [
      { label: "View Architecture →", url: "https://github.com/dav22-wa" }
    ]
  },
  {
    category: "AI & ML · Cybersecurity",
    title: "AI Voice Guardian (Velox AI)",
    stack: ["Python", "PyAudio", "Real-Time NLP", "Speech Analysis"],
    status: "Real-Time Security",
    description: "Real-time speech processing system listening to live audio streams to detect hate speech, verbal harassment, and direct threats with multi-tier severity scoring and sub-120ms auto-mute triggers.",
    links: [
      { label: "View on GitHub →", url: "https://github.com/dav22-wa" }
    ]
  },
  {
    category: "AI & ML",
    title: "Short-Form Video Virality Predictor",
    stack: ["Python", "Streamlit", "Scikit-Learn", "Analytics"],
    status: "Predictive Analytics",
    description: "Machine learning application predicting whether short-form video content is Rising, Declining, Seasonal, or Stable using empirical multi-platform engagement velocity metrics.",
    links: [
      { label: "View on GitHub →", url: "https://github.com/dav22-wa" }
    ]
  },
  {
    category: "Web & Cloud",
    title: "Digital Attendance Management System",
    stack: ["Python", "Flask", "MySQL", "Authentication"],
    status: "Institutional Tool",
    description: "Secure, authenticated web application designed for the University of Embu to eliminate paper-based tracking, streamline student verification, and generate automated attendance reports.",
    links: [
      { label: "View on GitHub →", url: "https://github.com/dav22-wa" }
    ]
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 lg:py-32 w-full bg-[#060813] border-t border-[#1e293b] text-[#d4d4d4]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">PRODUCTION REPOSITORY</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight mb-3 uppercase tracking-tight">
            ENGINEERED <span className="text-[#00a8ff]">SYSTEMS</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed">
            Software built with purpose. From localized computer vision for agricultural cooperatives to real-time cybersecurity audio guardians and commercial agencies.
          </p>
          
          {/* Filter Bar (Zero-pill segmented buttons) */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-[#00a8ff] text-black shadow-md' 
                    : 'bg-[#0e1424] text-[#94a3b8] border border-[#1e293b] hover:text-white hover:border-[#00a8ff]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-[#0e1424] p-8 transition-all duration-300 relative border border-[#1e293b] hover:border-[#00a8ff]/60 rounded-2xl shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8] mb-4">
                    <span>{project.category}</span>
                    <span className="text-[#00a8ff] font-bold bg-[#00a8ff]/10 px-2.5 py-0.5 rounded-full">{project.status}</span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight leading-tight group-hover:text-[#00a8ff] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Tech stack: clean unboxed text with subtle separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#00a8ff] font-mono mb-4">
                    {project.stack.map((tech, idx) => (
                      <span key={idx}>
                        {tech}{idx < project.stack.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-[#94a3b8] text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-[#1e293b] mt-auto flex flex-wrap gap-4">
                  {project.links.map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00a8ff] transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
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
