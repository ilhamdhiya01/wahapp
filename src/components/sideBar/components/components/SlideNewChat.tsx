import { BackIcon, SearchIcon } from '../../../icons';
import { useZustandStore } from '../../../../store/zustand';

export const SlideNewChat = () => {
  const { isNewChatActive, setIsNewChatActive, isSearchActive, setIsSearchActive } = useZustandStore();
  return (
    <div className={`absolute top-0 left-0 bg-white h-screen w-full z-[1] overflow-auto ${isNewChatActive ? 'translate-x-0' : 'translate-x-[-100%]'} w-full transition-transform duration-[250ms] ease-in-out`}>
      <div className='flex flex-col border-b sticky top-0'>
        <div className={`h-[12.5vh] md:h-[17.5vh] bg-[#008069] text-white py-4 flex items-end transition-all duration-500 ease-in-out`}>
          <div className={`text-lg flex justify-start gap-7 items-center transition-all duration-[800ms] ${isNewChatActive ? 'translate-x-6 opacity-100' : '-translate-x-2 opacity-0'}`}>
            <i onClick={() => setIsNewChatActive(false)} className='cursor-pointer'>
              <BackIcon width='25' height='25' />
            </i>
            <span className='text-lg'>Chat Baru</span>
          </div>
        </div>
        <div className='bg-white px-3 py-2'>
          <div onFocus={setIsSearchActive} onBlur={setIsSearchActive} className='flex items-center rounded-md overflow-hidden flex-1 w-full bg-[#F0F2F5] py-[6px] px-3 gap-14'>
            <div className='relative'>
              <BackIcon width='24' height='24' customClass={`-rotate-90 ${isSearchActive ? 'rotate-[0deg] opacity-100 text-[#00A884]' : '-rotate-90 opacity-0 text-[#54656f]'} transition-all duration-[400ms] ease-in-out absolute -top-3 left-0`} />
              <SearchIcon customClass={`${isSearchActive ? 'rotate-[270deg] opacity-0' : 'rotate-0 opacity-100'} absolute -top-3 left-0`} />
            </div>
            <input type='text' className='w-full bg-inherit placeholder:text-sm placeholder:text-[#54656f] outline-none text-sm text-[#54656f]' placeholder={isSearchActive ? '' : 'Cari chat yang belum di baca'} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
