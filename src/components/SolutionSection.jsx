import { IconTarget, IconLayers, IconLink, IconArrowRight } from './Icons';

const outcomes = [
  {
    icon: IconTarget,
    title: 'Conversion Infrastructure',
    description: 'Every lead enters a structured path — from first touch to closed deal. Nothing is left to chance.',
  },
  {
    icon: IconLayers,
    title: 'Connected Systems',
    description: 'Your website, CRM, automation, AI, SEO, and operations all work as one integrated system.',
  },
  {
    icon: IconLink,
    title: 'Operational Clarity',
    description: 'Internal workflows, team handoffs, and client handling all run through clear, repeatable processes.',
  },
];

export default function SolutionSection() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="section-header fade-in">
          <span className="eyebrow">The Velorix Way</span>
          <h2>We Build the Infrastructure That Makes Your Business Actually Work.</h2>
          <p>
            Velorix is not a marketing agency. Not a web design studio. Not just an automation shop. We build complete business systems — the connected digital infrastructure behind your operations, your leads, your customer journeys, and your internal workflows.
          </p>
        </div>

        <div className="grid-3">
          {outcomes.map((item, i) => (
            <div key={i} className={`glass-card fade-in fade-in-delay-${i + 1}`}>
              <div className="card-icon">
                <item.icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="section__cta fade-in" style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <a href="#services" className="btn btn-secondary">
            See What We Build
            <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
