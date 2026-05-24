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
