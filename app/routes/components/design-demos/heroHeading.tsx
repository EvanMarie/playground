import {
  Flex,
  FlexFull,
  HStack,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import { motion } from "framer-motion";
import WordByWordStagger from "../building/wordByWordStagger";

export default function HeroHeading() {
  const textStyle = "text-21vw md:text-15vw xl:text-16vw xxl:text-13.5vw";
  return (
    <FlexFull className="py-3vh">
      <VStack align="items-start">
        <WordByWordStagger text="Someone" textSize={textStyle} />
        <Flex className="flex-col md:flex-row md:gap-2vh">
          <WordByWordStagger
            text="Cool's"
            textSize={textStyle}
            initialDelay={0.8}
          />
          <TextWithImageBackground
            text="Name"
            textSize={textStyle}
            imageUrl="/images/ocean-water2.webp"
          />
        </Flex>
      </VStack>
    </FlexFull>
  );
}
