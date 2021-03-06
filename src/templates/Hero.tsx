import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gradient-to-b from-slate-600 to-slate-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <hr></hr>
        <li>
          <Link href="https://www.instagram.com/brentccarpentry/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          {/* <Link href="mailto:bccarpentry2@gmail.com">
            <a className="box-border text-black drop-shadow-lg shadow-white">
              CONTACT
            </a>
          </Link> */}
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="inline-flex items-center rounded-lg shadow-lg">
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
              <Button xl>Email: bccarpentry2@gmail.com</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
