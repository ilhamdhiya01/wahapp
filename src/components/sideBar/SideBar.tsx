import { HeaderSidebar } from './components/HeaderSidebar';

export const SideBar = () => {
  return (
    <aside className='w-full border-r border-[#e6eaec] bg-white md:basis-[30%]'>
      <nav>
        <HeaderSidebar />
      </nav>
    </aside>
  );
};
