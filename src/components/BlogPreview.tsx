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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {data.blog.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white border border-[#e5e5e5] group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              onClick={() => window.open(`/?post=${post.id}`, '_blank')}
            >
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[13px] font-bold text-brand-gold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-[13px] font-sans text-[#888888] uppercase tracking-widest font-bold">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-display font-bold text-[#111111] leading-[1.1] uppercase tracking-tight mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#444444] font-sans text-[16px] leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={`/?post=${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-brand-gold font-bold uppercase tracking-widest text-sm transition-colors flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More <span className="ml-2 text-lg">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 lg:mt-12">
          <a href="#" className="btn-primary uppercase tracking-widest font-bold text-[14px] px-10">
            SEE ALL POSTS <span className="ml-2 font-normal text-lg leading-none">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
