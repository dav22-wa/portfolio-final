import { motion } from 'motion/react';
import { data } from '../data';

export function BlogPreview() {
  return (
    <section id="blog" className="py-[60px] lg:py-[100px] w-full bg-white text-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="section-label !text-brand-gold mb-4">READ THE BLOG</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] leading-[0.95] uppercase tracking-tight">
            THOUGHTS ON AI, BUILDING, AND GROWING IN AFRICA.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.blog.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white border-4 border-black group cursor-pointer hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-[8px_8px_0_0_rgba(17,19,24,1)] hover:shadow-[12px_12px_0_0_rgba(229,185,39,1)] rounded-sm"
              onClick={() => window.location.href = `/?post=${post.id}`}
            >
              <div className="w-full h-48 overflow-hidden relative border-b-2 border-black">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#e5b927] text-black text-[9px] font-extrabold uppercase px-2.5 py-1.5 border border-black rounded-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-extrabold">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-extrabold text-[#111111] leading-none uppercase tracking-tighter mb-4 group-hover:text-[#e5b927] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#555555] font-sans text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-black/5">
                  <a 
                    href={`/?post=${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#e5b927] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.location.href = `/?post=${post.id}`;
                    }}
                  >
                    <span>Analyze Blueprint</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 lg:mt-12">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); }}
            className="px-10 py-4 bg-black text-[#e5b927] font-extrabold border-2 border-black tracking-widest hover:bg-[#e5b927] hover:text-black transition-all cursor-pointer text-xs uppercase inline-block text-center rounded-sm shadow-[6px_6px_0_0_rgba(229,185,39,1)] hover:shadow-none"
          >
            SEE ALL BLUEPRINTS <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
