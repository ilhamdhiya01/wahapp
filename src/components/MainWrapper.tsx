import { FC } from 'react';
import { useZustandStore } from '../store/zustand';

export const MainWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setClosePopupMenu } = useZustandStore();
  return (
    <div onClick={setClosePopupMenu} className='w-full min-h-screen relative flex'>
      {children}
    </div>
  );
};
