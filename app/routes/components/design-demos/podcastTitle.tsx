import {
  Center,
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
import MandalaImage from "./mandalaImage";
import StaggeredTextLines from "../building/staggeredTextLines";
import Image from "~/buildingBlockComponents/image";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import Text from "~/buildingBlockComponents/text";
import ImageWithTextOverlay from "../building/imageWithTextOverlay";

export default function PodCastTitle() {
  //   function StackedTitle({ className }: { className?: string }) {
  //     return (
  //       <FlexFull
  //         className={`flex flex-col items-center justify-center relative ${className}`}
  //       >
  //         <Center className="absolute inset-0 w-full h-90vw sm:w-70vw md:h-50vw lg:h-50vw xl:h-40vw ">
  //           <MandalaImage
  //             size=" h-full w-90vw sm:w-70vw md:w-50vw lg:w-50vw xl:w-40vw "
  //             transition="spinScale"
  //             duration={2.5}
  //           />
  //         </Center>
  //         <Center className="w-full flex-col gap-1vh md:justify-start ">
  //           <StaggeredTextLines
  //             textLines={["Soft", "Talks", "with", "Pip"]}
  //             textClassName="text-9vh font-cursive text-center textShadow md:text-left"
  //             transition="fade20"
  //             initialDelay={0.5}
  //             staggerDelay={0.4}
  //           />
  //           <FlexFull className="justify-center ">
  //             <ScrollTransition className="translate-x-13vw" delay={2}>
  //               <Text>The Podcast</Text>
  //             </ScrollTransition>
  //           </FlexFull>
  //         </Center>
  //       </FlexFull>
  //     );
  //   }
  return (
    <FlexFull
      className="flex-col h-fit md:flex-row md:justify-center relative"
      gap="gap-3vh"
    >
      <Flex className="md:hidden">
        <ImageWithTextOverlay />
      </Flex>
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
      <Flex className="hidden md:flex">
        <ImageWithTextOverlay />
      </Flex>
    </FlexFull>
  );
}
