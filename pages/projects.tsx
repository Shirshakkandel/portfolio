import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { fadeInUp,routeFade,stagger } from "../animations";
import { Category } from "../types";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<null | number>(null)
  
  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div variants={routeFade} initial="hidden" animate="visible" className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
        {/* <AnimatePresence> */}
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} key={project.id} showDetail={showDetail} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
        {/* </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
