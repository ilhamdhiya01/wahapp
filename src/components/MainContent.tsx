import { FC } from 'react';

export const MainContent: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
