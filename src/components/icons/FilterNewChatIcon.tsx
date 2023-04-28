import { FC } from 'react';

export const FilterNewChatIcon: FC<{ customClass?: string }> = ({ customClass }) => {
  return (
    <svg viewBox='0 0 24 24' height='20' width='20' preserveAspectRatio='xMidYMid meet' version='1.1' x='0px' y='0px' enableBackground='new 0 0 24 24' className={`${customClass} cursor-pointer transition-colors duration-200 ease-in-out`}>
      <path fill='currentColor' d='M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z'></path>
    </svg>
  );
};
