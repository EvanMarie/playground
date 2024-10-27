import { Box, Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import ImageWithTextOverlay from "../building/imageWithTextOverlay";

export default function PodCastTitle() {
  return (
    <Box className="w-full relative py-5vh h-fit">
      <FlexFull
        className="flex-col items-center gap-2vh md:flex-row md:justify-center h-full"
        gap="gap-3vh"
      >
        <Flex className="md:hidden">
          <ImageWithTextOverlay width="w-80vw" height="h-80vw" />
        </Flex>
        <ScrollTransition
          className="h-50svh lg:h-60vh"
          delay={1}
          duration={1.2}
          type="zoom"
        >
          <Image
            src="/images/soft-talks-with-pip.webp"
            alt="Podcast Title"
            className="h-full"
          />
        </ScrollTransition>{" "}
        <Flex className="hidden md:flex md:absolute translate-x-[13vh]">
          <ImageWithTextOverlay width="w-60vh" height="h-60vh" />
        </Flex>
      </FlexFull>
    </Box>
  );
}
