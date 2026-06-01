import webhookImage from "../assets/image.png";
import udemy from "../assets/image1.png";
import revp from "../assets/image2.png";
import leafai from "../assets/image3.png";
import reliv from "../assets/image4.png";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  github: string;
  demo: string;
  techStack: string[];
  category: string;
  glowColor: string;
  image?: string;
}

export interface Internship {
  role: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  glowColor: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  date: string;
  badge?: string;
}

export interface Education {
  institution: string;
  degree: string;
  score: string;
  date: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; percentage: number; icon: string }[];
}

export const portfolioData = {
  personalInfo: {
    name: "Kishor S",
    titles: [
      "AI Enthusiast",
      "Business Analyst",
      "Full Stack Developer",
      "Passionate Engineer",
      "MERN Stack Developer"
    ],
    email: "kishorsakthinarayanan@gmail.com",
    phone: "9788114422",
    github: "https://github.com/KishorS-06",
    linkedin: "https://www.linkedin.com/in/kishor-s-365706291", // standard customisable link
    leetcode: "https://leetcode.com/u/KISHOR_S_06/", // standard customisable link
    resumeUrl: "https://drive.google.com/file/d/1knYzAhBkkOdFIsnoNoC4jfvWJjBK_FuY/view?usp=drive_link", // User can change this to actual resume download link
    location: "Tamil Nadu, India",
    college: "Sri Eshwar College of Engineering",
    aboutSummary: "I am a passionate Computer Science and Business Systems (CSBS) student with a strong foundation in full-stack development, database architecture, and business analytics. I excel at bridging the gap between technical execution and business strategy, building systems that are robust, scalable, and impact-driven. From deep algorithmic solutions in Java and C++ to modern Web applications with the MERN stack and AI integrations, I thrive on solving complex real-world challenges.",
    stats: [
      { label: "LeetCode Problems", value: "250+", rating: "1530 Rating" },
      { label: "CGPA (B.Tech CSBS)", value: "7.97", subtitle: "Up to 6th Sem" },
      { label: "Hackathons Won", value: "Multiple", subtitle: "1st Positions" },
      { label: "Internships Done", value: "3", subtitle: "Industry Experience" }
    ]
  },

  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", percentage: 85, icon: "C" },
        { name: "C++", percentage: 90, icon: "CP" },
        { name: "Java", percentage: 92, icon: "Java" },
        { name: "JavaScript", percentage: 95, icon: "JS" }
      ]
    },
    {
      title: "Frameworks & Runtimes",
      skills: [
        { name: "React.js", percentage: 92, icon: "React" },
        { name: "Node.js", percentage: 88, icon: "Node" },
        { name: "Express.js", percentage: 90, icon: "Express" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", percentage: 88, icon: "MongoDB" },
        { name: "MySQL", percentage: 90, icon: "MySQL" },
        { name: "Firebase", percentage: 85, icon: "Firebase" }
      ]
    },
    {
      title: "Tools & Analytics",
      skills: [
        { name: "Power BI", percentage: 88, icon: "PowerBI" },
        { name: "Tableau", percentage: 82, icon: "Tableau" },
        { name: "Zoho Analytics", percentage: 80, icon: "Zoho" },
        { name: "Excel", percentage: 95, icon: "Excel" },
        { name: "VS Code", percentage: 98, icon: "VSCode" },
        { name: "Oracle", percentage: 85, icon: "Oracle" },
        { name: "Figma", percentage: 80, icon: "Figma" },
        { name: "Canva", percentage: 90, icon: "Canva" }
      ]
    },
    {
      title: "Core Engineering",
      skills: [
        { name: "Data Structures & Algorithms", percentage: 90, icon: "DSA" },
        { name: "Object-Oriented Programming (OOPS)", percentage: 92, icon: "OOPS" },
        { name: "Problem Solving", percentage: 95, icon: "Problem" },
        { name: "Full Stack Development", percentage: 90, icon: "FullStack" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      title: "Webhook Tester",
      description: "Real-time webhook testing platform for simulator request monitoring and debugging.",
      longDescription: "A sophisticated solution designed to simulate and test webhook integrations by enabling real-time request monitoring and response validation. It improves system reliability by helping developers debug, track, and ensure accurate data exchange between third-party services and APIs.",
      date: "March 2026",
      github: "#",
      demo: "https://github.com/KishorS-06/Webhooks",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      category: "Full Stack",
      glowColor: "from-cyan-500 to-blue-500",
      image: webhookImage
    },
    {
      title: "Udemy Clone",
      description: "Premium learning platform UI clone featuring elegant responsive structures.",
      longDescription: "A high-fidelity learning platform UI clone featuring an ultra-responsive design, visual media playback panels, interactive course structures, progress tracking interfaces, and detailed dashboard analytics mimicking the full Udemy learner experience.",
      date: "April 2025",
      github: "https://github.com/KishorS-06/Udmy_clone",
      demo: "https://udemyclone-ashy.vercel.app/",
      techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
      category: "Full Stack",
      glowColor: "from-purple-500 to-pink-500",
      image: udemy
    },
    {
      title: "RSVP Management System",
      description: "MERN stack-based event invitation management and real-time response tracker.",
      longDescription: "An advanced MERN stack web application for creating and managing event invitations. Enables hosts to create customized invites, send secure access links to attendees, tracks real-time RSVPs with analytics dashboards, and manages dietary preferences or party sizes.",
      date: "August 2024",
      github: "https://github.com/KishorS-06/rsvpmanager",
      demo: "https://rsvpmanager-p1t9.vercel.app/",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Nodemailer"],
      category: "Full Stack",
      glowColor: "from-blue-600 to-indigo-500",
      image: revp
    },
    {
      title: "Leaflyze AI",
      description: "AI-powered leaf disease detection leveraging TensorFlow CNN and Streamlit.",
      longDescription: "An intelligent deep-learning system designed for real-time agricultural inspection. Combines custom-trained TensorFlow Convolutional Neural Network (CNN) models with an interactive Streamlit dashboard, helping farmers instantly identify plant anomalies and download treatment checklists.",
      date: "April 2024",
      github: "#",
      demo: "https://leaflyze-ai-detect.streamlit.app",
      techStack: ["Python", "TensorFlow", "CNN", "Streamlit", "OpenCV", "NumPy"],
      category: "AI & ML",
      glowColor: "from-green-400 to-cyan-500",
      image: leafai
    },
    {
      title: "Reliv",
      description: "Flutter-based disaster management app functional in low/no network scenarios.",
      longDescription: "A lifesaving Flutter-based mobile app engineered specifically for emergency environments. Utilizes peer-to-peer mesh protocols and local storage to run seamlessly in zero or low-connectivity zones, allowing victims to coordinate rescues, share critical aid locations, and map safe routes.",
      date: "March 2024",
      github: "#",
      demo: "https://github.com/KishorS-06/Relivapp",
      techStack: ["Flutter", "Dart", "Firebase Offline", "P2P Mesh Protocols", "Google Maps API"],
      category: "Mobile App",
      glowColor: "from-red-500 to-orange-500",
      image: reliv
    }
  ] as Project[],

  experience: [
    {
      role: "Business Analyst Intern",
      company: "Tech Corporate (Industry Placement)",
      date: "January 2026",
      description: "Gained knowledge in client communication, data analysis, visualization, and deriving actionable insights to support business decision-making. Developed proficiency in tools like Excel, Power BI, and Python, with the ability to interpret complex datasets and communicate strategic findings effectively to stakeholders.",
      technologies: ["Power BI", "Tableau", "Excel", "Python", "Data Visualization", "Business Strategy"],
      glowColor: "cyan"
    },
    {
      role: "MERN Stack Intern",
      company: "Better Tomorrow Training Institute",
      date: "January 2025",
      description: "Acquired intensive hands-on knowledge on full-stack architecture, focusing on MongoDB, Express.js, React.js, and Node.js. Developed multiple dynamic CRUD web applications, optimized API request handling, implemented secure JWT-based authentication flows, and gained expertise in state management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
      glowColor: "purple"
    },
    {
      role: "Java Full Stack Intern",
      company: "Tech Enterprise",
      date: "July 2025",
      description: "Gained basic exposure to enterprise-level Java Full Stack development using Spring Boot, React, and MySQL. Worked on developing modular REST APIs with guidance, creating responsive front-end views, conducting database normalization, and understanding full end-to-end frontend-backend integration flows.",
      technologies: ["Java", "Spring Boot", "MySQL", "React.js", "REST APIs", "Database Normalization"],
      glowColor: "blue"
    }
  ] as Internship[],

  certifications: [
    {
      title: "Certified in Design and Analysis of Algorithm",
      issuer: "Udemy",
      date: "2024"
    },
    {
      title: "Certified in SQL Query Basics",
      issuer: "Skill Rack",
      date: "2024"
    },
    {
      title: "Certified in Programming in Java",
      issuer: "NPTEL",
      date: "2024"
    },
    {
      title: "Certified in Joy of Computing using Python",
      issuer: "NPTEL",
      date: "2023"
    }
  ] as Certification[],

  achievements: [
    {
      title: "LeetCode 250+ Solved",
      detail: "Solved over 250+ algorithm problems with an official LeetCode rating of 1530.",
      date: "Ongoing",
      badge: "Algorithm Mastery"
    },
    {
      title: "DevBattles 1st Cash Prize",
      detail: "Secured the absolute 1st cash prize position in the DevBattles coding competition conducted at SIET.",
      date: "2026",
      badge: "1st Place"
    },
    {
      title: "Mini Project Expo Winner",
      detail: "Secured the 1st position in the Intra College Project Expo'2025 presenting high-end engineering frameworks.",
      date: "2025",
      badge: "Winner"
    },
    {
      title: "Freshathon Hackathon Winner",
      detail: "Secured the 1st position in the Freshathon Intra College Hackathon, engineering smart solutions in under 24 hours.",
      date: "2024",
      badge: "1st Place"
    },
    {
      title: "Java-DB Sprint Leap Project Runner-Up",
      detail: "Secured the 2nd position in the Intra College Project Expo for optimizing enterprise database sprint systems.",
      date: "2024",
      badge: "Runner-Up"
    }
  ] as Achievement[],

  education: [
    {
      institution: "Sri Eshwar College of Engineering",
      degree: "B.Tech in Computer Science and Business Systems (CSBS)",
      score: "CGPA: 7.97 (Up to 6th Semester)",
      date: "2023 - 2027",
      details: "Rigorous training combining advanced computer science algorithms, database systems, web architectures, and strategic business administration principles."
    },
    {
      institution: "PKD Matriculation Hr. Sec School",
      degree: "Higher Secondary Certificate (HSC)",
      score: "Score: 90.3%",
      date: "2021 - 2023",
      details: "Specialized in Computer Science, Mathematics, and Physics core studies."
    },
    {
      institution: "PKD Matriculation Hr. Sec School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      score: "Status: Pass",
      date: "2020 - 2021",
      details: "Completed standard secondary curriculum with high grades in Mathematics and Science."
    }
  ] as Education[]
};
