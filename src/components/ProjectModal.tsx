import { IProject } from "./interfaces";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

interface Props {
    projectData: IProject;
  }


export default function ProjectModal({projectData}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="w-fit border-b-sky-400 hover:scale-110 transition cursor-pointer">
          {projectData.title}
        </li>
      </DialogTrigger>
      <DialogContent className="dark:bg-black bg-opacity-90">
        <DialogHeader>
          <DialogTitle className="text-center"><h2>{projectData.title}</h2></DialogTitle>
        </DialogHeader>
        <Carousel className="m-auto w-[80%]"   opts={{align: "start", loop: true}}>
          <CarouselContent className="">
            {projectData.imageUrls.length === 0 
            ? <img src={"src/assets/project-default.png"}></img> 
            : projectData.imageUrls.map((imageUrl: string) => {
                return (
                    <CarouselItem className=""><img src={imageUrl}></img></CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext />
        </Carousel>
        <DialogDescription className="text-center">{projectData.description}</DialogDescription>
        <DialogFooter className="flex flex-row items-center justify-center text-center gap-8">
            {projectData.github && 
            <Link to={projectData.github}>
                <FaGithub size={30}/>
            </Link>}
            {projectData.url && 
            <Link to={projectData.url}>
                <CiGlobe size={30} />
            </Link>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
