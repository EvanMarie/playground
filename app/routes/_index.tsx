import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/building/mainPanel";
import MainIndexContainer from "./components/building/mainIndexContainer";
import Transition, {
  Box,
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import { IoMenuOutline } from "react-icons/io5";
import HeroHeading from "./components/design-demos/heroHeading";
import StaggerMenu from "./components/design-demos/staggerMenu";
import Text from "~/buildingBlockComponents/text";
import MandalaImage from "./components/design-demos/mandalaImage";
import Image from "~/buildingBlockComponents/image";
import StaggeredTextLines from "./components/building/staggeredTextLines";
import AnimatedArrowsButton from "./components/design-demos/tellMeMore";

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
      {/* *************************** PANEL ONE: HERO HEADER *************************** */}
      <MainPanel
        bg={`bg-gradient-to-b from-sky-700/50 via-sky-600/30 to-transparent`}
        textColor="text-col-100"
        height="h-fit"
      >
        <StaggerMenu />
        <MandalaImage />
        <HeroHeading />
        <VStackFull>
          <Transition className="w-full">
            <Flex className="p-3vh md:pr-20vw xl:pl-10vw">
              <Text
                className="font-cursive text-purple-300 text-3.3vh md:text-2.8vh lg:text-3vh xl:text-4vh  textShadow"
                style={{ lineHeight: 1.5 }}
              >
                Bringing light and laughter to those who wander, guiding hearts
                with gentle paws.
              </Text>
            </Flex>
          </Transition>
          <Transition className="justify-center pb-10vh w-full" delay={1.8}>
            <AnimatedArrowsButton text="Tell Me More" />
          </Transition>
        </VStackFull>
      </MainPanel>

      {/* *************************** PANEL TWO: MEET PIPPIN *************************** */}
      <MainPanel
        bg={`${bgGradientBottom}`}
        textColor="text-col-100"
        height="min-h-75svh xl:min-h-85svh xl:h-95svh"
      >
        <FlexFull className="h-full bg-col-940 relative min-h-65svh pt-50svh md:py-2vh">
          <Box className="h-65svh md:h-80svh xl:h-90svh absolute left-1vh md:left-5vh -top-5vh xl:left-10vh">
            <Image
              src="/images/little-guy.webp"
              alt="Little Guy"
              className="h-full fade-bottom"
            />
          </Box>

          <FlexFull className="md:justify-end">
            <VStackFull
              align="items-start pl-4vh md:p-0 md:items-end md:w-50% lg:w-60%"
              gap="gap-4vh"
            >
              <StaggeredTextLines
                textLines={["Tell", "Me", "About", "Pippin"]}
                alignContent="items-start"
                gap="gap-1vh"
                textClassName="text-5vh md:text-6vh lg:text-7vh xl:text-8vh xxl:text-9vh"
                singleItemClassName="w-full border-b-150-md rounded-none"
                linesVStackClassName="w-full rounded-none"
                outerContainerClassName="w-full rounded-none"
                animationVariants="rotate3D"
              />
              <Flex className="md:pr-2vh">
                <StaggeredTextLines
                  textLines={[
                    "Pippin Pawsby is a creature of mystery and kindness, hailing from a dimension of fluff and warmth.",
                    "He has a passion for helping others discover their inner peace through whimsical wisdom, gentle humor, and a dash of wonder.",
                    "With his big expressive eyes and gentle demeanor, Pip offers guidance to anyone who might be feeling a bit lost or looking for a spark of joy.",
                  ]}
                  alignContent="items-start"
                  gap="gap-1vh"
                  textClassName="text-2vh xl:text-2.5vh xxl:text-3vh leading-normal md:leading-normal lg:leading-relaxed xl:leading-relaxed xxl:leading-relaxed"
                  animationVariants="rotate3D"
                />
              </Flex>
              <FlexFull className="justify-center">
                <AnimatedArrowsButton text="Get The Newsletter" />
              </FlexFull>
            </VStackFull>
          </FlexFull>
        </FlexFull>
      </MainPanel>

      {/* *************************** PANEL THREE: PIPPIN'S COURSES *************************** */}
      <MainPanel
        bg={`bg-gradient-to-b from-indigo-900/90 via-indigo-500/40 to-indigo-900/90 relative`}
        textColor="text-col-100"
        height="h-fit min-h-100svh"
        bgImage="bg-[url('/images/courses-background.webp')]"
      >
        <VStackFull className="h-full absolute inset-0 z-20">
          <FlexFull className="h-fit min-h-40svh">
            <VStackFull>
              <StaggeredTextLines
                textLines={["Explore", "Pip's", "Courses"]}
                flexDirection="flex-row"
              />
            </VStackFull>
          </FlexFull>
          <FlexFull className="h-fit min-h-60svh">INFO</FlexFull>
        </VStackFull>
      </MainPanel>
      {/* *************************** PANEL FOUR *************************** */}
      <MainPanel
        bg={`${bgGradientBottom}`}
        textColor="text-col-100"
        height="h-100svh"
      >
        Panel Four
      </MainPanel>

      {/* *************************** PANEL FIVE *************************** */}
      <MainPanel bg={`${bgGradientTop}`} height="h-100svh">
        Panel Five
      </MainPanel>

      {/* *************************** PANEL SIX *************************** */}
      <MainPanel bg={`${bgGradientBottom}`} height="h-100svh">
        Panel Six
      </MainPanel>

      {/* *************************** PANEL SEVEN *************************** */}
      <MainPanel bg={`${bgGradientTop}`} height="h-100svh">
        Panel Seven
      </MainPanel>
    </MainIndexContainer>
  );
}
