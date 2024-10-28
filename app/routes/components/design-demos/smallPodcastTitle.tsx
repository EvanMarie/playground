import { Box, Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import ImageWithTextOverlay from "../building/imageWithTextOverlay";

export default function SmallPodCastTitle() {
  return (
    <Box className="w-full relative py-5vh h-fit">
      <FlexFull className="flex-col items-center h-full md:hidden gap-3vh">
        <Flex className="md:hidden">
          <ImageWithTextOverlay width="w-80vw" height="h-80vw" />
        </Flex>
        <ScrollTransition
          className="h-50svh lg:h-60vh pt-2vh"
          delay={0}
          duration={1}
          type="zoom"
        >
          <Image
            src="/images/soft-talks-with-pip.webp"
            alt="Podcast Title"
            className="h-full"
          />
        </ScrollTransition>{" "}
      </FlexFull>
    </Box>
  );
}
