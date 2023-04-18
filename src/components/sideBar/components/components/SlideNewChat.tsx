import { BackIcon, SearchIcon } from '../../../icons';
import { useZustandStore } from '../../../../store/zustand';

export const SlideNewChat = () => {
  const { isNewChatActive, setIsNewChatActive } = useZustandStore();
  return (
    <div className={`absolute top-0 left-0 border-r bg-white h-screen w-full z-[1] overflow-auto ${isNewChatActive ? 'translate-x-0' : 'translate-x-[-410px]'} w-[410px] transition-transform duration-[250ms] ease-in-out`}>
      <div className='flex flex-col border-b sticky top-0'>
        <div className={`h-[16.6vh] bg-[#008069] text-white py-4 flex items-end`}>
          <div className={`text-lg flex justify-start gap-7 items-center transition-all duration-[800ms] ${isNewChatActive ? 'translate-x-6 opacity-100' : '-translate-x-2 opacity-0'}`}>
            <i onClick={() => setIsNewChatActive(false)} className='cursor-pointer'>
              <BackIcon width='25' height='25' />
            </i>
            <span className='text-lg'>Chat Baru</span>
          </div>
        </div>
        <div className='bg-white px-3 py-2'>
          <div className='flex items-center rounded-md overflow-hidden flex-1 w-full bg-[#F0F2F5] py-[4px] px-3 gap-6'>
            {/* <BackIcon /> */}
            <SearchIcon />
            <input type='text' className='w-full bg-inherit placeholder:text-sm placeholder:text-[#54656f] outline-none text-sm text-[#54656f]' placeholder='Cari kontak' />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
