
import { useCallback, useState, useEffect } from 'react';
import CustomHeader from './navigation/CustomHeader';
import Contact from './screens/contact';
import About from './screens/about';
import Portofolio from './screens/portofolio';
import Welcome from './screens/welcome';
import './i18n';

export default function App() {
  const [activePage, setActivePage] = useState<string>('portfolio');
  const [showWelcome, setShowWelcome] = useState(true);

  const showPage = useCallback((page: string) => {
    setActivePage(page);
  }, []);

  useEffect(() => {
    const welcomeTimeout = setTimeout(() => setShowWelcome(false), 4000); 
    return () => clearTimeout(welcomeTimeout); 
  }, []);

  return (
    <>
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <CustomHeader showPage={showPage} />
          <div>
            {activePage === 'portfolio' && <Portofolio />}
            {activePage === 'about' && <About />}
            {activePage === 'contact' && <Contact />}
          </div>
        </>
      )}
    </>
  );
}

