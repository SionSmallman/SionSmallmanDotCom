import HomeButtonDrawer from "./HomeButtonDrawer";
import projects from "../projects.json";
import ProjectModal from "./ProjectModal";
import { IProject } from "./interfaces";

export default function Hero() {
  
  const projectsList = projects.projects

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10 md:gap-0 md:flex-row">
          <div className="w-full md:max-w-2xl text-center md:m-auto p-5 md:p-10 md:text-left border-l-2 border-l-sky-400">
            <h1>Siôn Smallman</h1>
            <h3 className="my-2">Development and QA</h3>
            <h3 className="">South Wales, UK</h3>
            <HomeButtonDrawer />
          </div>
          <div className="w-full flex flex-col items-center justify-center md:items-start md:w-1/3 md:my-4 md:p-5">
           <h2>Projects</h2>
           <ul className="p-5 my-4 space-y-4 w-fit [border-inline-start:2px_solid] [border-block-start:2px_solid] [border-image-source:radial-gradient(circle_at_top_left,#38bdf8,transparent_70%)] [border-image-slice:1]">
            {projectsList.map((project: IProject) => {
              return (
                <ProjectModal projectData={project} />
              )
            })}
           </ul>
          </div>
        </div>
    );
  }
  