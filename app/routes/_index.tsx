import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/mainPanel";
import MainIndexContainer from "./components/mainIndexContainer";
import StaggeredTextLines from "./components/staggeredTextLines";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import {
  CenterFull,
  Flex,
  FlexFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import Icon from "~/buildingBlockComponents/icon";
import { TiThMenu } from "react-icons/ti";
import { IoMenuOutline } from "react-icons/io5";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const bgGradientTop =
    "bg-gradient-to-b from-sky-800/30 via-sky-800/20 to-transparent";
  const bgGradientBottom =
    "bg-gradient-to-t from-sky-800/30 via-sky-800/20 to-transparent";
  return (
    <MainIndexContainer>
      <Flex className="absolute top-0.3vh right-1vh md:hidden">
        <Icon icon={IoMenuOutline} iconClassName="text-4vh" />
      </Flex>
      <MainPanel
        bg={`bg-gradient-to-b from-sky-200/50 via-sky-300/20 to-transparent`}
        textColor="text-col-100"
      >
        Panel One
        <StaggeredTextLines
          textLines={["Line One", "Line Two", "Line Three"]}
        />
        <FlexFull>
          <VStack align="items-start">
            <span className="text-6vh">What is</span>
            <span className="text-6vh">in a</span>
            <TextWithImageBackground
              text="Name"
              imageUrl="/images/ocean-water.webp"
            />
          </VStack>
        </FlexFull>
      </MainPanel>
      <MainPanel bg={`${bgGradientBottom}`} textColor="text-col-100">
        <CenterFull className="h-full">
          <TextWithImageBackground
            text="Panel Two"
            imageUrl="/images/ocean-water.webp"
          />
        </CenterFull>
      </MainPanel>
      <MainPanel bg={`${bgGradientTop}`} textColor="text-col-100">
        <CenterFull className="h-full">
          <ScrollTransition type="zoom">
            <h2 className="textShadow">Panel Three</h2>
          </ScrollTransition>
        </CenterFull>
      </MainPanel>
      <MainPanel bg={`${bgGradientBottom}`} textColor="text-col-100">
        Panel Four
      </MainPanel>
      <MainPanel bg={`${bgGradientTop}`}>Panel Five</MainPanel>
      <MainPanel bg={`${bgGradientBottom}`}>Panel Six</MainPanel>
      <MainPanel bg={`${bgGradientTop}`}>Panel Seven</MainPanel>
    </MainIndexContainer>
  );
}
