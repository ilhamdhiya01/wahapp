import { FilterNewChat } from './components/FilterNewChat';
import { FilterUnreadChat } from './components/FilterUnreadChat';
import { useZustandStore } from '../../../store/zustand';
import { IconMenuList } from './components/IconMenuList';
import * as Icon from '../../icons';
import { PopupMenu } from './components/PopupMenu';
import { SlideNewChat } from './components/SlideNewChat';
import { SlideKomunitas } from './components/SlideKomunitas';
import { SlideProfile } from './components/SlideProfile';

export const HeaderSidebar = () => {
  const { isFilterChatActive, setIsFilterChatActive, setIsProfileActive } = useZustandStore();

  return (
    <div className='relative'>
      <PopupMenu />
      <SlideNewChat />
      <SlideKomunitas />
      <SlideProfile />
      <div className='h-[12.5vh] md:h-[17.5vh] bg-white border-b border-[#e6eaec] flex flex-col transition-all duration-500 ease-in-out'>
        <div className='flex justify-between items-center bg-[#F0F2F5] py-[10px] px-4'>
          <div onClick={() => setIsProfileActive(true)} className='w-10 h-10 overflow-hidden rounded-full cursor-pointer'>
            <img src='https://pps.whatsapp.net/v/t61.24694-24/305581077_448549714032096_7410265434518197690_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ2-PmlYjbh1plG6SipfYNI-rKcRyhlUzM8e_zzHjepXg&oe=644B0717' alt='' className='w-full h-full shrink-0' />
          </div>
          <IconMenuList />
        </div>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='flex items-center justify-between gap-2 w-full px-3'>
            {isFilterChatActive ? <FilterUnreadChat /> : <FilterNewChat />}
            <div onClick={setIsFilterChatActive} className={`w-[26px] h-[26px] rounded-full flex justify-center items-center ${isFilterChatActive ? 'bg-[#00A884]' : 'bg-white'} transition-colors duration-200 ease-in-out`}>
              <Icon.FilterNewChatIcon customClass={`${isFilterChatActive ? 'text-white' : 'text-[#8998a2]'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
