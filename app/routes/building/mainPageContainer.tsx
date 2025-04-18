import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import { useLocation } from "@remix-run/react";
import ScrollProgressContainer from "./scrollProgressContainer";
import { PolkaDotSidesBg } from "./PolkaDotSidesBg";
import PolkaDotsContainer from "./polkaDotContainer";

export default function MainPageContentContainer({
  children,
  noDots = false,
  maxWidth = "max-w-[140svh]",
  dotsSide = true,
  numDots = 23,
  contentBg = "bg-gradient-to-l from-transparent via-col-320 to-transparent",
  // contentBg = "",
  childPadding = "px-5vh xxl:px-7vw",
  insetShadow = "",
  showShadow = false,
  scrollContainerHeight = "h-95.5svh",
  topPosition = "top-[4.5svh]",
  minContainerHeight = "min-h-[95.5svh]",
  headerPadding = "",
  scrollToTopPosition = "fixed bottom-1.5vh md:bottom-0.7vh right-0.7vh xl:bottom-1.7vh xl:right-11.5vw xxl:right-13.5vw",
  autoScrollToTop = true,
  scrollProgressColor = "bg-col-200",
  noScroll = false,
  showScrollToTopButton = true,
  sideDotsVisibleAt = "xxl",
  bgOverlay = "bg-col-320 bg-gradient-to-bl from-col-110 via-col-120 to-col-110",
  // bgOverlay = "",

  scrollProgressHeight,
  bottomPadding,
}: {
  children: React.ReactNode;
  noDots?: boolean;
  childPadding?: string;
  numDots?: number;
  dotsSide?: boolean;
  maxWidth?: string;
  scrollToTopPosition?: string;
  scrollProgressColor?: string;
  scrollContainerHeight?: string;
  containerBorderRadius?: string;
  showScrollToTopButton?: boolean;
  autoScrollToTop?: boolean;
  animationType?: string;
  animationDuration?: number;
  animationDelay?: number;
  noScroll?: boolean;
  contentBg?: string;
  insetShadow?: string;
  showShadow?: boolean;
  headerPadding?: string;
  sideDotsVisibleAt?: string;
  bgOverlay?: string;
  topPosition?: string;
  minContainerHeight?: string;
  scrollProgressHeight?: string;
  bottomPadding?: string;
}) {
  const isFlashcardSet = useLocation().pathname.includes("flashcardSet");
  const isDiscussion = useLocation().pathname.includes("discussion");
  const noScrollToTop = isFlashcardSet || isDiscussion;
  const displayShowScrollToTopButton = !noScrollToTop && showScrollToTopButton;
  const showSideDots = dotsSide || noDots;
  return (
    <>
      {showSideDots ? (
        <FlexFull
          className={`${scrollContainerHeight} fixed ${topPosition} right-0 left-0 rounded-none`}
        >
          <ScrollProgressContainer
            scrollContainerHeight={scrollContainerHeight}
            rounded="rounded-none"
            childPadding="" // done outside this container
            scrollBg=""
            insetShadow={insetShadow}
            showShadow={showShadow}
            showScrollToTopButton={displayShowScrollToTopButton}
            scrollToTopPosition={scrollToTopPosition}
            autoScrollToTop={autoScrollToTop}
            scrollProgressHeight={scrollProgressHeight}
            scrollProgressColor={scrollProgressColor}
          >
            {showSideDots && !noDots && (
              <PolkaDotSidesBg
                visibleAt={
                  sideDotsVisibleAt as
                    | "xxl"
                    | "base"
                    | "sm"
                    | "md"
                    | "lg"
                    | "xl"
                }
              />
            )}

            <FlexFull
              className={`justify-center z-20 rounded-none ${bgOverlay}`}
            >
              <FlexFull
                className={`${maxWidth} ${contentBg} ${childPadding} ${minContainerHeight} relative rounded-none ${bottomPadding}`}
              >
                <FlexFull className={headerPadding}>{children}</FlexFull>
              </FlexFull>
            </FlexFull>
          </ScrollProgressContainer>{" "}
        </FlexFull>
      ) : (
        <PolkaDotsContainer
          bg="bg-col-100 bg-gradient-to-bl from-col-330 via-col-430 to-col-330 "
          overlay="bg-col-140"
          numDots={numDots}
          rounded="rounded-none"
          outerClassName="absolute inset-0"
        >
          <ScrollProgressContainer
            scrollContainerHeight="95.5svh"
            rounded="rounded-none"
            childPadding=""
            scrollBg=""
            noScroll={noScroll}
            scrollToTopPosition={scrollToTopPosition}
            autoScrollToTop={autoScrollToTop}
            scrollProgressColor={scrollProgressColor}
            showScrollToTopButton={displayShowScrollToTopButton}
          >
            <FlexFull className="justify-center z-20 rounded-none">
              <FlexFull
                className={`${maxWidth} ${contentBg} ${childPadding} min-h-[95.5svh] relative rounded-none`}
              >
                {children}
              </FlexFull>
            </FlexFull>
          </ScrollProgressContainer>{" "}
        </PolkaDotsContainer>
      )}
    </>
  );
}
