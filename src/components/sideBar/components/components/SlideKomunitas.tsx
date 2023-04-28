import { BackIcon, SearchIcon } from '../../../icons';
import { useZustandStore } from '../../../../store/zustand';
import { KomunitasIconDisplay } from '../../../icons/KomunitasIconDisplay';

export const SlideKomunitas = () => {
  const { isKomunitasActive, setIsKomunitasActive } = useZustandStore();
  return (
    <div className={`absolute top-0 left-0 bg-white h-screen w-full z-[1] overflow-auto ${isKomunitasActive ? 'translate-x-0' : 'translate-x-[-100%]'} w-full transition-transform duration-[250ms] ease-in-out`}>
      <div className='flex flex-col border-b sticky top-0'>
        <div className={`h-[12.5vh] md:h-[17.5vh] bg-[#008069] text-white py-4 flex items-end transition-all duration-500 ease-in-out`}>
          <div className={`text-lg flex justify-start gap-7 items-center transition-all duration-[800ms] ${isKomunitasActive ? 'translate-x-6 opacity-100' : '-translate-x-2 opacity-0'}`}>
            <i onClick={() => setIsKomunitasActive(false)} className='cursor-pointer'>
              <BackIcon width='25' height='25' />
            </i>
            <span className='text-lg'>Komunitas</span>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-6 text-center px-5 transition-all duration-[800ms] ${isKomunitasActive ? 'translate-y-8 opacity-100' : '-translate-y-2 opacity-0'}`}>
        <KomunitasIconDisplay customClass='mx-auto' />
        <h2 className='text-2xl font-bold'>Memperkenalkan komunitas</h2>
        <p className='text-[#8797a2] text-sm'>Kelola grup terkait Anda dengan mudah dan kirim pengumuman. Sekarang, komunitas Anda seperti lingkungan atau sekolah, dapat memiliki ruang sendiri.</p>
        <div className='inline-block'>
          <button className='bg-[#017561] text-white text-sm rounded-full py-[9px] px-6'>Mulai komunitas</button>
        </div>
      </div>
    </div>
  );
};
