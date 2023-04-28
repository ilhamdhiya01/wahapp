import { SearchIcon } from '../../../icons/SearchIcon';
import { BackIcon } from '../../../icons';
import { useZustandStore } from '../../../../store/zustand';

export const FilterUnreadChat = () => {
  const { isSearchActive, setIsSearchActive } = useZustandStore();
  return (
    <div onFocus={setIsSearchActive} onBlur={setIsSearchActive} className='flex items-center rounded-md overflow-hidden flex-1 w-full bg-[#F0F2F5] py-[7px] px-3 gap-14'>
      <div className='relative bg-red-200'>
        <BackIcon width='24' height='24' customClass={`-rotate-90 ${isSearchActive ? 'rotate-[0deg] opacity-100 text-[#00A884]' : '-rotate-90 opacity-0 text-[#54656f]'} transition-all duration-[400ms] ease-in-out absolute -top-3 left-0`} />
        <SearchIcon customClass={`${isSearchActive ? 'rotate-[270deg] opacity-0' : 'rotate-0 opacity-100'} absolute -top-3 left-0`} />
      </div>
      <input type='text' className='w-full bg-inherit placeholder:text-sm placeholder:text-[#54656f] outline-none text-sm text-[#54656f]' placeholder={isSearchActive ? '' : 'Cari chat yang belum di baca'} />
    </div>
  );
};
