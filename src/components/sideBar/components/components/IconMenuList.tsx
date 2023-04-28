import React from 'react';
import * as Icon from '../../../icons';
import { useZustandStore } from '../../../../store/zustand';
export const IconMenuList = () => {
  const { showPupupMenu, setShowPopupMenu, isNewChatActive, setIsNewChatActive, isKomunitasActive, setIsKomunitasActive } = useZustandStore();
  const handleShowPopupmenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setShowPopupMenu();
    e.stopPropagation();
  };

  return (
    <ul className='flex items-center gap-3'>
      <li onClick={() => setIsKomunitasActive(true)} className={`cursor-pointer w-10 h-10  flex justify-center items-center active:rounded-full active:bg-[#DADBDE] ${isKomunitasActive && 'bg-[#DADBDE] rounded-full'}  transition-all duration-200 ease-in-out`}>
        <Icon.KomunitasIcon />
      </li>
      <li className='cursor-pointer w-10 h-10  flex justify-center items-center active:rounded-full active:bg-[#DADBDE] transition-all duration-200 ease-in-out'>
        <Icon.StatusIcon />
      </li>
      <li onClick={() => setIsNewChatActive(true)} className={`cursor-pointer w-10 h-10  flex justify-center items-center active:rounded-full active:bg-[#DADBDE] ${isNewChatActive && 'bg-[#DADBDE] rounded-full'} transition-all duration-200 ease-in-out`}>
        <Icon.NewChatIcon />
      </li>
      <li onClick={(e) => handleShowPopupmenu(e)} className={`cursor-pointer w-10 h-10  flex justify-center items-center active:rounded-full active:bg-[#DADBDE] ${showPupupMenu && 'bg-[#DADBDE] rounded-full'} transition-all duration-200 ease-in-out`}>
        <Icon.MenuIcon />
      </li>
    </ul>
  );
};
