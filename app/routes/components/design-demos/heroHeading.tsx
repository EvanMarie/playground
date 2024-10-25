import { FlexFull, VStack } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import { motion } from "framer-motion";
import WordByWordStagger from "../building/wordByWordStagger";

export default function HeroHeading() {
  const textStyle = "text-30vw md:text-23vw font-semibold";
  return (
    <FlexFull>
      <VStack align="items-start">
        <WordByWordStagger text="Welcome to Remix!" />
        <TextWithImageBackground
          text="Name"
          textSize={textStyle}
          imageUrl="/images/ocean-water2.webp"
        />
      </VStack>
    </FlexFull>
  );
}
