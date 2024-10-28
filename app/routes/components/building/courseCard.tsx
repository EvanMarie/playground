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

export type CourseData = {
  courseName: string;
  courseDescription: string;
  courseNumber: string;
};

export default function CourseCard({
  courseData,
  width = "w-full lg:w-1/2",
  index,
}: {
  courseData: CourseData;
  width?: string;
  index: number;
}) {
  return (
    <ScrollTransition
      className={`${width} items-center p-1.5vh sm:p-2.5vh h-stretch`}
      type="fadeSlideInBottomQuarter"
      amount={0.2}
      delay={0.2 + index * 0.2}
    >
      <VStackFull
        gap="gap-0.5vh sm:gap-1vh md:gap-2vh"
        align="items-start"
        className="border-100-md bg-indigo-800/50 h-full relative lg:pb-3vh shadowNarrowNormal rounded-none"
      >
        <HStackFull
          gap="gap-2vh"
          className="items-center border-b-100-md rounded-none"
        >
          <ScrollTransition delay={0.2}>
            <FlexFull className="justify-center pl-1.5vh">
              <Text className="font-cursive font-bold text-xxl sm:text-5vw lg:text-4.3vw xxl:text-4.6vh text-cyan-300 px-2vh py-1vh">
                {courseData.courseNumber}
              </Text>
            </FlexFull>
          </ScrollTransition>
          <ScrollTransition delay={0.3}>
            <Flex className="border-l-col-100 border-l-[0.2vh] rounded-none pl-1.5vh py-1.5vh">
              <Text className="font-cursive text-xl sm:text-4vw lg:text-3.3vw xxl:text-2.5vw text-cyan-300">
                {courseData.courseName}
              </Text>
            </Flex>
          </ScrollTransition>
        </HStackFull>
        <FlexFull className="p-2vh sm:p-3vh md:p-4vh pb-4vh ">
          <VStackFull align="items-start">
            <ScrollTransition className="w-full" delay={0.4}>
              <FlexFull>
                <Text className="text-lg lg:text-xl">
                  {courseData.courseDescription}
                </Text>
              </FlexFull>
            </ScrollTransition>
            <Box className="absolute -bottom-2.5vh -right-1.5vh lg:-bottom-6vh">
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
    </ScrollTransition>
  );
}
