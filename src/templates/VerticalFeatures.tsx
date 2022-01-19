import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Services"
    description="As a licensed and insured contractor, our work covers the spectrum from fencing, decks, doors, windows, framing, concrete, baseboards, cabinets, and dry rot repair."
  >
    <VerticalFeatureRow
      title="About Us"
      description="Based in Petaluma, BC Carpentry's work speaks for itself, with integrity and efficiency we see that the job gets done right."
      image="/assets/images/feature.jpeg"
      imageAlt="On the job"
    />
    <VerticalFeatureRow
      title="Indoor & Outdoor"
      description="From setting a ridge beam, leveling concrete floors, framing, restoration, door installation, we have you covered."
      image="/assets/images/feature2.jpeg"
      imageAlt="Front stair railing"
      reverse
    />
    <VerticalFeatureRow
      title="Customer Satisfaction"
      description='"Brent was professional and courteous. He did a siding job for me and is doing two-deck railings for me next. His work speaks for itself. The attention to detail is unrivaled and the customer service was excellent. I highly recommend BC Carpentry to anyone needing home repairs!" - Bill R.'
      image="/assets/images/feature3.jpeg"
      imageAlt="Redwood deck 8'x60' with redwood lattice"
    />
  </Section>
);

export { VerticalFeatures };
