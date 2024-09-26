import Link from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';

type Props = { fullWidth?: boolean; varient?: 'contained' | 'text' } & (
  | ({
      as?: 'button';
    } & Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      'className'
    >)
  | ({
      as?: 'a';
    } & Omit<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >,
      'className'
    >)
);

export const Button = ({
  children,
  fullWidth,
  varient = 'contained',
  as = 'button',
  ...props
}: Props) => {
  const CustomElement = as === 'a' ? Link : 'button';

  return (
    // @ts-expect-error / props type will be correct automatically
    <CustomElement
      className={`relative flex justify-center px-[3rem] py-[0.75rem] rounded-[1rem]  hover:shadow-md  transition-all duration-500 overflow-hidden group ${
        varient === 'contained'
          ? 'bg-primary text-primary-text hover:bg-primary-light hover:shadow-primary-dark'
          : 'text-primary hover:bg-primary-light'
      } ${
        fullWidth ? 'w-full' : ''
      } disabled:pointer-events-none disabled:bg-brand-gray-main`}
      {...props}
    >
      {varient === 'contained' ? (
        <div className='absolute w-[200%] h-[200%] rounded-full bg-primary-dark z-[4] inset-0 translate-x-[100%] group-hover:translate-x-[-50%] transition transform duration-700 ease-in-out'></div>
      ) : (
        ''
      )}
      <div className='relative z-[5]'>{children}</div>
    </CustomElement>
  );
};

type JoinWaitListSpecialButtonProps = { fullWidth?: boolean } & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'className'
>;

export const JoinWaitListSpecialButton = ({
  children,
  fullWidth,
  ...props
}: JoinWaitListSpecialButtonProps) => {
  return (
    <button
      className={`relative bg-white px-[3rem] py-[0.75rem] rounded-[1rem] hover:text-white hover:shadow-primary-dark hover:shadow-md hover:bg-primary-light transition-all duration-500 overflow-hidden group outline-[2px] outline outline-transparent hover:outline-white ${
        fullWidth ? 'w-full' : ''
      }`}
      {...props}
    >
      <div className='absolute w-[200%] h-[200%] rounded-full bg-primary-dark z-[4] inset-0 translate-x-[100%] group-hover:translate-x-[-50%] transition transform duration-700 ease-in-out'></div>
      <div className='relative z-[5]'>{children}</div>
    </button>
  );
};

type IconButtonProps = {
  children: ReactNode;
  size?: 'small' | 'large';
} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'className'
>;
export const IconButton = ({
  children,
  size = 'large',
  ...props
}: IconButtonProps) => {
  return (
    <button
      {...props}
      className={`relative hover:bg-brand-gray-extra-light/50 aspect-square flex items-center justify-center ${
        size === 'large'
          ? 'rounded-[1rem] h-[3rem] min-w-[3rem] [&>#mh-icon-frame]:size-[1.5rem]'
          : 'rounded-[0.5rem] h-[2rem] min-w-[2rem] [&>#mh-icon-frame]:size-[1rem]'
      } disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
};

type OAuthButtonProps = {
  icon: ReactNode;
  label: string;
};
export const OAuthButton = ({ icon, label }: OAuthButtonProps) => {
  return (
    <Link
      href={{
        pathname: '/terms-and-services',
      }}
      className='flex rounded-[1rem] px-[1rem] py-[0.5rem] gap-[1.5rem] bg-white border-[2px] border-brand-gray-light hover:bg-primary-light/95 text-primary-dark'
    >
      <div className='size-[1.75rem] bg-transparent'>{icon}</div>
      <p>{label}</p>
    </Link>
  );
};
