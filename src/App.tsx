
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomHeader from './navigation/CustomHeader';
import Contact from './screens/contact';
import About from './screens/about';
import Portofolio from './screens/portofolio';

function App() {
  return (
    <>
      <CustomHeader />
      <div>
        <Routes>
          <Route path="/" element={<Portofolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
