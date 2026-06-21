import {
  council,
  marketCorridors,
  marketNotes,
  services
} from "@/data/site";
import { MotionReveal } from "./motion-reveal";
import { ProcessSlider } from "./process-slider";
import { WhatsAppCta } from "./whatsapp-cta";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell services-section">
      <MotionReveal className="section-heading">
        <p className="eyebrow">Our Advisory</p>
        <h2>Three services. Three tiers. One standard.</h2>
      </MotionReveal>
      <div className="services-grid">
        {services.map((service, index) => (
          <MotionReveal
            className="service-card"
            delay={index * 0.08}
            key={service.title}
          >
            <strong>{service.title}</strong>
            <p>{service.copy}</p>

            {service.tiers && (
              <ul className="service-tiers">
                {service.tiers.map((tier) => (
                  <li key={tier.label}>
                    <span className="tier-label">{tier.label}</span>
                    <span className="tier-range">{tier.range}</span>
                  </li>
                ))}
              </ul>
            )}

            {service.bullets && (
              <div className="service-handle">
                <p className="service-handle-label">What we handle:</p>
                <ul className="service-bullets">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="service-cta">
              <WhatsAppCta
                label={service.ctaLabel}
                message={service.ctaMessage}
              />
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

export function CouncilSection() {
  return (
    <section id="council" className="section-shell council-section">
      <MotionReveal className="section-heading">
        <p className="eyebrow">The Private Counsel</p>
        <h2>One mandate. Four desks.</h2>
        <p className="section-note">
          Every client is served by a structured private counsel — not a single
          agent.
        </p>
      </MotionReveal>
      <div className="council-grid">
        {council.map((desk, index) => (
          <MotionReveal
            className="council-card"
            delay={index * 0.06}
            key={desk.title}
          >
            <h3>{desk.title}</h3>
            <p>{desk.copy}</p>
            {desk.people && (
              <ul className="council-people">
                {desk.people.map((person) => (
                  <li key={person.email}>
                    <strong>{person.name}</strong>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                    <div className="council-contact-row">
                      <a href={`tel:+91${person.phone}`}>{person.phone}</a>
                      <span className="council-divider">·</span>
                      <a
                        href={`https://wa.me/91${person.phone}?text=${encodeURIComponent(
                          "Hey, I'd like to request a private briefing."
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="council-wa"
                      >
                        WhatsApp
                      </a>
                      <span className="council-divider">·</span>
                      <a href={`tel:+91${person.phone}`}>Call</a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-shell process-section">
      <MotionReveal className="section-heading">
        <p className="eyebrow">Our Discipline</p>
        <h2>Every step is appointment-led.</h2>
        <p className="section-note">
          Six to ten weeks. Because the right decision takes the right time.
        </p>
      </MotionReveal>
      <MotionReveal>
        <ProcessSlider />
      </MotionReveal>
    </section>
  );
}

export function MarketSection() {
  return (
    <section id="market" className="section-shell market-section">
      <MotionReveal className="section-heading">
        <p className="eyebrow">Know Your Market</p>
        <h2>We do not follow the Bengaluru market. We read it.</h2>
      </MotionReveal>
      <div className="market-grid">
        {marketCorridors.map((corridor, index) => (
          <MotionReveal
            className="market-card"
            delay={index * 0.08}
            key={corridor.title}
          >
            <span>{`0${index + 1}`}</span>
            <h3>{corridor.title}</h3>
            <p>{corridor.copy}</p>
          </MotionReveal>
        ))}
      </div>
      <MotionReveal className="market-glance">
        <p className="eyebrow">Bengaluru market at a glance</p>
        <ul>
          {marketNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </MotionReveal>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="section-shell closing-section">
      <MotionReveal>
        <p className="eyebrow">Private Appointments</p>
        <h2>The right conversation changes everything that follows.</h2>
        <div className="closing-actions">
          <WhatsAppCta label="Request a Private Briefing" />
          <WhatsAppCta label="Connect on WhatsApp" variant="ghost" />
        </div>
      </MotionReveal>
    </section>
  );
}

export function FloatingWhatsapp() {
  return (
    <div className="floating-whatsapp">
      <WhatsAppCta label="WhatsApp" />
    </div>
  );
}

// Legacy stubs (kept for any external import safety)
export function IntelligenceSection() {
  return null;
}
export function PillarsSection() {
  return null;
}
export function PrivateOfficeSection() {
  return null;
}
