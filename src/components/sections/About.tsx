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

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-tokyo-fg [html.light_&]:text-tokyo-light-fg leading-relaxed">
              Hi, I'm <span className="text-tokyo-primary [html.light_&]:text-tokyo-light-primary font-semibold">Shen</span>, 
              a full stack web developer with a passion for building elegant, performant, 
              and user-friendly applications.
            </p>
            
            <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted leading-relaxed">
I specialize in modern web technologies and love turning complex problems 
              into simple, beautiful solutions. When I'm not coding, you can find me gaming, or enjoying a good book.
            </p>

            <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted leading-relaxed">
              I believe in writing clean, maintainable code and creating experiences 
              that users love. My goal is to bridge the gap between design and functionality, 
              delivering products that are both visually appealing and technically sound.
            </p>


          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
