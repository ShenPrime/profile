import { motion } from 'framer-motion';
import { GitHubIcon, EmailIcon } from '@/components/icons';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ShenPrime',
    icon: <GitHubIcon />,
  },
  {
    name: 'Email',
    href: 'mailto:hello@shen-dev.com',
    icon: <EmailIcon />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-tokyo-border [html.light_&]:border-tokyo-light-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-tokyo-fg [html.light_&]:text-tokyo-light-fg">
              <span className="text-tokyo-primary [html.light_&]:text-tokyo-light-primary">S</span>hen
            </span>
            <p className="text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted">
              {currentYear} Shen. Built with React & Tailwind.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-tokyo-muted hover:text-tokyo-fg [html.light_&]:text-tokyo-light-muted [html.light_&]:hover:text-tokyo-light-fg hover:bg-tokyo-subtle [html.light_&]:hover:bg-tokyo-light-subtle transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
