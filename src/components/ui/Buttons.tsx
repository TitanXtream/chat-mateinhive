import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Props = { fullWidth?: boolean } & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'className'
>;

export const Button = ({ children, fullWidth, ...props }: Props) => {
  return (
    <button
      className={`relative bg-primary text-primary-text px-[3rem] py-[0.75rem] rounded-[1rem] hover:shadow-primary-dark hover:shadow-md hover:bg-primary-light transition-all duration-500 overflow-hidden group ${
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
};
export const IconButton = ({ children, size = 'large' }: IconButtonProps) => {
  return (
    <button
      className={`hover:bg-brand-gray-extra-light/50 aspect-square flex items-center justify-center ${
        size === 'large'
          ? 'rounded-[1rem] h-[3rem] min-w-[3rem] [&>#mh-icon-frame]:size-[1.5rem]'
          : 'rounded-[0.5rem] h-[2rem] min-w-[2rem] [&>#mh-icon-frame]:size-[1rem]'
      }`}
    >
      {children}
    </button>
  );
};
