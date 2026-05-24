import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="w-full bg-white text-[#111111] overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row items-stretch">
        
        {/* Left Column (Content) */}
        <motion.div 
          className="lg:w-[55%] w-full px-6 lg:pl-[calc((100vw-1200px)/2+1.5rem)] lg:pr-24 py-[80px] lg:py-[120px] flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label !text-brand-gold mb-6">MY STORY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-black leading-[0.95] mb-8 uppercase tracking-tight">
            I WASN'T SUPPOSED<br className="hidden sm:block"/> TO BE HERE.
          </h2>
          
          <div className="space-y-6 text-[17px] text-[#111111] font-sans leading-[1.8] max-w-xl">
            <p>
              I could tell you about the Mozilla win, the AI systems, the university commendation...
            </p>
            <p>
              But that is all meaningless without the WHY.
            </p>
            <p>
              Because I joined university in 2022 with no computer knowledge at all. I did not know what a variable was. I had never touched code in my life.
            </p>
            <p>
              Failed tutorials. Confusing lectures. Doubt that someone like me was even built for this.
            </p>
            <p>
              But here is what I realized — it was preparation.
            </p>
            <p>
              Preparation to build real things. A machine learning model that helps Kenyan farmers detect crop disease early. A real-time AI system that catches harassment as it happens. Tools that solve problems people actually have.
            </p>
            <p>
              Because on the other side of learning from zero is a skillset that nobody can take from you.
            </p>
          </div>

          <div className="mt-12">
            <a href="#projects" className="btn-primary uppercase font-bold tracking-widest text-[14px]">
              SEE MY PROJECTS
            </a>
          </div>
        </motion.div>

        {/* Right Column (Photo) */}
        <motion.div 
          className="lg:w-[45%] w-full min-h-[50vh] lg:min-h-[800px] relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="story-photo w-full h-full bg-[#111318] flex items-center justify-center relative min-h-[50vh] lg:min-h-[800px]">
            <span className="font-display font-bold text-4xl text-white/10 uppercase tracking-widest absolute text-center px-4">
              PHOTO PLACEHOLDER
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
