import { IconArrowRight } from './Icons';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta fade-in">
          <h2>Your Business Deserves a System That Actually Works.</h2>
          <p>
            If you are generating leads but not converting consistently — if your tools are disconnected and your follow-ups are inconsistent — if you are scaling but the back end is struggling to keep up — let's build the system behind your growth.
          </p>
          <p>
            Book a strategy call with Velorix. We will look at where your business is, where the gaps are, and what a properly built infrastructure could do for it.
          </p>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a Strategy Call
              <IconArrowRight size={16} />
            </a>
          </div>
          <p className="final-cta__note">No obligation. No pitch deck. Just a real conversation about your business.</p>
        </div>
      </div>
    </section>
  );
}
