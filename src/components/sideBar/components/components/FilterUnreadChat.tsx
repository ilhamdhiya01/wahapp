import React from 'react';
import { SearchIcon } from '../../../icons/SearchIcon';

export const FilterUnreadChat = () => {
  return (
    <div className='flex items-center rounded-lg overflow-hidden flex-1 w-full bg-[#F0F2F5] py-[4px] px-3 gap-6'>
      {/* <BackIcon /> */}
      <SearchIcon />
      <input type='text' className='w-full bg-inherit placeholder:text-sm placeholder:text-[#54656f] outline-none text-sm text-[#54656f]' placeholder='Cari chat yang belum di baca' />
    </div>
  );
};
