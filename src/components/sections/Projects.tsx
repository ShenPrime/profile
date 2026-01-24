import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons';

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card variant="gradient" className="h-full flex flex-col">
                {/* Project image placeholder */}
                <div className="aspect-video rounded-lg bg-tokyo-bg-highlight [html.light_&]:bg-tokyo-light-bg-highlight mb-4 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-tokyo-primary/20 to-tokyo-secondary/20 [html.light_&]:from-tokyo-light-primary/20 [html.light_&]:to-tokyo-light-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-tokyo-primary/30 [html.light_&]:text-tokyo-light-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-tokyo-bg/80 [html.light_&]:bg-tokyo-light-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tokyo-primary [html.light_&]:bg-tokyo-light-primary text-tokyo-bg [html.light_&]:text-tokyo-light-bg flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="View live site"
                      >
                        <ExternalLinkIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle text-tokyo-fg [html.light_&]:text-tokyo-light-fg flex items-center justify-center hover:scale-110 transition-transform border border-tokyo-border [html.light_&]:border-tokyo-light-border"
                        aria-label="View source code"
                      >
                        <GitHubIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <h3 className="text-lg font-semibold text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-tokyo-muted [html.light_&]:text-tokyo-light-muted mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-tokyo-bg-highlight [html.light_&]:bg-tokyo-light-bg-highlight text-tokyo-accent [html.light_&]:text-tokyo-light-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-6 text-center">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="p-4 rounded-lg bg-tokyo-subtle/50 [html.light_&]:bg-tokyo-light-subtle/50 border border-tokyo-border/50 [html.light_&]:border-tokyo-light-border/50 hover:border-tokyo-primary/50 [html.light_&]:hover:border-tokyo-light-primary/50 transition-colors group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-tokyo-fg [html.light_&]:text-tokyo-light-fg group-hover:text-tokyo-primary [html.light_&]:group-hover:text-tokyo-light-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-tokyo-muted hover:text-tokyo-primary [html.light_&]:text-tokyo-light-muted [html.light_&]:hover:text-tokyo-light-primary transition-colors"
                            aria-label="View live"
                          >
                            <ExternalLinkIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-tokyo-muted hover:text-tokyo-primary [html.light_&]:text-tokyo-light-muted [html.light_&]:hover:text-tokyo-light-primary transition-colors"
                            aria-label="View source"
                          >
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-tokyo-muted [html.light_&]:text-tokyo-light-muted mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-tokyo-fg-dark [html.light_&]:text-tokyo-light-fg-dark"
                        >
                          {tag}
                          {project.tags.indexOf(tag) < Math.min(project.tags.length, 3) - 1 && ' ·'}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
