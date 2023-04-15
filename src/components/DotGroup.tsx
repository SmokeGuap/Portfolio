import AnchorLink from 'react-anchor-link-smooth-scroll';

type DotGroupContext = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function DotGroup({ selectedPage, setSelectedPage }: DotGroupContext) {
  const selectedStyles =
    'relative bg-yellow-300 before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow-300 before:left-[-50%] before:top-[-50%]';
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <AnchorLink
        className={`${selectedPage == 'home' ? selectedStyles : 'bg-gray-300'}
  w-3 h-3 rounded-full bg-gray-500`}
        href={`#home`}
        onClick={() => setSelectedPage('home')}
      ></AnchorLink>
      <AnchorLink
        className={`${selectedPage == 'skills' ? selectedStyles : 'bg-gray-300'}
  w-3 h-3 rounded-full bg-gray-500`}
        href={`#skills`}
        onClick={() => setSelectedPage('skills')}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage == 'projects' ? selectedStyles : 'bg-gray-300'
        }
  w-3 h-3 rounded-full bg-gray-500`}
        href={`#projects`}
        onClick={() => setSelectedPage('projects')}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage == 'testimonials' ? selectedStyles : 'bg-gray-300'
        }
  w-3 h-3 rounded-full bg-gray-500`}
        href={`#testimonials`}
        onClick={() => setSelectedPage('testimonial')}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage == 'contact' ? selectedStyles : 'bg-gray-300'
        }
  w-3 h-3 rounded-full bg-gray-500`}
        href={`#contact`}
        onClick={() => setSelectedPage('contact')}
      ></AnchorLink>
    </div>
  );
}
export default DotGroup;
