import { FC } from 'react';

export const BackIcon: FC<{ width?: string; height?: string; customClass?: string }> = ({ width, height, customClass }) => {
  return (
    <>
      <svg viewBox='0 0 24 24' height={height} width={width} preserveAspectRatio='xMidYMid meet' className={customClass} version='1.1' x='0px' y='0px' enable-background='new 0 0 24 24'>
        <path fill='currentColor' d='M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z'></path>
      </svg>
    </>
  );
};
