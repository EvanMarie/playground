import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flex,
  transitionVariants,
} from "~/buildingBlockComponents/mainContainers";

export default function StaggeredGradientTextLines({
  textLines,
  alignContent = "items-end",
  initialDelay = 0.2,
  textClassName,
  gap = "gap-1.5vh",
  hoverClassName,
  transition = "fadeSlideInRightQuarter",
  staggerDelay = 0.2,
  threshold = 0.6,
  once = true,
  singleItemClassName,
  itemsContainerClassName,
  outerContainerClassName,
  flexDirection = "flex-col",
}: {
  textLines: string[];
  alignContent?: string;
  initialDelay?: number;
  textClassName?: string;
  gap?: string;
  hoverClassName?: string;
  staggerDelay?: number;
  transition?: keyof typeof transitionVariants;
  threshold?: number;
  once?: boolean;
  singleItemClassName?: string;
  itemsContainerClassName?: string;
  outerContainerClassName?: string;
  flexDirection?: string;
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: threshold,
    once: once,
  });

  const variants = transitionVariants[transition];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: {
      ...variants.initial,
      opacity: 0,
    },
    visible: {
      ...variants.animate,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 44,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={outerContainerClassName}
    >
      <Flex
        align={alignContent}
        className={`${flexDirection} ${itemsContainerClassName} ${gap}`}
      >
        {textLines.map((textLine, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className={`${singleItemClassName} ${textClassName} ${hoverClassName} bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text`}
          >
            {textLine}
          </motion.div>
        ))}
      </Flex>
    </motion.div>
  );
}
