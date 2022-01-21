import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-2xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-white bg-stone-500 border-2 border-white inline-flex items-center rounded-xl font-extrabold text-xl py-4 px-6 ${fontStyle}`}
    >
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
