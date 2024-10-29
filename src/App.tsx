
import CustomHeader from './navigation/CustomHeader';
import Contact from './screens/contact';
import About from './screens/about';
import Portofolio from './screens/portofolio';
import { useCallback, useState } from 'react';


export default function App() {
  const [activePage, setActivePage] = useState<string>('portfolio');

  const showPage = useCallback((page: string) => {
    setActivePage(page);
  }, []);

  return (
    <>
      <CustomHeader showPage={showPage} />
      <div>
        {activePage === 'portfolio' && <Portofolio />}
        {activePage === 'about' && <About />}
        {activePage === 'contact' && <Contact/>}
      </div>
    </>
  );
}
