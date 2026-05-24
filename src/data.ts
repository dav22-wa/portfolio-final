export const data = {
  personal: {
    name: "David Waihenya",
    titles: [
      "AI & Machine Learning Developer",
      "Cybersecurity Enthusiast",
      "Mozilla Challenge Winner 2024",
      "CS Student · University of Embu"
    ],
    tagline: "I build AI systems that solve real problems.",
    email: "davidwaihenya254@gmail.com",
    phone: "+254 792 477 722",
    location: "Embu, Kenya",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  blog: [
    {
      id: "zero-to-ai",
      category: "Personal Growth",
      date: "May 2025",
      title: "How I Went from Zero Coding Knowledge to Building AI Systems in 3 Years",
      excerpt: "I did not know what a variable was in 2022. Here is exactly what changed, what I did, and what I would tell myself on day one.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      content: `
When I walked into the University of Embu in September 2022, I had absolutely zero background in programming. If you had asked me what a 'variable' or a 'function' was, I wouldn't have been able to tell you. Fast forward to today, and I am building machine learning models, real-time AI audio analysis tools, and predictive applications.

Here is a breakdown of that journey, the hurdles I faced, and what I would tell my day-one self.

### The First Few Months: The Steep Curve
At first, introductory programming felt like learning a completely alien language. While some of my peers already had backgrounds in tech or high school computing, I was starting from a blank slate. My strategy was simple: **outwork the confusion**.

I spent countless nights in the labs, taking apart code simply to understand how it broke, and then trying to put it back together. I realized early on that reading about code isn't the same as writing it. You have to build things.

### The Breakthrough: Finding My Niche in AI
About a year in, I discovered my passion: Artificial Intelligence. I didn't want to just build static pages; I wanted to build systems that could 'think' or, at least, make intelligent inferences based on data.

I started small with basic regression models in Python using \`scikit-learn\`. Then, I moved onto neural networks with \`TensorFlow\` and \`OpenCV\`. 
One of my definitive projects was my **Potato Early Blight Detection System**. I wanted to build something that could genuinely help smallholder farmers in Kenya catch crop disease early. The moment my model successfully identified its first diseased leaf, I knew I was meant to do this.

### What I Would Tell My Day-One Self
1. **Embrace the Error Messages**: An error message isn't a sign of failure; it's the computer trying to guide you. Read them carefully.
2. **Build for the Real World**: Don't just do tutorials. Build tools that solve problems around you, no matter how small.
3. **Patience is a Feature**: You aren't going to understand everything immediately. Consistency compounds.

It has been an incredible 3 years, and I am more excited than ever for the next chapter.
      `
    },
    {
      id: "tech-builders-kenya",
      category: "Entrepreneurship",
      date: "April 2025",
      title: "Why Kenya Needs Tech Builders, Not Just Tech Employees",
      excerpt: "Everyone is chasing a job at a big company. I think the real opportunity is building the companies everyone else wants to work at.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      content: `
In Kenya's rapidly growing tech ecosystem, there is a prominent default path for computer science students: graduate, polish your leetcode skills, and try to land a job at one of the "Big Tech" branches in Nairobi. 

While there is nothing wrong with employment, I believe we are missing a massive opportunity if we only prepare ourselves to be employees. Kenya needs **builders**.

### The African Context
Many of the world's leading software products were built for Western contexts. They assume high-speed, cheap internet, specific financial infrastructures, and a certain baseline of hardware. 

When we only seek employment in companies that primarily serve those markets (or import those products to ours), we leave our own local problems unsolved. We have unique challenges in agriculture, logistics, healthcare, and education that require deeply contextual, homegrown tech solutions.

### The Value of Building
Building isn't just about creating a startup for funding. It's about a mindset. It implies looking at a problem—like crop diseases affecting local farmers, or the difficulty of tracking digital attendance in Kenyan universities—and deciding to write the code that fixes it.

When I built a web app to replace manual attendance sheets in 2023, it wasn't to create the next unicorn. It was builder mindset. I saw a local inefficiency, and I used code to remove it.

### What Needs to Change
Universities and tech hubs need to shift the narrative from "learn to code to get hired" to "learn to code to build solutions." 

We have the talent. We have the drive. We just need to aim our keyboards at the problems in our own backyards. We shouldn't just be the tech workforce of the world; we should be the architects of Africa's digital infrastructure.
      `
    },
    {
      id: "legal-chatbot",
      category: "AI",
      date: "March 2025",
      title: "What Building a Legal Chatbot for Ordinary Kenyans Taught Me",
      excerpt: "Sheria Assist started as an assignment. Then I realized how many people do not know their own rights.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
      content: `
Access to justice is a luxury in many parts of the world. In Kenya, understanding the complexities of the law, navigating the bureaucracy, and knowing your basic constitutional rights can feel like an impossible task for the ordinary citizen. 

This realization hit me hard when I started exploring Natural Language Processing (NLP) and Large Language Models (LLMs). The question became: *Can AI bridge the knowledge gap between the law and the citizen?*

### The Birth of a Concept
I started working on a concept called **Sheria Assist**. The idea was to create a chatbot that could take plain English (and potentially Swahili) queries about basic legal rights, tenancy agreements, or employment law, and provide accurate, understandable answers based on the Kenyan Constitution and penal code.

### The Challenges of AI in Law
Building this taught me several crucial lessons about AI safety and reliability:
1. **Hallucination is Dangerous**: A chatbot giving a slightly wrong recipe is funny. A chatbot giving wrong legal advice can land someone in jail. I had to learn about Retrieval-Augmented Generation (RAG) to ensure the model grounded its answers strictly in legal documents.
2. **Context is Everything**: Legal questions are rarely straightforward. "Can my landlord evict me?" depends entirely on the context of the lease, the notice given, and rent payment history. The AI needed to learn to ask clarifying questions rather than just spitting out a "Yes" or "No".
3. **Accessibility**: A legal chatbot is useless if people can't access it. It couldn't just live on a heavy web application; it needed to be lightweight, easy to use on mobile, and ideally accessible via simple messaging platforms.

### The Road Ahead
While building safe, production-ready AI for the legal sector takes time and rigorous testing, the experiment proved something to me. AI's real power isn't in replacing lawyers; it's in democratizing access to basic legal knowledge so that the ordinary person isn't operating in the dark.
      `
    }
  ],
  about: {
    heading: "From Zero to AI Developer in 3 Years",
    bio1: "I joined the University of Embu in 2022 with no programming background at all. I did not know what a variable was. Three years later, I have built machine learning models, real-time AI systems, and web applications used by actual people.",
    bio2: "I am finishing my BSc. in Computer Science and I did my industrial attachment at the university's own ICT department — where I configured networks, managed systems, and was commended by the Head of ICT for my work.",
    bio3: "I am drawn to problems where AI can do something genuinely useful — detecting plant disease early, identifying harassment in real time, or predicting which content will reach people. That is the kind of work I want to keep doing.",
  },
  skills: {
    core: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL"],
    frameworks: ["Flask", "TensorFlow", "OpenCV", "scikit-learn", "Streamlit", "MySQL", "MongoDB", "Linux", "AWS (basic)"],
    tools: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "VMware", icon: "vmware" },
      { name: "VS Code", icon: "vscode" },
      { name: "Jupyter Notebook", icon: "jupyter" },
      { name: "Google Colab", icon: "colab" },
      { name: "Kaggle", icon: "kaggle" },
    ],
    ai: [
      "ChatGPT", "GitHub Copilot", "OpenAI API", "Hugging Face", 
      "LangChain", "Google Vertex AI", "TensorFlow Hub", 
      "Weights & Biases", "Claude (Anthropic)", "Gamma AI"
    ]
  },
  projects: [
    {
      name: "Potato Early Blight Detection System",
      tags: ["AI & ML"],
      stack: ["Python", "TensorFlow", "OpenCV"],
      date: "January 2026",
      description: "A machine learning model that detects early blight from potato leaf images. Built to help smallholder Kenyan farmers catch disease early and reduce crop losses. Used computer vision for image preprocessing and feature extraction.",
      links: [{ label: "Test the App →", url: "#" }, { label: "GitHub →", url: "#" }]
    },
    {
      name: "AI Voice Guardian",
      tags: ["AI & ML", "Cybersecurity"],
      stack: ["AI", "Speech Processing", "Real-Time Audio"],
      date: "November 2025",
      description: "A real-time system that listens to live audio conversations and detects verbal harassment as it happens. Classifies hate speech, threats, and bullying. Scores severity as low, medium, or high. Auto-mutes severe offenders.",
      links: [{ label: "View on GitHub →", url: "#" }]
    },
    {
      name: "Short-Form Video Virality Predictor",
      tags: ["AI & ML"],
      stack: ["Python", "Streamlit", "Machine Learning"],
      date: "September 2025",
      description: "A Streamlit app that tells you if a short video is Rising, Declining, Seasonal, or Stable using real engagement data. Supports URL auto-fetch from TikTok and YouTube Shorts. Also has a manual input mode.",
      links: [{ label: "View on GitHub →", url: "#" }]
    },
    {
      name: "Digital Attendance Management System",
      tags: ["Web"],
      stack: ["Python", "Flask", "MySQL"],
      date: "January 2023",
      description: "A secure web app that replaced manual attendance sheets with digital tracking and user authentication. Faster, more accurate, and actually used.",
      links: [{ label: "View on GitHub →", url: "#" }]
    },
    {
      name: "Personal Portfolio Website",
      tags: ["Web"],
      stack: ["HTML", "CSS", "JavaScript"],
      date: "April 2024",
      description: "A responsive portfolio site built to showcase projects and skills. Clean, fast, and mobile-friendly.",
      links: [{ label: "View on GitHub →", url: "#" }]
    }
  ],
  experience: [
    {
      role: "ICT Attaché",
      org: "University of Embu — ICT Department",
      duration: "May 2025 – August 2025",
      location: "Embu, Kenya",
      bullets: [
        "Configured and maintained network systems for reliable campus connectivity",
        "Installed operating systems, set up drivers, and applied security patches",
        "Managed Windows updates across the department",
        "Provided technical support: email recovery, password resets, portal issues",
        "Supervised computer labs and assisted students with hardware and software queries",
        "Commended by Head of ICT, Maurice Murimi Micheni, for exceptional diligence and technical capability"
      ]
    }
  ],
  education: [
    {
      degree: "BSc. Computer Science",
      institution: "University of Embu",
      period: "September 2022 – September 2026",
      details: "Artificial Intelligence · Machine Learning · Database Systems · Computer Networks · Computer Network Security · Web Programming · Software Engineering · ICT Project Management"
    },
    {
      degree: "KCSE — Grade B-",
      institution: "St. Peter's Moi's Bridge Secondary School",
      period: "January 2018 – April 2022",
      details: "Location: Kakamega, Kenya"
    }
  ],
  certifications: [
    {
      title: "Software Development Program",
      issuer: "Power Learn Project (PLP Academy)",
      period: "February 2025 – July 2025",
      focus: "AI for Software Engineering · Python · Web Technologies · Databases · Startup Building"
    },
    { title: "Artificial Intelligence | Cybersecurity | Cloud Computing", issuer: "IBM", focus: "Professional Training" },
    { title: "Intro to Cybersecurity Awareness & Data Science", issuer: "HP LIFE", focus: "Online Certification" },
    { title: "Intro to Cybersecurity & Networking Basics", issuer: "Cisco Networking Academy", focus: "Online Certification" },
    { title: "Cisco Certified Networking Associate (CCNA)", issuer: "Cisco", status: "In Progress", type: "In Progress — Expected December 2026", progress: 40 },
    { title: "Junior Cybersecurity Analyst", issuer: "Cisco", status: "In Progress", type: "In Progress — Expected December 2026", progress: 35 }
  ],
  achievements: [
    {
      title: "Mozilla Responsible Computing Challenge 2024",
      icon: "🏆",
      description: "Selected as a winner in the Mozilla Foundation's global challenge for responsible and ethical computing."
    },
    {
      title: "University of Embu ICT Dept Recognition",
      icon: "🎖️",
      description: "Recognized for exemplary performance during industrial attachment. Commended by Head of ICT Maurice Murimi Micheni."
    }
  ],
  leadership: [
    { text: "Led a 10-member student team in a community-based tech project", icon: "Users" },
    { text: "Volunteered in local clean-up and tree-planting initiatives", icon: "Leaf" },
    { text: "Served as Protocol Officer at the University of Embu Career Week", icon: "Mic" }
  ]
};
