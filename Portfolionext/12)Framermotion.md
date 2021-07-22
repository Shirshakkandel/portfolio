# Introduction
[Framer motion website](https://www.framer.com/docs/introduction/)
```tsx
yarn add framer-motion
//pages/resume

//create object name variants with hidden and visible property

//pages/Bar.tsx
import motion from 'framer-motion'

const Bar =({})=> {
  const variants= {
       initial:{width:0},
       animate:{width:bar_width, transition:{duration:0.4, type:"spring", damping:10, stiffness:100 }}
  }
  return(
       <motion.div variants={variants} initial="initial" animate="animate">
       
       </motion.div>
  )
}

//pages/resume.tsx

//animation.ts
export const fadeInUp= {
     initial:{opacity:0,y:60},
     animate:{opacity:1,y:0},
}

//pages/resume.ts
import {motion} from 'framer-motion'
import {fadeInUp} from '../animations'
const Resume = ()=>{
     <motion.div variants={variants} initial="initial" animate="animate"></motion.div>
}
```

