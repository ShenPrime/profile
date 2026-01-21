export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Led development of a microservices architecture serving 100k+ daily active users',
      'Mentored junior developers and conducted code reviews to maintain code quality',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with design team to create responsive, accessible user interfaces',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'exp-2',
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    description: [
      'Built and maintained e-commerce platform handling $2M+ in monthly transactions',
      'Developed RESTful APIs and GraphQL endpoints for mobile and web applications',
      'Optimized database queries resulting in 40% improvement in page load times',
      'Integrated third-party services including Stripe, SendGrid, and Twilio',
    ],
    technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'GCP'],
  },
  {
    id: 'exp-3',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    startDate: 'Aug 2018',
    endDate: 'May 2020',
    description: [
      'Developed responsive web applications for clients across various industries',
      'Created reusable component libraries improving development efficiency by 30%',
      'Implemented A/B testing and analytics tracking for data-driven improvements',
      'Worked closely with UX designers to translate wireframes into pixel-perfect interfaces',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Jest', 'Figma'],
  },
];
