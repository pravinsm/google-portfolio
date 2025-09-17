export interface PortfolioItem {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  url?: string
  date?: string
  company?: string
  location?: string
  description?: string
  technologies?: string[]
  achievements?: string[]
}

export const portfolioData: PortfolioItem[] = [
  // About/Summary
  {
    id: "about",
    title: "About Pravin Sampathraj Manack Chand",
    content:
      "Accomplished senior software engineer equipped with 5+ years of success architecting and scaling secure, real-time applications across front-end, back-end, and cloud environments. Experience partnering with product managers and UI/UX designers to translate product requirements into production-ready code, leveraging expertise in distributed systems, API design, CI/CD pipelines, and performance optimization to deliver low-latency, fault-tolerant platforms serving hundreds of thousands of users.",
    category: "about",
    tags: [
      "Senior Software Engineer",
      "Full Stack",
      "Real-time Applications",
      "Distributed Systems",
      "API Design",
      "CI/CD",
      "Performance Optimization",
    ],
    description:
      "Senior Software Engineer building real-time, AI-powered solutions with expertise in end-to-end software lifecycle, front-end and back-end development, and emerging technologies.",
    achievements: [
      "5+ years of software engineering experience",
      "Expertise in distributed systems and API design",
      "Experience with platforms serving hundreds of thousands of users",
      "Specialization in real-time, fault-tolerant applications",
    ],
  },

  // Projects
  {
    id: "resume-builder",
    title: "Resume Builder - Professional Resume Creation Tool",
    content:
      "Developed an intuitive resume creation web application with real-time editing and customization features, allowing users to generate professional resumes in minutes with multiple templates and export options.",
    category: "projects",
    tags: ["React", "MUI", "Netlify", "Resume", "Real-time Editing", "Templates"],
    url: "https://quickresumebuilder.netlify.app",
    technologies: ["React", "Material-UI", "Netlify"],
    achievements: [
      "Real-time editing capabilities",
      "Multiple professional templates",
      "Instant PDF export",
      "Customizable sections and layouts",
    ],
  },
  {
    id: "llm-resume-reviewer",
    title: "LLM Resume Reviewer - AI-Powered ATS Analysis",
    content:
      "An innovative ATS replacement using Meta Llama 3.3 for intelligent resume analysis and job matching, providing comprehensive candidate insights and detailed match analytics for recruiters.",
    category: "projects",
    tags: ["FastAPI", "MongoDB", "Meta Llama", "AI", "LLM", "ATS", "Machine Learning", "NLP"],
    url: "https://llm-resume-reviewer.netlify.app",
    technologies: ["FastAPI", "MongoDB", "Meta Llama 3.3", "Python", "Machine Learning"],
    achievements: [
      "AI-powered resume analysis using Meta Llama 3.3",
      "Intelligent job matching algorithms",
      "Comprehensive candidate scoring",
      "ATS optimization recommendations",
    ],
  },
  {
    id: "welth",
    title: "Welth - AI-Powered Finance Management Platform",
    content:
      "Architected an AI-powered finance management platform with smart budgeting, receipt scanning, automated monthly reports, dynamic charts, and recurring transaction automation, helping users track, analyze, and optimize spending.",
    category: "projects",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Prisma",
      "Inngest",
      "Arcjet",
      "Gemini AI",
      "Clerk",
      "Vercel",
      "AI",
      "Finance",
      "Full Stack",
    ],
    url: "https://welth-sage.vercel.app",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Prisma",
      "Inngest",
      "Arcjet",
      "Gemini AI",
      "Clerk",
      "Vercel",
    ],
    achievements: [
      "AI-powered receipt scanning",
      "Smart budgeting algorithms",
      "Automated monthly reports",
      "Real-time financial analytics",
    ],
  },
  {
    id: "medvault",
    title: "Medvault - QR-Based Medical History Platform",
    content:
      "Engineered a QR-based medical history platform, enabling doctors to securely access AES-encrypted patient records with real-time hospital data synchronization.",
    category: "projects",
    tags: ["React", "MUI", "Node.js", "Firebase", "Netlify", "QR Code", "AES Encryption", "Healthcare", "Security"],
    url: "https://medvault.netlify.app",
    technologies: ["React", "Material-UI", "Node.js", "Firebase", "AES Encryption", "QR Code"],
    achievements: [
      "AES-encrypted patient data",
      "Real-time synchronization",
      "QR code scanning",
      "HIPAA-compliant design",
    ],
  },
  {
    id: "hr-rpa",
    title: "HR-RPA - Employee Onboarding Automation",
    content:
      "Automated employee and intern onboarding and offboarding at NetArt, streamlining account setups, access permissions, and documentation through RPA using Google Apps Script and Integromat.",
    category: "projects",
    tags: ["Google Apps Script", "Integromat", "React", "RPA", "Automation", "HR", "Workflow"],
    technologies: ["Google Apps Script", "Integromat (Make)", "React"],
    achievements: [
      "95% reduction in manual tasks",
      "1.5 hours to 10 minutes processing time",
      "Automated email setup",
      "Document generation",
    ],
  },
  {
    id: "rock-paper-scissor",
    title: "AI-Powered Rock Paper Scissors Game",
    content:
      "Developed an interactive game leveraging real-time computer vision to classify user gestures via webcam and dynamically calculate scores, demonstrating expertise in AI-powered image classification.",
    category: "projects",
    tags: ["CSS", "React.js", "Google Teachable Machine", "Computer Vision", "AI", "Game", "WebRTC"],
    url: "https://rock-paper-scissor-webcam.netlify.app",
    technologies: ["React.js", "CSS", "Google Teachable Machine", "WebRTC"],
    achievements: [
      "Real-time gesture recognition",
      "Computer vision integration",
      "Interactive gameplay",
      "AI model training",
    ],
  },
  {
    id: "stopwatch",
    title: "Stopwatch - Web-Based Time Application",
    content:
      "Built a web-based stopwatch and time application featuring lap tracking, start/stop functionality, and customizable countdown timers, implementing efficient state management and responsive user interactions.",
    category: "projects",
    tags: ["JavaScript", "HTML", "CSS", "GitHub", "Stopwatch", "Timer", "Web App"],
    url: "https://pravinsm.github.io/StopWatch",
    technologies: ["JavaScript", "HTML", "CSS"],
    achievements: [
      "Lap tracking functionality",
      "Start/stop controls",
      "Customizable countdown timers",
      "Efficient state management",
      "Responsive user interactions",
    ],
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator - Web-Based Calculator Application",
    content:
      "Developed a Simple Calculator with HTML, CSS, and JavaScript featuring basic arithmetic operations, responsive design, and intuitive user interface for mathematical calculations.",
    category: "projects",
    tags: ["JavaScript", "HTML", "CSS", "GitHub", "Calculator", "Web Development", "Programming", "Critical Thinking"],
    url: "https://pravinsm.github.io/Calculator",
    technologies: ["JavaScript", "HTML", "CSS"],
    achievements: [
      "Basic arithmetic operations",
      "Responsive user interface",
      "Clean and intuitive design",
      "Efficient calculation logic",
    ],
  },
  {
    id: "pec-attendance-app",
    title: "Pec Attendance App - College Attendance Management",
    content:
      "Developed an attendance app for Prathyusha Engineering College using Android Studio and Firebase Realtime Database, simplifying the attendance tracking process for students and faculty.",
    category: "projects",
    tags: ["Firebase", "Android Development", "Programming", "Critical Thinking"],
    technologies: ["Android Studio", "Firebase Realtime Database", "Java/Kotlin"],
    achievements: [
      "Streamlined attendance process for college students and faculty",
      "Implemented real-time database synchronization",
      "Built user-friendly Android application for easy access",
    ],
  },

  // Experience
  {
    id: "saleassist",
    title: "Senior Software Engineer at SaleAssist.ai",
    content:
      "Engineered and enhanced products and dashboards using React, HTML, JavaScript, CSS, SCSS, Material-UI, Handlebars, and Webpack. Built and optimized a video calling system using Agora web SDK, resulting in a 90% improvement in video calling experience.",
    category: "experience",
    tags: ["React", "JavaScript", "CSS", "SCSS", "Material-UI", "Agora SDK", "Video Calling", "Senior Engineer"],
    date: "Apr 2022 - Aug 2025",
    company: "SaleAssist.ai",
    location: "Remote",
    technologies: ["React", "JavaScript", "HTML", "CSS", "SCSS", "Material-UI", "Handlebars", "Webpack", "Agora SDK"],
    achievements: [
      "90% improvement in video calling experience",
      "60% faster connections",
      "Resolved 50+ complex bugs",
      "Enhanced system performance and reliability",
      "Managed 3K+ clients, 6K+ agents, 160K+ meetings",
    ],
  },
  {
    id: "kidbit",
    title: "UI Developer at KidBit",
    content:
      "Developed and maintained a responsive website using React and Material-UI, focusing on enhancing user experience and overall site performance metrics. Maintained 99.5% uptime and implemented automation solutions.",
    category: "experience",
    tags: ["React", "Material-UI", "UI Development", "Python", "Selenium", "Web Scraping"],
    date: "Aug 2021 - Mar 2022",
    company: "KidBit",
    location: "Remote",
    technologies: ["React", "Material-UI", "Python", "Selenium WebDriver"],
    achievements: [
      "99.5% uptime maintenance",
      "Delivered full website under 3-day deadline",
      "Automated workflows saving 10+ hours per week",
      "Enhanced user experience and performance",
    ],
  },
  {
    id: "netart",
    title: "Developer at NetArt",
    content:
      "Built scalable front-end applications using React, Next.js, and Gatsby. Integrated back-end solutions with WordPress.org and automated HR processes using Integromat and Google Apps Script.",
    category: "experience",
    tags: ["React", "Next.js", "Gatsby", "WordPress", "Google Apps Script", "Integromat", "Automation"],
    date: "Feb 2021 - May 2021",
    company: "NetArt",
    location: "Remote",
    technologies: ["React", "Next.js", "Gatsby", "WordPress", "Google Apps Script", "Integromat"],
    achievements: [
      "95% reduction in manual onboarding tasks",
      "Processing time reduced from 1.5 hours to 10 minutes",
      "Scalable front-end applications",
      "Robust content management integration",
    ],
  },
  {
    id: "letsupgrade",
    title: "Participant in Open Source Contribution",
    content:
      "Worked as backend and frontend developer in the open source project named Charity App under the 'Build with LetsUpgrade' initiative organized by LetsUpgrade EdTech Private Limited. Contributed as part of a team and gained practical experience in web development.",
    category: "experience",
    tags: ["Web Development", "Programming", "CSS", "Leadership", "HTML", "Full-Stack", "JavaScript", "Critical Thinking"],
    date: "Jul 2020 - Oct 2020",
    company: "LetsUpgrade",
    location: "Remote",
    technologies: ["JavaScript", "HTML", "CSS", "Full-Stack Development"],
    achievements: ["Contributed to an open source project as part of a team", "Gained hands-on experience in frontend and backend development"],
  },
  {
    id: "oneyes",
    title: "Web Developer at OneYes Elearning",
    content:
      "Worked as a web developer on a hackathon project for One Yes Technology. Developed a website for the event, which was successfully conducted, gaining practical experience in web development and team collaboration.",
    category: "experience",
    tags: ["Web Development", "Programming", "CSS", "Leadership", "HTML", "Full-Stack", "JavaScript", "Critical Thinking"],
    date: "Jun 2020 - Aug 2020",
    company: "OneYes Elearning",
    location: "Remote",
    technologies: ["JavaScript", "HTML", "CSS", "Full-Stack Development"],
    achievements: ["Developed website for hackathon event", "Successfully conducted event", "Gained hands-on experience in web development"],
  },
  {
    id: "coda",
    title: "Participant in Full Stack Application Development",
    content:
      "Participated in a three-day Coda Launchpad workshop on full stack application development conducted by Coda Global. Learned Angular for front-end and Java with Spring for back-end development, using MySQL for database management.",
    category: "experience",
    tags: ["Web Development", "Java", "Programming", "CSS", "Angular", "HTML", "Full-Stack Development", "Critical Thinking"],
    date: "Feb 2020",
    company: "Coda, a Presidio Cloud Company",
    location: "Chennai, Tamil Nadu, India",
    technologies: ["Angular", "Java", "Spring", "MySQL", "CSS", "HTML"],
    achievements: ["Completed full stack application workshop", "Learned Angular for front-end development", "Used Java and Spring for back-end", "Implemented MySQL database for applications"],
  },

  // Skills
  {
    id: "programming-languages",
    title: "Programming Languages",
    content:
      "Proficient in JavaScript, Python, Java, C#, C/C++, PHP, and SQL with extensive experience in building scalable applications and solving complex problems.",
    category: "skills",
    tags: ["JavaScript", "Python", "Java", "C#", "C/C++", "PHP", "SQL", "Programming"],
  },
  {
    id: "web-technologies",
    title: "Web Technologies & Frameworks",
    content:
      "Expert in modern web development with HTML, CSS, Tailwind CSS, SCSS, React, Next.js, Vue.js, Node.js, Express.js, FastAPI, Material UI, Shadcn UI, Bootstrap, and Clerk.",
    category: "skills",
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SCSS",
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Material UI",
      "Shadcn UI",
      "Bootstrap",
      "Clerk",
    ],
  },
  {
    id: "tools-technologies",
    title: "Tools & Technologies",
    content:
      "Experienced with Firebase, MongoDB, Snowflake SQL, Supabase, Prisma, Redis, Inngest, Arcjet, Github, Jira, Groq, Integromat, Google Apps Script, Selenium WebDriver, Flutter, Android Studio, Matlab, and Teachable Machine.",
    category: "skills",
    tags: [
      "Firebase",
      "MongoDB",
      "Snowflake",
      "Supabase",
      "Prisma",
      "Redis",
      "Inngest",
      "Arcjet",
      "Github",
      "Jira",
      "Groq",
      "Integromat",
      "Google Apps Script",
      "Selenium",
      "Flutter",
      "Android Studio",
      "Matlab",
      "Teachable Machine",
    ],
  },

  // Education
  {
    id: "masters",
    title: "Master of Computer Information Systems",
    content:
      "Pursued an advanced degree in Computer Information Systems at Colorado State University, Fort Collins, focusing on business intelligence, IT project management, and application development. Developed strong analytical, technical, and project management skills through coursework and projects.",
    category: "education",
    tags: ["Masters", "MCIS", "Colorado State University", "Computer Information Systems"],
    date: "May 2025",
    company: "Colorado State University",
    location: "Fort Collins, Colorado, United States",
    achievements: [
      "CGPA: 3.73/4", 
      "Completed graduate certifications in Business Intelligence, IT Project Management, and Business Application Development", 
      "Led multiple hands-on projects integrating database management, analytics, and software development"
    ],
  },
  {
    id: "bachelors",
    title: "Bachelor of Engineering in Computer Science",
    content:
      "Completed undergraduate studies in Computer Science & Engineering at Anna University, Chennai. Gained a strong foundation in programming, algorithms, and software engineering principles, preparing for a career in full-stack and cloud application development.",
    category: "education",
    tags: ["Bachelors", "Computer Science", "Engineering", "Anna University"],
    date: "Apr 2021",
    company: "Anna University",
    location: "Chennai, Tamil Nadu, India",
    achievements: [
      "CGPA: 8.53/10", 
      "Specialized in computer science and engineering fundamentals", 
      "Completed major projects in software development and data structures"
    ],
  },

  // Publications
  {
    id: "water-pollution-detection",
    title: "Smart Water Pollution Detection for Aquatic Life Protection",
    content:
      "Published research on IoT system for real-time water pollution detection, using sensors to monitor water quality and send mobile alerts for aquatic life protection.",
    category: "publications",
    tags: ["IoT", "Water Pollution", "Sensors", "Mobile Alerts", "Research", "Environmental"],
    date: "Apr 2020",
    url: "http://testmagzine.biz/index.php/testmagzine/article/view/6178",
    achievements: [
      "Real-time monitoring system",
      "IoT sensor integration",
      "Mobile alert system",
      "Environmental protection",
    ],
  },

  // Contact
  {
    id: "contact",
    title: "Contact Information",
    content: "I’d love to hear from you! Get in touch with me for opportunities, collaborations, or inquiries.",
    category: "contact",
    url: "mailto:pravinsm10@gmail.com",
    tags: ["Contact", "Email", "Phone", "Location"],
    location: "Fort Collins, CO",
    description: "✉️ pravinsm10@gmail.com | 📞 (970) 430-9241",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    content: "Connect with me on LinkedIn to view professional background, projects and achievements.",
    category: "contact",
    tags: ["LinkedIn", "Profile", "Networking"],
    url: "https://www.linkedin.com/in/pravinsm",
    location: "Fort Collins, CO",
  },
]
