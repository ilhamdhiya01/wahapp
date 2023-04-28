import { SideBar } from './components/sideBar/SideBar';
import { MainWrapper } from './components/MainWrapper';
import { MainContent } from './components/MainContent';
import { IconDisplay } from './components/icons';
import './App.css';

export default function App() {
  return (
    <>
      <MainWrapper>
        <SideBar />
        <MainContent>
          <div className='flex flex-col h-full relative border-b-[6px] border-[#4ada80]'>
            <div className='m-auto text-center flex flex-col gap-4'>
              <IconDisplay />
              <h1 className='text-4xl text-[#41525D] font-light mt-5'>WahApp Web</h1>
              <p className='text-[#41525D] text-sm'>
                Kirim dan terima pesan tanpa perlu menghubungkan telepon Anda ke Internet.
                <br />
                Gunakan WhatsApp di maksimal 4 perangkat tertaut dan 1 telepon sekaligus.
              </p>
              <span className='flex items-center text-sm justify-center gap-1 text-[#8696A0] absolute bottom-8 left-0 right-0'>
                <svg viewBox='0 0 10 12' height='12' width='10' preserveAspectRatio='xMidYMid meet' className='text-[#8696A0]' version='1.1'>
                  <path d='M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z' fill='currentColor'></path>
                </svg>
                Terenkripsi secara end-to-end
              </span>
            </div>
          </div>
        </MainContent>
      </MainWrapper>
    </>
  );
}
