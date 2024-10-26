import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flex,
  transitionVariants,
} from "~/buildingBlockComponents/mainContainers";

export default function StaggeredTextLines({
  textLines,
  alignContent = "items-end",
  initialDelay = 0.2, // Reduced default delay since we're triggering on view
  textClassName,
  gap = "gap-1.5vh",
  hoverClassName,
  animationVariants = "fadeSlideInRightQuarter",
  staggerDelay = 0.2,
  threshold = 0.2,
  once = true,
  singleItemClassName,
  linesVStackClassName,
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
  animationVariants?: keyof typeof transitionVariants;
  threshold?: number;
  once?: boolean;
  singleItemClassName?: string;
  linesVStackClassName?: string;
  outerContainerClassName?: string;
  flexDirection?: string;
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: threshold,
    once: once,
  });

  const variants = transitionVariants[animationVariants];

  // Create container variants for staggered children
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

  // Create child variants
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
        className={`${flexDirection} ${linesVStackClassName} ${gap}`}
      >
        {textLines.map((textLine, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className={`${singleItemClassName} ${textClassName} ${hoverClassName}`}
          >
            {textLine}
          </motion.div>
        ))}
      </Flex>
    </motion.div>
  );
}
