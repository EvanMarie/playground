import { Outlet } from "@remix-run/react";
import MainPageContentContainer from "../building/mainPageContainer";
import { Box } from "~/buildingBlockComponents/mainContainers";
import CloseTabButton from "../building/closeTabButton";

export default function PdfWorkLayout() {
  return (
    <MainPageContentContainer
      contentBg="bg-col-700 bg-gradient-to-bl from-col-630 via-col-730 to-col-630"
      minContainerHeight="min-h-100svh"
      childPadding=""
      scrollContainerHeight="h-100svh"
      topPosition="top-0"
    >
      {" "}
      <Box className="absolute top-0.5vh right-0.5vh z-10">
        <CloseTabButton iconOnly />
      </Box>
      <Outlet />
    </MainPageContentContainer>
  );
}
