import { Dispatch, SetStateAction, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type PageContext = {
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

function Navbar({ selectedPage, setSelectedPage }: PageContext) {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  return (
    <nav className='w-full z-40 fixed top-0 py-6'>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='text-3xl font-bold'>{}</h4>
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 text-sm font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
