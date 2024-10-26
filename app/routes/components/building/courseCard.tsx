import Transition, {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import AnimatedIconsButton from "../design-demos/animatedIconsButton";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import { PiInfo } from "react-icons/pi";

export type CourseData = {
  courseName: string;
  courseDescription: string;
  courseNumber: string;
};

export default function CourseCard({
  courseData,
  height,
  width = "w-full lg:w-1/2",
}: {
  courseData: CourseData;
  height?: string;
  width?: string;
}) {
  return (
    <Flex className={`${width} items-center p-1.5vh h-full`}>
      <VStackFull
        gap="gap-0.5vh"
        align="items-start"
        className="p-1vh md:p-3vh md:pb-4vh border-100-md bg-indigo-800/50 h-full relative pb-5vh lg:pb-2vh"
      >
        <HStackFull gap="gap-2vh">
          <ScrollTransition delay={0.2}>
            <Text className="font-cursive text-xl text-cyan-300">
              {courseData.courseNumber}
            </Text>
          </ScrollTransition>
          <ScrollTransition delay={0.3}>
            <Text className="font-cursive text-xl text-cyan-300">
              {courseData.courseName}
            </Text>
          </ScrollTransition>
        </HStackFull>
        <FlexFull>
          <VStackFull align="items-start">
            <ScrollTransition className="w-full" delay={0.4}>
              <FlexFull>{courseData.courseDescription}</FlexFull>
            </ScrollTransition>
            <Box className="absolute -bottom-2.5vh -right-1.5vh">
              <ScrollTransition className="w-full lg:py-2vh" delay={0.5}>
                <AnimatedIconsButton
                  text={courseData.courseName}
                  textSize="text-lg"
                  bg="bg-indigo-900"
                  padding="px-2.5vh py-1vh"
                />
              </ScrollTransition>
            </Box>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </Flex>
  );
}
