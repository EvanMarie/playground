import {
  Flex,
  FlexFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import WordByWordStagger from "~/routes/building/wordByWordStagger";

export default function HeroHeading() {
  const textStyle = "text-25vw md:text-20vw xl:text-33vh";
  return (
    <FlexFull>
      <VStack align="items-start" gap="gap-[0px]">
        <WordByWordStagger
          text="Pippin"
          textSize={textStyle}
          initialDelay={0.7}
          textShadow="textShadow"
        />
        <Flex>
          <TextWithImageBackground
            transition="zoom"
            text="Pawsby"
            textSize={textStyle}
            imageUrl="/images/little-guy-face.webp"
            delay={0.8}
          />
        </Flex>
      </VStack>
    </FlexFull>
  );
}
