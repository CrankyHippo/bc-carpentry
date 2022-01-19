import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}
    <span className="flex-row text-center">
      <p>bccarpentry2@gmail.com</p>
      <p>Petaluma, California</p>
      <p>(707) 755-4935</p>
    </span>
    <nav>
      <ul className="flex flex-row justify-center mt-1 text-xl font-medium text-gray-800 navbar">
        {props.children}
      </ul>
    </nav>

    <div className="flex justify-center mt-8">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
