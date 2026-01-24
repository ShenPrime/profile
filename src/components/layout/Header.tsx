import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with Intersection Observer
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    // Observe the hero section to clear active state when at top
    const heroElement = document.querySelector('section');
    if (heroElement && !heroElement.id) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection('');
            }
          });
        },
        { rootMargin: '-20% 0px -80% 0px' }
      );
      heroObserver.observe(heroElement);
      observers.push(heroObserver);
    }

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        { rootMargin: '-40% 0px -60% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tokyo-bg/80 backdrop-blur-md border-b border-tokyo-border/50 [html.light_&]:bg-tokyo-light-bg/80 [html.light_&]:border-tokyo-light-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold text-tokyo-fg [html.light_&]:text-tokyo-light-fg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-tokyo-primary [html.light_&]:text-tokyo-light-primary">S</span>hen
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-tokyo-subtle/50 [html.light_&]:hover:bg-tokyo-light-subtle/50 ${
                    isActive
                      ? 'text-tokyo-primary [html.light_&]:text-tokyo-light-primary'
                      : 'text-tokyo-muted hover:text-tokyo-primary [html.light_&]:text-tokyo-light-muted [html.light_&]:hover:text-tokyo-light-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-tokyo-primary [html.light_&]:bg-tokyo-light-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-tokyo-subtle/50 [html.light_&]:hover:bg-tokyo-light-subtle/50 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-tokyo-fg [html.light_&]:bg-tokyo-light-fg rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-tokyo-fg [html.light_&]:bg-tokyo-light-fg rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-tokyo-fg [html.light_&]:bg-tokyo-light-fg rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-tokyo-primary [html.light_&]:text-tokyo-light-primary bg-tokyo-subtle/50 [html.light_&]:bg-tokyo-light-subtle/50 border-l-2 border-tokyo-primary [html.light_&]:border-tokyo-light-primary'
                          : 'text-tokyo-muted hover:text-tokyo-primary [html.light_&]:text-tokyo-light-muted [html.light_&]:hover:text-tokyo-light-primary hover:bg-tokyo-subtle/50 [html.light_&]:hover:bg-tokyo-light-subtle/50'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
