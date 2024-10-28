import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/building/mainPanel";
import MainIndexContainer from "./components/building/mainIndexContainer";
import Transition, {
  Box,
  Flex,
  FlexFull,
  HStackFull,
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
import {
  demoCourses,
  episodes,
  testimonials,
  upcomingEvents,
} from "./components/design-demos/demo-data";
import CourseCard from "./components/building/courseCard";
import SmallPodCastTitle from "./components/design-demos/smallPodcastTitle";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MediumScreensUpPodcastTitle from "./components/building/mediumScreensUpPodcastTitle";
import ScrollingMarquee from "./components/building/scrollingMarquee";
import EpisodeCard from "./components/building/episodeCard";
import TestimonialCarousel from "./components/building/testimonialCarousel";
import EventCard from "./components/building/eventCard";
import Divider from "~/buildingBlockComponents/divider";
import Input from "~/buildingBlockComponents/input";
import FloatingUpAndOutImages from "./components/building/floatingUpImages";
import BottomScrollTrigger from "./components/building/bottomScrollTrigger";

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
        className="shadowNarrowNormal"
      >
        <FlexFull className="h-full bg-col-940 relative min-h-65svh pt-50svh md:py-2vh shadowNarrowNormal">
          <ScrollTransition
            className="h-65svh md:h-80svh xl:h-90svh absolute left-1vh md:left-5vh -top-5vh xl:left-10vh"
            amount={0.1}
            type="fadeSlideInBottomQuarter"
          >
            <Image
              src="/images/little-guy.webp"
              alt="Little Guy"
              className="h-full fade-bottom"
            />
          </ScrollTransition>

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
              <Flex className="px-1vh md:pr-2vh">
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
        className="pb-4vh shadowNarrowNormal"
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
      <MainPanel
        bg={`${bgGradientBottom}`}
        textColor="text-col-100"
        className="shadowNarrowNormal"
      >
        <SmallPodCastTitle />
        <MediumScreensUpPodcastTitle />
        <VStackFull className="py-2vh" gap="gap-2vh px-2vh sm:px-3vh md:px-4vh">
          <ScrollTransition
            type="fadeSlideInBottomQuarter"
            className="max-w-[120vh]"
            amount={0.2}
          >
            <Text>
              In his weekly podcast, Pip shares tales of kindness, laughter, and
              little bits of his fluffy wisdom. Tune in for uplifting chats with
              special guests, meditative moments, and reflections on finding
              light in everyday life.
            </Text>
          </ScrollTransition>
          <ScrollTransition
            className="justify-center py-2vh"
            type="fadeSlideInBottomQuarter"
            amount={0.2}
          >
            <AnimatedIconsButton text="Tune In" />
          </ScrollTransition>
        </VStackFull>
        <VStackFull gap="gap-0px">
          <ScrollTransition delay={0.6} type="rotate3D">
            <ScrollingMarquee>
              <Text className="px-2vh text-lg text-cyan-300 textShadow">
                Soft Talks with Pippin Pawsby
              </Text>
            </ScrollingMarquee>
          </ScrollTransition>
          <Wrap className="w-full py-2vh">
            {episodes.map((episode, index) => (
              <EpisodeCard episode={episode} key={index} index={index} />
            ))}
          </Wrap>
        </VStackFull>
      </MainPanel>

      {/* *************************** PANEL FIVE: TESTIMONIALS *************************** */}
      <MainPanel bg={`${bgGradientTop}`} className="shadowNarrowNormal">
        <FlexFull className="bg-cyan-800/50 flex-col xl:flex-row xl:items-center rounded-none py-8vh xl:py-10vh xxl:py-13vh lg:gap-0px xl:gap-4vh shadowNarrowNormal overflow-visible">
          <Flex className="w-100vw xl:w-50vw xxl:w-40vw px-1vh xl:pr-0px xl:justify-end ">
            <StaggeredTextLines
              textLines={["What", "the fans", "are saying:"]}
              textClassName="font-cursive font-bold text-cyan-300 textShadow text-6.5vh md:text-10vh lg:text-13vh xl:text-10vh xl:text-right"
            />
          </Flex>
          <ScrollTransition
            className="w-full items-center justify-center xl:w-50vw xxl:w-60vw lg:items-center xl:pr-3vh "
            delay={0.3}
            type="zoom"
          >
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollTransition>
        </FlexFull>
      </MainPanel>

      {/* *************************** PANEL SIX: SCHEDULE *************************** */}
      <MainPanel bg={`relative`}>
        <FlexFull className="shadowNarrowNormal bg-[url('/images/schedule-background.webp')] text-col-100 rounded-none md:border-900-md">
          <FlexFull className="bg-gradient-to-bl from-indigo-900/80 via-sky-900/80 to-indigo-900/80 rounded-none">
            <ScrollTransition className="w-full" amount={0.2}>
              <FlexFull className="flex-col items-center py-5vh gap-2.5vh">
                <VStackFull className="relative overflow-hidden">
                  <FlexFull className="pl-3vh md:pl-5vh">
                    <StaggeredTextLines
                      textLines={["Catch", "Pippin", "Live!"]}
                      textClassName="font-cursive font-bold text-cyan-300 textShadow text-5.5vh sm:text-6.5vh md:text-10vh lg:text-13vh xl:text-10vh"
                      transition="zoom"
                    />
                  </FlexFull>
                  <ScrollTransition
                    className="h-16svh absolute -bottom-5vh right-1vh"
                    amount={0.1}
                    type="fadeSlideInRightQuarter"
                    delay={0.8}
                  >
                    <Image
                      src="/images/pip-face.webp"
                      alt="Little Guy"
                      className="h-full fade-bottom"
                    />
                  </ScrollTransition>{" "}
                  <Divider m="mt-3vh" />
                </VStackFull>
                <VStackFull className="xl:max-w-[110svh]" gap="gap-2vh">
                  {upcomingEvents.map((upcomingEvent, index) => (
                    <EventCard
                      upcomingEvent={upcomingEvent}
                      key={index}
                      index={index}
                    />
                  ))}
                </VStackFull>
              </FlexFull>
            </ScrollTransition>
          </FlexFull>
        </FlexFull>
      </MainPanel>

      {/* *************************** PANEL SEVEN *************************** */}
      <MainPanel
        bg={`${bgGradientBottom}`}
        // height="h-100svh"
        className="relative overflow-hidden py-5vh"
      >
        <VStackFull className="h-[105svh] sm:h-90svh md:h-90svh relative">
          <ScrollTransition
            className="h-70svh absolute -bottom-13vh -right-25vh sm:-bottom-10vh"
            amount={0.1}
            type="fadeSlideInBottomQuarter"
          >
            <Image
              src="/images/little-guy.webp"
              alt="Little Guy"
              className="h-full fade-bottom -rotate-90 "
            />
          </ScrollTransition>{" "}
          <StaggeredTextLines
            flexDirection="flex-col sm:flex-row"
            textLines={["Stay", "Connected"]}
            textClassName="font-cursive font-bold text-cyan-300 textShadow text-6.5vh md:text-10vh lg:text-13vh xl:text-10vh xl:text-right"
          />
          <FlexFull className="p-5vh max-w-90svh">
            <Text className="text-lg">
              Join Pip’s cozy corner of the universe! Sign up for gentle updates
              on upcoming events, fresh podcast episodes, and exclusive fluffy
              wisdom to brighten your day. Let Pip’s soft whispers and joyful
              insights be a part of your journey.
            </Text>
          </FlexFull>
          <VStackFull className="p-4vh max-w-80svh" gap="gap-3vh">
            <Input type="text" placeholder="Enter your name" />
            <Input type="text" placeholder="Enter your email" />
            <FlexFull className="justify-end">
              <AnimatedIconsButton
                text="join the gang"
                textSize="text-lg"
                padding="px-3vh py-0.6vh"
              />
            </FlexFull>
          </VStackFull>
          <FlexFull className="fixed bottom-0 right-0 left-0 h-3svh text-xs text-cyan-300 justify-center items-end">
            Copyright 2024 Pippin Pawsby
          </FlexFull>
        </VStackFull>
        <BottomScrollTrigger>
          <FloatingUpAndOutImages />
        </BottomScrollTrigger>
      </MainPanel>
    </MainIndexContainer>
  );
}
