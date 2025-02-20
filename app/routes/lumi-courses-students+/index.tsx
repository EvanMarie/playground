import { Box } from "~/buildingBlockComponents/mainContainers";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainPageContentContainer from "../building/mainPageContainer";
import CourseCatalogue from "./components/courseCatalog";

export default function LumiCoursesStudentsIndex() {
  return (
    <CourseCatalogue />
    // <MainPageContentContainer
    //   contentBg="bg-gradient-to-l from-transparent via-col-320 to-transparent"
    //   minContainerHeight="min-h-[100svh]"
    //   childPadding="px-5vh xxl:px-7vw"
    //   scrollContainerHeight="h-100svh"
    //   scrollToTopPosition="fixed bottom-0.7vh right-0.7vh xl:bottom-1.7vh xl:right-11.5vw xxl:right-13.5vw"
    //   sideDotsVisibleAt="xxl"
    //   bgOverlay="bg-col-320 bg-gradient-to-bl from-col-110 via-col-120 to-col-110"
    //   topPosition="top-0"
    // >
    //   <FlexFull>
    //     <Box>Lumi Courses Students</Box>
    //   </FlexFull>
    // </MainPageContentContainer>
  );
}
