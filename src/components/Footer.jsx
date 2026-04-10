import Logo from './Logo';
import { IconArrowRight } from './Icons';

const serviceLinks = [
  'CRM & Sales Systems',
  'Automation & Workflows',
  'AI Agents & Tools',
  'Website Design & Dev',
  'Custom Systems & CMS',
  'SEO & Content Foundation',
  'Operations Systems',
  'Marketing Execution',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo size={32} />
              <span>VELORIX</span>
            </div>
            <p>
              Complete business systems — connected, automated, and built to scale.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1aL1YCoKNEC3uFiNLCGU26MpNNh1UkO9daWNGUGhyAOie8EJzujLfUi9rURXSgnYvkleslW0Tk" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 'var(--space-5)' }}>
              Book a Strategy Call
              <IconArrowRight size={14} />
            </a>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#audience">Who We Serve</a></li>
              <li><a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1aL1YCoKNEC3uFiNLCGU26MpNNh1UkO9daWNGUGhyAOie8EJzujLfUi9rURXSgnYvkleslW0Tk" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Business Systems &middot; CRM &middot; Automation &middot; AI &middot; Websites &middot; SEO &middot; Operations &middot; Marketing Execution</p>
          <p>&copy; {new Date().getFullYear()} Velorix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
