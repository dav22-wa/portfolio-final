import { motion } from 'motion/react';

export function BlogPreview() {
  const posts = [
    {
      category: "Personal Growth",
      date: "May 2025",
      title: "How I Went from Zero Coding Knowledge to Building AI Systems in 3 Years",
      excerpt: "I did not know what a variable was in 2022. Here is exactly what changed, what I did, and what I would tell myself on day one.",
      link: "#"
    },
    {
      category: "Entrepreneurship",
      date: "April 2025",
      title: "Why Kenya Needs Tech Builders, Not Just Tech Employees",
      excerpt: "Everyone is chasing a job at a big company. I think the real opportunity is building the companies everyone else wants to work at.",
      link: "#"
    },
    {
      category: "AI",
      date: "March 2025",
      title: "What Building a Legal Chatbot for Ordinary Kenyans Taught Me",
      excerpt: "Sheria Assist started as an assignment. Then I realized how many people do not know their own rights.",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-[60px] lg:py-[100px] w-full bg-white text-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="section-label !text-brand-blue mb-4">READ THE BLOG</span>
          <h2 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-display font-extrabold text-[#111111] leading-[0.95] uppercase tracking-tight">
            THOUGHTS ON AI, BUILDING, AND GROWING IN AFRICA.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white border border-[#e5e5e5] p-8 group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[13px] font-bold text-brand-blue uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-[13px] font-sans text-[#888888] uppercase tracking-widest font-bold">
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-[2rem] lg:text-[2.2rem] font-display font-bold text-[#111111] leading-[1.1] uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-[#444444] font-sans text-[16px] leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <a href={post.link} className="text-brand-blue font-bold uppercase tracking-widest text-sm transition-colors flex items-center">
                  Read More <span className="ml-2 text-lg">→</span>
                </a>
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
