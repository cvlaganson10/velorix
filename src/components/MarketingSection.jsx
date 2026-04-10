import { IconMarketing, IconWebsite, IconSEO } from './Icons';

const capabilities = [
  {
    icon: IconMarketing,
    title: 'Social Media Management',
    description: 'Consistent, brand-aligned content across platforms — not just posts, but content that serves the funnel it was built for.',
  },
  {
    icon: IconWebsite,
    title: 'Content Creation',
    description: 'Copy, graphics, and messaging built to convert, not just to post. Every piece flows directly into your system.',
  },
  {
    icon: IconSEO,
    title: 'Paid Ads Support',
    description: 'Ad creative, copy, and campaign support aligned to your conversion infrastructure. Ads run into funnels built to receive them.',
  },
];

export default function MarketingSection() {
  return (
    <section className="section marketing-section" id="marketing">
      <div className="container">
        <div className="section-header fade-in">
          <span className="badge badge-new">NEW</span>
          <span className="eyebrow" style={{ marginLeft: '0.75rem' }}>What Runs Inside the System</span>
          <h2 style={{ marginTop: 'var(--space-5)' }}>We Don't Just Build Systems — We Make Sure There's Something Working Inside Them.</h2>
          <p>
            A system without fuel is just structure. That's why Velorix now also handles the marketing that feeds the infrastructure we build. When we manage the marketing and we built the system it flows into, nothing is lost in translation.
          </p>
        </div>

        <div className="grid-3">
          {capabilities.map((cap, i) => (
            <div key={i} className={`card fade-in fade-in-delay-${i + 1}`}>
              <div className="card-icon">
                <cap.icon size={24} />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
