import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Follow us on Instagram to see our latest work!"
      subtitle=""
      image="/assets/images/instagram_slide.png"
      imageAlt="Instagram photos"
      button={
        <Link href="https://www.instagram.com/brentccarpentry/">
          <a>
            <Button>FOLLOW</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
