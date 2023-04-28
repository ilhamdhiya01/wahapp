import { FC } from 'react';

export const MainContent: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className='bg-[#F0F2F5] h-screen md:basis-[70%]'>{children}</div>;
};
