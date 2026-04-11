import { IconTarget, IconShield, IconZap } from './Icons';
import BorderGlow from './BorderGlow';

const pillars = [
  {
    icon: IconTarget,
    title: 'Behavior-Driven Design',
    description: 'Before we build anything, we understand two things: how your business actually operates and how your customers actually behave. Every system is built around what is real — not assumptions.',
  },
  {
    icon: IconShield,
    title: 'Platform-Agnostic',
    description: 'We work with ClickUp, GoHighLevel, HubSpot, WordPress, Shopify, custom APIs, and custom-built solutions. We use what is right for each business — not what is easiest for us.',
  },
  {
    icon: IconZap,
    title: 'Full-Scope Capability',
    description: 'Websites, CRM, automation, AI tools, SEO foundation, marketing execution, and operations — all connected and built to work as one structured system.',
  },
];

export default function ApproachSection() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="section-header fade-in">
          <span className="eyebrow">Our Approach</span>
          <h2>We Build Around How Your Business Actually Works. Not Around What Is Easy.</h2>
          <p>
            Most systems are built on assumptions. Ours are built on what is actually real. That is why every system we build is different — because every business is different.
          </p>
        </div>

        <div className="grid-3">
          {pillars.map((pillar, i) => (
            <BorderGlow
              key={i}
              className={`fade-in fade-in-delay-${i + 1}`}
              colors={['#2997FF', '#A855F7', '#FF6392', '#FF9F0A', '#30D158']}
              glowColor="220 100 70"
              glowIntensity={4.0}
              backgroundColor="#0C1425"
              fillOpacity={1.0}
              edgeSensitivity={10}
            >
              <div className="glass-card approach-card">
                <div className="card-icon">
                  <pillar.icon size={24} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
