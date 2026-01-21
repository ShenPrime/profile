import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about creating seamless digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-tokyo-primary/20 to-tokyo-secondary/20 [html.light_&]:from-tokyo-light-primary/20 [html.light_&]:to-tokyo-light-secondary/20 p-1">
              <div className="w-full h-full rounded-2xl bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle flex items-center justify-center overflow-hidden">
                {/* Replace with actual image */}
                <div className="text-8xl font-bold text-tokyo-primary/30 [html.light_&]:text-tokyo-light-primary/30">
                  S
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-tokyo-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tokyo-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-tokyo-fg [html.light_&]:text-tokyo-light-fg leading-relaxed">
              Hi, I'm <span className="text-tokyo-primary [html.light_&]:text-tokyo-light-primary font-semibold">Shen</span>, 
              a full stack web developer with a passion for building elegant, performant, 
              and user-friendly applications.
            </p>
            
            <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted leading-relaxed">
              I specialize in modern web technologies and love turning complex problems 
              into simple, beautiful solutions. When I'm not coding, you can find me 
              exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
            </p>

            <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted leading-relaxed">
              I believe in writing clean, maintainable code and creating experiences 
              that users love. My goal is to bridge the gap between design and functionality, 
              delivering products that are both visually appealing and technically sound.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-tokyo-primary [html.light_&]:text-tokyo-light-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
