import { SearchIcon } from '../../../icons/SearchIcon';
import { useZustandStore } from '../../../../store/zustand';

export const FilterNewChat = () => {
  const { isSearchActive } = useZustandStore();
  return (
    <div className='flex items-center rounded-lg overflow-hidden flex-1 w-full bg-[#F0F2F5] py-[4px] px-3 gap-6'>
      {/* <BackIcon /> */}
      <SearchIcon customClass={`${isSearchActive ? 'rotate-[270deg]' : 'rotate-0'}`} />
      <input type='text' className='w-full bg-inherit placeholder:text-sm placeholder:text-[#54656f] outline-none text-sm text-[#54656f]' placeholder='Cari atau mulai chat baru' />
    </div>
  );
};
