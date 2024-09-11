import { IProject } from "./interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

interface ProjectImageCarouselProps {
  projectData: IProject;
}
export function ProjectImageCarousel({
  projectData,
}: ProjectImageCarouselProps) {
  return (
    <Carousel className="" opts={{ align: "start", loop: true }}>
      <CarouselContent className="">
        {/* If no images are present, show a placeholder */}
        {projectData.imageUrls.length === 0 ? (
          <img src={"src/assets/project-default.png"}></img>
        ) : (
          projectData.imageUrls.map((imageUrl: string) => {
            return (
              <CarouselItem className="my-2">
                <img src={imageUrl}></img>
              </CarouselItem>
            );
          })
        )}
      </CarouselContent>
      <CarouselPrevious className="rounded-full" />
      <CarouselNext className="rounded-full" />
    </Carousel>
  );
}
