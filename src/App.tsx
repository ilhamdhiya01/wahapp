import { SideBar } from './components/sideBar/SideBar';
import { MainWrapper } from './components/MainWrapper';
import { MainContent } from './components/MainContent';
import './App.css';

export default function App() {
  return (
    <>
      <MainWrapper>
        <SideBar />
        <MainContent></MainContent>
      </MainWrapper>
    </>
  );
}
