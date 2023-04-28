import { FC } from 'react';
import { useZustandStore } from '../../store/zustand';

export const BackIcon: FC<{ width?: string; height?: string; customClass?: string }> = ({ width, height, customClass }) => {
  const { setIsSearchActive } = useZustandStore();
  return (
    <svg viewBox='0 0 24 24' height={height} width={width} preserveAspectRatio='xMidYMid meet' className={customClass}>
      <path fill='currentColor' d='M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z'></path>
    </svg>
  );
};
