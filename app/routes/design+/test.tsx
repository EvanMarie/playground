import {
  Box,
  Center,
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
import PasswordInput from "~/buildingBlockComponents/passwordInput";
import Text from "~/buildingBlockComponents/text";
import PodCastTitle from "../components/design-demos/podcastTitle";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import StaggeredTextLines from "../components/building/staggeredTextLines";

export default function Test() {
  return (
    <FlexFull className="h-100svh justify-center relative">
      {/* <PodCastTitle /> */}
      <Flex className="w-80vw h-80vw">
        <ScrollTransition
          className="absolute inset-0 bg-[url('/images/mandala.webp')] bg-contain opacity-10 "
          type="scale"
        />
        <StaggeredTextLines
          textLines={["Soft", "Talks", "with", "Pip"]}
          textClassName="text-9vh font-cursive text-center textShadow md:text-left"
          transition="fade20"
          initialDelay={0.5}
          staggerDelay={0.4}
        />
      </Flex>
    </FlexFull>
  );
}
