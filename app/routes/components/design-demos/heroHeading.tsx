import {
  Flex,
  FlexFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import WordByWordStagger from "../building/wordByWordStagger";

export default function HeroHeading() {
  const textStyle = "text-25vw md:text-20vw xxl:text-16vw";
  return (
    <FlexFull className="py-3vh">
      <VStack align="items-start">
        <WordByWordStagger text="Pippin" textSize={textStyle} />
        <Flex className="flex-col md:flex-row md:gap-2vh">
          <TextWithImageBackground
            text="Pawsby"
            textSize={textStyle}
            imageUrl="/images/little-guy-face.webp"
          />
        </Flex>
      </VStack>
    </FlexFull>
  );
}
