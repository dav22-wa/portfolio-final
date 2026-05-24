import { motion } from 'motion/react';

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-[60px] lg:py-[100px] w-full bg-[#111318]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label !text-brand-blue mb-4">WHAT I DO</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-4 uppercase tracking-tight">
            FOR THOSE WHO WANT REAL SOLUTIONS...
          </h2>
          <p className="text-[#aaaaaa] font-sans text-[16px] italic">
            ...not just another developer who writes code.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-[#1a1d24] p-8 lg:p-10 border border-[#2a2d35] border-t-2 border-t-[#2a2d35] hover:border-t-brand-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col text-left">
            <span className="text-brand-blue uppercase tracking-widest text-xs font-bold mb-4 block">AI & Machine Learning</span>
            <h3 className="font-display font-bold text-3xl text-white mb-4 uppercase leading-[1.1] tracking-tight">Systems that learn and predict.</h3>
            <p className="font-sans text-[#aaaaaa] text-[15px] mb-8 leading-relaxed flex-grow">
              I build ML models using Python, TensorFlow, and OpenCV — from disease detection to content virality prediction to real-time audio analysis.
            </p>
            <a href="#projects" className="text-brand-blue font-bold tracking-widest flex items-center hover:text-blue-400 transition-colors uppercase text-sm mt-auto">
              See Projects <span className="ml-2 font-normal text-lg leading-none">→</span>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-[#1a1d24] p-8 lg:p-10 border border-[#2a2d35] border-t-2 border-t-[#2a2d35] hover:border-t-brand-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col text-left">
            <span className="text-brand-blue uppercase tracking-widest text-xs font-bold mb-4 block">Web Development</span>
            <h3 className="font-display font-bold text-3xl text-white mb-4 uppercase leading-[1.1] tracking-tight">Apps that work for real people.</h3>
            <p className="font-sans text-[#aaaaaa] text-[15px] mb-8 leading-relaxed flex-grow">
              Flask, MySQL, HTML, CSS, JavaScript — I build functional web systems with user authentication, data management, and clean interfaces.
            </p>
            <a href="#projects" className="text-brand-blue font-bold tracking-widest flex items-center hover:text-blue-400 transition-colors uppercase text-sm mt-auto">
              See Projects <span className="ml-2 font-normal text-lg leading-none">→</span>
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-[#1a1d24] p-8 lg:p-10 border border-[#2a2d35] border-t-2 border-t-[#2a2d35] hover:border-t-brand-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col text-left">
            <span className="text-brand-blue uppercase tracking-widest text-xs font-bold mb-4 block">Cybersecurity</span>
            <h3 className="font-display font-bold text-3xl text-white mb-4 uppercase leading-[1.1] tracking-tight">Security baked in, not bolted on.</h3>
            <p className="font-sans text-[#aaaaaa] text-[15px] mb-8 leading-relaxed flex-grow">
              Trained through IBM, Cisco, and PLP Academy. Currently pursuing CCNA and Junior Cybersecurity Analyst certification.
            </p>
            <a href="#about" className="text-brand-blue font-bold tracking-widest flex items-center hover:text-blue-400 transition-colors uppercase text-sm mt-auto">
              Learn More <span className="ml-2 font-normal text-lg leading-none">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
