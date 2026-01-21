export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and Kanban boards.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates blog posts, social media content, and marketing copy.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization and customizable widgets.',
    tags: ['Vue.js', 'D3.js', 'WebSockets', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Social Media Scheduler',
    description: 'A social media management tool for scheduling posts across multiple platforms with analytics.',
    tags: ['Next.js', 'Prisma', 'tRPC', 'Tailwind', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Developer Portfolio Template',
    description: 'An open-source, customizable portfolio template for developers with dark mode and animations.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
];
