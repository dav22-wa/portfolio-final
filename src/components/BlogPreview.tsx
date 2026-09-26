import { useState } from 'react';
import { motion } from 'motion/react';
import { data } from '../data';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

interface BlogPreviewProps {
  onSelectPost?: (postId: string) => void;
}

export function BlogPreview({ onSelectPost }: BlogPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Personal Growth', 'Entrepreneurship', 'AI & NLP', 'Freelancing & Business'];

  const filteredPosts = activeCategory === 'All'
    ? data.blog
    : data.blog.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handlePostClick = (postId: string) => {
    if (onSelectPost) {
      onSelectPost(postId);
    } else {
      window.location.href = `/?post=${postId}`;
    }
  };

  return (
    <section id="blog" className="py-24 lg:py-32 w-full bg-[#0c101d] text-[#d4d4d4] border-t border-[#1e293b]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="section-kicker">ESSAYS &amp; LESSONS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
              THOUGHTS ON AI, <span className="text-[#00a8ff]">BUILDING</span> &amp; VENTURES.
            </h2>
            <p className="text-[#94a3b8] font-sans text-base sm:text-lg leading-relaxed mt-4">
              Honest field notes from building machine learning systems in Kenya, transitioning from zero code to First Class Honours, and growing software ventures.
            </p>
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start lg:self-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#00a8ff] text-black shadow-md'
                    : 'bg-[#0e1424] text-[#94a3b8] border border-[#1e293b] hover:text-white hover:border-[#00a8ff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handlePostClick(post.id)}
              className="bg-[#0e1424] border border-[#1e293b] hover:border-[#00a8ff]/60 rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Thumbnail container */}
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#060813]">
                  {!failedImages[post.id] ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setFailedImages(prev => ({ ...prev, [post.id]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0e1424] to-[#131b2e] flex items-center justify-center p-4">
                      <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-widest">{post.category}</span>
                    </div>
                  )}
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 bg-[#060813]/90 backdrop-blur-md border border-[#1e293b] text-[#00a8ff] text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Unboxed Metadata (Zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#94a3b8] mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>4 min read</span>
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-white uppercase leading-snug mb-3 group-hover:text-[#00a8ff] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] font-sans leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-full pt-3 border-t border-[#1e293b] flex items-center justify-between text-xs font-bold text-white group-hover:text-[#00a8ff] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
