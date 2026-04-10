import {
  IconCRM, IconAutomation, IconAI, IconWebsite,
  IconCustom, IconSEO, IconOperations, IconMarketing,
  IconArrowRight
} from './Icons';
import { LogoLoop } from './LogoLoop';

const services = [
  {
    icon: IconCRM,
    title: 'CRM & Sales Systems',
    description: 'Pipeline design, lead management, and follow-up automation — built around how your sales process actually works.',
  },
  {
    icon: IconAutomation,
    title: 'Automation & Workflows',
    description: 'Lead nurturing, onboarding, internal processes, and task automation — eliminating manual work across the business.',
  },
  {
    icon: IconAI,
    title: 'AI Agents & Tools',
    description: 'AI-powered chatbots, voice agents, smart replies, and intelligent workflows built for your brand and operations.',
  },
  {
    icon: IconWebsite,
    title: 'Website Design & Dev',
    description: 'Conversion-focused websites structured around the visitor journey, optimized for SEO, integrated with your CRM.',
  },
  {
    icon: IconCustom,
    title: 'Custom Systems & CMS',
    description: 'Custom-built platforms, API integrations, and modular backend systems designed for how your business needs to run.',
  },
  {
    icon: IconSEO,
    title: 'SEO & Content Foundation',
    description: 'Technical SEO, content strategy, and site architecture designed to earn visibility that compounds over time.',
  },
  {
    icon: IconOperations,
    title: 'Operations Systems',
    description: 'Internal workflow design, team processes, client handling, and operational automation for sustainable growth.',
  },
  {
    icon: IconMarketing,
    title: 'Marketing Execution',
    badge: 'NEW',
    description: 'Social media, content creation, and paid ads — managed by the same team that built the system it feeds into.',
  },
];

import { useRef, useState, useEffect } from 'react';

export default function ServicesSection() {
  const loopRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = loopRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <span className="eyebrow">Our Capabilities</span>
          <h2>Everything Your Business Needs to Run — Connected and Built to Convert.</h2>
          <p>
            Whether you are starting from zero or fixing a backend that was never properly built, Velorix has the capability to design, build, and integrate the full digital foundation your business needs — including the marketing that feeds it.
          </p>
        </div>

        <div
          ref={loopRef}
          style={{
            margin: 'var(--space-8) 0',
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.6s ease',
            overflow: 'hidden',
          }}
        >
          <LogoLoop
            logos={[
              { src: '/logos/google.svg', alt: 'Google', title: 'Google' },
              { src: '/logos/meta.svg', alt: 'Meta', title: 'Meta' },
              { src: '/logos/openai.svg', alt: 'OpenAI', title: 'OpenAI' },
              { src: '/logos/zapier.svg', alt: 'Zapier', title: 'Zapier' },
              { src: '/logos/stripe.svg', alt: 'Stripe', title: 'Stripe' },
              { src: '/logos/wordpress.svg', alt: 'WordPress', title: 'WordPress' },
              { src: '/logos/slack.svg', alt: 'Slack', title: 'Slack' },
              { src: '/logos/hubspot.svg', alt: 'HubSpot', title: 'HubSpot' },
              { src: '/logos/shopify.svg', alt: 'Shopify', title: 'Shopify' },
              { src: '/logos/notion.svg', alt: 'Notion', title: 'Notion' },
            ]}
            speed={80}
            direction="left"
            logoHeight={32}
            gap={64}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#060B18"
          />
        </div>

        <div className="grid-auto">
          {services.map((svc, i) => (
            <div key={i} className={`card service-card fade-in fade-in-delay-${i + 1}`}>
              <div className="card-icon">
                <svc.icon size={24} />
              </div>
              {svc.badge && <span className="badge badge-new">{svc.badge}</span>}
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1aL1YCoKNEC3uFiNLCGU26MpNNh1UkO9daWNGUGhyAOie8EJzujLfUi9rURXSgnYvkleslW0Tk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Explore All Services
            <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
