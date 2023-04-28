import { useZustandStore } from '../../../../store/zustand';

export const PopupMenu = () => {
  const { showPupupMenu } = useZustandStore();
  const menuList = [{ name: 'Grup Baru' }, { name: 'Komunitas Baru' }, { name: 'Pesan Berbintang' }, { name: 'Pilih Chat' }, { name: 'Setelan' }, { name: 'Keluar' }];
  return (
    <div className={`bg-white shadow-[rgba(0,0,0,0.16)0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] ${showPupupMenu ? 'w-[200px] h-[258px]' : 'w-0 h-0'} transition-all duration-200 ease-in-out absolute top-[52px] right-5 overflow-hidden rounded`}>
      <ul className='py-2'>
        {menuList.map((item, index) => (
          <li key={index} className='px-6 py-2 hover:bg-[#F5F6F6] text-[#54656f] cursor-pointer'>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
