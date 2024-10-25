import { FlexFull, VStack } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import { motion } from "framer-motion";
import WordByWordStagger from "../building/wordByWordStagger";

export default function HeroHeading() {
  const textStyle = "text-20vw xl:text-16vw";
  return (
    <FlexFull>
      <VStack align="items-start">
        <WordByWordStagger text="Someone Cool's" textSize={textStyle} />
        <TextWithImageBackground
          text="Name"
          textSize={textStyle}
          imageUrl="/images/ocean-water2.webp"
        />
      </VStack>
    </FlexFull>
  );
}
