import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/building/mainPanel";
import MainIndexContainer from "./components/building/mainIndexContainer";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import Transition, {
  Box,
  CenterFull,
  Flex,
  FlexFull,
  HStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import TextWithImageBackground from "~/buildingBlockComponents/textWithImageBackground";
import Icon from "~/buildingBlockComponents/icon";
import { IoMenuOutline } from "react-icons/io5";
import HeroHeading from "./components/design-demos/heroHeading";
import StaggerMenu from "./components/design-demos/staggerMenu";
import Text from "~/buildingBlockComponents/text";
import MandalaImage from "./components/design-demos/mandalaImage";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import TellMeMoreButton from "./components/design-demos/tellMeMore";
import Image from "~/buildingBlockComponents/image";

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
        bg={`bg-gradient-to-b from-sky-700/50 via-sky-600/30 to-transparent`}
        textColor="text-col-100"
        height="h-fit"
      >
        <StaggerMenu />
        <MandalaImage />
        <HeroHeading />
        <VStackFull>
          <Transition className="py-2vh w-full">
            <Flex className="p-3vh md:pr-20vw xl:pl-10vw">
              <Text
                className="font-cursive text-purple-300 text-3.3vh md:text-2.8vh lg:text-3vh xl:text-4vh xxl:text-4.2vh  textShadow"
                style={{ lineHeight: 1.5 }}
              >
                This is some really great text about how cool this person is,
                highlighting what they do to make the world an awesome place.
              </Text>
            </Flex>
          </Transition>
          <Transition className="justify-center pb-10vh w-full" delay={1.8}>
            <TellMeMoreButton />
          </Transition>
        </VStackFull>
      </MainPanel>
      <MainPanel bg={`${bgGradientBottom}`} textColor="text-col-100">
        <CenterFull className="h-full bg-col-940 relative">
          <Box className="h-65svh md:h-80svh absolute left-1vh md:left-5vh -top-5vh">
            <Image
              src="/images/little-guy.webp"
              alt="Little Guy"
              className="h-full"
            />
          </Box>
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
