import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <div className='font-opensans'>
      <h1>Hello World!</h1>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
