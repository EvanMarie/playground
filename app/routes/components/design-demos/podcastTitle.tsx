import { Box, Flex, VStack } from "~/buildingBlockComponents/mainContainers";
import MandalaImage from "./mandalaImage";
import StaggeredTextLines from "../building/staggeredTextLines";

export default function PostCastTitle() {
  return (
    <Flex className="relative">
      <VStack className="absolute ">
        <StaggeredTextLines textLines={["Soft", "Talks", "with", "Pip"]} />
      </VStack>
      <MandalaImage
        size="w-80vw h-80vw sm:w-70vw sm:h-70vw"
        transition="fadeSlideUpQuarter"
      />
    </Flex>
  );
}
