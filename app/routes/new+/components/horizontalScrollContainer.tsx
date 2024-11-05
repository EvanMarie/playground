import {
  Box,
  FlexFull,
  HStack,
} from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HorizontalScrollContainer({
  children,
  width = "w-100vw",
  height = "h-full",
  padding = "pr-6vh",
  gap,
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // Add a small tolerance
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -0.95 * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 0.95 * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Box className={`${width} overflow-hidden ${height} relative pb-4svh`}>
      <Box
        ref={scrollContainerRef}
        className={`${width} overflow-x-auto overflow-y-hidden h-full hide-scrollbar`}
      >
        <FlexFull
          className={`w-fit h-full items-center ${gap} flex-shrink-0 ${padding}`}
        >
          {children}
        </FlexFull>
      </Box>
      <FlexFull className="absolute bottom-0 right-0 left-0 h-4svh justify-center">
        <HStack gap="gap-10vh">
          <motion.button
            onClick={handleScrollLeft}
            disabled={isAtStart}
            className={isAtStart ? "opacity-50 cursor-not-allowed" : ""}
          >
            Left
          </motion.button>
          <motion.button
            onClick={handleScrollRight}
            disabled={isAtEnd}
            className={isAtEnd ? "opacity-50 cursor-not-allowed" : ""}
          >
            Right
          </motion.button>
        </HStack>
      </FlexFull>
    </Box>
  );
}
