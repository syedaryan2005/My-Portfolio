
// Portfolio data

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'other';
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing, user authentication, and product management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, role-based permissions, and analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "A tool that leverages machine learning to help users create blog posts, social media content, and more.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    tags: ["React", "Python", "TensorFlow", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "An app that helps users track workouts, nutrition, and health metrics with personalized insights.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
    tags: ["React Native", "GraphQL", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export const skills: Skill[] = [
  { name: "React", icon: "code", level: 5, category: "frontend" },
  { name: "Next.js", icon: "code", level: 4, category: "frontend" },
  { name: "TypeScript", icon: "code", level: 4, category: "frontend" },
  { name: "HTML/CSS", icon: "code", level: 5, category: "frontend" },
  { name: "Tailwind CSS", icon: "palette", level: 5, category: "frontend" },
  { name: "JavaScript", icon: "code", level: 5, category: "frontend" },
  { name: "Node.js", icon: "server", level: 4, category: "backend" },
  { name: "Express", icon: "server", level: 4, category: "backend" },
  { name: "MongoDB", icon: "database", level: 4, category: "backend" },
  { name: "PostgreSQL", icon: "database", level: 3, category: "backend" },
  { name: "Firebase", icon: "flame", level: 4, category: "backend" },
  { name: "REST API", icon: "webhook", level: 5, category: "backend" },
  { name: "UI/UX Design", icon: "layout", level: 4, category: "design" },
  { name: "Figma", icon: "pencil", level: 4, category: "design" },
  { name: "Git/GitHub", icon: "git-branch", level: 4, category: "other" },
  { name: "AWS", icon: "cloud", level: 3, category: "other" }
];

export const aboutData = {
  name: "Syed Aryan Ali Shah",
  title: "Full-Stack Web Developer",
  bio: "I'm a passionate full-stack developer with expertise in creating modern web applications. With a strong foundation in both frontend and backend technologies, I build user-centric solutions that combine elegant design with robust functionality.",
  location: "New York, NY",
  email: "aryan@example.com",
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/"
  }
};
