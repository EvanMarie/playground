import {
  Box,
  Center,
  Flex,
  FlexFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import PasswordInput from "~/buildingBlockComponents/passwordInput";
import Text from "~/buildingBlockComponents/text";
import PodCastTitle from "../components/design-demos/podcastTitle";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import StaggeredTextLines from "../components/building/staggeredTextLines";
import ImageWithTextOverlay from "../components/building/imageWithTextOverlay";

export default function Test() {
  const dimensions = "w-80vw h-80vw ";
  return (
    <FlexFull className={`h-100svh justify-center relative`}>
      <ImageWithTextOverlay />
    </FlexFull>
  );
}
