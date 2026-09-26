import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { data } from '../data';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';

function MarkdownText({ content }: { content: string }) {
  const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className="space-y-6 text-[#d4d4d4] font-sans leading-relaxed text-base sm:text-lg">
      {paragraphs.map((para, i) => {
        if (para.startsWith('### ')) {
          return <h3 key={i} className="text-2xl font-display font-extrabold text-white mt-8 mb-3 uppercase tracking-tight">{para.replace('### ', '')}</h3>;
        } else if (para.startsWith('## ')) {
          return <h2 key={i} className="text-3xl font-display font-extrabold text-white mt-10 mb-4 uppercase tracking-tight">{para.replace('## ', '')}</h2>;
        } else if (para.match(/^\d+\.\s/)) {
          const items = para.split('\n').filter(it => it.trim() !== '');
          return (
            <ol key={i} className="list-decimal pl-6 my-4 space-y-2.5 text-[#d4d4d4]">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ 
                  __html: item.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
                }} />
              ))}
            </ol>
          );
        } else {
          const formattedText = para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-[#00a8ff]">$1</em>');
          return <p key={i} dangerouslySetInnerHTML={{ __html: formattedText }} />;
        }
      })}
    </div>
  );
}

export function BlogPost({ postId }: { postId: string }) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = data.blog.find(p => p.id === postId);
    setPost(foundPost);
  }, [postId]);

  const handleNav = (page: string) => {
    window.location.assign(`/#${page}`);
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#060813] text-[#d4d4d4]">
        <Navbar currentPage="blog" onNavigate={handleNav} />
        <div className="flex-1 flex flex-col justify-center items-center mt-28">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
          <button onClick={handleBack} className="text-[#00a8ff] hover:underline cursor-pointer">
            ← Back to Home
          </button>
        </div>
        <Footer onNavigate={handleNav} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060813] text-[#d4d4d4] flex flex-col selection:bg-[#00a8ff] selection:text-black">
      <Navbar currentPage="blog" onNavigate={handleNav} />
      
      <main className="flex-1 mt-28 sm:mt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94a3b8] hover:text-[#00a8ff] mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blueprints</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center gap-3 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="text-[#00a8ff] bg-[#00a8ff]/10 px-2.5 py-1 rounded-md">{post.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-[#94a3b8] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-[#94a3b8] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] uppercase tracking-tight mb-6">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full aspect-[16/9] mb-10 overflow-hidden bg-[#0e1424] rounded-2xl border border-[#1e293b]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              style={{ filter: 'none' }}
              onError={(e) => {
                const target = e.currentTarget;
                target.src = "/assets/hero.jpeg";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-[#0e1424] p-8 sm:p-12 border border-[#1e293b] rounded-3xl shadow-2xl"
          >
            <div className="text-lg sm:text-xl font-sans text-white font-medium leading-relaxed mb-8 pb-8 border-b border-[#1e293b] italic">
              "{post.excerpt}"
            </div>
            
            <MarkdownText content={post.content} />
            
            <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button 
                onClick={handleBack} 
                className="text-[#94a3b8] hover:text-[#00a8ff] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </button>
              <span className="text-[#00a8ff] font-mono">
                Dave Waihenya · Builder Dispatch
              </span>
            </div>
          </motion.div>

        </article>
      </main>
      
      <Footer onNavigate={handleNav} />
    </div>
  );
}
