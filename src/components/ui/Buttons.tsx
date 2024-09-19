import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'className'
>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className='relative bg-primary text-primary-text px-[3rem] py-[0.75rem] rounded-[1rem] hover:shadow-primary-dark hover:shadow-md hover:bg-primary-light transition-all duration-500 overflow-hidden group'
      {...props}
    >
      <div className='absolute w-[200%] h-[200%] rounded-full bg-primary-dark z-[4] inset-0 translate-x-[100%] group-hover:translate-x-[-50%] transition transform duration-700 ease-in-out'></div>
      <div className='relative z-[5]'>{children}</div>
    </button>
  );
};
