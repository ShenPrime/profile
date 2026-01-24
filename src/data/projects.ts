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
    id: 'circleshoot',
    title: 'Circleshoot',
    description: 'A fast-paced horde shooter game where you survive waves of enemies.',
    tags: ['Game', 'JavaScript', 'Canvas'],
    liveUrl: 'https://circleshoot-production.up.railway.app/',
    repoUrl: 'https://github.com/ShenPrime/CircleShoot',
    featured: true,
  },
  {
    id: 'levelington',
    title: 'Levelington',
    description: 'A Discord bot that awards XP and levels based on participation in chat.',
    tags: ['Discord.js', 'Node.js', 'Bot'],
    repoUrl: 'https://github.com/ShenPrime/levelington',
    featured: true,
  },
  {
    id: 'birthday-bot',
    title: 'BirthdayBot',
    description: 'A Discord bot that records and announces birthdays.',
    tags: ['Discord.js', 'Node.js', 'Bot'],
    repoUrl: 'https://github.com/ShenPrime/birthday-bot',
    featured: true,
  },
];
