import { Experience, Project, SocialLink, EducationItem, ExpertiseItem } from './types';

export const PERSONAL_INFO = {
  name: "Abu Darda",
  title: "AI/ML Engineer",
  tagline: "Specialized in Generative AI, RAG Architectures, and Agentic Workflows.",
  location: "Valley Stream, New York",
  address: "46 Jedwood Pl, Valley Stream, New York, 11581",
  phone: "+1 (929) 413-9306",
  about: `I am an AI/ML Engineer and MS Candidate in Generative AI at CUNY SPS with professional experience building production-grade LLM applications. Specialized in RAG architectures, Agentic Workflows, Model Fine-Tuning, Prompt Engineering, and Multi-Agent Coordination. I have a proven track record of reducing system latency and deploying scalable AI solutions, bridging the gap between theoretical AI and deployed software products.`,
};

export const EXPERTISE_INTRO = {
  title: "My key areas of expertise.",
  description: "While my primary focus is on Machine Learning and Artificial Intelligence, I am also proficient in developing industry-standard backends using Python, FastAPI, or Node.js. I excel at integrating AWS and Azure services into backend systems to build scalable and efficient solutions."
};

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'exp1',
    title: "Generative AI & LLMs",
    skills: [
      "RAG Architectures (Retrieval-Augmented Generation)",
      "LangChain, LangGraph, Google Gemini",
      "Agentic Workflows & Multi-Agent Coordination",
      "Model Fine-tuning (LoRA, QLoRA, PEFT)",
      "Prompt Engineering & Optimization"
    ]
  },
  {
    id: 'exp2',
    title: "Machine Learning & CV",
    skills: [
      "Computer Vision (OpenCV, Flux Models)",
      "NLP (Transformers, BERT, GPT)",
      "Deep Learning (TensorFlow, Keras, PyTorch)",
      "Ranking & Retrieval Systems",
      "Vector Embeddings"
    ]
  },
  {
    id: 'exp3',
    title: "Backend & Cloud Engineering",
    skills: [
      "Python, C++, R, Node.js, FastAPI",
      "AWS (Lambda, S3, EC2), Azure Cloud",
      "PostgreSQL, MongoDB, GraphQL",
      "Vector Databases (Pinecone, FAISS)",
      "Docker, Serverless Architecture, Git"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'e1',
    institution: "CUNY School of Professional Studies",
    degree: "Master of Science in Generative AI",
    period: "2026 - Present",
    description: [
      "Focus: Large Language Models, RAG Systems, Transformers, Intelligent Agents"
    ]
  },
  {
    id: 'e2',
    institution: "BRAC University",
    degree: "Bachelor of Science in Computer Science",
    period: "2020 - 2024",
    description: [
      "CGPA: 3.78/4.0",
      "Thesis: 'Synthetic Population Simulation Using US Census Data' - An open-source population simulator to provide projections and models of diverse population behaviors."
    ],
    links: [
      { label: "GitHub", url: "https://github.com/abuudarda/synthetic-population-simulation" },
      { label: "Paper", url: "https://drive.google.com/file/d/1dNyRXCQmZBIdEmsxOONc-qxuweVLrUKD" }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: "Software Engineer I (AI)",
    company: "Brain Station 23 PLC",
    period: "Aug 2024 - Feb 2025",
    description: [
      "Engineered a Multimodal AI agent capable of complex video analysis, enabling autonomous insight extraction for visual content tasks.",
      "Fine-tuned Flux image generation models and trained multiple LoRA adapters to ensure scene and character consistency.",
      "Designed and deployed agentic workflows using LangGraph for context-aware content generation, facilitating autonomous problem-solving.",
      "Collaborated with stakeholders to align AI solutions with client expectations, ensuring scalable deployment of production-grade features."
    ]
  },
  {
    id: '2',
    role: "Associate Software Engineer",
    company: "Microsoft",
    period: "Jan 2024 - Aug 2024",
    description: [
      "Leveraged Large Language Models to develop a chatbot to answer user queries from different knowledge-bases.",
      "Optimized Information Retrieval (IR) pipelines using LangChain & LangGraph to manage dynamic data retrieval, reducing system latency by 40%.",
      "Implemented model performance evaluation metrics, enabling data-driven assessment of response quality.",
      "Integrated multi-turn logic to handle ambiguous user queries, improving search intent resolution.",
      "Developed a document classification engine achieving 95% accuracy in sorting unstructured data."
    ]
  },
  {
    id: '3',
    role: "Teaching Assistant",
    company: "BRAC University",
    period: "Jan 2023 - Nov 2023",
    description: [
      "Assisted course instructors in designing curriculum, conducting classes and grading exams.",
      "Held consultations with students to clarify concepts and enhance comprehension of course material."
    ]
  }
];

export const PROJECTS: Project[] = [
  // Professional
  {
    id: 'pro1',
    title: "UpendNow",
    description: "A Digital-content and Film-making Co-pilot. It creates film scripts and dialogues based on user criteria, generates AI-based scene images and demo videos.",
    tags: ["Serverless", "Node.js", "AWS", "Generative AI", "LoRA"],
    category: 'professional',
    link: "https://www.upendnow.com/"
  },
  {
    id: 'pro2',
    title: "Workflow Automation System",
    description: "A system to classify job descriptions and CVs. Automates document sorting, AI-based reviews, and notifications using AWS Comprehend and Elasticsearch.",
    tags: ["AWS", "FastAPI", "LLMs"],
    category: 'professional'
  },
  {
    id: 'pro3',
    title: "Chatbot - Nikles",
    description: "Context-aware chatbot capable of integrating multiple knowledge sources using LangChain and Pinecone.",
    tags: ["LLMs", "LangChain", "Pinecone"],
    category: 'professional',
    link: "https://www.nikles.com/"
  },
  // Research
  {
    id: 'res1',
    title: "Facial Expression Detection",
    description: "Detect emotions by analyzing facial expressions in photos using CNN.",
    tags: ["Computer Vision", "CNN"],
    category: 'research',
    github: "https://github.com/abuudarda/Facial-Expression-Detection"
  },
  {
    id: 'res2',
    title: "M-Link",
    description: "A link clustering memetic algorithm for overlapping community detection. Implementation of a research paper.",
    tags: ["Graph Theory", "Algorithms"],
    category: 'research',
    github: "https://github.com/abuudarda/M-Link-a-link-clusteringmemetic-algorithm-for-overlapping-community-detection"
  },
  {
    id: 'res3',
    title: "Glaucoma Detection",
    description: "Evaluation of different CNN models (VGG16 vs ResNet50) to detect glaucoma from images.",
    tags: ["Computer Vision", "CNN", "Medical Imaging"],
    category: 'research',
    github: "https://github.com/abuudarda/Glaucoma-detection-vgg16-vs-resnet50"
  },
  // Personal
  {
    id: 'pers1',
    title: "Text Humanizer",
    description: "Application to make AI-generated text sound more natural and human-like using advanced prompt engineering.",
    tags: ["NLP", "Prompt Engineering"],
    category: 'personal',
    link: "https://peaceful-horse-9a0b7d.netlify.app"
  },
  {
    id: 'pers2',
    title: "Interactive Quiz Application",
    description: "Java-Based web-app to host, create, and manage quizzes.",
    tags: ["Java", "Web App"],
    category: 'personal',
    github: "https://github.com/Inmoresentum/InteractiveQuizApplication"
  },
  {
    id: 'pers3',
    title: "Django E-commerce System",
    description: "Django web-app to store and sell products.",
    tags: ["Django", "Python", "E-commerce"],
    category: 'personal',
    github: "https://github.com/abuudarda/django-ecommerce"
  },
  {
    id: 'pers4',
    title: "Employee Management System",
    description: "Java-based employee management system for organizations.",
    tags: ["Java", "Management System"],
    category: 'personal',
    github: "https://github.com/abuudarda/Employee-Management-System"
  },
  {
    id: 'pers5',
    title: "Hospital Management System",
    description: "Python-based employee management, appointment scheduling and transaction service.",
    tags: ["Python", "Management System"],
    category: 'personal',
    github: "https://github.com/abuudarda/Hospital-Management-System"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/abuudarda", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/darda-abu", icon: "linkedin" },
  { platform: "Email", url: "mailto:abuu.darda.ad@gmail.com", icon: "mail" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Abu Darda's portfolio website. 
Your goal is to answer questions about Abu's professional background, skills, and projects in a professional, concise, and friendly manner.

Here is the context about Abu:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Tagline: ${PERSONAL_INFO.tagline}
Location: ${PERSONAL_INFO.location}
Address: ${PERSONAL_INFO.address}
Phone: ${PERSONAL_INFO.phone}
About: ${PERSONAL_INFO.about}

Expertise:
${EXPERTISE_DATA.map(e => `- ${e.title}: ${e.skills.join(', ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period}). ${e.description.join(' ')}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- [${p.category.toUpperCase()}] ${p.title}: ${p.description} Tags: ${p.tags.join(', ')}`).join('\n')}

Socials: ${SOCIALS.map(s => s.platform).join(', ')}.

If asked a question outside of this scope (e.g., general knowledge, math, coding help unrelated to Abu), politely decline and steer the conversation back to Abu's portfolio.
Keep answers brief and strictly plain text.
`;