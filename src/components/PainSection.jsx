import { IconWarning } from './Icons';
import FallingText from './FallingText';

const painPoints = [
  {
    title: 'Leads that go cold',
    description: 'No fast follow-up. No nurture sequence. No second chance.',
  },
  {
    title: 'Manual chaos',
    description: 'Everything depends on someone remembering to do it.',
  },
  {
    title: 'Disconnected tools',
    description: "Your CRM doesn't talk to your website. Your automation doesn't connect to your follow-up. Nothing flows.",
  },
  {
    title: 'Inconsistent client handling',
    description: "What happens when a lead converts depends on who's having a good day.",
  },
  {
    title: 'Time bleeding out',
    description: 'Hours spent on tasks that should have been automated months ago.',
  },
  {
    title: 'Revenue leaking quietly',
    description: 'Not from bad marketing. From missing structure.',
  },
];

export default function PainSection() {
  return (
    <section className="section" id="pain">
      <div className="container">
        <div className="section-header fade-in">
          <span className="eyebrow">Why Growth Gets Stuck</span>
          <div style={{ width: '100%', height: '200px', position: 'relative' }}>
            <FallingText
              text="The Problem Is Not Always Your Marketing. It Is What Happens After the Lead Arrives."
              highlightWords={["Marketing.", "Lead"]}
              highlightClass="highlighted"
              trigger="hover"
              gravity={0.73}
              backgroundColor="transparent"
              wireframes={false}
              fontSize="2.25rem"
            />
          </div>
          <p>
            Most businesses focus on getting leads. But getting leads is only half the equation. When a lead arrives — what happens next? Is there a fast, structured follow-up? Is the lead nurtured across multiple touchpoints? Is it moving through a clear pipeline? Or does it land in an inbox, a spreadsheet, a DM — and eventually go nowhere?
          </p>
        </div>

        <div className="grid-3">
          {painPoints.map((point, i) => (
            <div key={i} className={`card pain-card fade-in fade-in-delay-${i + 1}`}>
              <div className="card-icon pain-card__icon">
                <IconWarning size={22} />
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
