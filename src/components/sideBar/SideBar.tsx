import { HeaderSidebar } from './components/HeaderSidebar';

export const SideBar = () => {
  return (
    <aside className='w-[410px] border-r border-[#e6eaec] bg-white'>
      <nav>
        <HeaderSidebar />
      </nav>
    </aside>
  );
};
