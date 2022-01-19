import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-stone-400">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.instagram.com/brentccarpentry/">
            <a>PORTFOLIO</a>
          </Link>
        </li>
        <li>
          <Link href="mailto:bccarpentry2@gmail.com">
            <a>CONTACT</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="inline-flex items-center border-4 border-solid rounded-lg shadow-lg border-sky-500">
              <img src="/assets/images/bc-logo.jpeg" alt="BC Carpentry"></img>
            </span>
            <br></br>
            <span className="text-black-500">Licensed Contractor #1068304</span>
            <br></br>
            <span className="text-black-500">(707) 755-4935</span>
          </>
        }
        description="Please contact us for free estimates, reasonable pricing, with quality craftsmanship."
        button={
          <Link href="mailto:bccarpentry2@gmail.com">
            <a>
              <Button xl>CONTACT</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
