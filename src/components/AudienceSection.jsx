import { IconCheck, IconArrowRight } from './Icons';

const qualifiers = [
  'You are running ads but conversions are inconsistent — leads arrive, follow-up is slow, manual, or missing entirely.',
  'You have tools — but nothing is connected — CRM, website, email, automation — all separate, all partial.',
  'You are growing — but it feels like chaos — every new client creates more work instead of running through a system.',
  'You are a startup building from the ground up — no website, no CRM, no systems yet — you want to build it right.',
  'You know there is structure missing — you just need the right partner to build it.',
];

export default function AudienceSection() {
  return (
    <section className="section" id="audience">
      <div className="container">
        <div className="section-header fade-in">
          <span className="eyebrow">Who This Is For</span>
          <h2>We Work Best With Businesses That Are Ready for Real Structure.</h2>
        </div>

        <div className="audience-list">
          {qualifiers.map((item, i) => (
            <div key={i} className={`audience-item fade-in fade-in-delay-${i + 1}`}>
              <div className="audience-item__icon">
                <IconCheck size={18} />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            Let's Talk About Your Business
            <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
