import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, GraduationCap, ShieldCheck, CheckCircle2, Mic, ArrowRight, ExternalLink } from 'lucide-react';

interface AchievementsProps {
  onNavigate?: (page: string) => void;
}

export function Achievements({ onNavigate }: AchievementsProps) {
  const [activeTab, setActiveTab] = useState<'certifications' | 'speaking'>('certifications');

  const certifications = [
    {
      title: "Cisco Certified Networking Associate (CCNA)",
      issuer: "Cisco Networking Academy",
      status: "In Progress (Expected 2026)",
      progress: 40,
      description: "Routing, switching, network security fundamentals, IP services, and automated network programmability."
    },
    {
      title: "Junior Cybersecurity Analyst",
      issuer: "Cisco",
      status: "In Progress (Expected 2026)",
      progress: 35,
      description: "Threat intelligence, network monitoring, vulnerability assessment, endpoint protection, and security operations."
    },
    {
      title: "AI, Cybersecurity & Cloud Computing Cohort",
      issuer: "IBM Skills Network",
      status: "Completed",
      progress: 100,
      description: "Applied machine learning algorithms, cloud containerization, and enterprise security architecture."
    },
    {
      title: "Software Development & AI Engineering",
      issuer: "Power Learn Project (PLP Academy)",
      status: "Completed",
      progress: 100,
      description: "Intensive Pan-African software engineering program covering Python, full-stack systems, and venture building."
    },
    {
      title: "Intro to Cybersecurity & Data Science",
      issuer: "HP LIFE",
      status: "Completed",
      progress: 100,
      description: "Data-driven business analytics, digital privacy safeguards, and threat modeling."
    }
  ];

  const keynoteTopics = [
    {
      title: "From Zero to Global Recognition in 3 Years",
      audience: "Universities, Tech Conferences & Youth Summits",
      takeaway: "The exact playbook of how a student with zero coding background won the global Mozilla Challenge and built real AI ventures."
    },
    {
      title: "Applied AI in Emerging & Low-Resource Markets",
      audience: "Enterprise Leaders, Agri-Tech & Founders",
      takeaway: "How to design, quantize, and deploy computer vision and machine learning that functions seamlessly without $10k/mo cloud GPUs."
    },
    {
      title: "Responsible Computing: Engineering with Verifiable Ethics",
      audience: "Security Teams, Developers & Policy Makers",
      takeaway: "Architecting machine learning pipelines with built-in privacy, bias mitigation, and local data sovereignty."
    }
  ];

  return (
    <section id="achievements" className="py-24 lg:py-32 w-full bg-[#060813] border-t border-[#1e293b] text-[#d4d4d4]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="section-kicker">CREDENTIALS &amp; RECOGNITION</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-[0.96] uppercase tracking-tight">
              CERTIFICATIONS &amp; <span className="text-[#00a8ff]">ACHIEVEMENTS</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed mt-4">
              Rigorous technical certifications, institutional commendations, and global recognition for responsible AI engineering.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 bg-[#0e1424] border border-[#1e293b] rounded-full self-start lg:self-end">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'certifications' ? 'bg-[#00a8ff] text-black shadow-md' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Certifications &amp; Honours
            </button>
            <button
              onClick={() => setActiveTab('speaking')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'speaking' ? 'bg-[#00a8ff] text-black shadow-md' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Keynote Topics</span>
            </button>
          </div>
        </div>

        {/* 3 Main Honours Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Mozilla Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            className="bg-[#0e1424] p-8 lg:p-10 border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all rounded-2xl flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#e5b927] mb-6">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] block mb-2">
                GLOBAL AWARD · 2024
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                Mozilla Responsible Computing Challenge
              </h3>
              <p className="text-xs font-bold text-[#e5b927] uppercase tracking-wider mb-4">
                Global Challenge Winner
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Selected in a worldwide evaluation by the Mozilla Foundation. Awarded for pioneering ethical, transparent machine learning architectures and local-first computing for emerging economies.
              </p>
            </div>
          </motion.div>

          {/* First Class Honours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1 }}
            className="bg-[#0e1424] p-8 lg:p-10 border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all rounded-2xl flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#00a8ff] mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] block mb-2">
                ACADEMIC DISTINCTION · CLASS OF 2026
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                BSc. Computer Science
              </h3>
              <p className="text-xs font-bold text-[#00a8ff] uppercase tracking-wider mb-4">
                First Class Honours Graduate
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Graduated with top academic standing from the University of Embu. Mastered advanced algorithms, distributed databases, network security, and machine learning pipelines.
              </p>
            </div>
          </motion.div>

          {/* ICT Commendation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.2 }}
            className="bg-[#0e1424] p-8 lg:p-10 border border-[#1e293b] hover:border-[#00a8ff]/60 transition-all rounded-2xl flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] border border-[#1e293b] flex items-center justify-center text-[#e5b927] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00a8ff] block mb-2">
                INSTITUTIONAL COMMENDATION
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                University of Embu ICT Dept
              </h3>
              <p className="text-xs font-bold text-[#e5b927] uppercase tracking-wider mb-4">
                Official Head of ICT Commendation
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Formally commended by Maurice Murimi Micheni (Head of ICT Services) for exceptional diligence, campus network infrastructure management, and system patch security leadership.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Tab Content */}
        {activeTab === 'certifications' ? (
          /* Certifications Grid */
          <div className="bg-[#0c101d] border border-[#1e293b] rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="text-2xl font-display font-extrabold text-white uppercase mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00a8ff]" />
              <span>Professional Certifications &amp; Cohorts</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 rounded-xl bg-[#0e1424] border border-[#1e293b] hover:border-[#00a8ff]/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#00a8ff] uppercase">{cert.issuer}</span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      cert.status.includes('Completed') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#00a8ff]/10 text-[#00a8ff]'
                    }`}>
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-bold text-white uppercase mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-[#131b2e] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${cert.progress === 100 ? 'bg-emerald-400' : 'bg-[#00a8ff]'}`}
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Speaking & Keynote Topics */
          <div className="bg-[#0c101d] border border-[#1e293b] rounded-3xl p-8 sm:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-display font-extrabold text-white uppercase flex items-center gap-2">
                  <Mic className="w-5 h-5 text-[#00a8ff]" />
                  <span>Signature Keynotes &amp; Technical Masterclasses</span>
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">Available for university guest lectures, corporate retreats, and developer summits.</p>
              </div>

              <button
                onClick={() => onNavigate ? onNavigate('speaking') : window.location.assign('/#speaking')}
                className="px-6 py-2.5 bg-[#00a8ff] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all self-start sm:self-auto shrink-0"
              >
                View Speaking Rate Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keynoteTopics.map((topic, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#0e1424] border border-[#1e293b] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#00a8ff] font-bold uppercase tracking-wider block mb-2">
                      Keynote Topic 0{i + 1}
                    </span>
                    <h4 className="text-lg font-display font-bold text-white uppercase mb-3">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-2 font-semibold">
                      Ideal for: {topic.audience}
                    </p>
                    <p className="text-xs text-[#94a3b8] leading-relaxed">
                      {topic.takeaway}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
