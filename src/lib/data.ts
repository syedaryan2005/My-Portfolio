// Portfolio data

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design';
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack eCommerce website built with Next.js, Tailwind CSS, Stripe for payments, Sanity CMS for product management, and Clerk for authentication. Features include dynamic product pages, secure checkout, user account handling, and responsive design.",
    image: "/ecommerce.jpg",
    tags: ["Next.JS", "Clerk", "Sanity", "Stripe"],
    demoUrl: "https://ecommerce-website-ten-jet.vercel.app/",
    githubUrl: "https://github.com/syedaryan2005",
    category: "web"
  },
  {
    id: "2",
    title: "Dynamic Resume Builder",
    description: "A sleek, user-friendly web app designeA sleek, user-friendly web app that streamlines resume creation with real-time editing, modern templates, and instant export. Built with Next.js and Tailwind CSS, this tool empowers job seekers to craft ATS-optimized, visually stunning resumes in minutes.d to simplify resume creation with real-time editing, modern templates, and instant export. Built with [Tech Stack: e.g., React, Node.js, Firebase], this tool empowers job seekers to craft ATS-optimized, visually stunning resumes in minutes.",
    image: "/resume.jpg",
    tags: ["Next.JS", "Firebase", "Tailwind CSS"],
    demoUrl: "https://resume-sandy-psi.vercel.app/",
    githubUrl: "https://github.com/syedaryan2005",
    category: "web"
  },
  {
    id: "3",
    title: "Governer Clone Website",
    description: "A responsive frontend clone of the Govern platform built with Tailwind CSS and Next.js, deployed seamlessly via Vercel.",
    image: "/CLONE.jpeg",
    tags: ["React","Tailwind CSS", "Next.js"],
    demoUrl: "https://governer-web-clone-kappa.vercel.app/",
    githubUrl: "https://github.com/syedaryan2005",
    category: "web"
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
  { name: "AWS", icon: "cloud", level: 3, category: "other" },
  { name: "Python", icon: "code", level: 5, category: "backend" }
];

export const aboutData = {
  name: "Syed Aryan Ali Shah",
  title: "Full-Stack Web Developer",
  bio: "I'm a passionate full-stack developer with expertise in creating modern web applications. With a strong foundation in both frontend and backend technologies, I build user-centric solutions that combine elegant design with robust functionality.",
  location: "Karachi, Pakistan",
  email: "syedaryana869@gmail.com",
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/"
  }
};
