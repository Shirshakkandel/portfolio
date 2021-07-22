import { motion } from 'framer-motion';
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { fadeInUp,routeFade,stagger } from '../animations'


export default function About() {
  return (
     <motion.div variants={routeFade} initial="hidden" animate="visible" className='flex flex-col flex-grow px-6 pt-1 '>
         <h6 className='my-3 text-base font-medium'>
            I am currently pursuing B.CSIT Degree(Final Year) in Computer
            Science Engineering from Academy of Technology. I have 2+ years of
            experience in Web Development.
        </h6>
        
        <motion.div variants={stagger} animate="animate" initial="initial"
            className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h4 className='my-3 text-xl font-semibold tracking-wide'>
               What I am doing
            </h4>

            <div className='grid gap-6 my-3 md:grid-cols-2'>
               {/* children's initial and animate property should be same as the parent during a stagger effect  */}
               {services.map(service => (
                  <motion.div variants={fadeInUp}
                     className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1 '
                     key={service.title}>
                     <ServiceCard service={service} />
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </motion.div>
  )
}
