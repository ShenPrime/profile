export interface Skill {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'Vue.js', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'HTML/CSS', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'Framer Motion', level: 4 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'Python', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'GraphQL', level: 4 },
      { name: 'REST APIs', level: 5 },
      { name: 'Redis', level: 3 },
      { name: 'Docker', level: 4 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'VS Code', level: 5 },
      { name: 'Figma', level: 3 },
      { name: 'AWS', level: 3 },
      { name: 'Vercel', level: 4 },
      { name: 'Linux', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'Testing', level: 4 },
    ],
  },
];
