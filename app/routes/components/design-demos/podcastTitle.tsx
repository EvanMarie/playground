import {
  Box,
  Center,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MandalaImage from "./mandalaImage";
import StaggeredTextLines from "../building/staggeredTextLines";
import Image from "~/buildingBlockComponents/image";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function PodCastTitle() {
  return (
    <VStackFull gap="gap-3vh">
      <FlexFull className="flex flex-col items-center justify-center relative h-80vw sm:w-70vw md:h-60vw lg:h-50vw xl:h-40vw">
        <Center className="absolute inset-0 w-full h-full">
          <MandalaImage
            size="w-80vw h-full sm:w-70vw md:w-60vw lg:w-50vw xl:w-40vw "
            transition="spinScale"
            duration={2.5}
          />
        </Center>
        <Center className="absolute inset-0 w-full">
          <StaggeredTextLines
            textLines={["Soft", "Talks", "with", "Pip"]}
            textClassName="text-9vh font-cursive text-center textShadow"
            transition="fade20"
            initialDelay={0.5}
            staggerDelay={0.4}
          />
        </Center>
      </FlexFull>
      <ScrollTransition
        className="h-50svh"
        delay={1}
        duration={1.2}
        type="zoom"
      >
        <Image
          src="/images/soft-talks-with-pip.webp"
          alt="Podcast Title"
          className="h-full"
        />
      </ScrollTransition>
    </VStackFull>
  );
}
