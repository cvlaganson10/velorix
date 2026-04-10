import { IconArrowRight } from './Icons';

export default function AboutSnapshot() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-snapshot fade-in">
          <span className="eyebrow">Who We Are</span>
          <h2>Built From Real-World Experience in Business Systems, Digital Strategy, and Operational Design.</h2>
          <p>
            Velorix was built out of a clear, recurring observation: businesses have marketing, tools, and leads — but behind the scenes, there is often no real structure. The marketing works. But follow-ups are delayed. Leads sit in inboxes. Tools run in silos. Processes that should have been automated are still manual.
          </p>
          <p>
            That insight became the foundation of everything Velorix builds. Today, we bring together strategy, systems design, digital marketing, SEO, AI, automation, custom development, and marketing execution — unified by one principle: a business that runs on structure converts more, scales easier, and keeps more of what it earns.
          </p>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <a href="#about" className="btn btn-secondary">
              Our Full Story
              <IconArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
