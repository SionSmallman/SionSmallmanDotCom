import HomeButtonDrawer from "./HomeButtonDrawer";
import { Button } from "./ui/button";
import projects from "../projects.json";

import ProjectModal from "./ProjectModal";
import { IProject } from "./interfaces";



export default function Hero() {
  

  const projectsList = projects.projects

    return (
        <div className="m-auto h-full w-full flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full lg:max-w-2xl text-center p-10 lg:text-left border-l-2  border-l-sky-400">
            <h1>Siôn Smallman</h1>
            <h3 className="my-2">Development and QA</h3>
            <h3 className="">South Wales, UK</h3>
            <HomeButtonDrawer />
            <div className="flex gap-x-3">
                <Button variant={"outline"}>About</Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 my-4 p-5">
           <h2>Projects</h2>
           <ul className="p-5 my-4 space-y-4 [border-inline-start:2px_solid] [border-block-start:2px_solid] [border-image-source:radial-gradient(circle_at_top_left,#38bdf8,transparent_50%)] [border-image-slice:1]">
            {projectsList.map((project: IProject) => {
              return (
                <ProjectModal projectData={project} />
              )
            })}
            
            {/* <li><h4>Test</h4></li>
            <li><h4>Test</h4></li>
            <li><h4>Test</h4></li>
            <li><h4>Test</h4></li> */}
           </ul>
          </div>
        </div>
    );
  }
  