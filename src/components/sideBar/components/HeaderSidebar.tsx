import { FilterNewChat } from './components/FilterNewChat';
import { FilterUnreadChat } from './components/FilterUnreadChat';
import { useZustandStore } from '../../../store/zustand';
import { IconMenuList } from './components/IconMenuList';
import * as Icon from '../../icons';
import { PopupMenu } from './components/PopupMenu';
import { SlideNewChat } from './components/SlideNewChat';

export const HeaderSidebar = () => {
  const { isFilterChatActive, setIsFilterChatActive } = useZustandStore();

  return (
    <div className='relative'>
      <PopupMenu />
      <SlideNewChat />
      <div className='bg-white border-b border-[#e6eaec] flex flex-col h-[16.6vh]'>
        <div className='flex justify-between items-center bg-[#F0F2F5] py-2 px-4'>
          <div className='w-10 h-10 overflow-hidden rounded-full cursor-pointer'>
            <img src='https://pps.whatsapp.net/v/t61.24694-24/305581077_448549714032096_7410265434518197690_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ2-PmlYjbh1plG6SipfYNI-rKcRyhlUzM8e_zzHjepXg&oe=644B0717' alt='' />
          </div>
          <IconMenuList />
        </div>
        <div className='p-2 flex items-center justify-between gap-2'>
          {isFilterChatActive ? <FilterUnreadChat /> : <FilterNewChat />}
          <div onClick={setIsFilterChatActive} className={`w-[26px] h-[26px] rounded-full flex justify-center items-center ${isFilterChatActive ? 'bg-[#00A884]' : 'bg-white'} transition-colors duration-200 ease-in-out`}>
            <Icon.FilterNewChatIcon customClass={`${isFilterChatActive ? 'text-white' : 'text-[#8998a2]'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
