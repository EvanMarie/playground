import {
  Box,
  Flex,
  FlexFull,
  HStack,
  TransitionVariantType,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import StaggeredTextLines from "./staggeredTextLines";
import Text from "~/buildingBlockComponents/text";
import Image from "~/buildingBlockComponents/image";

export default function MediumScreensUpPodcastTitle({
  width = "w-80svh xl:w-90vh",
  height = "h-80svh xl:h-90vh",
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
  taglineClassName = "",
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
      className={`${height} ${width} overflow-hidden justify-center items-center hidden md:flex`}
    >
      <ScrollTransition
        className={`${width} ${height} ${bgImage} bg-contain ${bgImageOpacity} bg-no-repeat`}
        type={imageTransitionType}
        duration={imageDuration}
        delay={imageDelay}
      />
      <VStack gap={textTagLineGap} className="absolute">
        <HStack className="items-center" gap="gap-1vh">
          <ScrollTransition delay={0.5} duration={0.5} type="rotate3D">
            <Image
              src="/images/soft-talks-with-pip.webp"
              alt="soft talks with pip"
              className="w-1/2 h-70vh xl:h-80vh overflow-visible"
            />
          </ScrollTransition>

          <VStackFull gap="gap-2vh">
            <StaggeredTextLines
              textLines={textLines}
              textClassName={textClassName}
              transition={textTransitionType}
              initialDelay={textInitialDelay}
              staggerDelay={textStaggerDelay}
            />
            <FlexFull className="justify-center ">
              <ScrollTransition
                className={taglineClassName}
                delay={taglineDelay}
              >
                <Text>{tagline}</Text>
              </ScrollTransition>
            </FlexFull>
          </VStackFull>
        </HStack>
      </VStack>
    </Flex>
  );
}
