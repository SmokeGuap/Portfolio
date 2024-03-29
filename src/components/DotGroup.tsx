import AnchorLink from 'react-anchor-link-smooth-scroll';

type DotGroupContext = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function DotGroup({ selectedPage, setSelectedPage }: DotGroupContext) {
  const selectedStyles =
    'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <AnchorLink
        className={`${selectedPage == 'home' ? selectedStyles : 'bg-gray'}
  w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedPage('home')}
      ></AnchorLink>
      <AnchorLink
        className={`${selectedPage == 'skills' ? selectedStyles : 'bg-gray'}
  w-3 h-3 rounded-full`}
        href={`#skills`}
        onClick={() => setSelectedPage('skills')}
      ></AnchorLink>
      <AnchorLink
        className={`${selectedPage == 'projects' ? selectedStyles : 'bg-gray'}
  w-3 h-3 rounded-full`}
        href={`#projects`}
        onClick={() => setSelectedPage('projects')}
      ></AnchorLink>
      <AnchorLink
        className={`${selectedPage == 'contact' ? selectedStyles : 'bg-gray'}
  w-3 h-3 rounded-full`}
        href={`#contact`}
        onClick={() => setSelectedPage('contact')}
      ></AnchorLink>
    </div>
  );
}
export default DotGroup;
