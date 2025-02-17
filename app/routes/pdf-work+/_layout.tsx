import { Outlet } from "@remix-run/react";
import MainPageContentContainer from "../building/mainPageContainer";

export default function PdfWorkLayout() {
  return (
    <MainPageContentContainer
      contentBg="bg-col-700 bg-gradient-to-bl from-col-630 via-col-730 to-col-630"
      minContainerHeight="min-h-100svh"
      childPadding=""
      scrollContainerHeight="h-100svh"
      topPosition="top-0"
    >
      <Outlet />
    </MainPageContentContainer>
  );
}
