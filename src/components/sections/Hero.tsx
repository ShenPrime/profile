import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Subtle radial gradient overlay - particles show through */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tokyo-primary/5 via-transparent to-transparent [html.light_&]:from-tokyo-light-primary/10" />

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Animated gradient name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-bold animated-gradient-text"
        >
          Shen
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-lg md:text-xl text-tokyo-muted [html.light_&]:text-tokyo-light-muted mb-4">
            Full Stack Web Developer
          </p>
          <p className="text-sm md:text-base text-tokyo-fg-dark [html.light_&]:text-tokyo-light-fg-dark max-w-md mx-auto px-4">
            Building digital experiences with clean code and creative solutions
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-tokyo-muted [html.light_&]:text-tokyo-light-muted hover:text-tokyo-primary [html.light_&]:hover:text-tokyo-light-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
