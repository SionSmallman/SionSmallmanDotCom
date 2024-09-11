import { IProject } from "./interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ProjectImageCarousel } from "./ProjectImageCarousel";

interface Props {
  projectData: IProject;
}

export default function ProjectModal({ projectData }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li id="project" className="w-fit border-b-sky-400 cursor-pointer">
          {projectData.title}
        </li>
      </DialogTrigger>
      {/* Main modal content */}
      <DialogContent className="bg-slate-900 w-[90%] overflow-hidden md:w-full">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h2>{projectData.title}</h2>
          </DialogTitle>
        </DialogHeader>
        <div className="block m-auto lg:max-w-[60%] ">
          <ProjectImageCarousel projectData={projectData} />
        </div>
        <DialogDescription className="text-center text-lg">
          {projectData.description}
        </DialogDescription>
        
        <DialogFooter className="flex flex-row items-center justify-center text-center gap-8">
          {projectData.github && (
            <Link to={projectData.github}>
              <FaGithub size={30} />
            </Link>
          )}
          {projectData.url && (
            <Link to={projectData.url}>
              <CiGlobe size={30} />
            </Link>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
