import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { data } from '../data';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

// A simple utility to render markdown-like text with basic formatting
function MarkdownText({ content }: { content: string }) {
  const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className="prose prose-lg max-w-none text-[#444444] font-sans leading-relaxed">
      {paragraphs.map((para, i) => {
        if (para.startsWith('### ')) {
          return <h3 key={i} className="text-2xl font-display font-bold text-[#111111] mt-10 mb-4">{para.replace('### ', '')}</h3>;
        } else if (para.startsWith('## ')) {
          return <h2 key={i} className="text-3xl font-display font-bold text-[#111111] mt-12 mb-6">{para.replace('## ', '')}</h2>;
        } else if (para.match(/^\d+\.\s/)) {
          // simple numbered list item (just render as paragraph for simplicity, or handle basic lists)
          const items = para.split('\n').filter(i => i.trim() !== '');
          return (
            <ol key={i} className="list-decimal pl-6 my-4 space-y-2">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ 
                  __html: item.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }} />
              ))}
            </ol>
          );
        } else {
          // Replace bold text **bold**
          const formattedText = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
          return <p key={i} className="mb-6" dangerouslySetInnerHTML={{ __html: formattedText }} />;
        }
      })}
    </div>
  );
}

export function BlogPost({ postId }: { postId: string }) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Need to scroll to top since it loads in a new window but just in case
    window.scrollTo(0, 0);

    const foundPost = data.blog.find(p => p.id === postId);
    setPost(foundPost);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9] text-[#111111]">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center mt-20">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <a href="/" className="text-brand-gold hover:underline">← Back to Home</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Navbar />
      
      <main className="flex-1 mt-20 md:mt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mb-6 flex justify-center items-center gap-4 text-sm font-bold tracking-widest uppercase">
              <span className="text-brand-gold">{post.category}</span>
              <span className="text-[#888888]">•</span>
              <span className="text-[#888888]">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[40vh] md:h-[60vh] mb-12 overflow-hidden bg-[#e5e5e5]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 md:p-12 border border-[#e5e5e5] shadow-sm"
          >
            <p className="text-xl md:text-2xl font-display text-[#111111] leading-relaxed mb-10 pb-10 border-b border-[#e5e5e5]">
              {post.excerpt}
            </p>
            
            <MarkdownText content={post.content} />
            
            <div className="mt-16 pt-8 border-t border-[#e5e5e5] flex justify-between items-center text-sm font-bold uppercase tracking-widest">
              <a href="/" className="text-[#888888] hover:text-brand-gold transition-colors">
                ← Back to Home
              </a>
              <span className="text-[#111111]">Share Post</span>
            </div>
          </motion.div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
