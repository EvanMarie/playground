import { useRef, useEffect } from "react";
import { Box, FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/buildingBlockComponents/scrollProgressBar";
import ScrollToTopButton from "./scrollTopTopButton";

export default function ScrollProgressContainer({
  children,
  scrollContainerHeight = "h-60svh",
  childPadding = "p-1vh",
  scrollProgressColor,
  scrollProgressHeight = "h-0.5vh",
  scrollBg = "bg-col-160",
  gap = "gap-0.5vh",
  showScrollToTopButton = false,
  insetShadow = "insetShadowMd",
  containerBorderRadius,
  scrollToTopPosition = "fixed bottom-1.5vh right-1.5vh",
  innerWrapHeight = "h-fit",
  autoScrollToTop = true,
  noScroll = false,
  hideScrollBar = true,
  showShadow = true,
  rounded = "rounded-lg",
}: {
  children: React.ReactNode;
  scrollContainerHeight?: string;
  childPadding?: string;
  scrollProgressColor?: string;
  scrollProgressHeight?: string;
  scrollBg?: string;
  gap?: string;
  showScrollToTopButton?: boolean;
  insetShadow?: string;
  containerBorderRadius?: string;
  scrollToTopPosition?: string;
  innerWrapHeight?: string;
  autoScrollToTop?: boolean;
  noScroll?: boolean;
  hideScrollBar?: boolean;
  rounded?: string;
  showShadow?: boolean;
}) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoScrollToTop) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollTop = 0;
          }
        });
      });
    }
  }, [children, autoScrollToTop]);

  return (
    <Box
      className={`w-full overflow-hidden relative ${insetShadow} ${scrollBg} hover:cursor-inherit ${containerBorderRadius} ${scrollContainerHeight} ${rounded}`}
    >
      <FlexFull
        className={`${scrollContainerHeight} ${containerBorderRadius} hover:cursor-default pointer-events-auto ${
          noScroll
            ? "overflow-y-hidden"
            : `scroll-y-container ${
                hideScrollBar ? "hide-scrollbar" : ""
              } pointer-events-auto`
        }`}
        ref={scrollContainer}
      >
        <ScrollProgressBar
          zIndex="z-30"
          containerRef={scrollContainer}
          position="absolute top-0 right-0 left-0"
          height={scrollProgressHeight}
          color={scrollProgressColor}
        />
        {showShadow && (
          <FlexFull
            className={`absolute bottom-0 right-0 left-0 h-3.5vh z-10 bg-gradient-to-t from-col-930 via-transparent to-transparent rounded-none xl:rounded-2.4vh`}
          >
            {" "}
          </FlexFull>
        )}
        <Wrap
          className={`w-full justify-evenly ${innerWrapHeight} ${childPadding} ${gap}`}
        >
          {children}
        </Wrap>
      </FlexFull>
      {showScrollToTopButton && (
        <ScrollToTopButton
          scrollContainerRef={scrollContainer}
          position={scrollToTopPosition}
        />
      )}
    </Box>
  );
}
