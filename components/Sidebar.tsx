import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Sidebar() {
   const {theme,setTheme}= useTheme()
   const changeMode = () => {
      setTheme(theme === "light"? "dark" :"light")
   }
     return (
         <>
         <Image
            src='https://scontent.fktm7-1.fna.fbcdn.net/v/t1.18169-9/17021413_1854335984847652_907065855827964249_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KP5bpvwdVP0AX_CpQQI&tn=sbi8DJNaF1jr15Cs&_nc_ht=scontent.fktm7-1.fna&oh=9912ea1487eb1f0cf7a27a8cb5a0df1b&oe=60FAA604'
              alt='avatar'
              height="128px"
              width="128px"
            className='w-32 h-32 mx-auto border rounded-full '
         />
         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green'>Shirshak</span> kandel
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
            Web Developer
         </p>
         {/* Resume */}
         <a
            href='/assets/Sumit Dey Resume.pdf'
            download='Sumit Dey Resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
            {/* <a href='https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A'>
               <AiFillYoutube className='w-8 h-8 cursor-pointer' />
            </a> */}
            <a  target="_blank" href='https://www.linkedin.com/in/shirshak-kandel-a96187191/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a target="_blank" href='https://github.com/Shirshakkandel'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 -ml-4 -mr-4 bg-gray-200 dark:bg-black-500'
            >
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>bharatpur,Nepal </span>
            </div>
            <p className='my-2'>shirshakkandel@gmail.com </p>
            <p className='my-2'> 9846863569/ 9809294642 </p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:shirshakkandel@gmail.com')}>
            Email me
         </button>
         
         <button
            onClick={changeMode}
            className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '>
            {/* //TODO remove bg black */}
            Change Theme
         </button>
      </>
     )
}
