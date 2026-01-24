import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { EmailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/icons';

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@shen-dev.com',
    href: 'mailto:hello@shen-dev.com',
    icon: <EmailIcon />,
  },
  {
    label: 'GitHub',
    value: 'github.com/ShenPrime',
    href: 'https://github.com/ShenPrime',
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shen',
    href: 'https://linkedin.com',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Twitter',
    value: '@shen',
    href: 'https://twitter.com',
    icon: <TwitterIcon />,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!',
        });
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.errors?.[0] || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out 
              through any of the channels below or use the contact form.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-tokyo-subtle/50 [html.light_&]:bg-tokyo-light-subtle/50 border border-tokyo-border/50 [html.light_&]:border-tokyo-light-border/50 hover:border-tokyo-primary/50 [html.light_&]:hover:border-tokyo-light-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tokyo-bg-highlight [html.light_&]:bg-tokyo-light-bg-highlight flex items-center justify-center text-tokyo-primary [html.light_&]:text-tokyo-light-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-tokyo-muted [html.light_&]:text-tokyo-light-muted">
                      {info.label}
                    </div>
                    <div className="text-sm text-tokyo-fg [html.light_&]:text-tokyo-light-fg group-hover:text-tokyo-primary [html.light_&]:group-hover:text-tokyo-light-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle border border-tokyo-border [html.light_&]:border-tokyo-light-border text-tokyo-fg [html.light_&]:text-tokyo-light-fg placeholder-tokyo-muted [html.light_&]:placeholder-tokyo-light-muted focus:border-tokyo-primary [html.light_&]:focus:border-tokyo-light-primary focus:ring-1 focus:ring-tokyo-primary [html.light_&]:focus:ring-tokyo-light-primary transition-colors outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle border border-tokyo-border [html.light_&]:border-tokyo-light-border text-tokyo-fg [html.light_&]:text-tokyo-light-fg placeholder-tokyo-muted [html.light_&]:placeholder-tokyo-light-muted focus:border-tokyo-primary [html.light_&]:focus:border-tokyo-light-primary focus:ring-1 focus:ring-tokyo-primary [html.light_&]:focus:ring-tokyo-light-primary transition-colors outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-tokyo-subtle [html.light_&]:bg-tokyo-light-subtle border border-tokyo-border [html.light_&]:border-tokyo-light-border text-tokyo-fg [html.light_&]:text-tokyo-light-fg placeholder-tokyo-muted [html.light_&]:placeholder-tokyo-light-muted focus:border-tokyo-primary [html.light_&]:focus:border-tokyo-light-primary focus:ring-1 focus:ring-tokyo-primary [html.light_&]:focus:ring-tokyo-light-primary transition-colors outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
                
                {submitStatus && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm ${
                      submitStatus.type === 'success'
                        ? 'text-tokyo-accent-alt [html.light_&]:text-tokyo-light-accent-alt'
                        : 'text-tokyo-red [html.light_&]:text-tokyo-light-red'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
