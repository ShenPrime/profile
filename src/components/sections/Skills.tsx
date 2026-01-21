import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-tokyo-bg-dark/50 [html.light_&]:bg-tokyo-light-bg-dark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-tokyo-subtle/50 [html.light_&]:bg-tokyo-light-subtle/50 rounded-xl p-6 border border-tokyo-border/50 [html.light_&]:border-tokyo-light-border/50"
            >
              <h3 className="text-lg font-semibold text-tokyo-primary [html.light_&]:text-tokyo-light-primary mb-6">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-tokyo-fg [html.light_&]:text-tokyo-light-fg group-hover:text-tokyo-primary [html.light_&]:group-hover:text-tokyo-light-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-tokyo-muted [html.light_&]:text-tokyo-light-muted">
                        {skill.level && `${skill.level * 20}%`}
                      </span>
                    </div>
                    
                    {/* Skill bar */}
                    <div className="h-1.5 bg-tokyo-bg-highlight [html.light_&]:bg-tokyo-light-bg-highlight rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level || 3) * 20}%` }}
                        transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-tokyo-primary to-tokyo-secondary [html.light_&]:from-tokyo-light-primary [html.light_&]:to-tokyo-light-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Rust', 'Go', 'Svelte', 'Prisma', 'tRPC', 'Supabase', 'Firebase', 'Stripe', 'WebSockets', 'Three.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle text-tokyo-muted [html.light_&]:text-tokyo-light-muted border border-tokyo-border/50 [html.light_&]:border-tokyo-light-border/50 hover:border-tokyo-primary/50 [html.light_&]:hover:border-tokyo-light-primary/50 hover:text-tokyo-fg [html.light_&]:hover:text-tokyo-light-fg transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
