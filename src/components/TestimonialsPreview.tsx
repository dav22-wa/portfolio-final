import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Building2 } from 'lucide-react';

interface TestimonialsPreviewProps {
  onNavigate?: (page: string) => void;
}

export function TestimonialsPreview({ onNavigate }: TestimonialsPreviewProps) {
  const highlights = [
    {
      id: 'agri-coop',
      name: 'John Kariuki',
      role: 'Chairperson & Agricultural Coordinator',
      organization: 'Mt. Kenya Smallholder Growers Association',
      category: 'AI & Machine Learning',
      outcome: 'KES 2,400,000 PREVENTED LOSSES',
      headline: 'Saved KES 2,400,000 in Seasonal Blight Losses',
      quote: 'David’s computer vision model detected potato early blight weeks before traditional visual symptoms were visible. It protected 40 acres and saved our cooperative KES 2.4M in potential harvest destruction.',
      initials: 'JK'
    },
    {
      id: 'riftlogix',
      name: 'Faith Wanjiku',
      role: 'Head of Operations',
      organization: 'RiftLogix Freight & Enterprise Transport',
      category: 'Engineering & Automation',
      outcome: 'KES 1,800,000 ANNUAL SAVINGS',
      headline: 'Automated 4-Day Audits to 3-Minute Pipeline',
      quote: 'David automated our logistics consignment audit pipeline. What used to take four days of manual cross-referencing now executes in three minutes, cutting KES 1.8M in annual administrative overtime.',
      initials: 'FW'
    },
    {
      id: 'agriscale',
      name: 'Brian Omondi',
      role: 'Founder & Chief Executive Officer',
      organization: 'AgriScale Africa (Davamos Tech Client)',
      category: 'Founders & Scaled MVPs',
      outcome: 'KES 3,500,000 REVENUE SECURED',
      headline: 'Closed KES 3.5M Commercial Contracts',
      quote: 'David’s engineering team at Davamos Tech built our production MVP from scratch in six weeks. Because the architecture was solid and fast, we secured KES 3.5M in enterprise pilot contracts on our first pitch cycle.',
      initials: 'BO'
    }
  ];

  const handleViewAll = () => {
    if (onNavigate) {
      onNavigate('testimonials');
    } else {
      window.location.assign('/#testimonials');
    }
  };

  return (
    <section id="testimonials-preview" className="py-24 lg:py-32 w-full bg-[#07090e] border-t border-[#1f2638] text-[#d4d4d4]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="section-label !text-[#00f0ff] mb-3">MEASURABLE CLIENT IMPACT</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight uppercase tracking-tight">
              PROVEN RESULTS & <span className="text-[#00f0ff]">FINANCIAL LEVERAGE</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#b3b3b3] font-sans leading-relaxed mt-4">
              Real testimonials from agricultural cooperatives, enterprise logistics firms, and startup founders who deployed systems engineered by David Waihenya, Davamos Tech, and AI Solution Studio.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00f0ff] border border-[#1f2638] px-6 py-3.5 hover:border-[#00f0ff] bg-[#0e111a] hover:bg-[#141926] transition-all rounded cursor-pointer"
            >
              <span>VIEW ALL CASE REVIEWS & KES METRICS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={handleViewAll}
              className="bg-[#0e111a] border border-[#1f2638] hover:border-[#00f0ff]/50 rounded-lg p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00f0ff]">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-bold text-[#e5b927] bg-[#e5b927]/10 px-2 py-0.5 rounded border border-[#e5b927]/30">
                    {item.outcome}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight leading-snug mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {item.headline}
                </h3>

                <p className="text-sm text-[#d4d4d4] font-sans leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f2638] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#141926] border border-[#1f2638] flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white uppercase truncate">{item.name}</p>
                  <p className="text-[11px] text-[#b3b3b3] truncate">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
