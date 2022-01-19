import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Follow us on Instagram to see our latest work!"
      subtitle="See our latest work on Instagram."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>FOLLOW</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
