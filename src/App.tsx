import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './components/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './components/MySkills';
import Projects from './components/Projects';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      !window.scrollY ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='font-opensans'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
