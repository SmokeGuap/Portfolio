import LineGradient from './LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';

type ProjectContext = {
  title: string;
  subTitle: string;
  project: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subTitle, project }: ProjectContext) => {
  return (
    <motion.div variants={projectVariant} className='relative'>
      <div
        className='absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
      bg-gray z-30 flex flex-col justify-center items-center text-center p-16 text-dark-blue'
      >
        <p className='text-2xl'>{title}</p>
        <p className='mt-7'>{subTitle}</p>
      </div>
      <img src={project} alt={project} width={'400px'} />
    </motion.div>
  );
};

function Projects() {
  return (
    <section id='projects' className='pt-48 pb-48'>
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-2/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className='flex justify-center text-center items-center p-10 bg-red
                max-w-[400px] max-h-[400px] text-2xl font-semibold'
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            subTitle='Loremmsdlkfjsdlfj sdlkfjsdl kfjsdlfkj'
            title='Project 1'
            project={project1}
          />
          <Project
            subTitle='Loremmsdlkfjsdlfj sdlkfjsdl kfjsdlfkj'
            title='Project 2'
            project={project2}
          />
          <Project
            subTitle='Loremmsdlkfjsdlfj sdlkfjsdl kfjsdlfkj'
            title='Project 3'
            project={project3}
          />
          <Project
            subTitle='Loremmsdlkfjsdlfj sdlkfjsdl kfjsdlfkj'
            title='Project 4'
            project={project4}
          />
          <div
            className='flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-semibold'
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Projects;
