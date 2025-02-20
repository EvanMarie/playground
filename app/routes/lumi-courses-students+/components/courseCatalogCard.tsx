import { Center, FlexFull } from "~/buildingBlockComponents/mainContainers";

import {
  Box,
  Flex,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import Image from "~/buildingBlockComponents/image";
import { useState } from "react";
import { CourseForCarousel } from "./courseCatalog";
import OnboardingCourseExpandedModal from "./courseExpandedModal";
export default function CourseCatalogueCard({
  title,
  description,
  imageLink,
  courseLink,
  minGrade,
  maxGrade,
  overview,
}: CourseForCarousel) {
  const isSingleGrade = minGrade === maxGrade;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Flex
        className="h-fit w-44vw md:w-29vw lg:w-29vh pb-1vh pointer-events-auto hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <VStackFull
          className="bg-col-170 rounded-b-2vh shadowNarrowTight pointer-events-auto hover:shadowBroadLooser hover:scale-103 transition-300"
          gap="gap-0.5vh"
        >
          <Box className="h-44vw w-44vw md:w-29vw md:h-29vw lg:w-29vh lg:h-29vh relative shadowNarrowNormal border-970-md rounded-0.8vh">
            <Center className="absolute inset-0 z-5 text-col-100 subtleTextShadow"></Center>
            <Image src={imageLink} alt={title} className="h-full w-full " />
          </Box>
          <VStackFull className="rounded-b-2vh p-1vh">
            <Text
              className="text-xs sm:text-sm md:text-md font-semibold text-center text-col-700"
              style={{ lineHeight: 1.1 }}
            >
              {title}
            </Text>

            <Text
              className="text-1.2vh sm:text-xs md:text-sm font-semibold"
              style={{ lineHeight: 1.1 }}
            >
              {isSingleGrade
                ? `suggested grade: ${minGrade}`
                : `suggested grades: ${minGrade} - ${maxGrade}`}
            </Text>
          </VStackFull>
        </VStackFull>
      </Flex>
      <OnboardingCourseExpandedModal
        isOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={imageLink}
        title={title}
        description={description}
        overview={overview}
        minGrade={minGrade}
        maxGrade={maxGrade}
        isShoppingCart={false}
        courseAdded={false}
      />
    </>
  );
}
