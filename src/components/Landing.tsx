import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../assets/profile.jpg?url';
import SocialMedia from './SocialMedia';

type LandingContext = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function Landing({ setSelectedPage }: LandingContext) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
      <div className='md:order-2 flex justify-center basis-3/5 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
          <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue-300 before:z-[-1]'>
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]'
              src={profile}
            />
          </div>
        ) : (
          <img
            alt='profile'
            className='hover:filter hover:saturate-200 transition duration-500 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]'
            src={profile}
          />
        )}
      </div>
      <div className='basis-2/5 mt-12 md:mt-32'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-5xl text-center md:text-start'>
            Kirill {''}
            <span className='xs:relative xs:text-dark-blue xs:font-semibold z-10 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[80px] before:z-[-1]'>
              Ryzhkov
            </span>
            <p className='mt-10 mb-7 text-sm text-center md:text-start'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio cupiditate minus ipsa quibusdam, maxime similique vitae
              neque repellat atque porro dolor consequuntur quae consectetur,
              pariatur quis repudiandae corporis qui suscipit!
            </p>
          </p>
        </motion.div>
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-dark-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue-300 hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div className='bg-dark-blue hover:text-red-300 transition duration-500 w-full h-full flex items-center justify-center px-10 font-opensans'>
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMedia />
        </motion.div>
      </div>
    </section>
  );
}
export default Landing;
