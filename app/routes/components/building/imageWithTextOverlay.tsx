import {
  Flex,
  FlexFull,
  HStack,
  TransitionVariantType,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import StaggeredTextLines from "./staggeredTextLines";
import Text from "~/buildingBlockComponents/text";

export default function ImageWithTextOverlay({
  width = "w-80vw",
  height = "h-80vw",
  textLines = ["Soft", "Talks", "with", "Pip"],
  bgImage = "bg-[url('/images/mandala.webp')]",
  textClassName = "text-9vh font-cursive text-center textShadow md:text-left",
  textTransitionType = "fade20",
  tagline = "The Podcast",
  textInitialDelay = 0.5,
  textStaggerDelay = 0.2,
  bgImageOpacity = "opacity-10",
  imageTransitionType = "scale",
  textTagLineGap = "gap-2vh",
  taglineDelay = 1.4,
  taglineClassName = "translate-x-13vw",
  imageDuration = 1.5,
  imageDelay = 0,
}: {
  width?: string;
  height?: string;
  textLines?: string[];
  bgImage?: string;
  textClassName?: string;
  textTransitionType?: TransitionVariantType;
  tagline?: string;
  textInitialDelay?: number;
  textStaggerDelay?: number;
  bgImageOpacity?: string;
  imageTransitionType?: TransitionVariantType;
  textTagLineGap?: string;
  taglineDelay?: number;
  taglineClassName?: string;
  imageDuration?: number;
  imageDelay?: number;
}) {
  return (
    <Flex
      className={`${height} ${width} overflow-hidden justify-center items-center `}
    >
      <ScrollTransition
        className={`${width} ${height} ${bgImage} bg-contain ${bgImageOpacity} bg-no-repeat`}
        type={imageTransitionType}
        duration={imageDuration}
        delay={imageDelay}
      />
      <VStack gap={textTagLineGap} className="absolute">
        <HStack>
          <StaggeredTextLines
            textLines={textLines}
            textClassName={textClassName}
            transition={textTransitionType}
            initialDelay={textInitialDelay}
            staggerDelay={textStaggerDelay}
          />
        </HStack>
        <FlexFull className="justify-center ">
          <ScrollTransition className={taglineClassName} delay={taglineDelay}>
            <Text>{tagline}</Text>
          </ScrollTransition>
        </FlexFull>
      </VStack>
    </Flex>
  );
}
