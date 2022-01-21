import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="flex items-center text-xl font-medium text-gray-800 navbar">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
        .navbar :global(li:not(:last-child)) {
          @apply inline-block rounded-md text-center;
        }

        .navbar :global(li:not(:last-child)) {
          @apply text-lg font-semibold py-2 px-4;
        }

        .navbar :global(li:not(:last-child)) {
          @apply font-extrabold text-xl py-4 px-6 border-2 border-white;
        }

        .navbar :global(li:not(:last-child)) {
          @apply text-white bg-stone-500;
        }

        .navbar:hover :global(li:not(:last-child)) {
          @apply bg-primary-600;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
