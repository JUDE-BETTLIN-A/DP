const portfolioData = {
    profile: {
        name: "Jude Bettlin A",
        title: "Full Stack Developer",
        location: "Coimbatore, India",
        phone: "+91 9025482265",
        email: "judebettlin@gmail.com",
        summary: "Software Engineer with hands-on experience in Java, Spring Boot, and RESTful API development, along with frontend exposure to React and JavaScript. Currently pursuing B.Tech in Artificial Intelligence and Data Science, with strong foundations in OOP, database design, and problem solving. Passionate about building scalable, maintainable applications and improving full-stack systems."
    },
    education: [
        {
            institution: "SNS College of Engineering",
            degree: "B.Tech in AI and Data Science",
            duration: "2022 – Present",
            grade: "CGPA: 8.0 / 10"
        },
        {
            institution: "Sri Vijay Vidyalaya MHSS",
            degree: "Class X & XII",
            duration: "2018 – 2021",
            grade: "SSLC: 83% | HSC: 86%"
        }
    ],
    experience: [
        {
            company: "OneDot Communications",
            role: "Full Stack Intern",
            duration: "Jan 2026 – Present",
            description: "Developing responsive React-based user interfaces and collaborating with backend engineers to improve performance, ensure smooth data flow, and enhance overall application stability. Actively involved in agile workflows, UI optimization, and code reviews."
        },
        {
            company: "Cognizant DeepSkilling Program",
            role: "Full Stack Development Trainee",
            duration: "Jun 2025 – Aug 2025",
            description: "Trained in building backend services using Java and Spring Boot following industry best practices. Designed and tested RESTful APIs using Postman and integrated backend logic with React frontend components while applying clean coding principles."
        },
        {
            company: "Software Tech Solution",
            role: "Full Stack Development Intern",
            duration: "Jun 2024 – Jul 2024",
            description: "Gained hands-on experience developing Spring Boot REST APIs and integrating them with a React-based frontend. Designed and optimized MySQL database schemas for performance and implemented unit and integration testing for stable application delivery."
        }
    ],
    projects: [
        {
            name: "TRUST-BUY",
            technologies: ["TypeScript", "HTML", "Python", "JavaScript", "CSS"],
            description: "A full-stack AI-powered price comparison and trust-scoring platform. Scrapes product data from multiple online retailers, analyzes pricing history, and provides trust scores to help users make confident purchase decisions. Deployed on Vercel.",
            icon: "🛒",
            github: "https://github.com/JUDE-BETTLIN-A/TRUST-BUY",
            homepage: "https://trust-buy.vercel.app"
        },
        {
            name: "Cross-AI Context Portability System",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "A Chrome extension enabling seamless AI chat context transfer across different platforms. Features Teleport Button, Local Semantic Compression, and Infinite Project Vault to bypass message and token limits while preserving conversation context.",
            icon: "🧠",
            github: "https://github.com/JUDE-BETTLIN-A/Cross-AI-Context-Portability-System"
        },
        {
            name: "Portfolio Website",
            technologies: ["JavaScript", "CSS", "HTML"],
            description: "A modern, animated portfolio website built with React and Vite. Features scroll-triggered animations, glassmorphism design, floating geometric boxes, animated gradient borders, and a dark futuristic theme.",
            icon: "🎨",
            github: "https://github.com/JUDE-BETTLIN-A/PORTFOLIO",
            homepage: "https://portfolio-9025482265s-projects.vercel.app"
        },
        {
            name: "Music Player",
            technologies: ["Kotlin", "Java", "Android"],
            description: "A native Android music player application built with Kotlin and Java. Features playlist management, media playback controls, and a clean mobile UI for streaming and organizing music locally on Android devices.",
            icon: "🎵",
            github: "https://github.com/JUDE-BETTLIN-A/Music-Player"
        },
        {
            name: "Expense Tracker",
            technologies: ["Spring Boot", "React", "MySQL"],
            description: "A full-stack expense tracking system allowing users to record, categorize, and analyze expenses. Implements secure REST APIs integrated with a responsive React interface, focusing on clean architecture and efficient database persistence.",
            icon: "💰",
            github: "https://github.com/JUDE-BETTLIN-A/Expense-tracker"
        },
        {
            name: "Face Detection Project",
            technologies: ["Python", "OpenCV", "Machine Learning"],
            description: "An AI-powered face detection system built with Python and computer vision libraries. Uses trained models to detect and identify faces in real-time from images and video streams with high accuracy.",
            icon: "👁️",
            github: "https://github.com/JUDE-BETTLIN-A/Face_Detection_Project"
        },
        {
            name: "Attendance System",
            technologies: ["Java", "Spring Boot"],
            description: "A Java-based attendance management system for tracking and managing attendance records. Features structured data handling, backend logic for marking and retrieving attendance, and clean object-oriented design.",
            icon: "📋",
            github: "https://github.com/JUDE-BETTLIN-A/Attendance"
        },
        {
            name: "Rentzy",
            technologies: ["TypeScript", "Next.js", "CSS"],
            description: "A modern rental marketplace platform built with TypeScript and Next.js. Enables users to list, browse, and manage rental properties with a responsive, server-rendered frontend and type-safe codebase.",
            icon: "🏠",
            github: "https://github.com/JUDE-BETTLIN-A/rentzy1"
        }
    ],
    skills: {
        "Programming & Scripting": { icon: "⌨️", items: ["Java", "HTML", "CSS", "JavaScript"] },
        "Frameworks & Tools": { icon: "🔧", items: ["React.js", "Spring Boot"] },
        "Auth & Security": { icon: "🔐", items: ["Spring Security", "OAuth 2.0 basics", "HTTP Basic"] },
        "Database & APIs": { icon: "🗄️", items: ["MySQL", "REST APIs"] },
        "Dev Tools": { icon: "🛠️", items: ["Git", "GitHub", "Postman", "Visual Studio", "IntelliJ", "Vercel", "Render"] },
        "Core Concepts": { icon: "🧠", items: ["OOP", "DSA", "Problem Solving"] }
    },
    certifications: [
        { name: "Japanese Language Proficiency Test (JLPT N5)", style: "cert-gold", emoji: "🇯🇵" },
        { name: "IBM Design Thinking Co-Creator", style: "cert-blue", emoji: "🧩" },
        { name: "Postman API Fundamentals Student Expert", style: "cert-green", emoji: "📮" },
        { name: "JPMorgan Chase Software Engineering Job Simulation", style: "cert-rose", emoji: "🏦" }
    ],
    achievements: {
        softSkills: ["Effective communication", "Teamwork", "Critical thinking", "Quick learner"],
        languages: ["English", "Japanese", "Tamil"],
        awards: ["Second prize at code debugging at PPG Intuition"]
    }
}

export default portfolioData
