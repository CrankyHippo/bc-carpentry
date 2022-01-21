import { ReactNode } from 'react';

// import router from 'next/router';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col p-4 text-center rounded-md sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div className="w-full p-4 border-4 border-solid shadow-2xl sm:w-1/2 border-sky-500">
      <img
        className="rounded-3xl"
        src={`${props.image}`}
        alt={props.imageAlt}
      />
    </div>

    <div className="mt-3 whitespace-no-wrap sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
