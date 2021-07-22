# 1. Navbar,project section(fixed height and scrollable).

```tsx
//types.tsx
export interface IProject{
     name:string,description:string,image_path:string,deployed_url:string,github_url:string[], category:Category[],key_techs:string[]
}
export type Category = "react"| "node" | "express"; 

//data.tsx
export const projects:IProject[]=[
     {name:}
]
// folder inside public is static 
```

# 2. Lets design the layout in projects.tsx
```tsx
//pages/projects.tsx
const project = ()=> {
     return(
          <div>
          <nav>Navbar</nav>

          <div>
          {projects.map(project=> (<ProjectCard/>))}
          </div>
          </div>
     )}

//pages/projectCard.tsx
const ProjectCard:FunctionalComponent<{project:IProject}> = ({project:{name,image_path,categoty}})=> {
const [showDetail,setShowDetail]= useState(false)

return (
     <img src={image_path} onClick={()=> setShowDetail(true)} >
     <p></p>
     {showDetail && (
          <div>
          </div>
     )}

)}



```