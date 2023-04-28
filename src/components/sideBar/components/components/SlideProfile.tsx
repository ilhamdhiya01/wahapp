import { useZustandStore } from '../../../../store/zustand';
import { BackIcon } from '../../../icons';
import profileImg from '../../../../../public/file.jpg';

export const SlideProfile = () => {
  const { isProfileActive, setIsProfileActive } = useZustandStore();
  return (
    <div className={`absolute top-0 left-0 bg-[#F0F2F5] h-screen w-full z-[1] overflow-auto ${isProfileActive ? 'translate-x-0' : 'translate-x-[-100%]'} w-full transition-transform duration-[250ms] ease-in-out`}>
      <div className='flex flex-col border-b sticky top-0'>
        <div className={`h-[12.5vh] md:h-[17.5vh] bg-[#008069] text-white py-4 flex items-end transition-all duration-500 ease-in-out`}>
          <div className={`text-lg flex justify-start gap-7 items-center transition-all duration-[800ms] ${isProfileActive ? 'translate-x-6 opacity-100' : '-translate-x-2 opacity-0'}`}>
            <i onClick={() => setIsProfileActive(false)} className='cursor-pointer'>
              <BackIcon width='25' height='25' />
            </i>
            <span className='text-lg'>Profil</span>
          </div>
        </div>
      </div>
      <div className='py-6 flex flex-col'>
        <div className='flex justify-center items-center w-full h-[200px]'>
          <img src={profileImg} className={`${isProfileActive ? 'w-[200px] h-[200px]' : 'w-0 h-0'} duration-700 transition-all ease-in-out rounded-full`} alt='' />
        </div>
        <div className={`transition-all duration-[800ms] ${isProfileActive ? 'translate-y-6 opacity-100' : '-translate-y-2 opacity-0'}`}>
          <div className='bg-white flex flex-col px-8 py-4 gap-4'>
            <span className='text-[#01826b] text-sm'>Nama Anda</span>
            <div className='flex justify-between items-center'>
              <span className='text-[#3d4d57]'>Ilham Dhiya Ulhaq</span>
              <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='text-[#8696A0]' version='1.1' x='0px' y='0px' enableBackground='new 0 0 24 24'>
                <path fill='currentColor' d='M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z'></path>
              </svg>
            </div>
          </div>
          <div className='text-[#677882] text-sm px-8 py-4'>
            <p>Ini bukan nama pengguna atau PIN Anda. Nama ini akan ditampilkan ke kontak WhatsApp Anda.</p>
          </div>
          <div className='bg-white flex flex-col px-8 py-4 gap-4'>
            <span className='text-[#01826b] text-sm'>Info</span>
            <div className='flex justify-between items-center'>
              <span className='text-[#3d4d57]'>Sibuk</span>
              <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='text-[#8696A0]' version='1.1' x='0px' y='0px' enableBackground='new 0 0 24 24'>
                <path fill='currentColor' d='M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
