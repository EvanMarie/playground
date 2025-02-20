import { Box, HStack } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function MinGradeMaxGrade({
  minGrade,
  maxGrade,
  isSmall = false,
}: {
  minGrade: number;
  maxGrade: number;
  isSmall?: boolean;
}) {
  const gap = isSmall ? "gap-1vh" : "gap-1.5vh md:gap-2.5vh";
  const fontSize = isSmall ? "text-sm" : "text-md";
  return (
    <HStack gap={gap}>
      {minGrade !== 0 && maxGrade !== 0 ? (
        <>
          {" "}
          <Box className="shadowNarrowNormal rounded-2.2vh h-fit">
            <Text
              className={`${fontSize} px-1.5vh bg-col-950 rounded-2vh border-950-md insetShadow3xl text-col-100 textShadow flex items-center`}
            >
              <span className="font-semibold text-col-200 pr-0.5vh">
                min grade:{" "}
              </span>
              {minGrade}
            </Text>
          </Box>
          <Box className="shadowNarrowNormal rounded-2.2vh h-fit">
            <Text
              className={`${fontSize} px-1.5vh bg-col-950 rounded-2vh border-950-md insetShadow3xl text-col-100 textShadow  flex items-center`}
            >
              <span className="font-semibold pr-0.5vh text-col-200">
                max grade:{" "}
              </span>
              {maxGrade}
            </Text>
          </Box>
        </>
      ) : (
        <Box className="shadowNarrowNormal rounded-2.2vh">
          <Text
            className={`${fontSize} px-1.5vh bg-col-780 rounded-2vh border-950-md insetShadow3xl text-col-100 textShadow flex items-center`}
          >
            <span className="font-semibold  pr-0.5vh">
              Appropriate for all grades
            </span>
          </Text>
        </Box>
      )}
    </HStack>
  );
}
