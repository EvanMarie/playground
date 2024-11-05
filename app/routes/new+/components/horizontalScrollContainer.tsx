import {
  Box,
  FlexFull,
  HStack,
} from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";

export default function HorizontalScrollContainer({
  children,
  width = "w-100vw",
  height = "h-full",
  padding,
  gap,
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
}) {
  const handleScrollLeft = () => {
    console.log("scroll left");
  };

  const handleScrollRight = () => {
    console.log("scroll right");
  };

  return (
    <Box className={`${width} overflow-hidden ${height} relative pb-4svh`}>
      <Box
        className={`${width} overflow-x-auto overflow-y-hidden h-full hide-scrollbar`}
      >
        <FlexFull
          className={`w-fit h-full items-center ${gap} ${padding} flex-shrink-0`}
        >
          {children}
        </FlexFull>
      </Box>
      <FlexFull className="absolute bottom-0 right-0 left-0 h-4svh justify-center">
        <HStack gap="gap-10vh">
          <motion.button>Left</motion.button>
          <motion.button>Right</motion.button>
        </HStack>
      </FlexFull>
    </Box>
  );
}
