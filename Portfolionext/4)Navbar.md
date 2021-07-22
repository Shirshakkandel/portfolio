# 1) Navbar 
<!-- navbar.tsx -->
```tsx
const Navbar = () => {
   const { pathname } = useRouter()
   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/projects') setActive('Projects')
      else if (pathname === '/resume') setActive('Resume')
   }, [])

}
```

# 5)Next.js Fundamentals

1. Section and another service section
```js
import {RiComputerLine} from 'react-icons/ri'
import {IconType} from 'react-icon'
import {IService} from './type'

//interface define shape of object
interface IService{
   title:string, about:string, Icon:IconType
}
//data.ts
export const services: IService[]= [
     {
          title:"Frontend Dev"
          about:"lorem..."
          Icon:RiComputerLine,
     }
]

```

```ts
export interface IService {
   title:string
   about:string
   Icon:IconType
}
```

# 5)5.2 Serverside rendering
```ts
//pages/api/services.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'

export default (req: NextApiRequest, res: NextApiResponse) => {
   //BY default get request
   //! complex backend logic :(
   console.log('API', services)

   res.status(200).json({ services })
}


//pages/index.tsx
export const getServerSideProps= async(context)=> {
   //calculation
   const res= await fetch("http://localhost:3000/api/services)
   const data = await res.json()
   
   return {props:{services:data.services}}
```

# 6) About Page-Nextjs
```tsx
//ServiceCard.tsx
const ServiceCard:FunctionalComponent <{service:IService}> =({
   service:{Icon,about,title} })=> {

      const createMarkup= ()=> {
         return { __html:about,}
      }
      return (
      <p dangerouslySetInnerHTMl={createMarkup()}/>
      )
   }
})
```

# 7)Resume Page
```ts
//type.ts
export interfce ISkill{
   name:string
   name:string
   Icon:IconType
}

//data.ts
export const language:ISkill[]= [
   {
      name:"Python"
      level:"70%"
      Icon:BsCircleFill
   }
]

export const tools:ISkill[]= [
   {
      name:"Python"
      level:"70%"
      Icon:BsCircleFill
   }
]

//pages/resume.tsx
const resume = ()=> {
   return (
      <div className="p-4 ">
      // Education and Exp
         <div className="grid gap-6 md:grid-cols-2">
          
         </div>
      //Language and tools
      <div></div>
      </div>
   )
}
```
