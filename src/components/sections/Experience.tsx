import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-tokyo-bg-dark/50 [html.light_&]:bg-tokyo-light-bg-dark/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-tokyo-primary via-tokyo-secondary to-tokyo-accent [html.light_&]:from-tokyo-light-primary [html.light_&]:via-tokyo-light-secondary [html.light_&]:to-tokyo-light-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative pl-10 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-tokyo-primary [html.light_&]:bg-tokyo-light-primary border-4 border-tokyo-bg [html.light_&]:border-tokyo-light-bg md:-translate-x-1/2 z-10" />

              {/* Content card */}
              <div className="w-full">
                <div className="bg-tokyo-subtle/50 [html.light_&]:bg-tokyo-light-subtle/50 rounded-xl p-6 border border-tokyo-border/50 [html.light_&]:border-tokyo-light-border/50 hover:border-tokyo-primary/30 [html.light_&]:hover:border-tokyo-light-primary/30 transition-colors">
                  {/* Date badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tokyo-primary/10 [html.light_&]:bg-tokyo-light-primary/10 text-tokyo-primary [html.light_&]:text-tokyo-light-primary text-xs mb-3 ${index % 2 === 0 ? 'md:float-right md:ml-4' : ''}`}>
                    <span>{exp.startDate}</span>
                    <span>-</span>
                    <span>{exp.endDate}</span>
                  </div>

                  <div className={index % 2 === 0 ? 'md:clear-right' : ''}>
                    <h3 className={`text-lg font-semibold text-tokyo-fg [html.light_&]:text-tokyo-light-fg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-tokyo-primary [html.light_&]:text-tokyo-light-primary font-medium mb-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.location}
                    </p>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted"
                        >
                          <span className={`inline-block ${index % 2 === 0 ? 'md:hidden' : ''}`}>-</span> {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-tokyo-bg-highlight [html.light_&]:bg-tokyo-light-bg-highlight text-tokyo-accent [html.light_&]:text-tokyo-light-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
