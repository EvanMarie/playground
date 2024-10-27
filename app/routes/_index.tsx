import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/building/mainPanel";
import MainIndexContainer from "./components/building/mainIndexContainer";
import Transition, {
  Box,
  Flex,
  FlexFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import { IoMenuOutline } from "react-icons/io5";
import HeroHeading from "./components/design-demos/heroHeading";
import StaggerMenu from "./components/design-demos/staggerMenu";
import Text from "~/buildingBlockComponents/text";
import MandalaImage from "./components/design-demos/mandalaImage";
import Image from "~/buildingBlockComponents/image";
import StaggeredTextLines from "./components/building/staggeredTextLines";
import AnimatedIconsButton from "./components/design-demos/animatedIconsButton";
import { demoCourses } from "./components/design-demos/demo-data";
import CourseCard from "./components/building/courseCard";
import PostCastTitle from "./components/design-demos/podcastTitle";
import PodCastTitle from "./components/design-demos/podcastTitle";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MediumScreensUpPodcastTitle from "./components/building/mediumScreensUpPodcastTitle";

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
                className="font-cursive text-purple-300 text-3.3vh md:text-2.8vh lg:text-3vh xl:text-4vh textShadow"
                style={{ lineHeight: 1.5 }}
              >
                Bringing light and laughter to those who wander, guiding hearts
                with gentle paws.
              </Text>
            </Flex>
          </Transition>
          <Transition className="justify-center pb-10vh w-full" delay={1.8}>
            <AnimatedIconsButton text="Tell Me More" />
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
                textClassName="text-5vh md:text-6vh lg:text-7vh xl:text-8vh xxl:text-9vh textShadow"
                singleItemClassName="w-full border-b-150-md rounded-none"
                itemsContainerClassName="w-full rounded-none"
                outerContainerClassName="w-full rounded-none"
                transition="rotate3D"
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
                  transition="rotate3D"
                />
              </Flex>
              <FlexFull className="justify-center pb-3vh">
                <AnimatedIconsButton text="The Newsletter" />
              </FlexFull>
            </VStackFull>
          </FlexFull>
        </FlexFull>
      </MainPanel>

      {/* *************************** PANEL THREE: PIPPIN'S COURSES *************************** */}
      <MainPanel
        bg={`bg-gradient-to-b from-indigo-900/90 via-indigo-500/40 to-indigo-900/90 relative`}
        textColor="text-col-100"
        bgImage="bg-[url('/images/courses-background.webp')]"
        className="pb-4vh"
      >
        <VStackFull className="h-fit" gap="gap-3vh xl:gap-5vh xxl:gap-6vh">
          <FlexFull className="h-fit p-1vh">
            <VStackFull>
              <StaggeredTextLines
                textLines={["Explore", "Pip's", "Courses"]}
                flexDirection="flex-row"
                itemsContainerClassName="flex-wrap"
                textClassName="text-cyan-300 text-16vw lg:text-16vh xl:text-20vh tracking-wide textShadow"
                transition="rotate3D"
                threshold={0.8}
              />
            </VStackFull>
          </FlexFull>
          <FlexFull className="h-full ">
            <Wrap className="w-full h-fit items-stretch gap-4vh lg:gap-0">
              {demoCourses.map((course, index) => (
                <CourseCard courseData={course} key={index} />
              ))}
            </Wrap>
          </FlexFull>
        </VStackFull>
      </MainPanel>
      {/* *************************** PANEL FOUR: PODCAST INFO *************************** */}
      <MainPanel bg={`${bgGradientBottom}`} textColor="text-col-100">
        <PodCastTitle />
        <MediumScreensUpPodcastTitle />
        <VStackFull className="py-2vh" gap="gap-2vh px-2vh sm:px-3vh md:px-4vh">
          <ScrollTransition
            type="fadeSlideInBottomQuarter"
            className="max-w-[120vh]"
          >
            <Text>
              In his weekly podcast, Pip shares tales of kindness, laughter, and
              little bits of his fluffy wisdom. Tune in for uplifting chats with
              special guests, meditative moments, and reflections on finding
              light in everyday life.
            </Text>
          </ScrollTransition>
          <ScrollTransition
            className="justify-center"
            type="fadeSlideInBottomQuarter"
          >
            <AnimatedIconsButton text="Tune In" />
          </ScrollTransition>
        </VStackFull>
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
