import Transition, {
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
  height,
  width = "w-full lg:w-1/2",
}: {
  courseData: CourseData;
  height?: string;
  width?: string;
}) {
  return (
    <Flex className={`${height} ${width} items-center p-1vh`}>
      <VStackFull
        gap="gap-0.5vh"
        align="items-start"
        className="p-1vh border-100-md bg-indigo-800/50"
      >
        <HStackFull gap="gap-2vh">
          <ScrollTransition delay={0.3}>
            <Text className="font-cursive text-xl">
              {courseData.courseNumber}
            </Text>
          </ScrollTransition>
          <ScrollTransition delay={0.5}>
            <Text className="font-cursive text-xl">
              {courseData.courseName}
            </Text>
          </ScrollTransition>
        </HStackFull>
        <FlexFull>
          <VStackFull align="items-start">
            <ScrollTransition className="w-full" delay={0.7}>
              <FlexFull>{courseData.courseDescription}</FlexFull>
            </ScrollTransition>
            <ScrollTransition className="w-full py-2vh" delay={0.9}>
              <AnimatedIconsButton
                text={courseData.courseName}
                textSize="text-lg"
                bg="bg-indigo-900"
                padding="px-2.5vh py-1vh"
              />
            </ScrollTransition>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </Flex>
  );
}
