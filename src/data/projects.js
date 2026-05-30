import financialCopilot from "../assets/projects/financial-ai-copilot.png";
import financialCopilot2 from "../assets/projects/financial-ai-copilot2.png";
import taskforcePro from "../assets/projects/taskforce-pro.png";
import taskforcePro2 from "../assets/projects/taskforce-pro2.png";
import taskforcePro3 from "../assets/projects/taskforce-pro3.png";
import audiobookCenter1 from "../assets/projects/audiobookCenter1.png";
import audiobookCenter from "../assets/projects/audiobook-center.png";
import audiobookCenter2 from "../assets/projects/audiobook-center2.png";
import audiobookCenter3 from "../assets/projects/audiobook-parts.png";
import audiobookCenter4 from "../assets/projects/audiobook-player.png";

export const PROJECTS = [
  {
    id: "financial-ai-copilot",
    num: "01",
    tag: "AI / RAG System",
    title: "Financial AI Copilot",
    titleItalic: "Copilot",
    gallery: [financialCopilot, financialCopilot2],

    subtitle:
      "A multi-document financial RAG assistant that analyzes annual reports, extracts KPIs, and answers finance questions using evidence-backed retrieval.",

    desc: "An AI-powered financial research assistant built with Retrieval-Augmented Generation, vector search, and financial document analysis.",

    chips: [
      "Python",
      "Streamlit",
      "ChromaDB",
      "RAG",
      "Sentence Transformers",
      "LLM",
    ],

    color: "#0f2e2a",
    accent: "#4a8c7a",

    role: "AI Engineer & Developer",
    duration: "2 Months",
    year: "2026",

    liveUrl: "https://financial-rag-copilot.streamlit.app/",
    githubUrl: "https://github.com/Gude-Rushikesh/Financial-rag",

    overview:
      "Financial analysts spend significant time searching through annual reports and corporate filings. This project was built to create a searchable knowledge base capable of answering report-specific questions while providing supporting evidence.",

    process:
      "The application extracts text from uploaded reports, creates semantic embeddings, stores them in a vector database, retrieves relevant passages using similarity search, and generates responses using a Retrieval-Augmented Generation workflow.",

    features: [
      {
        title: "Multi-document Search",
        desc: "Analyze and compare information across multiple financial reports.",
        icon: "M12 2L2 7l10 5 10-5-10-5z",
      },
      {
        title: "Evidence-backed Answers",
        desc: "Every answer is supported by retrieved report passages.",
        icon: "M9 12l2 2 4-4",
      },
      {
        title: "KPI Dashboard",
        desc: "Extracts and visualizes important business indicators.",
        icon: "M4 6h16M4 10h16M4 14h16",
      },
    ],

    challenges: [
      {
        title: "Accurate Retrieval",
        solution:
          "Improved retrieval quality through semantic chunking and optimized vector similarity search.",
      },
      {
        title: "Large Financial Reports",
        solution:
          "Handled hundreds of report pages while maintaining fast query response times.",
      },
    ],

    outcome:
      "Successfully developed a finance-focused AI assistant capable of answering complex report-based questions while providing supporting evidence and KPI insights.",
  },

  {
    id: "taskforce-pro",
    num: "02",
    tag: "Full Stack Platform",
    title: "TaskForce Pro",
    titleItalic: "Pro",
    image: taskforcePro,
    gallery: [taskforcePro, taskforcePro2, taskforcePro3],

    subtitle:
      "A workforce management platform featuring task assignment, role-based access control, operational analytics, and employee performance tracking.",

    desc: "A full-stack MERN application built to streamline team management and workplace operations.",

    chips: ["React", "Node.js", "Express", "MongoDB", "JWT"],

    color: "#2a1a0a",
    accent: "#c9a96e",

    role: "Full Stack Developer",
    duration: "6 Weeks",
    year: "2025",

    liveUrl: "https://task-force-manager.vercel.app/login",
    githubUrl: "https://github.com/Gude-Rushikesh/task-force-manager",

    overview:
      "Managing employees, tasks, and operational visibility becomes increasingly difficult as organizations grow. TaskForce Pro centralizes workforce operations through a unified management platform.",

    process:
      "Designed the application using the MERN stack with secure authentication, role-based permissions, REST APIs, and dashboard-driven analytics.",

    features: [
      {
        title: "Role-Based Access",
        desc: "Separate workflows for administrators, managers, and employees.",
        icon: "M12 2a10 10 0 100 20",
      },
      {
        title: "Task Management",
        desc: "Create, assign, track, and manage employee workloads.",
        icon: "M5 13l4 4L19 7",
      },
      {
        title: "Analytics Dashboard",
        desc: "Visual insights into team productivity and operational performance.",
        icon: "M4 18V6M10 18V10M16 18V4",
      },
    ],

    challenges: [
      {
        title: "Permission Management",
        solution:
          "Implemented JWT authentication and RBAC architecture to secure system operations.",
      },
      {
        title: "Scalable Data Models",
        solution:
          "Designed efficient MongoDB schemas for users, tasks, and analytics reporting.",
      },
    ],

    outcome:
      "Delivered a production-style workforce platform demonstrating full-stack architecture, security, and operational analytics.",
  },

  {
    id: "Audiobook-center",
    num: "03",
    tag: "MERN Application",
    title: "Audiobook Center",
    titleItalic: "Center",
    gallery: [
      audiobookCenter1,
      audiobookCenter,
      audiobookCenter2,
      audiobookCenter3,
      audiobookCenter4,
    ],

    subtitle:
      "A full-stack audiobook streaming platform offering authentication, content discovery, category management, and immersive listening experiences.",

    desc: "A MERN-based audiobook platform designed for users to discover, stream, and manage audiobook content.",

    chips: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],

    color: "#0e0e16",
    accent: "#7a70c9",

    role: "Full Stack Developer",
    duration: "5 Weeks",
    year: "2025",

    liveUrl: "https://audiobook-center.vercel.app/",
    githubUrl: "https://github.com/Gude-Rushikesh/audiobook-center",

    overview:
      "The project was created to provide users with an intuitive audiobook streaming experience while allowing administrators to manage content efficiently.",

    process:
      "Developed a responsive frontend using React and Tailwind CSS, connected to a secure backend powered by Node.js, Express, and MongoDB.",

    features: [
      {
        title: "Audiobook Streaming",
        desc: "Listen to audiobook content directly through the platform.",
        icon: "M5 3l14 9-14 9V3z",
      },
      {
        title: "Authentication",
        desc: "Secure login and registration using JWT authentication.",
        icon: "M12 2a10 10 0 100 20",
      },
      {
        title: "Content Discovery",
        desc: "Browse audiobooks by categories and interests.",
        icon: "M4 6h16M4 12h16M4 18h16",
      },
    ],

    challenges: [
      {
        title: "Media Management",
        solution:
          "Implemented scalable handling of audiobook content and metadata.",
      },
      {
        title: "Responsive Experience",
        solution: "Optimized layouts for desktop, tablet, and mobile devices.",
      },
    ],

    outcome:
      "Built a complete media platform demonstrating authentication, content management, and full-stack development skills.",
  },
  {
    id: "weather-classification",
    num: "04",
    tag: "Machine Learning",
    title: "Weather Classification System",
    titleItalic: "System",
    gallery: [
      audiobookCenter,
      audiobookCenter2,
      audiobookCenter3,
      audiobookCenter4,
    ],

    subtitle:
      "A CNN-based deep learning application that classifies weather conditions from images with high prediction accuracy.",

    desc: "A machine learning project leveraging Convolutional Neural Networks to recognize weather conditions from image datasets.",

    chips: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],

    color: "#163047",
    accent: "#5aa9e6",

    role: "ML Engineer",
    duration: "4 Weeks",
    year: "2025",

    liveUrl: "#",
    githubUrl: "https://github.com/Gude-Rushikesh/Weather_Project",

    overview:
      "Weather recognition from images can support forecasting systems and environmental monitoring. This project applies deep learning techniques to classify weather conditions automatically.",

    process:
      "Collected and preprocessed image datasets, applied augmentation techniques, trained CNN models using TensorFlow and Keras, and evaluated model performance through multiple metrics.",

    features: [
      {
        title: "CNN Classification",
        desc: "Deep learning model trained for weather recognition.",
        icon: "M10 20l4-16",
      },
      {
        title: "Image Processing",
        desc: "Preprocessing and augmentation for improved accuracy.",
        icon: "M4 6h16",
      },
      {
        title: "Prediction Interface",
        desc: "Real-time image-based weather prediction.",
        icon: "M9 12l2 2 4-4",
      },
    ],

    challenges: [
      {
        title: "Overfitting Prevention",
        solution:
          "Used augmentation and normalization techniques to improve generalization.",
      },
      {
        title: "Model Accuracy",
        solution:
          "Experimented with CNN architectures and hyperparameter tuning.",
      },
    ],

    outcome:
      "Successfully achieved reliable weather classification performance while demonstrating practical deep learning implementation skills.",
  },
];

export const SKILLS = [
  {
    name: "Data Science & ML",
    desc: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
  },
  {
    name: "AI & Deep Learning",
    desc: "Neural networks, NLP basics, model training & evaluation",
  },
  {
    name: "MERN Stack",
    desc: "MongoDB, Express.js, React, Node.js, REST APIs",
  },
  {
    name: "Frontend",
    desc: "React, Tailwind CSS, JavaScript (ES2024), Vite",
  },
  {
    name: "Data Tools",
    desc: "Jupyter, Git, VS Code, SQL, Excel / Google Sheets",
  },
  {
    name: "Core CS",
    desc: "Statistics, algorithms, data structures, problem solving",
  },
];
