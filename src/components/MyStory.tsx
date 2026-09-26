import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Maximize2, 
  X, 
  Play, 
  Trophy, 
  GraduationCap, 
  CheckCircle2, 
  BookOpen, 
  Download,
  Calendar,
  Sparkles,
  MapPin,
  Award
} from 'lucide-react';

interface MyStoryProps {
  onNavigate?: (page: string) => void;
}

export function MyStory({ onNavigate }: MyStoryProps) {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [heroPhotoError, setHeroPhotoError] = useState(false);
  const [gradPhotoError, setGradPhotoError] = useState(false);

  const handleDownloadStory = () => {
    const content = `# THE STORY I AM STILL BUILDING
By David Waihenya
BSc. Computer Science (First Class Honors) · University of Embu
Winner, Mozilla Responsible Computing Challenge

---

## Prologue: I Am Not Finished Yet

There is a strange feeling that comes with achieving something you once prayed for.
You celebrate.
People congratulate you.
Photographs are taken.
Your name appears on a list.
For a moment, everything feels complete.
Then the noise fades.
You wake up the next morning and realize something:
You still have a life to build.

That is where I am now.
I am David Waihenya, a Computer Science graduate from the University of Embu, a First Class Honors graduate, a builder, a learner, and someone who still has more questions than answers.

People may look at the graduation certificate and see the result.
I look at it and see the journey.
I see the boy who started with no idea how far technology could take him.
I see the years of studying.
The projects that refused to work.
The applications that went unanswered.
The financial pressure.
The temporary jobs.
The uncertainty.
The moments when I wondered whether I was moving forward at all.
And I see one thing that never disappeared:
The desire to build a better life.

This is not a story about someone who had everything figured out.
It is a story about someone who kept moving while figuring it out.

---

## Chapter One: The Beginning

I was born and raised in Kenya.
Like many young people growing up here, I learned early that life does not always give you everything you want.
Sometimes you have to make something out of what you have.

My early education was simple.
I went to Namunyiri Primary School, where I completed my primary education and sat for my KCPE.
Later, I joined St. Peter’s Moi’s Bridge Secondary School.
Those years were not just about classrooms and examinations.
They were the foundation of the person I would eventually become.

At the time, I did not know that I would one day spend hours writing Python code, building machine-learning models, thinking about artificial intelligence, or dreaming about creating companies.
I was simply growing up.
Learning.
Making mistakes.
Trying again.
Dreaming without fully understanding what those dreams would require.

Then came university.

---

## Chapter Two: Choosing Computer Science

In September 2022, I joined the University of Embu to study Bachelor of Science in Computer Science.
I knew I liked technology.
But liking technology and understanding technology are two very different things.

University opened a completely different world.
I learned about programming.
Algorithms.
Databases.
Computer networks.
Operating systems.
Software engineering.
Artificial intelligence.
Cybersecurity.
Data.

The more I learned, the more interesting technology became.
But something else happened.
I started asking a bigger question:
What can I actually build with all this knowledge?

I did not want my degree to become a piece of paper hanging on a wall.
I wanted to use it.
That question would shape the rest of my journey.

---

## Chapter Three: The Moment Technology Became Real

One of the biggest turning points came when I participated in the Mozilla Responsible Computing Challenge.
I worked on a technology project aimed at helping farmers deal with crop disease.
The idea was simple:
A farmer should not have to wait until an entire crop is damaged before discovering that something is wrong.
Technology could help detect a problem earlier and provide useful guidance.

I worked on the project, learned from the process, made mistakes, fixed things, and kept going.
Then something happened that I will never forget.
We won.

Winning the challenge was exciting.
But the bigger victory happened inside me.
I realized that technology could be much more than assignments.
It could be a bridge between knowledge and real life.
A farmer could benefit from something I built.
A student could benefit.
A business could benefit.
A hospital could benefit.
A community could benefit.

That changed the way I saw Computer Science.
I was no longer learning technology simply because it was my degree.
I was learning it because I could use it to solve problems.

---

## Chapter Four: Learning Outside the Classroom

University taught me theory.
Real-world experience taught me responsibility.

During my ICT attachment at the University of Embu, I worked with computers, networks, software, and users.
I helped solve technical problems.
I supported staff and students.
I worked with computers that needed operating-system installations and updates.
I dealt with support requests.

Sometimes the problem was complicated.
Sometimes it was something surprisingly simple.
But every problem had one thing in common:
Someone needed it solved.

That experience taught me an important lesson:
You can know everything about technology and still fail to help someone.
The real skill is understanding the problem first.
Then building the solution.

---

## Chapter Five: When Reality Hits

Graduating from university sounds like the beginning of freedom.
Sometimes it feels like the opposite.
The degree is finished.
But the bills continue.
Rent does not care that you graduated.
Food does not care that you have a First Class.
Applications do not automatically turn into job offers.

There were moments when I had no stable job and had to think carefully about money.
I took temporary work.
I worked where opportunities were available.
I applied for jobs.
I waited.
I tried again.

There were moments when I questioned whether I was moving fast enough.
But I learned something during that period:
There is no shame in honest work while you build your future.
A temporary job does not define your destination.
It is simply part of the road.

That period also changed my relationship with ambition.
I stopped waiting for someone to come and save my career.
I started thinking:
What can I build myself?

---

## Chapter Six: From Developer to Builder

That question pulled me deeper into artificial intelligence.
I started exploring machine learning, AI APIs, automation, chatbots, document processing, and software systems.
I became fascinated by what happens when software can do more than follow a fixed set of instructions.
AI could read.
Analyze.
Respond.
Automate.
Assist.

And when combined with good software engineering, it could solve real business problems.
I started thinking about small businesses in Kenya.
Many businesses spend hours answering the same questions.
Following up with customers.
Managing documents.
Handling repetitive tasks.
Collecting information.

What if software could take some of that work away?
That became more than an academic question.
It became a business opportunity.

I started building demos.
Testing ideas.
Creating websites.
Exploring AI automation.
Thinking about products.
Thinking about companies.

The question changed again.
It was no longer:
“How do I get a job?”
It became:
“How can I create something valuable enough that people want to pay for it?”

That is a much harder question.
But it is the question I want to spend my life answering.

---

## Chapter Seven: The Bigger Vision

I have never wanted to learn technology just for the sake of knowing technology.
I want to build things that matter.
AI. Software. Cybersecurity. Agriculture. Education. Business automation.
These are not separate interests in my mind.
They are different ways technology can solve human problems.

I have also developed an interest in teaching.
There is something powerful about explaining a difficult concept and watching another person finally understand it.
That is one reason I see a future where I can combine research, technology, entrepreneurship, and education.

I want to continue learning.
I want to pursue a master's degree, ideally through a fully funded opportunity.
I want to contribute to research.
I want to teach.
And at the same time, I want to keep building.
Because I do not want to choose between being an academic and being a builder.
I believe I can become both.

---

## Chapter Eight: First Class

Then came graduation.
First Class Honors.
Three words.
A lifetime of work behind them.

When I received that result, I thought about how easy it is to celebrate the final outcome and forget everything that came before it.
The certificate does not show the difficult days.
It does not show the uncertainty.
It does not show the times I had to learn something three or four times before it made sense.
It does not show the projects that broke.
It does not show the nights spent trying to understand code.
It does not show the pressure.

It simply says:
First Class Honors.

But I know what those words cost.
And I am proud of them.
Not because they make me better than anyone else.
But because they remind me that I was capable of doing something I once only hoped I could do.

---

## Chapter Nine: The Dangerous Part of Success

The hardest part may actually come after the achievement.
Because now I have proof that I can achieve something difficult.
And that creates a new responsibility.
What next?

I do not want graduation to become the greatest thing I ever did.
I do not want my best story to be:
“I graduated with First Class Honors.”
That should be the beginning of the story, not the ending.

I want to build products.
I want to build companies.
I want to create jobs.
I want to solve problems.
I want to become exceptional at artificial intelligence and software engineering.
I want to help young people discover that technology is not just something they consume.
It is something they can build.

And yes, I have big financial ambitions.
I want wealth.
But not simply for the number in a bank account.
I want the freedom that comes from creating valuable things.
The freedom to choose what I work on.
The freedom to support the people I care about.
The freedom to fund ideas.
The freedom to create opportunities.
The freedom to build without constantly asking whether I can afford to start.

---

## Chapter Ten: The Road Ahead

I am still young.
I am still learning.
I still make mistakes.
I still have days when I do not know exactly what the next step should be.
But I have learned that you do not need to see the entire staircase before taking the next step.
You need a direction.
Then you move.
Learn.
Build.
Fail.
Adjust.
Build again.

That is the philosophy I want to carry into the next chapter.
I am not interested in becoming successful overnight.
I am interested in becoming dangerous through competence.
I want to become the kind of person who can walk into a difficult problem and figure out how to solve it.
The kind of person who can take an idea and turn it into a product.
The kind of person who can teach what he knows.
The kind of person who creates more value than he consumes.
That is the person I am trying to become.

---

## Epilogue: The Story Is Still Being Written

If you met me today, you might see a Computer Science graduate.
You might see the First Class Honors.
You might see the projects.
You might see the ambitions.
But there is much more behind all of that.

There is a journey.
A journey from classrooms to code.
From assignments to real problems.
From student to builder.
From looking for opportunities to thinking about creating them.
And from simply wanting a better life to wanting to build something that can improve the lives of others.

I have not made it yet.
I do not have all the answers.
I am not a millionaire.
I have not built 100 companies.
I have not changed the world.
Not yet.

But I have started.
And sometimes starting is the most important part.

The degree is complete.
The chapter is closed.
The next one is waiting.
And this time, I am not just looking for a place in someone else's story.
I am building my own.

---
© David Waihenya. All rights reserved.
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `The_Story_I_Am_Still_Building_David_Waihenya.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#060813] text-[#d4d4d4] pt-24 selection:bg-[#00a8ff] selection:text-black">
      
      {/* 1. TOP CINEMATIC FULL-WIDTH BANNER IMAGE */}
      <section className="w-full relative overflow-hidden">
        <div className="w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] relative bg-[#060813]">
          {!heroPhotoError ? (
            <img 
              src="/assets/about.jpeg" 
              alt="Dave Waihenya - Building in Kenya" 
              className="w-full h-full object-cover object-[center_35%]"
              style={{ filter: 'none' }}
              onError={() => setHeroPhotoError(true)}
            />
          ) : (
            <img 
              src="/assets/hero.jpeg" 
              alt="Dave Waihenya" 
              className="w-full h-full object-cover object-[center_20%]"
              style={{ filter: 'none' }}
            />
          )}

          {/* Cinematic subtle edge shadows */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060813] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* 2. PROLOGUE SECTION: I AM NOT FINISHED YET */}
      <section className="w-full bg-[#060813] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Big punchy headline + Author Portrait */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00a8ff] uppercase mb-3">
                AUTOBIOGRAPHY &amp; MANIFESTO
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-6">
                THE STORY I AM <br />
                <span className="text-[#00a8ff]">STILL BUILDING.</span>
              </h1>

              {/* Subject Portrait with natural contrast */}
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#0e1424] border border-[#1e293b] shadow-2xl">
                <img 
                  src="/assets/hero.jpeg" 
                  alt="Dave Waihenya - First Class Honors & Applied AI Builder" 
                  className="w-full h-full object-cover object-[center_15%]"
                  style={{ filter: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">FOUNDER &amp; BUILDER</p>
                  <p className="text-xl font-display font-bold text-white uppercase">David Waihenya</p>
                  <p className="text-xs text-[#94a3b8]">BSc. Computer Science (First Class Honors) · University of Embu</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={handleDownloadStory}
                  className="px-6 py-3 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#00a8ff]" />
                  <span>Download Complete Memoir (.MD)</span>
                </button>
              </div>
            </div>

            {/* Right Column: Prologue verbatim */}
            <div className="lg:col-span-6 space-y-6 font-sans text-base sm:text-lg text-[#d4d4d4] leading-relaxed pt-2">
              <div className="p-4 rounded-xl bg-[#090e1a] border border-[#1e293b] mb-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff]">
                  PROLOGUE
                </p>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase mt-1">
                  I Am Not Finished Yet
                </h3>
              </div>

              <p>
                There is a strange feeling that comes with achieving something you once prayed for.
              </p>
              <p>
                You celebrate. People congratulate you. Photographs are taken. Your name appears on a list.
              </p>
              <p>
                For a moment, everything feels complete.
              </p>
              <p>
                Then the noise fades. You wake up the next morning and realize something:
              </p>
              <p className="text-white font-bold text-xl">
                You still have a life to build.
              </p>
              <p>
                That is where I am now.
              </p>
              <p>
                I am <strong className="text-white">David Waihenya</strong>, a Computer Science graduate from the University of Embu, a First Class Honors graduate, a builder, a learner, and someone who still has more questions than answers.
              </p>
              <p>
                People may look at the graduation certificate and see the result. <strong className="text-white">I look at it and see the journey.</strong>
              </p>
              <p>
                I see the boy who started with no idea how far technology could take him. I see the years of studying. The projects that refused to work. The applications that went unanswered. The financial pressure. The temporary jobs. The uncertainty. The moments when I wondered whether I was moving forward at all.
              </p>
              <p>
                And I see one thing that never disappeared: <strong className="text-white">The desire to build a better life.</strong>
              </p>
              <p className="text-slate-300 italic border-l-2 border-[#00a8ff] pl-4">
                "This is not a story about someone who had everything figured out. It is a story about someone who kept moving while figuring it out."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CHAPTERS 1 - 3: ROOTS, COMPUTER SCIENCE & THE MOZILLA CHALLENGE */}
      <section className="w-full bg-[#04060d] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Chapter 1 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 01
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  The Beginning
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    I was born and raised in Kenya. Like many young people growing up here, I learned early that life does not always give you everything you want. Sometimes you have to make something out of what you have.
                  </p>
                  <p>
                    My early education was simple. I went to <strong className="text-white">Namunyiri Primary School</strong>, where I completed my primary education and sat for my KCPE. Later, I joined <strong className="text-white">St. Peter’s Moi’s Bridge Secondary School</strong>.
                  </p>
                  <p>
                    At the time, I did not know that I would one day spend hours writing Python code, building machine learning models, or creating companies. I was simply growing up, learning, making mistakes, trying again.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Foundations &amp; Resilience</span>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 02
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  Choosing Computer Science
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    In September 2022, I joined the <strong className="text-white">University of Embu</strong> to study Bachelor of Science in Computer Science. I knew I liked technology, but liking technology and understanding technology are two very different things.
                  </p>
                  <p>
                    University opened a completely different world: programming, algorithms, databases, computer networks, software engineering, AI, and cybersecurity.
                  </p>
                  <p className="text-white font-bold">
                    "I started asking a bigger question: What can I actually build with all this knowledge? I did not want my degree to become a piece of paper hanging on a wall."
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">University of Embu · 2022</span>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 03
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  Technology Became Real
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    One of the biggest turning points came when I participated in the <strong className="text-white">Mozilla Responsible Computing Challenge</strong>.
                  </p>
                  <p>
                    I worked on a technology project aimed at helping farmers deal with crop disease: a farmer should not have to wait until an entire crop is damaged before discovering something is wrong.
                  </p>
                  <p className="text-[#00a8ff] font-bold">
                    Then something happened that I will never forget: We won.
                  </p>
                  <p>
                    A farmer could benefit from something I built. A business could benefit. A community could benefit. I was no longer learning tech just for a degree—I was learning it to solve real human problems.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Mozilla Challenge Winners</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CHAPTERS 4 - 6: REALITY HITS, HONEST WORK & BECOMING A BUILDER */}
      <section className="w-full bg-[#060813] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-widest block mb-2">
              THE HARD ROAD
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
              When Reality Hits &amp; The Builder Emerges
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Chapters 4 & 5 */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Chapter 4 Card */}
              <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b]">
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 04
                </span>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-3">
                  Learning Outside the Classroom
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  During my ICT attachment at the University of Embu, I worked with computers, networks, software, and users. Solving support requests, installing operating systems, fixing complex errors.
                </p>
                <p className="text-sm text-white font-bold border-l-2 border-[#00a8ff] pl-3">
                  "You can know everything about technology and still fail to help someone. The real skill is understanding the problem first. Then building the solution."
                </p>
              </div>

              {/* Chapter 5 Card */}
              <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b]">
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 05
                </span>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-3">
                  When Reality Hits
                </h3>
                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  <p>
                    Graduating sounds like freedom. Sometimes it feels like the opposite. The degree is finished, but bills continue. Rent does not care that you graduated. Food does not care that you have a First Class.
                  </p>
                  <p>
                    I took temporary work. I applied for jobs. I waited. I tried again. There were moments when I questioned whether I was moving fast enough.
                  </p>
                  <p className="text-white font-bold">
                    "There is no shame in honest work while you build your future. I stopped waiting for someone to come and save my career. I started thinking: What can I build myself?"
                  </p>
                </div>
              </div>

            </div>

            {/* Chapter 6 Featured Box */}
            <div className="lg:col-span-6 p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#0c1424] via-[#090e1a] to-[#04060d] border border-[#00a8ff]/40 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 06
                </span>
                <h3 className="font-display font-extrabold text-3xl text-white uppercase mb-6 leading-tight">
                  From Developer to Builder
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                  <p>
                    That question pulled me deeper into artificial intelligence: machine learning, AI APIs, automation, chatbots, document processing, and software systems.
                  </p>
                  <p>
                    AI could read, analyze, respond, automate, assist. And when combined with good software engineering, it could solve real business problems for Kenyan enterprises.
                  </p>
                  <p>
                    Many small businesses in Kenya spend hours answering the same questions, managing documents, following up with customers. What if software could take that work away?
                  </p>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 my-4">
                    <p className="text-xs font-mono text-[#00a8ff] uppercase mb-1">THE TURNING POINT QUESTION</p>
                    <p className="font-display font-bold text-white text-base sm:text-lg">
                      It was no longer: "How do I get a job?" <br />
                      It became: <span className="text-[#00a8ff]">"How can I create something valuable enough that people want to pay for it?"</span>
                    </p>
                  </div>
                  <p className="text-sm text-slate-300">
                    That is a much harder question. But it is the question I want to spend my life answering.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1e293b] mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Ventures Born: AI Solution Studio &amp; Davamos</span>
                <span className="text-xs font-bold text-[#00a8ff] uppercase">Applied AI</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CHAPTERS 7 - 9: VISION, FIRST CLASS HONORS & BECOMING DANGEROUS */}
      <section className="w-full bg-[#04060d] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Chapter 7 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 07
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  The Bigger Vision
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    AI, software, cybersecurity, agriculture, education, business automation. These are not separate interests in my mind: they are different ways technology can solve human problems.
                  </p>
                  <p>
                    I also want to teach. Explaining a difficult concept and watching another person understand it is powerful.
                  </p>
                  <p className="text-white font-bold">
                    "I want to pursue a fully funded master's degree, contribute to research, teach, and keep building. I do not want to choose between being an academic and being a builder. I believe I can become both."
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Research &amp; Mentorship</span>
              </div>
            </div>

            {/* Chapter 8 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 08
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  First Class
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    First Class Honors. Three words. A lifetime of work behind them.
                  </p>
                  <p>
                    The certificate does not show the difficult days, the uncertainty, the times I had to learn something four times before it made sense, the projects that broke, the nights spent understanding code.
                  </p>
                  <p className="text-[#34d399] font-bold">
                    "I know what those words cost. Not because they make me better than anyone else, but because they remind me that I was capable of doing something I once only hoped I could do."
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">BSc Computer Science</span>
              </div>
            </div>

            {/* Chapter 9 */}
            <div className="p-8 rounded-2xl bg-[#090d18] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-wider block mb-2">
                  CHAPTER 09
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-4">
                  Dangerous Through Competence
                </h3>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    "The hardest part comes after the achievement. I do not want graduation to become the greatest thing I ever did. That should be the beginning of the story, not the ending."
                  </p>
                  <p>
                    I want to build products, create companies, create jobs, and become exceptional at applied AI.
                  </p>
                  <p className="text-white font-bold">
                    "And yes, I want wealth—for the freedom to choose what I work on, fund ideas, support people I care about, and build without asking whether I can afford to start."
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#1e293b] mt-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Execution &amp; Wealth</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CHAPTER 10 & EPILOGUE: THE ROAD AHEAD & BUILDING MY OWN STORY */}
      <section className="w-full bg-[#060813] py-20 lg:py-28 border-b border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="p-8 lg:p-12 rounded-3xl bg-[#0a0f1d] border border-[#1e293b] max-w-4xl mx-auto shadow-2xl">
            <span className="text-xs font-mono font-bold text-[#00a8ff] uppercase tracking-widest block mb-3">
              CHAPTER 10 &amp; EPILOGUE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-6">
              The Story Is Still Being Written
            </h2>

            <div className="space-y-6 font-sans text-base sm:text-lg text-slate-200 leading-relaxed">
              <p>
                I am still young. I am still learning. I still make mistakes. I still have days when I do not know exactly what the next step should be.
              </p>
              <p className="text-white font-bold text-xl sm:text-2xl border-l-4 border-[#00a8ff] pl-4">
                "You do not need to see the entire staircase before taking the next step. You need a direction. Then you move: Learn. Build. Fail. Adjust. Build again."
              </p>
              <p>
                I am not interested in becoming successful overnight. <strong className="text-white">I am interested in becoming dangerous through competence.</strong>
              </p>
              <p>
                I want to become the kind of person who can walk into a difficult problem and figure out how to solve it. The kind of person who can take an idea and turn it into a product. The kind of person who can teach what he knows. The kind of person who creates more value than he consumes.
              </p>
              <div className="pt-4 border-t border-[#1e293b] space-y-3">
                <p>
                  I have not made it yet. I do not have all the answers. I am not a millionaire. I have not built 100 companies. Not yet.
                </p>
                <p className="text-white font-bold text-lg">
                  But I have started. And sometimes starting is the most important part.
                </p>
                <p className="text-[#00a8ff] font-display font-extrabold text-xl sm:text-2xl uppercase pt-2">
                  The degree is complete. The chapter is closed. The next one is waiting. And this time, I am not just looking for a place in someone else's story. I am building my own.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate ? onNavigate('contact') : window.location.assign('/#contact')}
                className="px-8 py-3.5 bg-[#00a8ff] text-black font-extrabold rounded-full text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl cursor-pointer"
              >
                Work With Dave
              </button>
              <button
                onClick={handleDownloadStory}
                className="px-8 py-3.5 bg-[#0e1424] text-white border border-[#1e293b] hover:border-[#00a8ff] font-bold rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00a8ff]" />
                <span>Save Full Memoir</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BLUE CTA CALLOUT BANNER */}
      <section className="w-full bg-[#0284c7] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-200 block mb-3">
            THE OFFICIAL ROADMAP BOOK
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-4">
            FROM FIRST CLASS TO FIRST MILLION
          </h2>
          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            A Kenyan Computer Science Graduate’s Roadmap from Skills to Income, Business and Wealth. The exact playbook for turning raw technical knowledge into software products people pay for.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate ? onNavigate('book') : window.location.assign('/#book')}
              className="px-8 py-4 bg-white text-black font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl cursor-pointer"
            >
              Get The Book Now
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('speaking') : window.location.assign('/#speaking')}
              className="px-8 py-4 bg-[#0369a1] text-white font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black border border-sky-300/40 transition-all cursor-pointer"
            >
              Book For Keynotes
            </button>
          </div>
        </div>
      </section>

      {/* 8. PERMANENT GRADUATION RECORD & COMMENCEMENT ARCHIVE */}
      <section id="graduation" className="w-full bg-[#060813] py-20 lg:py-28 border-t border-[#1e293b]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a8ff] mb-3">
              <GraduationCap className="w-5 h-5 text-[#00a8ff]" />
              <span>PERMANENT ACADEMIC &amp; LIFE RECORD</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight mb-2">
              FIRST CLASS HONORS · <span className="text-[#00a8ff]">CLASS OF 2026</span>
            </h2>
            <p className="text-sm text-[#94a3b8]">
              University of Embu · Bachelor of Science in Computer Science
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Graduation Portrait */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-[#0e1424] border border-[#1e293b] rounded-2xl overflow-hidden group shadow-xl">
                {!gradPhotoError ? (
                  <img 
                    src="/assets/graduation.jpeg" 
                    alt="Dave Waihenya Graduation - BSc Computer Science First Class Honors Class of 2026" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'none' }}
                    onError={() => setGradPhotoError(true)}
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center text-[#d4d4d4] bg-[#0e1424]">
                    <div className="w-16 h-16 rounded-full bg-[#131b2e] border border-[#00a8ff]/40 flex items-center justify-center text-[#00a8ff] mb-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <p className="font-display font-bold text-lg text-white uppercase">Graduation Portrait Slot</p>
                    <p className="text-xs text-[#94a3b8] mt-2 max-w-sm">Bound to permanent path: <code className="text-[#00a8ff] bg-black/40 px-2 py-0.5 rounded">public/assets/graduation.jpeg</code></p>
                  </div>
                )}

                <button
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2.5 bg-black/80 hover:bg-[#00a8ff] hover:text-black text-white rounded-xl border border-[#1e293b] transition-all cursor-pointer shadow-lg"
                  aria-label="Expand Graduation Photo Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060813] via-[#060813]/90 to-transparent p-5 pt-8 pointer-events-none">
                  <p className="text-[10px] font-mono tracking-widest text-[#00a8ff] uppercase font-bold">PERMANENT RECORD</p>
                  <p className="text-sm font-display font-bold text-white uppercase mt-0.5">BSc Computer Science · First Class Honors</p>
                  <p className="text-xs text-[#94a3b8]">University of Embu · Class of 2026</p>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative w-full aspect-[4/5] bg-[#0e1424] border border-[#1e293b] rounded-2xl overflow-hidden flex flex-col justify-center items-center shadow-xl">
                <video 
                  controls 
                  playsInline
                  preload="metadata"
                  poster="/assets/graduation.jpeg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/graduation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-3 left-3 right-3 bg-[#060813]/90 backdrop-blur-sm border border-[#1e293b] p-3 rounded-xl text-left pointer-events-none">
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-[#e5b927]" />
                    <span className="text-[11px] font-bold text-white uppercase">Graduation Commencement Reel</span>
                  </div>
                  <p className="text-[10px] text-[#94a3b8] mt-0.5">Bound permanently to <code className="text-[#00a8ff]">public/assets/graduation.mp4</code></p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isPhotoLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPhotoLightboxOpen(false)}
          >
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white hover:text-black rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/assets/graduation.jpeg" 
                alt="Dave Waihenya - Graduation Milestone (Expanded View)"
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                style={{ filter: 'none' }}
              />
              <div className="mt-4 text-center">
                <p className="font-display font-bold text-xl text-white uppercase tracking-tight">
                  Dave Waihenya · BSc Computer Science (First Class Honors)
                </p>
                <p className="text-xs text-[#00a8ff] uppercase tracking-widest mt-1">
                  University of Embu · Class of 2026
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
