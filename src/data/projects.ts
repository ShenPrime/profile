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
    id: 'coral-island-tracker',
    title: 'Coral Island Tracker',
    description:
      'A web-based progress tracker for Coral Island. Track fish, crops, NPCs, and more across different playthroughs.',
    tags: ['React', 'TypeScript', 'Bun', 'PostgreSQL'],
    liveUrl: 'https://coral-island-tracker.up.railway.app/',
    repoUrl: 'https://github.com/ShenPrime/coral-island-tracker',
    featured: true,
  },
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
