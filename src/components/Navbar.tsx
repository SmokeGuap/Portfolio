import { Dispatch, SetStateAction, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import openMenu from '../assets/openMenu.svg?url';
import closeMenu from '../assets/closeMenu.svg?url';
import github from '../assets/github.svg?url';

type NavbarContext = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: {
  page: string;
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage == lowerCasePage ? 'text-yellow' : ''}
      hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: NavbarContext) {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-red';

  return (
    <nav
      className={`${navbarBackground} w-full z-40 fixed top-0 py-6 transition duration-300`}
    >
      <div className='flex items-center justify-between mx-auto w-5/6'>
        {/* <h4 className='text-3xl font-bold'></h4> */}
        <a href='https://github.com/SmokeGuap'>
          <img src={github} width={'46px'} />
        </a>
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 text-sm font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2'
            onClick={() => setMenuToggled(!isMenuToggled)}
          >
            <img src={openMenu} alt='openMenu' width={'30px'} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
            <div className='flex justify-end p-12'>
              <button onClick={() => setMenuToggled(!isMenuToggled)}>
                <img alt='closeMenu' src={closeMenu} width={'30px'} />
              </button>
            </div>
            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-dark-blue'>
              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
