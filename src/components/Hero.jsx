import Orb from './Orb';
import { IconArrowRight } from './Icons';

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero__orb-wrapper">
        <Orb
          hoverIntensity={1.14}
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="eyebrow">Business Systems. Digital Infrastructure. Built to Work.</span>

          <h1>
            Your Business Has Leads. What It Might Not Have Is <span className="gradient-text">the System to Convert Them.</span>
          </h1>

          <p className="hero__subtitle">
            Velorix builds the complete digital infrastructure behind your business — CRM systems, automation, AI agents, websites, SEO, marketing execution, and operational workflows — so your marketing doesn't just generate interest. It generates results.
          </p>

          <div className="hero__ctas">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1aL1YCoKNEC3uFiNLCGU26MpNNh1UkO9daWNGUGhyAOie8EJzujLfUi9rURXSgnYvkleslW0Tk" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Book a Strategy Call
              <IconArrowRight size={16} />
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              See How We Build
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero__proof">
          <p>Trusted by founders and growing businesses across service industries.</p>
        </div>
      </div>
    </header>
  );
}
